"use client";

import React, { useEffect, useRef } from "react";
import {
  LOGO_PARTICLES,
  LOGO_ASPECT_RATIO,
} from "@/data/logoParticles";
import { ActiveParticle, ReconstructionStage } from "./types";

interface LogoParticleCanvasProps {
  stage: ReconstructionStage;
  stageProgress: number; // 0.0 to 1.0 within current stage
  cursorPositionsRef: React.MutableRefObject<{ x: number; y: number }[]>;
  onLogoCenterComputed?: (cx: number, cy: number, w: number, h: number) => void;
}

// Pure helper to draw geometric shard
function drawShard(ctx: CanvasRenderingContext2D, p: ActiveParticle) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);
  ctx.globalAlpha = p.alpha;
  ctx.fillStyle = p.color;

  const s = p.size;
  const a = p.aspect;

  ctx.beginPath();
  if (p.shapeType === 0) {
    // Triangle shard
    ctx.moveTo(0, -s);
    ctx.lineTo(s * a, s * 0.7);
    ctx.lineTo(-s * a * 0.8, s * 0.5);
  } else if (p.shapeType === 1) {
    // Quad / Polygon shard
    ctx.moveTo(-s * 0.7, -s * 0.8);
    ctx.lineTo(s * 0.9, -s * 0.4);
    ctx.lineTo(s * 0.6, s * 0.8);
    ctx.lineTo(-s * 0.8, s * 0.5);
  } else {
    // Diamond micro-shard
    ctx.moveTo(0, -s * 1.1);
    ctx.lineTo(s * 0.7 * a, 0);
    ctx.lineTo(0, s * 1.1);
    ctx.lineTo(-s * 0.7 * a, 0);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// Pure helper to draw resting logo particles
function drawStationaryParticles(
  ctx: CanvasRenderingContext2D,
  particles: ActiveParticle[],
  centered = false,
  centerOrigin = { cx: 0, cy: 0 }
) {
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    ctx.save();
    const px = centered ? p.origX - centerOrigin.cx : p.origX;
    const py = centered ? p.origY - centerOrigin.cy : p.origY;
    ctx.translate(px, py);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * p.aspect);
    ctx.restore();
  }
}

