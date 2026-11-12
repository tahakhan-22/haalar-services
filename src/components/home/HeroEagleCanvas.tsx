"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const EAGLE_MODEL_URL = "/models/free-eagle.glb";
const TARGET_LONGEST_SIDE = 2.4;
const BASE_YAW_DESKTOP = -0.62;
const BASE_YAW_MOBILE = -0.26;
const SCROLL_YAW_PER_PX = 0.011;

function getDocumentScrollTop(): number {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function disposeMaterialWithTextures(mat: THREE.Material) {
  for (const value of Object.values(mat)) {
    if (
      value &&
      typeof value === "object" &&
      "isTexture" in value &&
      (value as THREE.Texture).isTexture
    ) {
      (value as THREE.Texture).dispose();
    }
  }
  mat.dispose();
}

export default function HeroEagleCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    let rafId = 0;
    let mixer: THREE.AnimationMixer | null = null;
    let loadedRoot: THREE.Object3D | null = null;
    let isVisible = true;

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
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = false;

    const canvas = renderer.domElement;
    canvas.dataset.eagleCanvas = "true";
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "1";
    container.appendChild(canvas);

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0.4, 0.15, 3.2);

    // Neutral white lighting — no colored casts, no shadows
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.1);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    // Single shared jet-black metallic material across all eagle meshes
    const blackEagle = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.42,
      metalness: 0.78,
      emissive: 0x000000,
      emissiveIntensity: 0,
      envMapIntensity: 0.35,
      flatShading: false,
      side: THREE.FrontSide,
    });
    blackEagle.color.setHex(0x000000);
    blackEagle.map = null;
    blackEagle.roughnessMap = null;
    blackEagle.metalnessMap = null;
    blackEagle.aoMap = null;
    blackEagle.emissiveMap = null;
    blackEagle.needsUpdate = true;

    const eaglePivot = new THREE.Group();
    scene.add(eaglePivot);

    let currentBaseYaw = BASE_YAW_DESKTOP;

    const applyResponsiveFraming = (w: number, h: number) => {
      const safeH = Math.max(h, 1);
      const aspect = w / safeH;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();

      if (w < 768) {
        // Mobile: scale down and sit lower behind hero content
        const halfH =
          camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
        const halfW = halfH * aspect;
        const mobileScale = Math.min(0.5, Math.max(0.36, halfW * 0.7));
        eaglePivot.scale.setScalar(mobileScale);
        eaglePivot.position.set(camera.position.x, -0.3, 0);
        currentBaseYaw = BASE_YAW_MOBILE;
      } else {
        // Desktop: keep 2.4 world-unit scale, frame on the right half clear of title
        eaglePivot.scale.setScalar(1);
        const depthPush = w >= 1280 ? -0.75 : -1.1;
        const distToPivot = camera.position.z - depthPush;
        const halfHAtDepth =
          distToPivot * Math.tan((camera.fov * Math.PI) / 360);
        const halfWAtDepth = halfHAtDepth * aspect;
        const rightOffset = halfWAtDepth * 0.68;
        eaglePivot.position.set(
          camera.position.x + rightOffset,
          0.42,
          depthPush
        );
        currentBaseYaw = BASE_YAW_DESKTOP;
      }
    };

    applyResponsiveFraming(width, height);

    let targetMouseX = 0;
    let targetMouseY = 0;
    let lerpMouseX = 0;
    let lerpMouseY = 0;
    let targetScrollYaw = getDocumentScrollTop() * SCROLL_YAW_PER_PX;
    let lerpScrollYaw = targetScrollYaw;

    const handlePointerMove = (e: PointerEvent) => {
      if (window.innerWidth < 768) return;
      targetMouseX = (e.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      targetMouseY = (e.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    };

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    let prefersReducedMotion = reducedMotionQuery.matches;

    const renderStaticPose = () => {
      targetScrollYaw = getDocumentScrollTop() * SCROLL_YAW_PER_PX;
      lerpScrollYaw = targetScrollYaw;
      eaglePivot.rotation.set(
        Math.sin(lerpScrollYaw) * 0.1,
        currentBaseYaw + lerpScrollYaw,
        0
      );
      renderer.render(scene, camera);
    };

    const handleScroll = () => {
      targetScrollYaw = getDocumentScrollTop() * SCROLL_YAW_PER_PX;
      if (prefersReducedMotion && !disposed) {
        renderStaticPose();
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    let lastTime = performance.now();
    let elapsedSec = 0;

    const step = (now: number) => {
      if (disposed) return;

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!prefersReducedMotion) {
        elapsedSec += dt;
        targetScrollYaw = getDocumentScrollTop() * SCROLL_YAW_PER_PX;
        lerpMouseX += (targetMouseX - lerpMouseX) * 0.05;
        lerpMouseY += (targetMouseY - lerpMouseY) * 0.05;
        lerpScrollYaw += (targetScrollYaw - lerpScrollYaw) * 0.18;

        eaglePivot.rotation.y =
          currentBaseYaw +
          lerpScrollYaw +
          Math.sin(elapsedSec * 0.15) * 0.18 +
          lerpMouseX * 0.12;
        eaglePivot.rotation.x =
          lerpMouseY * 0.05 + Math.sin(lerpScrollYaw) * 0.1;

        if (mixer) {
          mixer.update(dt);
        }
      }

      renderer.render(scene, camera);
    };

    const startLoop = () => {
      if (disposed || prefersReducedMotion || rafId) return;
      lastTime = performance.now();
      const loop = (now: number) => {
        if (disposed || prefersReducedMotion) {
          rafId = 0;
          return;
        }
        rafId = window.requestAnimationFrame(loop);
        if (isVisible && !document.hidden) {
          step(now);
        } else {
          lastTime = now;
        }
      };
      rafId = window.requestAnimationFrame(loop);
    };

    const handleReducedMotionChange = () => {
      prefersReducedMotion = reducedMotionQuery.matches;
      if (prefersReducedMotion) {
        if (rafId) {
          window.cancelAnimationFrame(rafId);
          rafId = 0;
        }
        lerpMouseX = 0;
        lerpMouseY = 0;
        renderStaticPose();
      } else {
        startLoop();
      }
    };

    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    const resizeObserver = new ResizeObserver((entries) => {
      if (disposed) return;
      const entry = entries[0];
      if (!entry) return;
      const nextW = Math.max(Math.round(entry.contentRect.width), 1);
      const nextH = Math.max(Math.round(entry.contentRect.height), 1);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(nextW, nextH, false);
      applyResponsiveFraming(nextW, nextH);
      if (prefersReducedMotion) {
        renderStaticPose();
      } else {
        renderer.render(scene, camera);
      }
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.02 }
    );
    intersectionObserver.observe(container);

    const loader = new GLTFLoader();
    loader.load(
      EAGLE_MODEL_URL,
      (gltf) => {
        const model = gltf.scene;

        const disposeLoadedObject = (root: THREE.Object3D) => {
          root.traverse((node) => {
            if (node instanceof THREE.Mesh) {
              node.geometry?.dispose();
              if (Array.isArray(node.material)) {
                node.material.forEach(disposeMaterialWithTextures);
              } else if (node.material) {
                disposeMaterialWithTextures(node.material);
              }
            }
          });
        };

        if (disposed) {
          disposeLoadedObject(model);
          return;
        }

        // Strip all source textures/materials and apply pure black metallic surface
        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            if (Array.isArray(node.material)) {
              node.material.forEach(disposeMaterialWithTextures);
            } else if (node.material) {
              disposeMaterialWithTextures(node.material);
            }
            node.material = blackEagle;
            node.castShadow = false;
            node.receiveShadow = false;
          }
        });

        // Normalize bounding box: center at origin and scale longest side to 2.4 world units
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const normalizeScale = TARGET_LONGEST_SIDE / maxDim;

        const normalizedGroup = new THREE.Group();
        model.position.sub(center);
        normalizedGroup.scale.setScalar(normalizeScale);
        normalizedGroup.add(model);

        loadedRoot = normalizedGroup;
        eaglePivot.add(normalizedGroup);

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            mixer?.clipAction(clip).play();
          });
        }

        renderStaticPose();
        if (!prefersReducedMotion) {
          startLoop();
        }
      },
      undefined,
      () => {
        // Silently degrade if GLB fails to load; hero remains unaffected
      }
    );

    return () => {
      disposed = true;

      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      reducedMotionQuery.removeEventListener(
        "change",
        handleReducedMotionChange
      );
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      if (mixer) {
        mixer.stopAllAction();
        mixer = null;
      }

      if (loadedRoot) {
        loadedRoot.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.geometry?.dispose();
            if (Array.isArray(node.material)) {
              node.material.forEach(disposeMaterialWithTextures);
            } else if (node.material) {
              disposeMaterialWithTextures(node.material);
            }
          }
        });
      }

      scene.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          node.geometry?.dispose();
        }
      });

      disposeMaterialWithTextures(blackEagle);
      scene.clear();
      renderer.renderLists?.dispose();
      renderer.dispose();

      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    />
  );
}
