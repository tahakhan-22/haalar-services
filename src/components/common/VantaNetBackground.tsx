"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export interface VantaNetBackgroundProps {
  /** Visual theme matching light (white/soft-red) or dark (#0a0a0a) sections. */
  variant?: "light" | "dark";
  /** Primary net accent color (hex). Defaults to Haalar crimson (#f54545). */
  color?: number;
  /** Secondary muted color mixed into distant connections. */
  secondaryColor?: number;
  /** Node dot color (hex). Defaults to Haalar crimson (#f54545). */
  dotColor?: number;
  /** Canvas/fog base color (hex). Defaults to #ffffff for light, #0a0a0a for dark. */
  backgroundColor?: number;
  /** Target spatial spacing between adjacent nodes (controls grid density). */
  spacing?: number;
  /** Multiplier of spacing for edge connection threshold (default ~1.5). */
  maxDistance?: number;
  /** Render crisp 3D spheres at network vertices. */
  showDots?: boolean;
  /** Enable subtle mouse/pointer camera parallax. */
  mouseControls?: boolean;
  /** Pin canvas fixed across the full viewport instead of scoping to parent section. */
  fixed?: boolean;
  /** Optional wrapper classes. */
  className?: string;
}

interface NetPoint {
  ox: number;
  oy: number;
  oz: number;
  x: number;
  y: number;
  z: number;
  phase: number;
  speedX: number;
  speedY: number;
  speedZ: number;
}

const MAX_NODES = 196;

function buildNetLattice(
  width: number,
  height: number,
  fovDeg: number,
  cameraZ: number,
  cellStep: number
): NetPoint[] {
  const aspect = width / Math.max(height, 1);
  const visH = 2 * cameraZ * Math.tan((fovDeg * Math.PI) / 360);
  const visW = visH * aspect;

  // Overscan beyond viewport frustum edges to accommodate oscillation + parallax
  const spanX = visW * 1.32;
  const spanY = visH * 1.38;

  let cols = Math.max(5, Math.round(spanX / cellStep) + 1);
  let rows = Math.max(5, Math.round(spanY / cellStep) + 1);

  // Guard GPU/CPU budget on extreme viewports while maintaining aspect proportion
  if (cols * rows > MAX_NODES) {
    const scale = Math.sqrt(MAX_NODES / (cols * rows));
    cols = Math.max(5, Math.floor(cols * scale));
    rows = Math.max(5, Math.floor(rows * scale));
  }

  const stepX = spanX / Math.max(cols - 1, 1);
  const stepY = spanY / Math.max(rows - 1, 1);
  const halfCols = (cols - 1) / 2;
  const halfRows = (rows - 1) / 2;

  const nodes: NetPoint[] = [];
  for (let ix = 0; ix < cols; ix++) {
    for (let iy = 0; iy < rows; iy++) {
      const jitterX = (Math.random() - 0.5) * stepX * 0.65;
      const jitterY = (Math.random() - 0.5) * stepY * 0.65;
      const depthSpread = ((ix + iy) % 2 === 0 ? 1 : -1) * cellStep * 0.65;
      const jitterZ = (Math.random() - 0.5) * cellStep * 2.1;

      const ox = (ix - halfCols) * stepX + jitterX;
      const oy = (iy - halfRows) * stepY + jitterY;
      const oz = depthSpread + jitterZ;

      nodes.push({
        ox,
        oy,
        oz,
        x: ox,
        y: oy,
        z: oz,
        phase: Math.random() * Math.PI * 2,
        speedX: 0.35 + Math.random() * 0.45,
        speedY: 0.35 + Math.random() * 0.45,
        speedZ: 0.25 + Math.random() * 0.35,
      });
    }
  }

  return nodes;
}

