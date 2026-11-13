"use client";

import React, { useEffect, useRef } from "react";
import {
  LOGO_PARTICLES,
  LOGO_ASPECT_RATIO,
  CURSOR_SEEDS,
} from "@/data/logoParticles";
import { ActiveParticle } from "./types";

interface LogoParticleCanvasProps {
  onComplete: () => void;
  onPhaseChange?: (phase: string) => void;
}

interface CursorSim {
  id: number;
  label: string;
  role: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  scale: number;
  opacity: number;
  statusText: string;
  origX: number;
  origY: number;
}

interface ClickRipple {
  x: number;
  y: number;
  r: number;
  maxR: number;
  opacity: number;
  color: string;
}

interface BoundingBox {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  progress: number;
  opacity: number;
}

export default function LogoParticleCanvas({
  onComplete,
  onPhaseChange,
}: LogoParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoImageRef = useRef<HTMLImageElement | null>(null);

  // Preload logo image
  useEffect(() => {
    const img = new Image();
    img.src = "/img/haalar-logo-hd.png";
    logoImageRef.current = img;
  }, []);

  // Main Self-Contained Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let prevTime = performance.now();
    const startTime = performance.now();

    // Sizing and DPI setup
    let w = window.innerWidth;
    let h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Compute logo dimensions
    const logoW = Math.min(w * 0.72, 480);
    const logoH = logoW / LOGO_ASPECT_RATIO;
    const cx = w / 2;
    const cy = h / 2;

    // Create 1,038 active particles
    const particles: ActiveParticle[] = LOGO_PARTICLES.map((p, idx) => {
      const origX = cx + p.nx * logoW;
      const origY = cy + p.ny * logoH;
      const seed = (idx * 9301 + 49297) % 233280;
      const rnd1 = seed / 233280;
      const rnd2 = ((seed * 9301 + 49297) % 233280) / 233280;
      const rnd3 = ((seed * 1103515245 + 12345) % 2147483648) / 2147483648;

      const shapeType = (idx % 3) as 0 | 1 | 2;
      const size = 3.2 + rnd1 * 3.2;
      const aspect = 0.8 + rnd2 * 0.8;
      const rotation = rnd3 * Math.PI * 2;

      // Subtle red highlights on select wingtip shards
      const isRedAccent = idx % 32 === 0 && Math.abs(p.nx) > 0.22;
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
        vRot: (rnd1 - 0.5) * 0.2,
        aspect,
        shapeType,
        alpha: 1,
        color,
        cursorIndex: p.cursorIndex,
      };
    });

    // Create 12 Cursors
    const cursors: CursorSim[] = CURSOR_SEEDS.map((seed) => {
      const origX = cx + seed.initNx * logoW;
      const origY = cy + seed.initNy * logoH;
      return {
        id: seed.id,
        label: seed.label,
        role: seed.role,
        x: origX,
        y: origY,
        targetX: origX,
        targetY: origY,
        scale: 0.01,
        opacity: 0,
        statusText: "STANDBY",
        origX,
        origY,
      };
    });

    const ripples: ClickRipple[] = [];
    const boxes: BoundingBox[] = [];
    let disintegrationInitialized = false;
    let lastReportedPhase = "";

    // Drawing helper for shard
    const drawShard = (p: ActiveParticle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;

      const s = p.size;
      const a = p.aspect;

      ctx.beginPath();
      if (p.shapeType === 0) {
        ctx.moveTo(0, -s);
        ctx.lineTo(s * a, s * 0.7);
        ctx.lineTo(-s * a * 0.8, s * 0.5);
      } else if (p.shapeType === 1) {
        ctx.moveTo(-s * 0.7, -s * 0.8);
        ctx.lineTo(s * 0.9, -s * 0.4);
        ctx.lineTo(s * 0.6, s * 0.8);
        ctx.lineTo(-s * 0.8, s * 0.5);
      } else {
        ctx.moveTo(0, -s * 1.1);
        ctx.lineTo(s * 0.7 * a, 0);
        ctx.lineTo(0, s * 1.1);
        ctx.lineTo(-s * 0.7 * a, 0);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // Drawing helper for SVG cursor
    const drawCursor = (cur: CursorSim) => {
      if (cur.opacity < 0.01) return;

      ctx.save();
      ctx.translate(cur.x, cur.y);
      ctx.scale(cur.scale, cur.scale);
      ctx.globalAlpha = cur.opacity;

      // Draw arrow pointer
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 18);
      ctx.lineTo(4.5, 14);
      ctx.lineTo(8, 21.5);
      ctx.lineTo(10.8, 20.2);
      ctx.lineTo(7.3, 12.8);
      ctx.lineTo(13, 12.8);
      ctx.closePath();

      // Shadow
      ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 2;

      ctx.fillStyle = "#0a0a0a";
      ctx.fill();

      // White outline
      ctx.shadowColor = "transparent";
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.3;
      ctx.stroke();

      // Tech Badge
      const badgeText = `${cur.label} // ${cur.statusText}`;
      ctx.font = "bold 9px monospace";
      const textWidth = ctx.measureText(badgeText).width;
      const badgeW = textWidth + 18;
      const badgeH = 18;
      const bx = 16;
      const by = 12;

      // Badge pill background
      ctx.fillStyle = "rgba(10, 10, 10, 0.92)";
      ctx.beginPath();
      ctx.roundRect(bx, by, badgeW, badgeH, 4);
      ctx.fill();
      ctx.strokeStyle = "rgba(245, 69, 69, 0.7)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Blinking red dot
      ctx.fillStyle = "#f54545";
      ctx.beginPath();
      ctx.arc(bx + 7, by + badgeH / 2, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Badge text
      ctx.fillStyle = "#f5f5f5";
      ctx.fillText(badgeText, bx + 14, by + 12);

      ctx.restore();
    };

    // Main Render Loop
    const render = (now: number) => {
      const dt = Math.min((now - prevTime) / 1000, 0.05);
      prevTime = now;
      const elapsed = (now - startTime) / 1000;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      // PHASE 1: INITIAL LOGO REVEAL (0.0s - 1.25s)
      if (elapsed < 1.25) {
        if (lastReportedPhase !== "INITIAL_LOGO") {
          lastReportedPhase = "INITIAL_LOGO";
          onPhaseChange?.("INITIAL_LOGO");
        }

        // Draw centered logo
        if (logoImageRef.current && logoImageRef.current.complete) {
          ctx.drawImage(
            logoImageRef.current,
            cx - logoW / 2,
            cy - logoH / 2,
            logoW,
            logoH
          );
        } else {
          // Fallback to particle dots
          ctx.fillStyle = "#0a0a0a";
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            ctx.fillRect(p.origX - 1.5, p.origY - 1.5, 3, 3);
          }
        }
      }

      // PHASE 2: DISINTEGRATION (1.25s - 2.1s)
      else if (elapsed >= 1.25 && elapsed < 2.1) {
        if (lastReportedPhase !== "DISINTEGRATING") {
          lastReportedPhase = "DISINTEGRATING";
          onPhaseChange?.("DISINTEGRATING");
        }

        // Initialize shard explosive velocities on first frame of disintegration
        if (!disintegrationInitialized) {
          disintegrationInitialized = true;
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const dx = p.origX - cx;
            const dy = p.origY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const normX = dx / dist;
            const normY = dy / dist;

            const jitter = (Math.random() - 0.5) * 0.8;
            const cosJ = Math.cos(jitter);
            const sinJ = Math.sin(jitter);
            const dirX = normX * cosJ - normY * sinJ;
            const dirY = normX * sinJ + normY * cosJ;

            const speed = 260 + Math.random() * 450 + (dist / (logoW / 2)) * 240;
            p.vx = dirX * speed;
            p.vy = dirY * speed - 60;
          }
        }

        // Update & render shards
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.rotation += p.vRot;

          // Drag deceleration
          p.vx *= Math.pow(0.14, dt);
          p.vy *= Math.pow(0.14, dt);

          drawShard(p);
        }
      }

      // PHASE 3: MORPH SHARDS INTO CURSORS (2.1s - 2.9s)
      else if (elapsed >= 2.1 && elapsed < 2.9) {
        if (lastReportedPhase !== "SWARM_EXPANDING") {
          lastReportedPhase = "SWARM_EXPANDING";
          onPhaseChange?.("SWARM_EXPANDING");
        }

        const p3 = (elapsed - 2.1) / (2.9 - 2.1);

        // Update ambient non-cursor shards
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (p.cursorIndex >= 0) {
            // Shard shrinks as cursor expands
            p.alpha = Math.max(0, 1 - p3 * 1.3);
            if (p.alpha > 0.05) drawShard(p);
          } else {
            p.rotation += p.vRot * 0.3;
            p.x += Math.sin(now * 0.001 + i) * 0.4;
            p.y += Math.cos(now * 0.0012 + i) * 0.4;
            p.alpha = 0.5;
            drawShard(p);
          }
        }

        // Morph & reveal 12 cursors
        for (let i = 0; i < cursors.length; i++) {
          const cur = cursors[i];
          const seedPt = particles.find((p) => p.cursorIndex === cur.id);
          if (seedPt) {
            cur.x = seedPt.x;
            cur.y = seedPt.y;
          }
          cur.scale = Math.min(1, 0.2 + p3 * 0.85);
          cur.opacity = Math.min(1, p3 * 1.4);
          cur.statusText = "MORPHING";
          drawCursor(cur);
        }
      }

      // PHASE 4: COLLABORATIVE RECONSTRUCTION WAVES (2.9s - 6.2s)
      else if (elapsed >= 2.9 && elapsed < 6.2) {
        if (lastReportedPhase !== "RECONSTRUCTION") {
          lastReportedPhase = "RECONSTRUCTION";
          onPhaseChange?.("RECONSTRUCTION");
        }

        // Draw ambient floating shards
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (p.cursorIndex < 0) {
            p.rotation += p.vRot * 0.3;
            p.x += Math.sin(now * 0.001 + i) * 0.4;
            p.y += Math.cos(now * 0.0012 + i) * 0.4;
            p.alpha = 0.45;
            drawShard(p);
          }
        }

        // Targets for 12 cursors across homepage sections
        const targets: { x: number; y: number; status: string; box?: BoundingBox }[] = [
          {
            x: w * 0.18 + Math.sin(now * 0.003) * 25,
            y: 45,
            status: "NAV_BRAND_LOCK",
            box: { x1: w * 0.08, y1: 15, x2: w * 0.42, y2: 70, label: "NAV_BAR // HAALAR BRAND", progress: 1, opacity: 0.65 },
          },
          {
            x: w * 0.8 + Math.cos(now * 0.003) * 20,
            y: 45,
            status: "NAV_MENU_ITEMS",
          },
          {
            x: w * 0.4 + Math.sin(now * 0.004) * 35,
            y: h * 0.28,
            status: "HERO_H1_CONSTRUCT",
            box: { x1: w * 0.22, y1: h * 0.2, x2: w * 0.78, y2: h * 0.38, label: "HERO // DISRUPT. DEFEND. DOMINATE.", progress: 1, opacity: 0.7 },
          },
          {
            x: w * 0.74 + Math.cos(now * 0.0035) * 30,
            y: h * 0.32,
            status: "3D_EAGLE_INIT",
          },
          {
            x: w * 0.5 + Math.sin(now * 0.005) * 20,
            y: h * 0.48,
            status: "BINDING_CTAS",
          },
          {
            x: w * 0.28 + Math.sin(now * 0.003) * 35,
            y: h * 0.62,
            status: "PROBLEM_MATRIX",
            box: { x1: w * 0.12, y1: h * 0.56, x2: w * 0.88, y2: h * 0.72, label: "CORE_CAPABILITIES // HARDWARE MATRIX", progress: 1, opacity: 0.65 },
          },
          {
            x: w * 0.68 + Math.cos(now * 0.003) * 30,
            y: h * 0.64,
            status: "HARDWARE_SPECS",
          },
          {
            x: w * 0.34 + Math.sin(now * 0.004) * 40,
            y: h * 0.78,
            status: "SERVICES_ACCORDION",
            box: { x1: w * 0.08, y1: h * 0.73, x2: w * 0.92, y2: h * 0.87, label: "OUR_SERVICES // FOCUS_SLICES", progress: 1, opacity: 0.65 },
          },
          {
            x: w * 0.58 + Math.cos(now * 0.004) * 35,
            y: h * 0.82,
            status: "JAMMER_TESTING_DEVICE",
          },
          {
            x: w * 0.78 + Math.sin(now * 0.003) * 25,
            y: h * 0.85,
            status: "GREEN_ARROW_STOS",
          },
          {
            x: w * 0.36 + Math.sin(now * 0.0025) * 30,
            y: h * 0.92,
            status: "IPC_MIL_STANDARDS",
          },
          {
            x: w * 0.75 + Math.cos(now * 0.003) * 35,
            y: h * 0.94,
            status: "FOOTER_GRID_LOCK",
          },
        ];

        // Update & draw boxes
        boxes.length = 0;
        for (let i = 0; i < targets.length; i++) {
          if (targets[i].box) {
            boxes.push(targets[i].box!);
          }
        }

        // Render laser bounding boxes
        for (let i = 0; i < boxes.length; i++) {
          const b = boxes[i];
          ctx.save();
          ctx.strokeStyle = "rgba(245, 69, 69, 0.75)";
          ctx.lineWidth = 1;
          ctx.setLineDash([5, 4]);
          ctx.strokeRect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);

          // Corner crosshairs
          ctx.setLineDash([]);
          ctx.strokeStyle = "#f54545";
          ctx.lineWidth = 2;
          const cl = 8;
          // TL
          ctx.beginPath(); ctx.moveTo(b.x1, b.y1 + cl); ctx.lineTo(b.x1, b.y1); ctx.lineTo(b.x1 + cl, b.y1); ctx.stroke();
          // TR
          ctx.beginPath(); ctx.moveTo(b.x2 - cl, b.y1); ctx.lineTo(b.x2, b.y1); ctx.lineTo(b.x2, b.y1 + cl); ctx.stroke();
          // BL
          ctx.beginPath(); ctx.moveTo(b.x1, b.y1 + (b.y2 - b.y1) - cl); ctx.lineTo(b.x1, b.y2); ctx.lineTo(b.x1 + cl, b.y2); ctx.stroke();
          // BR
          ctx.beginPath(); ctx.moveTo(b.x2 - cl, b.y2); ctx.lineTo(b.x2, b.y2); ctx.lineTo(b.x2, b.y2 - cl); ctx.stroke();

          // Label
          ctx.fillStyle = "#f54545";
          ctx.font = "bold 9px monospace";
          ctx.fillText(`[${b.label}]`, b.x1 + 6, b.y1 - 5);
          ctx.restore();
        }

        // Update cursors
        for (let i = 0; i < cursors.length; i++) {
          const cur = cursors[i];
          const tgt = targets[i];
          cur.targetX = tgt.x;
          cur.targetY = tgt.y;
          cur.statusText = tgt.status;

          cur.x += (tgt.x - cur.x) * 0.12;
          cur.y += (tgt.y - cur.y) * 0.12;
          cur.scale = 1;
          cur.opacity = 1;

          // Random click ripples
          if (Math.random() < 0.035) {
            ripples.push({
              x: cur.x,
              y: cur.y,
              r: 2,
              maxR: 35,
              opacity: 0.85,
              color: "#f54545",
            });
          }

          drawCursor(cur);
        }

        // Draw & update click ripples
        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i];
          r.r += (r.maxR - r.r) * 0.15;
          r.opacity -= 0.035;
          if (r.opacity <= 0.02) {
            ripples.splice(i, 1);
            continue;
          }
          ctx.save();
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
          ctx.strokeStyle = r.color;
          ctx.lineWidth = 1.4;
          ctx.globalAlpha = r.opacity;
          ctx.stroke();
          ctx.restore();
        }
      }

      // PHASE 5: CURSOR CONVERGENCE & SHARD REASSEMBLY (6.2s - 7.3s)
      else if (elapsed >= 6.2 && elapsed < 7.3) {
        if (lastReportedPhase !== "CONVERGING") {
          lastReportedPhase = "CONVERGING";
          onPhaseChange?.("CONVERGING");
        }

        const p5 = (elapsed - 6.2) / (7.3 - 6.2);
        // Smooth cubic ease
        const ease = p5 < 0.5 ? 4 * p5 * p5 * p5 : 1 - Math.pow(-2 * p5 + 2, 3) / 2;

        // Shrink cursors back into shards
        for (let i = 0; i < cursors.length; i++) {
          const cur = cursors[i];
          cur.x += (cur.origX - cur.x) * (0.12 + ease * 0.25);
          cur.y += (cur.origY - cur.y) * (0.12 + ease * 0.25);
          cur.scale = Math.max(0.01, 1 - p5 * 1.3);
          cur.opacity = Math.max(0, 1 - p5 * 1.35);
          cur.statusText = "CONVERGING";
          drawCursor(cur);
        }

        // Pull all shards towards their original resting coordinates
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.origX - p.x;
          const dy = p.origY - p.y;

          p.x += dx * (0.09 + ease * 0.28);
          p.y += dy * (0.09 + ease * 0.28);
          p.rotation *= 0.92;
          p.alpha = Math.min(1, p.alpha + 0.08);

          drawShard(p);
        }

        // Energy pulse ring as shards lock in
        if (p5 > 0.7) {
          const pulse = (p5 - 0.7) / 0.3;
          ctx.save();
          ctx.beginPath();
          ctx.arc(cx, cy, (logoW * 0.55) * pulse, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245, 69, 69, ${0.45 * (1 - pulse)})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }
      }

      // PHASE 6: LOGO REASSEMBLED & SMOOTH REVEAL (7.3s - 8.1s)
      else if (elapsed >= 7.3 && elapsed < 8.1) {
        if (lastReportedPhase !== "LOGO_REASSEMBLED") {
          lastReportedPhase = "LOGO_REASSEMBLED";
          onPhaseChange?.("LOGO_REASSEMBLED");
        }

        const p6 = (elapsed - 7.3) / (8.1 - 7.3);
        const fadeOut = Math.max(0, 1 - p6 * 1.4);
        const scale = 1 - p6 * 0.12;

        ctx.save();
        ctx.globalAlpha = fadeOut;
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
          ctx.fillStyle = "#0a0a0a";
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            ctx.fillRect(p.origX - cx - 1.5, p.origY - cy - 1.5, 3, 3);
          }
        }
        ctx.restore();
      }

      // COMPLETE (>= 8.1s)
      else if (elapsed >= 8.1) {
        onComplete();
        return;
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [onComplete, onPhaseChange]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20 block"
    />
  );
}
