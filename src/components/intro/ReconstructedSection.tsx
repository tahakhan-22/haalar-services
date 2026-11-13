"use client";

import React from "react";
import { useReconstruction } from "./ReconstructionContext";
import { ReconstructionStage } from "./types";

interface ReconstructedSectionProps {
  children: React.ReactNode;
  revealAt: ReconstructionStage;
  className?: string;
  id?: string;
}

const STAGE_ORDER: Record<ReconstructionStage, number> = {
  INITIAL_LOGO: 0,
  DISINTEGRATING: 1,
  SWARM_EXPANDING: 2,
  BUILD_NAV: 3,
  BUILD_HERO: 4,
  BUILD_SERVICES: 5,
  BUILD_PRODUCTS: 6,
  BUILD_ALL: 7,
  CONVERGING: 8,
  LOGO_REASSEMBLED: 9,
  COMPLETE: 10,
};

export default function ReconstructedSection({
  children,
  revealAt,
  className = "",
  id,
}: ReconstructedSectionProps) {
  const { stage, isIntroActive, isComplete } = useReconstruction();

  if (!isIntroActive || isComplete) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const currentOrder = STAGE_ORDER[stage] ?? 10;
  const targetOrder = STAGE_ORDER[revealAt] ?? 0;
  const isRevealed = currentOrder >= targetOrder;

  return (
    <div
      id={id}
      className={`relative transition-all duration-700 ease-out will-change-transform ${className}`}
      style={{
        opacity: isRevealed ? 1 : 0.08,
        transform: isRevealed ? "scale(1) translateY(0)" : "scale(0.98) translateY(12px)",
        filter: isRevealed ? "none" : "blur(1.5px) grayscale(0.7)",
      }}
    >
      {/* Laser Scan line when freshly revealed */}
      {isRevealed && currentOrder === targetOrder && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f54545] to-transparent animate-pulse pointer-events-none z-10" />
      )}
      {children}
    </div>
  );
}