export default function VantaNetBackground({
  variant = "dark",
  color,
  secondaryColor,
  dotColor,
  backgroundColor,
  spacing,
  maxDistance,
  showDots = true,
  mouseControls = true,
  fixed = false,
  className = "",
}: VantaNetBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isDark = variant === "dark";
    const resolvedColor = color ?? 0xf54545;
    const resolvedSecondaryColor =
      secondaryColor ?? (isDark ? 0xa50e19 : 0x94a3b8);
    const resolvedDotColor = dotColor ?? 0xf54545;
    const resolvedBgColor =
      backgroundColor ?? (isDark ? 0x0a0a0a : 0xffffff);

    const cellStep = spacing ?? (isDark ? 19 : 22);
    const edgeMaxDist = maxDistance ?? cellStep * (isDark ? 1.65 : 1.62);

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    if (isDark) {
      renderer.setClearColor(resolvedBgColor, 1);
    } else {
      renderer.setClearColor(resolvedBgColor, 0);
    }

    const canvas = renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvas.style.pointerEvents = "none";
    container.appendChild(canvas);

    const scene = new THREE.Scene();
    if (isDark) {
      scene.fog = new THREE.Fog(resolvedBgColor, 95, 310);
    }

    const fovDeg = 28;
    const baseCameraX = 0;
    const baseCameraY = isDark ? 6 : 4;
    const baseCameraZ = isDark ? 145 : 172;
    const camera = new THREE.PerspectiveCamera(
      fovDeg,
      width / height,
      0.1,
      1000
    );
    camera.position.set(baseCameraX, baseCameraY, baseCameraZ);
    camera.lookAt(0, 0, 0);

    let netNodes = buildNetLattice(
      width,
      height,
      fovDeg,
      baseCameraZ,
      cellStep
    );
    let nodeCount = netNodes.length;

    const maxSegments = (MAX_NODES * (MAX_NODES - 1)) / 2;
    // 4-component RGBA vertex colors enable true alpha fade via Three.js USE_COLOR_ALPHA
    const linePositions = new Float32Array(maxSegments * 2 * 3);
    const lineColors = new Float32Array(maxSegments * 2 * 4);

    const lineGeometry = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(linePositions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    const colorAttr = new THREE.BufferAttribute(lineColors, 4);
    colorAttr.setUsage(THREE.DynamicDrawUsage);

    lineGeometry.setAttribute("position", posAttr);
    lineGeometry.setAttribute("color", colorAttr);
    lineGeometry.setDrawRange(0, 0);

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    let dotMesh: THREE.InstancedMesh | null = null;
    let dotGeometry: THREE.SphereGeometry | null = null;
    let dotMaterial: THREE.MeshBasicMaterial | null = null;
    const dummy = new THREE.Object3D();

    if (showDots) {
      dotGeometry = new THREE.SphereGeometry(isDark ? 0.5 : 0.42, 8, 8);
      dotMaterial = new THREE.MeshBasicMaterial({
        color: resolvedDotColor,
        transparent: true,
        opacity: isDark ? 0.85 : 0.48,
      });
      dotMesh = new THREE.InstancedMesh(dotGeometry, dotMaterial, MAX_NODES);
      dotMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      dotMesh.count = nodeCount;
      scene.add(dotMesh);
    }

    const primaryCol = new THREE.Color(resolvedColor);
    const secondaryCol = new THREE.Color(resolvedSecondaryColor);
    const tempCol = new THREE.Color();

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (!mouseControls) return;
      targetMouseX = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      targetMouseY =
        (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    };

    if (mouseControls) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
    }

    let lastAspect = width / height;
    const handleResize = () => {
      const nextW = Math.max(container.clientWidth, 1);
      const nextH = Math.max(container.clientHeight, 1);
      const nextAspect = nextW / nextH;

      camera.aspect = nextAspect;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(nextW, nextH, false);

      // Re-seed lattice proportionally when viewport proportions shift significantly
      if (Math.abs(nextAspect - lastAspect) / Math.max(lastAspect, 0.1) > 0.2) {
        lastAspect = nextAspect;
        netNodes = buildNetLattice(
          nextW,
          nextH,
          fovDeg,
          baseCameraZ,
          cellStep
        );
        nodeCount = netNodes.length;
        if (dotMesh) {
          dotMesh.count = nodeCount;
        }
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
      },
      { threshold: 0.01 }
    );
    intersectionObserver.observe(container);

    let rafId = 0;
    let elapsed = 0;
    let lastTime = performance.now();

    const updateFrame = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!prefersReducedMotion) {
        elapsed += dt;
      }

      const ampXY = cellStep * 0.36;
      const ampZ = cellStep * 0.3;
      for (let i = 0; i < nodeCount; i++) {
        const n = netNodes[i];
        n.x = n.ox + Math.sin(elapsed * n.speedX + n.phase) * ampXY;
        n.y = n.oy + Math.cos(elapsed * n.speedY + n.phase * 1.13) * ampXY;
        n.z = n.oz + Math.sin(elapsed * n.speedZ + n.phase * 0.71) * ampZ;

        if (dotMesh) {
          dummy.position.set(n.x, n.y, n.z);
          dummy.updateMatrix();
          dotMesh.setMatrixAt(i, dummy.matrix);
        }
      }
      if (dotMesh) {
        dotMesh.instanceMatrix.needsUpdate = true;
      }

      let posIdx = 0;
      let colIdx = 0;
      let vertexCount = 0;
      const maxDistSq = edgeMaxDist * edgeMaxDist;

      for (let i = 0; i < nodeCount; i++) {
        const a = netNodes[i];
        for (let j = i + 1; j < nodeCount; j++) {
          const b = netNodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dz = a.z - b.z;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const strength = Math.min(
              1,
              Math.max(0, (1 - dist / edgeMaxDist) * 1.4)
            );

            linePositions[posIdx++] = a.x;
            linePositions[posIdx++] = a.y;
            linePositions[posIdx++] = a.z;
            linePositions[posIdx++] = b.x;
            linePositions[posIdx++] = b.y;
            linePositions[posIdx++] = b.z;

            tempCol.copy(secondaryCol).lerp(primaryCol, strength);
            const alpha = isDark ? strength * 0.75 : strength * 0.42;

            lineColors[colIdx++] = tempCol.r;
            lineColors[colIdx++] = tempCol.g;
            lineColors[colIdx++] = tempCol.b;
            lineColors[colIdx++] = alpha;

            lineColors[colIdx++] = tempCol.r;
            lineColors[colIdx++] = tempCol.g;
            lineColors[colIdx++] = tempCol.b;
            lineColors[colIdx++] = alpha;

            vertexCount += 2;
          }
        }
      }

      posAttr.needsUpdate = true;
      colorAttr.needsUpdate = true;
      lineGeometry.setDrawRange(0, vertexCount);

      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      camera.position.x = baseCameraX + currentMouseX * 14;
      camera.position.y = baseCameraY - currentMouseY * 10;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    updateFrame(performance.now());

    if (!prefersReducedMotion) {
      const animate = (now: number) => {
        rafId = window.requestAnimationFrame(animate);
        if (isVisible && !document.hidden) {
          updateFrame(now);
        } else {
          lastTime = now;
        }
      };
      rafId = window.requestAnimationFrame(animate);
    }

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      if (mouseControls) {
        window.removeEventListener("pointermove", handlePointerMove);
      }
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      lineGeometry.dispose();
      lineMaterial.dispose();
      dotGeometry?.dispose();
      dotMaterial?.dispose();
      renderer.dispose();

      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
    };
  }, [
    variant,
    color,
    secondaryColor,
    dotColor,
    backgroundColor,
    spacing,
    maxDistance,
    showDots,
    mouseControls,
  ]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none ${fixed ? "fixed" : "absolute"} inset-0 overflow-hidden ${className}`}
    />
  );
}
