"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const PORTFOLIO_ITEMS = [
  {
    slug: "alpha-fire-pak-1",
    title: "Alpha Fire Handheld Jammer PAK-1",
    category: "Defense & Counter-UAS",
    metric: "90m+",
    metricLabel: "Effective Jamming Radius",
    client: "Defense & Strategic Units",
    summary:
      "Compact, battery-operated multi-frequency handheld defense countermeasure with directional antenna array, two spot frequencies, and 2-hour continuous runtime.",
    tags: ["RF Countermeasures", "Handheld", "Two Spot Frequencies", "Directional Array"],
    bgClass: "from-red-500/10 to-neutral-900/40",
  },
  {
    slug: "stos-dds-jammer",
    title: "STOS Direct Digital Synthesis (DDS) Jammer",
    category: "RF & Electronic Systems",
    metric: "70m",
    metricLabel: "Radius Coverage",
    client: "Strategic Installation Security",
    summary:
      "Advanced DDS multi-channel frequency sweeping countermeasure module with 12V DC input, sweep -25MHz, and precision dual-antenna RF transmission.",
    tags: ["Direct Digital Synthesis", "Sweep -25MHz", "Dual Antenna", "12V Battery"],
    bgClass: "from-blue-500/10 to-neutral-900/40",
  },
  {
    slug: "alpha-fire-vehicle-mount",
    title: "Alpha Fire Vehicle Mount Station",
    category: "Mobile Tactical",
    metric: "200m+",
    metricLabel: "Protection Perimeter",
    client: "VIP Escort & Tactical Convoy",
    summary:
      "High-power tactical vehicle-mounted electronic countermeasure station engineered for convoy perimeter defense with wideband multi-frequency suppression.",
    tags: ["Vehicle Mount", "Tactical Mobile", "High-Power PA", "Convoy Defense"],
    bgClass: "from-amber-500/10 to-neutral-900/40",
  },
  {
    slug: "green-arrow-ism",
    title: "Green Arrow (ISM Band) Module",
    category: "RF & Electronic Systems",
    metric: "2.4 GHz",
    metricLabel: "ISM Frequency Band",
    client: "Perimeter Frequency Mitigation",
    summary:
      "Specialized ISM band jamming module (2400-2520 MHz) with configurable bandwidth, 80m disruption radius, active/reactive modes, and high-efficiency heat sink.",
    tags: ["2400-2520 MHz", "ISM Band", "Active/Reactive", "VCO"],
    bgClass: "from-emerald-500/10 to-neutral-900/40",
  },
  {
    slug: "green-arrow-100-101",
    title: "Green Arrow 100 / 101 Jammer Modules",
    category: "RF & Electronic Systems",
    metric: "50W+",
    metricLabel: "RF Output Power",
    client: "Tactical Defense Formations",
    summary:
      "Modular high-power RF disruption units engineered for wideband VHF/UHF suppression, equipped with automatic thermal shutdown and VSWR mismatch protection.",
    tags: ["VHF/UHF", "High Power PA", "VSWR Protection", "Modular Rack"],
    bgClass: "from-purple-500/10 to-neutral-900/40",
  },
  {
    slug: "jammer-testing-device",
    title: "Jammer Testing & Validation Device",
    category: "Diagnostic Hardware",
    metric: "100%",
    metricLabel: "Bench Calibration Accuracy",
    client: "Field Maintenance Depots",
    summary:
      "Portable diagnostic and calibration test set enabling field engineers to verify RF power output, frequency accuracy, and harmonic integrity across jammer modules.",
    tags: ["Bench Diagnostics", "RF Power Metering", "Field Calibration", "Handheld"],
    bgClass: "from-rose-500/10 to-neutral-900/40",
  },
];

const CATEGORIES = ["All", "Defense & Counter-UAS", "RF & Electronic Systems", "Mobile Tactical", "Diagnostic Hardware"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-white">
      <PageHeader
        badge="Hardware & Systems"
        title="Tactical Products & Deployed"
        highlightText="Systems."
        description="Explore advanced electronic warfare countermeasures, Direct Digital Synthesis (DDS) modules, and precision diagnostic hardware indigenously engineered by Haalar Services."
        breadcrumbs={[{ label: "Products & Portfolio" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#f54545] text-white shadow-md shadow-red-500/20"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.slug}
              className={`rounded-3xl p-8 border border-neutral-200 bg-gradient-to-br ${item.bgClass} hover-card-elevate flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-800 bg-white px-2.5 py-0.5 rounded-full border border-neutral-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Field Verified</span>
                  </div>
                </div>

                <div className="my-3">
                  <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950">
                    {item.metric}
                  </div>
                  <span className="text-xs font-bold text-[#f54545] uppercase tracking-wide">
                    {item.metricLabel}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mt-3">
                  {item.title}
                </h3>
                <span className="text-xs text-neutral-500 font-medium block mt-0.5">
                  Deployment: {item.client}
                </span>

                <p className="text-neutral-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  {item.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {item.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/80 text-neutral-700 border border-neutral-200/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60">
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 hover:text-[#f54545] transition-colors"
                >
                  <span>View Technical Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
