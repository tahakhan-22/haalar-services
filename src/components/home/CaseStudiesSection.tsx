import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { CASE_STUDIES } from "@/data/siteData";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Production Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-3 tracking-tight">
              See How These Services <br />
              <span className="text-[#f54545]">Run in Production.</span>
            </h2>
            <p className="text-neutral-600 mt-3 text-base max-w-xl">
              Real metrics, real client deployments, and real production outcomes shipped across 25+ industries.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors self-start md:self-auto"
          >
            <span>Browse All 25 Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 sm:p-10 border border-neutral-200/80 bg-gradient-to-br ${study.bgClass} hover-card-elevate flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase font-mono tracking-wider font-bold text-neutral-500">
                    {study.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-xs border border-neutral-200">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-xs font-bold text-neutral-900">
                      Verified Impact
                    </span>
                  </div>
                </div>

                {/* Big Metric Display */}
                <div className="my-4">
                  <div className="text-4xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight">
                    {study.metric}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#f54545] uppercase tracking-wide">
                    {study.metricLabel}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mt-4">
                  {study.title}
                </h3>

                <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                  {study.summary}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {study.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/80 text-neutral-700 border border-neutral-200/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200/60">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-neutral-900 hover:text-[#f54545] transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
