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
  opacity: number;
  progress: number;
  pill?: boolean;
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

    // Helper to query live DOM elements bounding rects
    const getDomRect = (id: string, fallback: { x: number; y: number; w: number; h: number }) => {
      if (typeof document === "undefined") return fallback;
      const el = document.getElementById(id);
      if (!el) return fallback;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return fallback;
      return { x: r.left, y: r.top, w: r.width, h: r.height };
    };

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

    // Create 6 Primary Cursors focused on Hero Components
    const cursorConfigs = [
      { id: 0, label: "SYS-ARCH", role: "Outer Containers" },
      { id: 1, label: "HERO-H1", role: "Main Typography" },
      { id: 2, label: "CTA-ENGINE", role: "Primary Button & Color Fill" },
      { id: 3, label: "TYPO-INJECT", role: "Inner Text & Sparkles" },
      { id: 4, label: "OPTIC-3D", role: "3D Eagle Initialization" },
      { id: 5, label: "MIL-STD", role: "Secondary CTA & Standards" },
    ];

    const cursors: CursorSim[] = cursorConfigs.map((cfg, idx) => {
      const seed = CURSOR_SEEDS[idx] || CURSOR_SEEDS[0];
      const origX = cx + seed.initNx * logoW;
      const origY = cy + seed.initNy * logoH;
      return {
        id: cfg.id,
        label: cfg.label,
        role: cfg.role,
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
    const activeBoxes: BoundingBox[] = [];
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

    // Drawing helper for sharp SVG arrow cursor with status badge
    const drawCursor = (cur: CursorSim) => {
      if (cur.opacity < 0.01) return;

      ctx.save();
      ctx.translate(cur.x, cur.y);
      ctx.scale(cur.scale, cur.scale);
      ctx.globalAlpha = cur.opacity;

      // Pointer Arrow Path
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 18);
      ctx.lineTo(4.5, 14);
      ctx.lineTo(8, 21.5);
      ctx.lineTo(10.8, 20.2);
      ctx.lineTo(7.3, 12.8);
      ctx.lineTo(13, 12.8);
      ctx.closePath();

      // Drop Shadow
      ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 2;

      // Solid black body
      ctx.fillStyle = "#0a0a0a";
      ctx.fill();

      // Sharp white outline
      ctx.shadowColor = "transparent";
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.3;
      ctx.stroke();

      // Status Badge
      const badgeText = `${cur.label} // ${cur.statusText}`;
      ctx.font = "bold 9px monospace";
      const textWidth = ctx.measureText(badgeText).width;
      const badgeW = textWidth + 18;
      const badgeH = 18;
      const bx = 16;
      const by = 12;

      ctx.fillStyle = "rgba(10, 10, 10, 0.94)";
      ctx.beginPath();
      ctx.roundRect(bx, by, badgeW, badgeH, 4);
      ctx.fill();
      ctx.strokeStyle = "rgba(245, 69, 69, 0.8)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Glowing activity indicator
      ctx.fillStyle = "#f54545";
      ctx.beginPath();
      ctx.arc(bx + 7, by + badgeH / 2, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.fillText(badgeText, bx + 14, by + 12);

      ctx.restore();
    };

    // Drawing helper for laser bounding boxes
    const drawBoundingBox = (b: BoundingBox) => {
      ctx.save();
      ctx.globalAlpha = b.opacity;

      const wBox = Math.max(0, (b.x2 - b.x1) * Math.min(1, b.progress));
      const hBox = b.y2 - b.y1;

      // Fill subtle translucent red wash
      ctx.fillStyle = "rgba(245, 69, 69, 0.04)";
      if (b.pill) {
        ctx.beginPath();
        ctx.roundRect(b.x1, b.y1, wBox, hBox, hBox / 2);
        ctx.fill();
      } else {
        ctx.fillRect(b.x1, b.y1, wBox, hBox);
      }

      // Dashed wireframe border
      ctx.strokeStyle = "rgba(245, 69, 69, 0.85)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([5, 4]);

      if (b.pill) {
        ctx.beginPath();
        ctx.roundRect(b.x1, b.y1, wBox, hBox, hBox / 2);
        ctx.stroke();
      } else {
        ctx.strokeRect(b.x1, b.y1, wBox, hBox);
      }

      // Precision Corner Crosshairs (L-brackets)
      ctx.setLineDash([]);
      ctx.strokeStyle = "#f54545";
      ctx.lineWidth = 2;
      const cl = 8;
      const rx2 = b.x1 + wBox;

      // TL
      ctx.beginPath(); ctx.moveTo(b.x1, b.y1 + cl); ctx.lineTo(b.x1, b.y1); ctx.lineTo(b.x1 + cl, b.y1); ctx.stroke();
      // TR
      ctx.beginPath(); ctx.moveTo(rx2 - cl, b.y1); ctx.lineTo(rx2, b.y1); ctx.lineTo(rx2, b.y1 + cl); ctx.stroke();
      // BL
      ctx.beginPath(); ctx.moveTo(b.x1, b.y2 - cl); ctx.lineTo(b.x1, b.y2); ctx.lineTo(b.x1 + cl, b.y2); ctx.stroke();
      // BR
      ctx.beginPath(); ctx.moveTo(rx2 - cl, b.y2); ctx.lineTo(rx2, b.y2); ctx.lineTo(rx2, b.y2 - cl); ctx.stroke();

      // Coordinate / Component Tag
      ctx.fillStyle = "#f54545";
      ctx.font = "bold 9px monospace";
      ctx.fillText(`[${b.label}]`, b.x1 + 6, b.y1 - 6);

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

      // Fetch dynamic DOM positions
      const badgeRect = getDomRect("hero-badge-pill", { x: w * 0.35, y: h * 0.18, w: w * 0.3, h: 36 });
      const badgeInnerRect = getDomRect("hero-badge-inner", { x: badgeRect.x + 8, y: badgeRect.y + 4, w: badgeRect.w - 16, h: badgeRect.h - 8 });
      const h1Line1Rect = getDomRect("hero-h1-line1", { x: w * 0.35, y: h * 0.25, w: w * 0.3, h: 60 });
      const h1Line2Rect = getDomRect("hero-h1-line2", { x: w * 0.33, y: h * 0.32, w: w * 0.34, h: 60 });
      const subRect = getDomRect("hero-subtitle", { x: w * 0.25, y: h * 0.42, w: w * 0.5, h: 64 });
      const ctaBtnRect = getDomRect("hero-cta-btn", { x: w * 0.35, y: h * 0.54, w: 260, h: 54 });
      const ctaContentRect = getDomRect("hero-cta-content", { x: ctaBtnRect.x + 16, y: ctaBtnRect.y + 10, w: ctaBtnRect.w - 32, h: 34 });
      const ctaSecRect = getDomRect("hero-cta-secondary", { x: w * 0.52, y: h * 0.54, w: 230, h: 54 });
      const eagleRect = getDomRect("hero-eagle-loader", { x: w * 0.65, y: h * 0.2, w: w * 0.35, h: h * 0.5 });
      const navLogoRect = getDomRect("navbar-brand-logo", { x: 48, y: 18, w: 120, h: 44 });

      // PHASE 1: INITIAL LOGO REVEAL (0.0s - 1.2s)
      if (elapsed < 1.2) {
        if (lastReportedPhase !== "INITIAL_LOGO") {
          lastReportedPhase = "INITIAL_LOGO";
          onPhaseChange?.("INITIAL_LOGO");
        }

        // Draw centered logo on top of transparent background (Vanta net background shows through!)
        if (logoImageRef.current && logoImageRef.current.complete) {
          ctx.drawImage(
            logoImageRef.current,
            cx - logoW / 2,
            cy - logoH / 2,
            logoW,
            logoH
          );
        } else {
          ctx.fillStyle = "#0a0a0a";
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            ctx.fillRect(p.origX - 1.5, p.origY - 1.5, 3, 3);
          }
        }

        // Technical Reticle Corner Brackets around centered logo
        ctx.save();
        ctx.strokeStyle = "#f54545";
        ctx.lineWidth = 1.5;
        const pad = 18;
        const bx1 = cx - logoW / 2 - pad;
        const by1 = cy - logoH / 2 - pad;
        const bx2 = cx + logoW / 2 + pad;
        const by2 = cy + logoH / 2 + pad;
        const len = 14;

        // TL
        ctx.beginPath(); ctx.moveTo(bx1, by1 + len); ctx.lineTo(bx1, by1); ctx.lineTo(bx1 + len, by1); ctx.stroke();
        // TR
        ctx.beginPath(); ctx.moveTo(bx2 - len, by1); ctx.lineTo(bx2, by1); ctx.lineTo(bx2, by1 + len); ctx.stroke();
        // BL
        ctx.beginPath(); ctx.moveTo(bx1, by2 - len); ctx.lineTo(bx1, by2); ctx.lineTo(bx1 + len, by2); ctx.stroke();
        // BR
        ctx.beginPath(); ctx.moveTo(bx2 - len, by2); ctx.lineTo(bx2, by2); ctx.lineTo(bx2, by2 - len); ctx.stroke();

        ctx.restore();
      }

      // PHASE 2: DISINTEGRATION (1.2s - 1.9s)
      else if (elapsed >= 1.2 && elapsed < 1.9) {
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

            const speed = 280 + Math.random() * 450 + (dist / (logoW / 2)) * 240;
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
          p.vx *= Math.pow(0.12, dt);
          p.vy *= Math.pow(0.12, dt);

          drawShard(p);
        }
      }

      // PHASE 3: MORPH SHARDS INTO CURSORS (1.9s - 2.6s)
      else if (elapsed >= 1.9 && elapsed < 2.6) {
        if (lastReportedPhase !== "SWARM_EXPANDING") {
          lastReportedPhase = "SWARM_EXPANDING";
          onPhaseChange?.("SWARM_EXPANDING");
        }

        const p3 = (elapsed - 1.9) / (2.6 - 1.9);

        // Update ambient non-cursor shards
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (p.cursorIndex >= 0 && p.cursorIndex < cursors.length) {
            p.alpha = Math.max(0, 1 - p3 * 1.3);
            if (p.alpha > 0.05) drawShard(p);
          } else {
            p.rotation += p.vRot * 0.3;
            p.x += Math.sin(now * 0.001 + i) * 0.4;
            p.y += Math.cos(now * 0.0012 + i) * 0.4;
            p.alpha = 0.45;
            drawShard(p);
          }
        }

        // Morph & reveal 6 cursors
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

      // PHASE 4: COMPONENT-BY-COMPONENT HERO RECONSTRUCTION (2.6s - 6.0s)
      else if (elapsed >= 2.6 && elapsed < 6.0) {
        activeBoxes.length = 0;

        // Ambient shards floating in background
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.rotation += p.vRot * 0.3;
          p.x += Math.sin(now * 0.001 + i) * 0.35;
          p.y += Math.cos(now * 0.0012 + i) * 0.35;
          p.alpha = 0.35;
          drawShard(p);
        }

        // SUB-STAGE 4A: BUILD_BADGE (2.6s - 3.0s)
        if (elapsed < 3.0) {
          if (lastReportedPhase !== "BUILD_BADGE") {
            lastReportedPhase = "BUILD_BADGE";
            onPhaseChange?.("BUILD_BADGE");
          }
          const prog = (elapsed - 2.6) / 0.4;

          cursors[0].targetX = badgeRect.x + badgeRect.w * prog;
          cursors[0].targetY = badgeRect.y;
          cursors[0].statusText = "OUTER_PILL_CONTAINER";

          activeBoxes.push({
            x1: badgeRect.x,
            y1: badgeRect.y,
            x2: badgeRect.x + badgeRect.w,
            y2: badgeRect.y + badgeRect.h,
            label: "BADGE // CONTAINER_FRAME",
            opacity: 0.8,
            progress: prog,
            pill: true,
          });
        }

        // SUB-STAGE 4B: BUILD_BADGE_TEXT (3.0s - 3.4s)
        else if (elapsed < 3.4) {
          if (lastReportedPhase !== "BUILD_BADGE_TEXT") {
            lastReportedPhase = "BUILD_BADGE_TEXT";
            onPhaseChange?.("BUILD_BADGE_TEXT");
          }
          const prog = (elapsed - 3.0) / 0.4;

          cursors[1].targetX = badgeInnerRect.x + badgeInnerRect.w * prog;
          cursors[1].targetY = badgeInnerRect.y + badgeInnerRect.h / 2;
          cursors[1].statusText = "DISRUPT_DEFEND_DOMINATE";

          activeBoxes.push({
            x1: badgeInnerRect.x,
            y1: badgeInnerRect.y,
            x2: badgeInnerRect.x + badgeInnerRect.w,
            y2: badgeInnerRect.y + badgeInnerRect.h,
            label: "TYPOGRAPHY // MIL_STANDARDS",
            opacity: 0.8,
            progress: prog,
          });
        }

        // SUB-STAGE 4C: BUILD_H1_IDEA (3.4s - 3.9s)
        else if (elapsed < 3.9) {
          if (lastReportedPhase !== "BUILD_H1_IDEA") {
            lastReportedPhase = "BUILD_H1_IDEA";
            onPhaseChange?.("BUILD_H1_IDEA");
          }
          const prog = (elapsed - 3.4) / 0.5;

          cursors[1].targetX = h1Line1Rect.x + h1Line1Rect.w * prog;
          cursors[1].targetY = h1Line1Rect.y + h1Line1Rect.h / 2;
          cursors[1].statusText = "H1_YOUR_IDEA";

          activeBoxes.push({
            x1: h1Line1Rect.x - 4,
            y1: h1Line1Rect.y,
            x2: h1Line1Rect.x + h1Line1Rect.w + 4,
            y2: h1Line1Rect.y + h1Line1Rect.h,
            label: "H1 // YOUR_IDEA",
            opacity: 0.85,
            progress: prog,
          });
        }

        // SUB-STAGE 4D: BUILD_H1_EXPERTISE (3.9s - 4.4s)
        else if (elapsed < 4.4) {
          if (lastReportedPhase !== "BUILD_H1_EXPERTISE") {
            lastReportedPhase = "BUILD_H1_EXPERTISE";
            onPhaseChange?.("BUILD_H1_EXPERTISE");
          }
          const prog = (elapsed - 3.9) / 0.5;

          cursors[1].targetX = h1Line2Rect.x + h1Line2Rect.w * prog;
          cursors[1].targetY = h1Line2Rect.y + h1Line2Rect.h / 2;
          cursors[1].statusText = "H1_OUR_EXPERTISE";

          activeBoxes.push({
            x1: h1Line2Rect.x - 4,
            y1: h1Line2Rect.y,
            x2: h1Line2Rect.x + h1Line2Rect.w + 4,
            y2: h1Line2Rect.y + h1Line2Rect.h,
            label: "H1 // OUR_EXPERTISE [RED_ACCENT]",
            opacity: 0.85,
            progress: prog,
          });
        }

        // SUB-STAGE 4E: BUILD_SUBTITLE_EAGLE (4.4s - 4.9s)
        else if (elapsed < 4.9) {
          if (lastReportedPhase !== "BUILD_SUBTITLE_EAGLE") {
            lastReportedPhase = "BUILD_SUBTITLE_EAGLE";
            onPhaseChange?.("BUILD_SUBTITLE_EAGLE");
          }
          const prog = (elapsed - 4.4) / 0.5;

          cursors[0].targetX = subRect.x + subRect.w * prog;
          cursors[0].targetY = subRect.y + subRect.h / 2;
          cursors[0].statusText = "DESCRIPTION_BLOCK";

          cursors[4].targetX = eagleRect.x + eagleRect.w * 0.5;
          cursors[4].targetY = eagleRect.y + eagleRect.h * 0.4;
          cursors[4].statusText = "INIT_3D_EAGLE";

          activeBoxes.push({
            x1: subRect.x - 4,
            y1: subRect.y,
            x2: subRect.x + subRect.w + 4,
            y2: subRect.y + subRect.h,
            label: "SYS // NEXT_GEN_HARDWARE",
            opacity: 0.8,
            progress: prog,
          });

          // 3D Eagle Radar reticle
          ctx.save();
          ctx.beginPath();
          ctx.arc(cursors[4].targetX, cursors[4].targetY, 40 * prog, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(245, 69, 69, 0.6)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.restore();
        }

        // SUB-STAGE 4F: BUILD_CTA_CONTAINER (4.9s - 5.4s) -> EXACT USER REQUIREMENT: BUTTON BOX APPEARS & FILLS WITH COLOR
        else if (elapsed < 5.4) {
          if (lastReportedPhase !== "BUILD_CTA_CONTAINER") {
            lastReportedPhase = "BUILD_CTA_CONTAINER";
            onPhaseChange?.("BUILD_CTA_CONTAINER");
          }
          const prog = (elapsed - 4.9) / 0.5;

          cursors[2].targetX = ctaBtnRect.x + ctaBtnRect.w * prog;
          cursors[2].targetY = ctaBtnRect.y;
          cursors[2].statusText = "CTA_PILL_CONTAINER";

          activeBoxes.push({
            x1: ctaBtnRect.x,
            y1: ctaBtnRect.y,
            x2: ctaBtnRect.x + ctaBtnRect.w,
            y2: ctaBtnRect.y + ctaBtnRect.h,
            label: "PRIMARY_CTA // RED_COLOR_FILL",
            opacity: 0.9,
            progress: prog,
            pill: true,
          });

          if (prog > 0.85 && Math.random() < 0.2) {
            ripples.push({
              x: ctaBtnRect.x + ctaBtnRect.w / 2,
              y: ctaBtnRect.y + ctaBtnRect.h / 2,
              r: 4,
              maxR: 50,
              opacity: 0.9,
              color: "#f54545",
            });
          }
        }

        // SUB-STAGE 4G: BUILD_CTA_CONTENT (5.4s - 6.0s) -> EXACT USER REQUIREMENT: INNER BOX CREATES TEXT & ICON INSIDE BUTTON!
        else {
          if (lastReportedPhase !== "BUILD_CTA_CONTENT") {
            lastReportedPhase = "BUILD_CTA_CONTENT";
            onPhaseChange?.("BUILD_CTA_CONTENT");
          }
          const prog = (elapsed - 5.4) / 0.6;

          // Cursor 3 draws inner box around text and sparkles
          cursors[3].targetX = ctaContentRect.x + ctaContentRect.w * prog;
          cursors[3].targetY = ctaContentRect.y + ctaContentRect.h / 2;
          cursors[3].statusText = "INJECT_TYPOGRAPHY";

          // Cursor 5 draws secondary button
          cursors[5].targetX = ctaSecRect.x + ctaSecRect.w * prog;
          cursors[5].targetY = ctaSecRect.y + ctaSecRect.h / 2;
          cursors[5].statusText = "SECONDARY_CTA";

          // Inner box for button typography
          activeBoxes.push({
            x1: ctaContentRect.x - 4,
            y1: ctaContentRect.y - 2,
            x2: ctaContentRect.x + ctaContentRect.w + 4,
            y2: ctaContentRect.y + ctaContentRect.h + 2,
            label: "BUTTON_TEXT // CONSULT_ENGINEERING",
            opacity: 0.95,
            progress: prog,
          });

          // Secondary button box
          activeBoxes.push({
            x1: ctaSecRect.x,
            y1: ctaSecRect.y,
            x2: ctaSecRect.x + ctaSecRect.w,
            y2: ctaSecRect.y + ctaSecRect.h,
            label: "EXPLORE_HARDWARE_PRODUCTS",
            opacity: 0.75,
            progress: prog,
            pill: true,
          });
        }

        // Render laser bounding boxes
        for (let i = 0; i < activeBoxes.length; i++) {
          drawBoundingBox(activeBoxes[i]);
        }

        // Smoothly update cursors towards their targets
        for (let i = 0; i < cursors.length; i++) {
          const cur = cursors[i];
          cur.x += (cur.targetX - cur.x) * 0.16;
          cur.y += (cur.targetY - cur.y) * 0.16;
          cur.scale = 1;
          cur.opacity = 1;
          drawCursor(cur);
        }

        // Update click ripples
        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i];
          r.r += (r.maxR - r.r) * 0.18;
          r.opacity -= 0.04;
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

      // PHASE 5: CURSOR CONVERGENCE & SHARD REASSEMBLY (6.0s - 6.9s)
      else if (elapsed >= 6.0 && elapsed < 6.9) {
        if (lastReportedPhase !== "CONVERGING") {
          lastReportedPhase = "CONVERGING";
          onPhaseChange?.("CONVERGING");
        }

        const p5 = (elapsed - 6.0) / (6.9 - 6.0);
        const ease = p5 < 0.5 ? 4 * p5 * p5 * p5 : 1 - Math.pow(-2 * p5 + 2, 3) / 2;

        // Cursors collapse and accelerate back to center
        for (let i = 0; i < cursors.length; i++) {
          const cur = cursors[i];
          cur.x += (cx - cur.x) * (0.12 + ease * 0.28);
          cur.y += (cy - cur.y) * (0.12 + ease * 0.28);
          cur.scale = Math.max(0.01, 1 - p5 * 1.3);
          cur.opacity = Math.max(0, 1 - p5 * 1.35);
          cur.statusText = "CONVERGING";
          drawCursor(cur);
        }

        // Pull all 1,038 shards towards original coordinates
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.origX - p.x;
          const dy = p.origY - p.y;

          p.x += dx * (0.1 + ease * 0.32);
          p.y += dy * (0.1 + ease * 0.32);
          p.rotation *= 0.9;
          p.alpha = Math.min(1, p.alpha + 0.1);

          drawShard(p);
        }

        // Energy pulse ring as shards lock in
        if (p5 > 0.65) {
          const pulse = (p5 - 0.65) / 0.35;
          ctx.save();
          ctx.beginPath();
          ctx.arc(cx, cy, (logoW * 0.55) * pulse, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245, 69, 69, ${0.5 * (1 - pulse)})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }
      }

      // PHASE 6: ASSEMBLED LOGO FLIES TO TOP-LEFT CORNER (6.9s - 7.6s) -> EXACT USER REQUIREMENT: LOGO GOES TO TOP LEFT CORNER!
      else if (elapsed >= 6.9 && elapsed < 7.6) {
        if (lastReportedPhase !== "FLIGHT_TO_NAV") {
          lastReportedPhase = "FLIGHT_TO_NAV";
          onPhaseChange?.("FLIGHT_TO_NAV");
        }

        const p6 = (elapsed - 6.9) / (7.6 - 6.9);
        // Elegant cubic bezier ease out
        const ease = 1 - Math.pow(1 - p6, 3);

        // Target coordinates = Navbar brand logo position
        const targetX = navLogoRect.x + 60;
        const targetY = navLogoRect.y + navLogoRect.h / 2;
        const targetScale = Math.min(1, 110 / logoW);

        // Interpolate position and scale towards top-left corner
        const curX = cx + (targetX - cx) * ease;
        const curY = cy + (targetY - cy) * ease;
        const curScale = 1 + (targetScale - 1) * ease;
        const fadeOut = p6 > 0.85 ? Math.max(0, 1 - (p6 - 0.85) / 0.15) : 1;

        ctx.save();
        ctx.globalAlpha = fadeOut;
        ctx.translate(curX, curY);
        ctx.scale(curScale, curScale);

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

        // Trailing particle embers behind the flying logo
        if (p6 < 0.8) {
          ctx.fillStyle = "rgba(245, 69, 69, 0.4)";
          for (let k = 0; k < 5; k++) {
            const trailX = (Math.random() - 0.5) * logoW * 0.4;
            const trailY = (Math.random() - 0.5) * logoH * 0.4;
            ctx.fillRect(trailX, trailY, 2.5, 2.5);
          }
        }

        ctx.restore();
      }

      // COMPLETE (>= 7.6s)
      else if (elapsed >= 7.6) {
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
