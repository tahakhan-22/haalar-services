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
  BUILD_BADGE: 3,
  BUILD_BADGE_TEXT: 4,
  BUILD_H1_IDEA: 5,
  BUILD_H1_EXPERTISE: 6,
  BUILD_SUBTITLE_EAGLE: 7,
  BUILD_CTA_CONTAINER: 8,
  BUILD_CTA_CONTENT: 9,
  CONVERGING: 10,
  FLIGHT_TO_NAV: 11,
  COMPLETE: 12,
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
