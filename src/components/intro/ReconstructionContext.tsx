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
  stageProgress: number;
  isIntroActive: boolean;
  isComplete: boolean;
  skipIntro: () => void;
  replayIntro: () => void;
}

const ReconstructionContext = createContext<ReconstructionContextValue>({
  stage: "COMPLETE",
  stageProgress: 1,
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
  // Lazy initialize state to avoid calling setState directly in mount effect
  const [isIntroActive, setIsIntroActive] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
      return sessionStorage.getItem("haalar_intro_seen") !== "true";
    } catch {
      return true;
    }
  });

  const [stage, setStage] = useState<ReconstructionStage>(() => {
    if (typeof window === "undefined") return "COMPLETE";
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "COMPLETE";
      if (sessionStorage.getItem("haalar_intro_seen") === "true") return "COMPLETE";
      return "INITIAL_LOGO";
    } catch {
      return "INITIAL_LOGO";
    }
  });

  const [isComplete, setIsComplete] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
      return sessionStorage.getItem("haalar_intro_seen") === "true";
    } catch {
      return false;
    }
  });

  const [stageProgress, setStageProgress] = useState<number>(0);

  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // Sync stage to document element for global header/navbar coordination
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
    document.body.style.overflow = "";
  }, [updateHtmlStage]);

  // Replay the intro experience on demand (for demonstration)
  const replayIntro = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    try {
      sessionStorage.removeItem("haalar_intro_seen");
    } catch {}
    window.scrollTo({ top: 0, behavior: "instant" });
    setStage("INITIAL_LOGO");
    setStageProgress(0);
    setIsIntroActive(true);
    setIsComplete(false);
    updateHtmlStage("INITIAL_LOGO", true);
    startTimeRef.current = performance.now();
    document.body.style.overflow = "hidden";
  }, [updateHtmlStage]);

  // Handle body overflow lock on mount/unmount
  useEffect(() => {
    if (isIntroActive) {
      startTimeRef.current = performance.now();
      document.body.style.overflow = "hidden";
      updateHtmlStage(stage, true);
    } else {
      document.body.style.overflow = "";
      updateHtmlStage("COMPLETE", false);
    }

    return () => {
      document.body.style.overflow = "";
      updateHtmlStage("COMPLETE", false);
    };
  }, [isIntroActive, stage, updateHtmlStage]);

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

  // Master Animation Timeline Coordinator
  useEffect(() => {
    if (!isIntroActive) return;

    const TIMELINE = [
      { name: "INITIAL_LOGO" as ReconstructionStage, start: 0.0, end: 1.25 },
      { name: "DISINTEGRATING" as ReconstructionStage, start: 1.25, end: 2.1 },
      { name: "SWARM_EXPANDING" as ReconstructionStage, start: 2.1, end: 2.9 },
      { name: "BUILD_NAV" as ReconstructionStage, start: 2.9, end: 3.7 },
      { name: "BUILD_HERO" as ReconstructionStage, start: 3.6, end: 4.5 },
      { name: "BUILD_SERVICES" as ReconstructionStage, start: 4.4, end: 5.3 },
      { name: "BUILD_PRODUCTS" as ReconstructionStage, start: 5.1, end: 5.9 },
      { name: "BUILD_ALL" as ReconstructionStage, start: 5.7, end: 6.2 },
      { name: "CONVERGING" as ReconstructionStage, start: 6.2, end: 7.3 },
      { name: "LOGO_REASSEMBLED" as ReconstructionStage, start: 7.3, end: 8.1 },
    ];

    const tick = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = (now - startTimeRef.current) / 1000;

      let currentStage: ReconstructionStage = "COMPLETE";
      let progress = 1.0;

      for (const seg of TIMELINE) {
        if (elapsed >= seg.start && elapsed < seg.end) {
          currentStage = seg.name;
          progress = (elapsed - seg.start) / (seg.end - seg.start);
          break;
        }
      }

      if (elapsed >= 8.1) {
        skipIntro();
        return;
      }

      setStage(currentStage);
      setStageProgress(progress);
      updateHtmlStage(currentStage, true);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isIntroActive, skipIntro, updateHtmlStage]);

  return (
    <ReconstructionContext.Provider
      value={{
        stage,
        stageProgress,
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
