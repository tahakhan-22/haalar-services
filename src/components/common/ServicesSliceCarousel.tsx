"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { FocusSliceItem } from "@/data/focusSlices";

interface ServicesSliceCarouselProps {
  eyebrow: string;
  title: string;
  exploreLabel?: string;
  exploreHref?: string;
  items: FocusSliceItem[];
}

export default function ServicesSliceCarousel({
  eyebrow,
  title,
  exploreLabel = "Explore all services",
  exploreHref = "/services",
  items,
}: ServicesSliceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverTimerRef = useRef<number | null>(null);
  const canHoverRef = useRef(true);

  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateHoverCapability = () => {
      canHoverRef.current = hoverQuery.matches;
    };
    updateHoverCapability();
    hoverQuery.addEventListener("change", updateHoverCapability);

    return () => {
      hoverQuery.removeEventListener("change", updateHoverCapability);
      if (hoverTimerRef.current !== null) {
        window.clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  const clearHoverTimer = () => {
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  const handleMouseEnter = (idx: number) => {
    if (!canHoverRef.current) return;
    clearHoverTimer();
    hoverTimerRef.current = window.setTimeout(() => {
      setActiveIndex(idx);
      hoverTimerRef.current = null;
    }, 60);
  };

  const handleSelect = (idx: number) => {
    clearHoverTimer();
    setActiveIndex(idx);
  };

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold block">
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-3 tracking-tight">
              {title}
            </h2>
          </div>

          <Link
            href={exploreHref}
            className="inline-flex items-center gap-2 text-sm font-bold text-neutral-950 hover:text-[#f54545] transition-colors shrink-0 group/explore"
          >
            <span>{exploreLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/explore:translate-x-1" />
          </Link>
        </div>

        {/* Focus-Slice Accordion Row (vertical stack on mobile, horizontal strip on md+) */}
        <div
          role="region"
          aria-label={title}
          className="flex flex-col md:flex-row items-stretch gap-[14px] h-[580px] sm:h-[600px] md:h-[460px] overflow-hidden rounded-none shadow-[0_24px_60px_-15px_rgba(10,10,10,0.3)]"
        >
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            const indexLabel = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`focus-slice-card group/slice relative basis-0 min-w-0 min-h-0 overflow-hidden rounded-none bg-neutral-950 ${
                  isActive
                    ? "grow-[4.5] sm:grow-[5] md:grow-[5.5] opacity-100 shadow-2xl z-10"
                    : "grow opacity-75 md:hover:opacity-100 md:hover:scale-[1.01] z-0"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-label={`${indexLabel} ${item.title}`}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={clearHoverTimer}
                  onClick={() => handleSelect(idx)}
                  className="relative w-full h-full block text-left cursor-pointer rounded-none focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#f54545]"
                >
                  {/* Full-bleed background photo */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="eager"
                    sizes="(max-width: 767px) 100vw, 55vw"
                    className={`focus-slice-image object-cover object-center pointer-events-none ${
                      isActive
                        ? "scale-100 brightness-100"
                        : "scale-105 brightness-90"
                    }`}
                  />

                  {/* Active slice bottom gradient scrim */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to top, rgb(0 0 0 / 0.9), rgb(0 0 0 / 0.4), transparent)",
                    }}
                  />

                  {/* Collapsed slice flat overlay */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
                      isActive
                        ? "opacity-0"
                        : "opacity-100 bg-[rgb(0_0_0_/_0.4)] md:group-hover/slice:bg-[rgb(0_0_0_/_0.2)]"
                    }`}
                  />

                  {/* Collapsed slice top-center mono index badge */}
                  <span
                    aria-hidden={isActive}
                    className={`absolute top-3.5 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-mono tracking-widest text-white bg-black/60 backdrop-blur-md rounded-none pointer-events-none transition-opacity duration-200 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {indexLabel}
                  </span>

                  {/* Active slice bottom-left frosted tag, headline & 2-line description */}
                  <div
                    aria-hidden={!isActive}
                    className={`absolute bottom-5 left-5 right-[84px] sm:bottom-7 sm:left-7 sm:right-[96px] overflow-hidden pointer-events-none transition-opacity ${
                      isActive
                        ? "opacity-100 duration-300 delay-150"
                        : "opacity-0 duration-75"
                    }`}
                  >
                    <div className="min-w-[220px] md:min-w-[250px] lg:min-w-[320px] xl:min-w-[420px]">
                      <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-white bg-white/15 backdrop-blur-md border border-white/20 rounded-none mb-2.5">
                        {indexLabel} · {item.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-200 line-clamp-2 leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>

                {/* Active slice bottom-right square 52x52 white arrow CTA */}
                <Link
                  href={item.href}
                  tabIndex={isActive ? 0 : -1}
                  aria-hidden={!isActive}
                  aria-label={`Explore ${item.title}`}
                  className={`absolute bottom-5 right-5 sm:bottom-7 sm:right-7 z-20 w-[52px] h-[52px] rounded-none bg-white text-neutral-950 hover:bg-[#f54545] hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
