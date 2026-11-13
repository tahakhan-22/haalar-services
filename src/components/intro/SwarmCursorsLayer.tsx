"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { CURSOR_SEEDS } from "@/data/logoParticles";
import { CursorState, ClickRipple, ReconstructionStage } from "./types";

interface SwarmCursorsLayerProps {
  stage: ReconstructionStage;
  stageProgress: number;
  cursorPositionsRef: React.MutableRefObject<{ x: number; y: number }[]>;
  logoCenterRef: React.MutableRefObject<{ cx: number; cy: number; w: number; h: number }>;
}

export default function SwarmCursorsLayer({
  stage,
  stageProgress,
  cursorPositionsRef,
  logoCenterRef,
}: SwarmCursorsLayerProps) {
  const [cursors, setCursors] = useState<CursorState[]>([]);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const animFrameRef = useRef<number | null>(null);

  const triggerRipple = useCallback((x: number, y: number, color = "#f54545") => {
    setRipples((prev) => [
      ...prev.slice(-8), // Keep max 8 active ripples for performance
      {
        id: Math.random(),
        x,
        y,
        radius: 4,
        maxRadius: 36,
        opacity: 0.85,
        color,
      },
    ]);
  }, []);

  // Initialize cursor instances
  useEffect(() => {
    const { cx, cy, w: logoW, h: logoH } = logoCenterRef.current;

    const initialCursors: CursorState[] = CURSOR_SEEDS.map((seed) => {
      const initX = cx + seed.initNx * logoW;
      const initY = cy + seed.initNy * logoH;
      return {
        id: seed.id,
        label: seed.label,
        role: seed.role,
        x: initX,
        y: initY,
        targetX: initX,
        targetY: initY,
        angle: 0,
        scale: 0.1,
        opacity: 0,
        isClicking: false,
        statusText: "STANDBY",
      };
    });

    setCursors(initialCursors);
  }, [logoCenterRef]);

  // Main Cursor Update Loop
  useEffect(() => {
    const updateLoop = (now: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const { cx, cy, w: logoW, h: logoH } = logoCenterRef.current;

      setCursors((prev) => {
        if (!prev.length) return prev;

        return prev.map((cur) => {
          const updated = { ...cur };
          const seed = CURSOR_SEEDS[cur.id];
          const origX = cx + seed.initNx * logoW;
          const origY = cy + seed.initNy * logoH;

          // PHASE 1: INITIAL LOGO
          if (stage === "INITIAL_LOGO") {
            updated.x = origX;
            updated.y = origY;
            updated.scale = 0.01;
            updated.opacity = 0;
            updated.drawBox = null;
          }

          // PHASE 2: DISINTEGRATING
          else if (stage === "DISINTEGRATING") {
            const dx = origX - cx;
            const dy = origY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const burstDist = 120 + (cur.id % 4) * 50;

            updated.targetX = origX + (dx / dist) * burstDist;
            updated.targetY = origY + (dy / dist) * burstDist - 40;
            updated.x += (updated.targetX - updated.x) * 0.1;
            updated.y += (updated.targetY - updated.y) * 0.1;
            updated.scale = 0.2;
            updated.opacity = 0;
          }

          // PHASE 3: SWARM EXPANDING (MORPH FROM SHARDS TO CURSORS)
          else if (stage === "SWARM_EXPANDING") {
            updated.opacity = Math.min(1, stageProgress * 1.4);
            updated.scale = Math.min(1, 0.2 + stageProgress * 0.85);

            const hoverX = Math.sin(now * 0.002 + cur.id * 1.5) * 25;
            const hoverY = Math.cos(now * 0.0025 + cur.id * 1.2) * 20;

            updated.x += (updated.targetX + hoverX - updated.x) * 0.08;
            updated.y += (updated.targetY + hoverY - updated.y) * 0.08;
            updated.statusText = "MORPHING";
          }

          // PHASE 4: COLLABORATIVE RECONSTRUCTION WAVES
          else if (
            stage === "BUILD_NAV" ||
            stage === "BUILD_HERO" ||
            stage === "BUILD_SERVICES" ||
            stage === "BUILD_PRODUCTS" ||
            stage === "BUILD_ALL"
          ) {
            updated.opacity = 1;
            updated.scale = 1;

            let tx = updated.targetX;
            let ty = updated.targetY;
            let status = "ACTIVE";
            let box: CursorState["drawBox"] = null;

            if (cur.id === 0) {
              tx = w * 0.15 + Math.sin(now * 0.003) * 30;
              ty = 42;
              status = "REBUILD_NAV_LOGO";
              box = {
                x1: w * 0.08,
                y1: 15,
                x2: w * 0.45,
                y2: 70,
                label: "NAV_BAR // HAALAR BRAND",
                progress: stageProgress,
              };
            } else if (cur.id === 1) {
              tx = w * 0.78 + Math.cos(now * 0.003) * 25;
              ty = 42;
              status = "REBUILD_NAV_MENU";
            } else if (cur.id === 2) {
              tx = w * 0.38 + Math.sin(now * 0.004) * 45;
              ty = h * 0.28;
              status = "CONSTRUCT_H1";
              box = {
                x1: w * 0.2,
                y1: h * 0.22,
                x2: w * 0.75,
                y2: h * 0.42,
                label: "HERO_H1 // DISRUPT. DEFEND. DOMINATE.",
                progress: stageProgress,
              };
            } else if (cur.id === 3) {
              tx = w * 0.72 + Math.cos(now * 0.0035) * 35;
              ty = h * 0.32;
              status = "INITIALIZING_3D_EAGLE";
            } else if (cur.id === 4) {
              tx = w * 0.5 + Math.sin(now * 0.005) * 20;
              ty = h * 0.48;
              status = "BINDING_CTA";
            } else if (cur.id === 5) {
              tx = w * 0.26 + Math.sin(now * 0.003) * 40;
              ty = h * 0.62;
              status = "CAPABILITIES_SWITCHER";
              box = {
                x1: w * 0.1,
                y1: h * 0.55,
                x2: w * 0.88,
                y2: h * 0.75,
                label: "CORE_CAPABILITIES // HARDWARE MATRIX",
                progress: stageProgress,
              };
            } else if (cur.id === 6) {
              tx = w * 0.68 + Math.cos(now * 0.003) * 35;
              ty = h * 0.65;
              status = "HARDWARE_SPECS";
            } else if (cur.id === 7) {
              tx = w * 0.32 + Math.sin(now * 0.004) * 50;
              ty = h * 0.78;
              status = "FOCUS_SLICE_CAROUSEL";
              box = {
                x1: w * 0.08,
                y1: h * 0.72,
                x2: w * 0.92,
                y2: h * 0.88,
                label: "OUR_SERVICES // FOCUS_SLICE_ROW",
                progress: stageProgress,
              };
            } else if (cur.id === 8) {
              tx = w * 0.55 + Math.cos(now * 0.004) * 40;
              ty = h * 0.82;
              status = "JAMMER_TESTING_DEVICE";
            } else if (cur.id === 9) {
              tx = w * 0.76 + Math.sin(now * 0.003) * 30;
              ty = h * 0.85;
              status = "GREEN_ARROW_STOS";
            } else if (cur.id === 10) {
              tx = w * 0.35 + Math.sin(now * 0.0025) * 35;
              ty = h * 0.92;
              status = "IPC_MIL_STANDARDS";
            } else {
              tx = w * 0.72 + Math.cos(now * 0.003) * 40;
              ty = h * 0.94;
              status = "FOOTER_GRID_LOCK";
            }

            updated.targetX = tx;
            updated.targetY = ty;
            updated.x += (tx - updated.x) * 0.12;
            updated.y += (ty - updated.y) * 0.12;
            updated.statusText = status;
            updated.drawBox = box;

            if (Math.random() < 0.04) {
              triggerRipple(updated.x, updated.y, "#f54545");
              updated.isClicking = true;
            } else {
              updated.isClicking = false;
            }
          }

          // PHASE 5: CURSOR CONVERGENCE (FLY BACK TO CENTER & MORPH TO SHARDS)
          else if (stage === "CONVERGING") {
            updated.drawBox = null;
            updated.statusText = "CONVERGING";

            updated.targetX = origX;
            updated.targetY = origY;

            const speed = 0.12 + stageProgress * 0.22;
            updated.x += (origX - updated.x) * speed;
            updated.y += (origY - updated.y) * speed;

            updated.scale = Math.max(0.01, 1 - stageProgress * 1.25);
            updated.opacity = Math.max(0, 1 - stageProgress * 1.3);
          }

          // PHASE 6: LOGO REASSEMBLED / COMPLETE
          else if (stage === "LOGO_REASSEMBLED" || stage === "COMPLETE") {
            updated.opacity = 0;
            updated.scale = 0.01;
            updated.drawBox = null;
          }

          if (cursorPositionsRef.current[cur.id]) {
            cursorPositionsRef.current[cur.id].x = updated.x;
            cursorPositionsRef.current[cur.id].y = updated.y;
          } else {
            cursorPositionsRef.current[cur.id] = { x: updated.x, y: updated.y };
          }

          return updated;
        });
      });

      // Update click ripples
      setRipples((prev) =>
        prev
          .map((r) => ({
            ...r,
            radius: r.radius + (r.maxRadius - r.radius) * 0.16,
            opacity: r.opacity - 0.04,
          }))
          .filter((r) => r.opacity > 0.02)
      );

      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [stage, stageProgress, cursorPositionsRef, logoCenterRef, triggerRipple]);

  if (stage === "INITIAL_LOGO" || stage === "COMPLETE") {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Click Ripples */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {ripples.map((r) => (
          <circle
            key={r.id}
            cx={r.x}
            cy={r.y}
            r={r.radius}
            fill="none"
            stroke={r.color}
            strokeWidth="1.5"
            opacity={r.opacity}
          />
        ))}

        {/* Laser Bounding Boxes being drawn by cursors */}
        {cursors.map((cur) => {
          if (!cur.drawBox || cur.opacity < 0.2) return null;
          const { x1, y1, x2, y2, label, progress } = cur.drawBox;
          const currentX2 = x1 + (x2 - x1) * Math.min(1, progress * 1.8);
          const currentY2 = y1 + (y2 - y1) * Math.min(1, progress * 1.8);
          const boxW = Math.max(0, currentX2 - x1);
          const boxH = Math.max(0, currentY2 - y1);

          return (
            <g key={`box-${cur.id}`}>
              {/* Outer Wireframe Box */}
              <rect
                x={x1}
                y={y1}
                width={boxW}
                height={boxH}
                fill="rgba(245, 69, 69, 0.025)"
                stroke="#f54545"
                strokeWidth="1"
                strokeDasharray="4 3"
                opacity={0.7}
              />
              {/* Corner crosshairs */}
              <path
                d={`M ${x1} ${y1 + 10} L ${x1} ${y1} L ${x1 + 10} ${y1}`}
                stroke="#f54545"
                strokeWidth="2"
                fill="none"
              />
              <path
                d={`M ${currentX2 - 10} ${y1} L ${currentX2} ${y1} L ${currentX2} ${y1 + 10}`}
                stroke="#f54545"
                strokeWidth="2"
                fill="none"
              />
              <path
                d={`M ${x1} ${currentY2 - 10} L ${x1} ${currentY2} L ${x1 + 10} ${currentY2}`}
                stroke="#f54545"
                strokeWidth="2"
                fill="none"
              />
              <path
                d={`M ${currentX2 - 10} ${currentY2} L ${currentX2} ${currentY2} L ${currentX2} ${currentY2 - 10}`}
                stroke="#f54545"
                strokeWidth="2"
                fill="none"
              />
              {/* Label Tag */}
              <text
                x={x1 + 8}
                y={y1 - 6}
                fill="#f54545"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.05em"
              >
                [{label}]
              </text>
            </g>
          );
        })}
      </svg>

      {/* Cursors */}
      {cursors.map((cur) => {
        if (cur.opacity <= 0.01) return null;

        return (
          <div
            key={cur.id}
            className="absolute top-0 left-0 pointer-events-none will-change-transform"
            style={{
              transform: `translate3d(${cur.x}px, ${cur.y}px, 0) scale(${cur.scale})`,
              opacity: cur.opacity,
              transition: "opacity 0.2s ease",
            }}
          >
            {/* SVG Mouse Pointer */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] -translate-x-[2px] -translate-y-[2px]"
            >
              <path
                d="M3 2 L3 19 L7.5 15 L11 22 L13.8 20.6 L10.3 13.8 L16 13.8 Z"
                fill="#0a0a0a"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>

            {/* Identifying Tech Badge */}
            <div className="absolute left-4 top-4 flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-950/90 text-neutral-100 text-[10px] font-mono border border-neutral-700/80 shadow-lg backdrop-blur-xs whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f54545] animate-pulse" />
              <span className="font-bold text-white tracking-wide">{cur.label}</span>
              {cur.statusText && (
                <span className="text-[9px] text-neutral-400 border-l border-neutral-800 pl-1">
                  {cur.statusText}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
