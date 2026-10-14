"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { PROBLEM_MATRIX } from "@/data/siteData";

export default function ProblemMatrix() {
  const [activeTab, setActiveTab] = useState(PROBLEM_MATRIX[0].id);

  const current = PROBLEM_MATRIX.find((p) => p.id === activeTab) || PROBLEM_MATRIX[0];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
            Root Cause Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-3 tracking-tight">
            Most Problems We Fix Follow The Same Arc
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            Select the friction point your organization is currently facing to see how we architect the solution from day one.
          </p>
        </div>

        {/* Tab Buttons Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {PROBLEM_MATRIX.map((item) => {
            const isSelected = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#f54545] text-white shadow-md shadow-red-500/25 scale-102"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900"
                }`}
              >
                {item.tab}
              </button>
            );
          })}
        </div>

        {/* Solution Card Presentation */}
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-900 shadow-2xl relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f54545]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-[#f54545] text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>The Challenge Arc: {current.tab}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {current.headline}
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#f54545] text-white text-sm font-bold hover:bg-[#e03535] transition-all btn-glow-breath"
                >
                  <span>{current.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Deliverables Checklist */}
            <div className="lg:col-span-5 bg-neutral-900/90 rounded-2xl p-6 sm:p-8 border border-neutral-800">
              <span className="text-xs uppercase tracking-wider font-mono text-neutral-400 font-bold block mb-4">
                What Haalar Delivers
              </span>
              <ul className="space-y-4">
                {current.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-neutral-200">
                      {del}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
