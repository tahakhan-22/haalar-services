"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { ReconstructionStage } from "./types";

interface ReconstructionContextValue {
  stage: ReconstructionStage;
  isIntroActive: boolean;
  isComplete: boolean;
  skipIntro: () => void;
  replayIntro: () => void;
}

const ReconstructionContext = createContext<ReconstructionContextValue>({
  stage: "COMPLETE",
  isIntroActive: false,
  isComplete: true,
  skipIntro: () => {},
  replayIntro: () => {},
});

export const useReconstruction = () => useContext(ReconstructionContext);

export function ReconstructionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default to COMPLETE so SSR and returning visitors have 0 layout shifts
  const [stage, setStage] = useState<ReconstructionStage>("COMPLETE");
  const [isIntroActive, setIsIntroActive] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(true);

  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  // Sync stage to document element for global CSS coordination
  const updateHtmlStage = useCallback((newStage: ReconstructionStage, active: boolean) => {
    if (typeof document === "undefined") return;
    if (active && newStage !== "COMPLETE") {
      document.documentElement.classList.add("haalar-intro-active");
      document.documentElement.setAttribute("data-intro-stage", newStage);
    } else {
      document.documentElement.classList.remove("haalar-intro-active");
      document.documentElement.removeAttribute("data-intro-stage");
    }
  }, []);

  // Skip the intro and immediately reveal the entire site
  const skipIntro = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    try {
      sessionStorage.setItem("haalar_intro_seen", "true");
    } catch {}
    setStage("COMPLETE");
    setIsIntroActive(false);
    setIsComplete(true);
    updateHtmlStage("COMPLETE", false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, [updateHtmlStage]);

  // Replay the intro experience on demand (for demonstration)
  const replayIntro = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    try {
      sessionStorage.removeItem("haalar_intro_seen");
    } catch {}
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    setStage("INITIAL_LOGO");
    setIsIntroActive(true);
    setIsComplete(false);
    updateHtmlStage("INITIAL_LOGO", true);
    startTimeRef.current = performance.now();
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  }, [updateHtmlStage]);

  // Check sessionStorage on client mount
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let hasSeen = false;
    try {
      hasSeen = sessionStorage.getItem("haalar_intro_seen") === "true";
    } catch {}

    if (!prefersReducedMotion && !hasSeen) {
      const timer = setTimeout(() => {
        setStage("INITIAL_LOGO");
        setIsIntroActive(true);
        setIsComplete(false);
        updateHtmlStage("INITIAL_LOGO", true);
        startTimeRef.current = performance.now();
        if (typeof document !== "undefined") {
          document.body.style.overflow = "hidden";
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [updateHtmlStage]);

  // Listen for Escape key to skip
  useEffect(() => {
    if (!isIntroActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skipIntro();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isIntroActive, skipIntro]);

  // Discrete stage advancement timer (updates React state ONLY when a phase transition happens)
  useEffect(() => {
    if (!isIntroActive || isComplete) return;

    let lastStage: ReconstructionStage = "INITIAL_LOGO";

    const checkTimeline = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = (now - startTimeRef.current) / 1000;

      let nextStage: ReconstructionStage = "INITIAL_LOGO";
      if (elapsed >= 7.6) {
        skipIntro();
        return;
      } else if (elapsed >= 6.9) {
        nextStage = "FLIGHT_TO_NAV";
      } else if (elapsed >= 6.0) {
        nextStage = "CONVERGING";
      } else if (elapsed >= 5.4) {
        nextStage = "BUILD_CTA_CONTENT";
      } else if (elapsed >= 4.9) {
        nextStage = "BUILD_CTA_CONTAINER";
      } else if (elapsed >= 4.4) {
        nextStage = "BUILD_SUBTITLE_EAGLE";
      } else if (elapsed >= 3.9) {
        nextStage = "BUILD_H1_EXPERTISE";
      } else if (elapsed >= 3.4) {
        nextStage = "BUILD_H1_IDEA";
      } else if (elapsed >= 3.0) {
        nextStage = "BUILD_BADGE_TEXT";
      } else if (elapsed >= 2.6) {
        nextStage = "BUILD_BADGE";
      } else if (elapsed >= 1.9) {
        nextStage = "SWARM_EXPANDING";
      } else if (elapsed >= 1.2) {
        nextStage = "DISINTEGRATING";
      }

      if (nextStage !== lastStage) {
        lastStage = nextStage;
        setStage(nextStage);
        updateHtmlStage(nextStage, true);
      }

      rafRef.current = requestAnimationFrame(checkTimeline);
    };

    rafRef.current = requestAnimationFrame(checkTimeline);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isIntroActive, isComplete, skipIntro, updateHtmlStage]);

  return (
    <ReconstructionContext.Provider
      value={{
        stage,
        isIntroActive,
        isComplete,
        skipIntro,
        replayIntro,
      }}
    >
      {children}
    </ReconstructionContext.Provider>
  );
}