export default function LogoParticleCanvas({
  stage,
  stageProgress,
  cursorPositionsRef,
  onLogoCenterComputed,
}: LogoParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<ActiveParticle[]>([]);
  const logoImageRef = useRef<HTMLImageElement | null>(null);
  const dimensionsRef = useRef<{ w: number; h: number; dpr: number }>({
    w: 1200,
    h: 800,
    dpr: 1,
  });
  const logoBoundsRef = useRef<{ cx: number; cy: number; w: number; h: number }>({
    cx: 600,
    cy: 400,
    w: 480,
    h: 158,
  });

  // Pre-load the high-res transparent logo image for Phase 1 & 6
  useEffect(() => {
    const img = new Image();
    img.src = "/img/haalar-logo-hd.png";
    img.onload = () => {
      logoImageRef.current = img;
    };
  }, []);

  // Initialize particles with deterministic shards
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dimensionsRef.current = { w, h, dpr };

    const logoW = Math.min(w * 0.72, 480);
    const logoH = logoW / LOGO_ASPECT_RATIO;
    const cx = w / 2;
    const cy = h / 2;
    logoBoundsRef.current = { cx, cy, w: logoW, h: logoH };
    onLogoCenterComputed?.(cx, cy, logoW, logoH);

    // Build active particles
    const created: ActiveParticle[] = LOGO_PARTICLES.map((p, idx) => {
      const origX = cx + p.nx * logoW;
      const origY = cy + p.ny * logoH;
      const seed = (idx * 9301 + 49297) % 233280;
      const rnd1 = seed / 233280;
      const rnd2 = ((seed * 9301 + 49297) % 233280) / 233280;
      const rnd3 = ((seed * 1103515245 + 12345) % 2147483648) / 2147483648;

      // Small shard shapes: triangle (0), quad (1), micro-diamond (2)
      const shapeType = (idx % 3) as 0 | 1 | 2;
      const size = 3.5 + rnd1 * 3.5;
      const aspect = 0.8 + rnd2 * 0.8;
      const rotation = rnd3 * Math.PI * 2;

      // Subtle red accent on 5% of wing particles
      const isRedAccent = idx % 28 === 0 && Math.abs(p.nx) > 0.25;
      const color = isRedAccent ? "#f54545" : "#0d0d0d";

      return {
        x: origX,
        y: origY,
        origX,
        origY,
        vx: 0,
        vy: 0,
        size,
        rotation,
        vRot: (rnd1 - 0.5) * 0.18,
        aspect,
        shapeType,
        alpha: 1,
        color,
        cursorIndex: p.cursorIndex,
      };
    });

    particlesRef.current = created;
  }, [onLogoCenterComputed]);

  // Handle Window Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dimensionsRef.current = { w, h, dpr };

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      const logoW = Math.min(w * 0.72, 480);
      const logoH = logoW / LOGO_ASPECT_RATIO;
      const cx = w / 2;
      const cy = h / 2;
      logoBoundsRef.current = { cx, cy, w: logoW, h: logoH };
      onLogoCenterComputed?.(cx, cy, logoW, logoH);

      // Re-anchor original positions
      particlesRef.current.forEach((p, idx) => {
        const def = LOGO_PARTICLES[idx];
        if (def) {
          p.origX = cx + def.nx * logoW;
          p.origY = cy + def.ny * logoH;
          if (stage === "INITIAL_LOGO") {
            p.x = p.origX;
            p.y = p.origY;
          }
        }
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [stage, onLogoCenterComputed]);

  // Main Animation Loop
  useEffect(() => {
    let animId: number;
    let prevTime = performance.now();

    const render = (now: number) => {
      const dt = Math.min((now - prevTime) / 1000, 0.05);
      prevTime = now;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { w, h, dpr } = dimensionsRef.current;
      const { cx, cy, w: logoW, h: logoH } = logoBoundsRef.current;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      // PHASE 1: INITIAL LOGO REVEAL
      if (stage === "INITIAL_LOGO") {
        if (logoImageRef.current && logoImageRef.current.complete) {
          ctx.drawImage(
            logoImageRef.current,
            cx - logoW / 2,
            cy - logoH / 2,
            logoW,
            logoH
          );
        } else {
          // Draw solid particles if image not loaded yet
          drawStationaryParticles(ctx, particlesRef.current, false, { cx, cy });
        }
      }

      // PHASE 2: DISINTEGRATING
      else if (stage === "DISINTEGRATING") {
        const particles = particlesRef.current;
        const speedMultiplier = 1.0;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Initialize velocities at start of disintegration
          if (p.vx === 0 && p.vy === 0) {
            const dx = p.origX - cx;
            const dy = p.origY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const normX = dx / dist;
            const normY = dy / dist;

            // Varied angular trajectory + outward explosion
            const angleJitter = (Math.random() - 0.5) * 0.7;
            const cosJ = Math.cos(angleJitter);
            const sinJ = Math.sin(angleJitter);
            const dirX = normX * cosJ - normY * sinJ;
            const dirY = normX * sinJ + normY * cosJ;

            // Speed proportional to distance from center + burst
            const baseSpeed = 280 + Math.random() * 520 + (dist / (logoW / 2)) * 260;
            p.vx = dirX * baseSpeed;
            p.vy = dirY * baseSpeed - 80;
          }

          // Physics update
          p.x += p.vx * dt * speedMultiplier;
          p.y += p.vy * dt * speedMultiplier;
          p.rotation += p.vRot;

          // Drag / deceleration
          p.vx *= Math.pow(0.12, dt);
          p.vy *= Math.pow(0.12, dt);

          // Draw fragment
          drawShard(ctx, p);
        }
      }

      // PHASE 3 & 4: SWARM EXPANDING & RECONSTRUCTING SECTIONS
      else if (
        stage === "SWARM_EXPANDING" ||
        stage === "BUILD_NAV" ||
        stage === "BUILD_HERO" ||
        stage === "BUILD_SERVICES" ||
        stage === "BUILD_PRODUCTS" ||
        stage === "BUILD_ALL"
      ) {
        const particles = particlesRef.current;
        const cursors = cursorPositionsRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // If this particle is one of the 12 cursor seeds, sync its position with the cursor
          if (p.cursorIndex >= 0 && cursors[p.cursorIndex]) {
            p.x = cursors[p.cursorIndex].x;
            p.y = cursors[p.cursorIndex].y;
            // Shard fades as cursor arrow takes over
            p.alpha = stage === "SWARM_EXPANDING" ? Math.max(0, 1 - stageProgress * 1.3) : 0;
            if (p.alpha > 0.05) {
              drawShard(ctx, p);
            }
          } else {
            // Ambient non-cursor fragments float gracefully
            p.rotation += p.vRot * 0.4;
            p.x += Math.sin(now * 0.001 + i) * 0.45;
            p.y += Math.cos(now * 0.0012 + i) * 0.45;

            // Keep within screen bounds
            if (p.x < 20) p.x = 20;
            if (p.x > w - 20) p.x = w - 20;
            if (p.y < 20) p.y = 20;
            if (p.y > h - 20) p.y = h - 20;

            p.alpha = 0.55;
            drawShard(ctx, p);
          }
        }
      }

      // PHASE 5: CONVERGING
      else if (stage === "CONVERGING") {
        const particles = particlesRef.current;
        const t = stageProgress;
        const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          const dx = p.origX - p.x;
          const dy = p.origY - p.y;

          p.x += dx * (0.08 + ease * 0.28);
          p.y += dy * (0.08 + ease * 0.28);
          p.rotation *= 0.92;
          p.alpha = Math.min(1, p.alpha + 0.08);

          drawShard(ctx, p);
        }

        // Convergence pulse ring near end of convergence
        if (stageProgress > 0.75) {
          const pulse = (stageProgress - 0.75) / 0.25;
          ctx.beginPath();
          ctx.arc(cx, cy, (logoW * 0.6) * pulse, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245, 69, 69, ${0.4 * (1 - pulse)})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      // PHASE 6: LOGO REASSEMBLED
      else if (stage === "LOGO_REASSEMBLED") {
        const scale = 1 - stageProgress * 0.15;
        const opacity = Math.max(0, 1 - stageProgress * 1.2);

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.translate(cx, cy);
        ctx.scale(scale, scale);

        if (logoImageRef.current && logoImageRef.current.complete) {
          ctx.drawImage(
            logoImageRef.current,
            -logoW / 2,
            -logoH / 2,
            logoW,
            logoH
          );
        } else {
          drawStationaryParticles(ctx, particlesRef.current, true, { cx, cy });
        }

        // Subtle glow flash at start of reassembly
        if (stageProgress < 0.3) {
          const flash = 1 - stageProgress / 0.3;
          ctx.fillStyle = `rgba(245, 69, 69, ${0.25 * flash})`;
          ctx.fillRect(-logoW, -logoH, logoW * 2, logoH * 2);
        }

        ctx.restore();
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [stage, stageProgress, cursorPositionsRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 block"
    />
  );
}
