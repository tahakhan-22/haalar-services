"use client";

import React, { useRef, useState } from "react";
import { useReconstruction } from "./ReconstructionContext";
import LogoParticleCanvas from "./LogoParticleCanvas";
import SwarmCursorsLayer from "./SwarmCursorsLayer";
import { CURSOR_SEEDS } from "@/data/logoParticles";

export default function HaalarIntroOverlay() {
  const { stage, stageProgress, isIntroActive, isComplete, skipIntro } =
    useReconstruction();

  const cursorPositionsRef = useRef<{ x: number; y: number }[]>(
    CURSOR_SEEDS.map(() => ({ x: 0, y: 0 }))
  );

  const logoCenterRef = useRef<{ cx: number; cy: number; w: number; h: number }>({
    cx: 600,
    cy: 400,
    w: 480,
    h: 158,
  });

  const [logoBounds, setLogoBounds] = useState<{
    cx: number;
    cy: number;
    w: number;
    h: number;
  }>({
    cx: 600,
    cy: 400,
    w: 480,
    h: 158,
  });

  const handleLogoCenterComputed = (
    cx: number,
    cy: number,
    w: number,
    h: number
  ) => {
    logoCenterRef.current = { cx, cy, w, h };
    setLogoBounds({ cx, cy, w, h });
  };

  if (!isIntroActive || isComplete) {
    return null;
  }

  // Determine overlay background opacity
  // In Phase 1 & 2: Solid crisp high-tech backdrop
  // In Phase 3 onwards: Background becomes translucent so the underlying real website DOM reveals beneath the cursors
  const isBackdropSolid =
    stage === "INITIAL_LOGO" || stage === "DISINTEGRATING";

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden pointer-events-auto transition-colors duration-700 ${
        isBackdropSolid
          ? "bg-[#fafafa]"
          : "bg-white/40 backdrop-blur-[2px]"
      }`}
    >
      {/* Engineering Blueprint Grid Background (visible during Phase 1 & 2) */}
      {isBackdropSolid && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.4]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(245, 69, 69, 0.05) 0%, transparent 60%),
              linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          }}
        />
      )}

      {/* Top Left System Telemetry */}
      <div className="absolute top-5 left-6 z-30 flex items-center gap-2.5 font-mono text-[11px] text-neutral-500 pointer-events-none">
        <span className="h-2 w-2 rounded-full bg-[#f54545] animate-ping" />
        <span className="font-semibold text-neutral-900 tracking-wider">
          {"HAALAR_OS // SYS_RECONSTRUCT"}
        </span>
        <span className="hidden sm:inline text-neutral-400">|</span>
        <span className="hidden sm:inline text-neutral-600">
          STAGE: [{stage}]
        </span>
      </div>

      {/* Top Right Skip Button */}
      <button
        type="button"
        onClick={skipIntro}
        className="absolute top-5 right-6 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-neutral-950 hover:text-white text-neutral-700 text-xs font-mono font-medium border border-neutral-200/90 shadow-sm transition-all duration-200 hover:scale-105 group cursor-pointer"
        aria-label="Skip website reconstruction intro"
      >
        <span>SKIP INTRO</span>
        <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-100 group-hover:bg-neutral-800 text-neutral-500 group-hover:text-neutral-300 font-mono">
          ESC
        </span>
      </button>

      {/* Center Reticle Framing (Phase 1 Only) */}
      {stage === "INITIAL_LOGO" && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 z-10"
          style={{
            left: `${logoBounds.cx - logoBounds.w / 2 - 20}px`,
            top: `${logoBounds.cy - logoBounds.h / 2 - 20}px`,
            width: `${logoBounds.w + 40}px`,
            height: `${logoBounds.h + 40}px`,
          }}
        >
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neutral-900" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neutral-900" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neutral-900" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neutral-900" />

          {/* Subtext below logo */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
            [ HARDWARE · RF &amp; EW · DEFENSE SYSTEMS ]
          </div>
        </div>
      )}

      {/* Bottom Center Progress Bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-500">
          <span className="text-[#f54545] font-bold">SWARM RECONSTRUCTION</span>
          <span>{"//"}</span>
          <span>IPC-A-610 CLASS 3 STANDARDS</span>
        </div>
        <div className="w-48 sm:w-64 h-1 bg-neutral-200/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#f54545] transition-all duration-150 ease-out"
            style={{
              width: `${
                stage === "INITIAL_LOGO"
                  ? 12
                  : stage === "DISINTEGRATING"
                  ? 25
                  : stage === "SWARM_EXPANDING"
                  ? 40
                  : stage === "BUILD_NAV"
                  ? 55
                  : stage === "BUILD_HERO"
                  ? 70
                  : stage === "BUILD_SERVICES"
                  ? 82
                  : stage === "BUILD_PRODUCTS"
                  ? 90
                  : stage === "BUILD_ALL"
                  ? 96
                  : 100
              }%`,
            }}
          />
        </div>
      </div>

      {/* High-Performance Canvas for Logo Particles & Shards */}
      <LogoParticleCanvas
        stage={stage}
        stageProgress={stageProgress}
        cursorPositionsRef={cursorPositionsRef}
        onLogoCenterComputed={handleLogoCenterComputed}
      />

      {/* Collaborative Swarm Cursors Layer */}
      <SwarmCursorsLayer
        stage={stage}
        stageProgress={stageProgress}
        cursorPositionsRef={cursorPositionsRef}
        logoCenterRef={logoCenterRef}
      />
    </div>
  );
}
