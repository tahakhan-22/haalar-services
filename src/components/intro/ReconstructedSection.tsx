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
  BUILD_CONTAINERS: 3,
  BUILD_CONTENT: 4,
  CONVERGING: 5,
  FLIGHT_TO_NAV: 6,
  COMPLETE: 7,
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

  const currentOrder = STAGE_ORDER[stage] ?? 12;
  const targetOrder = STAGE_ORDER[revealAt] ?? 0;
  const isRevealed = currentOrder >= targetOrder;

  return (
    <div
      id={id}
      className={`relative transition-all duration-500 ease-out will-change-transform ${className}`}
      style={{
        opacity: isRevealed ? 1 : 0.12,
        transform: isRevealed ? "scale(1) translateY(0)" : "scale(0.99) translateY(8px)",
      }}
    >
      {children}
    </div>
  );
}
