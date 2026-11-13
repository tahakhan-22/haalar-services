"use client";

import React, { useState } from "react";
import { useReconstruction } from "./ReconstructionContext";
import LogoParticleCanvas from "./LogoParticleCanvas";

export default function HaalarIntroOverlay() {
  const { isIntroActive, isComplete, skipIntro } = useReconstruction();
  const [currentPhase, setCurrentPhase] = useState("INITIAL_LOGO");

  if (!isIntroActive || isComplete) {
    return null;
  }

  const isBackdropSolid =
    currentPhase === "INITIAL_LOGO" || currentPhase === "DISINTEGRATING";

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden pointer-events-auto transition-colors duration-700 ${
        isBackdropSolid ? "bg-[#fafafa]" : "bg-white/40 backdrop-blur-[2px]"
      }`}
    >
      {/* Engineering Blueprint Grid Background (visible during Phase 1 & 2) */}
      {isBackdropSolid && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
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
          PHASE: [{currentPhase}]
        </span>
      </div>

      {/* Top Right Skip Button */}
      <button
        type="button"
        onClick={skipIntro}
        className="absolute top-5 right-6 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 hover:bg-neutral-950 hover:text-white text-neutral-800 text-xs font-mono font-medium border border-neutral-300/80 shadow-md transition-all duration-200 hover:scale-105 group cursor-pointer"
        aria-label="Skip website reconstruction intro"
      >
        <span>SKIP INTRO</span>
        <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-100 group-hover:bg-neutral-800 text-neutral-500 group-hover:text-neutral-300 font-mono">
          ESC
        </span>
      </button>

      {/* Center Subtext (Phase 1 Only) */}
      {currentPhase === "INITIAL_LOGO" && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap font-mono text-[10px] tracking-widest text-neutral-400 uppercase pointer-events-none">
          [ HARDWARE · RF &amp; EW · DEFENSE SYSTEMS ]
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
            className="h-full bg-[#f54545] transition-all duration-300 ease-out"
            style={{
              width: `${
                currentPhase === "INITIAL_LOGO"
                  ? 15
                  : currentPhase === "DISINTEGRATING"
                  ? 30
                  : currentPhase === "SWARM_EXPANDING"
                  ? 45
                  : currentPhase === "RECONSTRUCTION"
                  ? 80
                  : currentPhase === "CONVERGING"
                  ? 92
                  : 100
              }%`,
            }}
          />
        </div>
      </div>

      {/* High-Performance Canvas for Logo Particles, Shards, and Cursors */}
      <LogoParticleCanvas
        onComplete={skipIntro}
        onPhaseChange={setCurrentPhase}
      />
    </div>
  );
}
