"use client";

import React from "react";
import { useReconstruction } from "./ReconstructionContext";
import { RotateCcw } from "lucide-react";

export default function ReplayIntroButton() {
  const { isComplete, isIntroActive, replayIntro } = useReconstruction();

  // Only show when the intro is complete
  if (isIntroActive || !isComplete) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-5 z-40 pointer-events-auto">
      <button
        type="button"
        onClick={replayIntro}
        className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-950/85 hover:bg-neutral-950 text-neutral-200 hover:text-white text-xs font-mono border border-neutral-800 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 cursor-pointer"
        title="Replay Haalar Logo Swarm Reconstruction Experience"
        aria-label="Replay intro animation"
      >
        <RotateCcw className="w-3.5 h-3.5 text-[#f54545] group-hover:rotate-180 transition-transform duration-500" />
        <span className="tracking-wide">REPLAY INTRO</span>
      </button>
    </div>
  );
}
