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

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto bg-transparent select-none">
      {/* Top Left System Telemetry */}
      <div className="absolute top-5 left-6 z-30 flex items-center gap-2.5 font-mono text-[11px] text-neutral-600 pointer-events-none drop-shadow-xs">
        <span className="h-2 w-2 rounded-full bg-[#f54545] animate-ping" />
        <span className="font-semibold text-neutral-900 tracking-wider">
          {"HAALAR_OS // HERO_RECONSTRUCT"}
        </span>
        <span className="hidden sm:inline text-neutral-400">|</span>
        <span className="hidden sm:inline text-neutral-700 font-bold">
          [{currentPhase}]
        </span>
      </div>

      {/* Top Right Skip Button */}
      <button
        type="button"
        onClick={skipIntro}
        className="absolute top-5 right-6 z-40 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 hover:bg-neutral-950 hover:text-white text-neutral-800 text-xs font-mono font-medium border border-neutral-300 shadow-md backdrop-blur-xs transition-all duration-200 hover:scale-105 group cursor-pointer"
        aria-label="Skip website reconstruction intro"
      >
        <span>SKIP INTRO</span>
        <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-100 group-hover:bg-neutral-800 text-neutral-500 group-hover:text-neutral-300 font-mono">
          ESC
        </span>
      </button>

      {/* Center Subtext (Phase 1 Only) */}
      {currentPhase === "INITIAL_LOGO" && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap font-mono text-[11px] tracking-widest text-neutral-500 uppercase pointer-events-none drop-shadow-xs">
          [ HAALAR SERVICES // HARDWARE · RF &amp; EW · DEFENSE ]
        </div>
      )}

      {/* High-Performance Canvas for Logo Particles, Bounding Boxes, Cursors & Flight */}
      <LogoParticleCanvas
        onComplete={skipIntro}
        onPhaseChange={setCurrentPhase}
      />
    </div>
  );
}
