"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const PORTFOLIO_ITEMS = [
  {
    slug: "drone-jammer-handheld",
    title: "Drone Jammer (Handheld Tactical Rifle)",
    category: "Defense & National Security",
    metric: "1,500m",
    metricLabel: "Directional Jamming Range",
    client: "Rapid Deployment Infantry Units",
    summary:
      "Complete handheld counter-UAS directional rifle with 6 spot frequencies, precision optical scope, dual hot-swappable batteries, rapid charger, and 2-hour continuous battery life.",
    tags: ["6 Spot Frequencies", "Directional Array", "Optical Scope", "Dual Li-Ion Packs", "IP65 Ruggedized"],
    bgClass: "from-red-500/10 to-neutral-900/40",
  },
  {
    slug: "drone-jammer-static",
    title: "Drone Jammer Static Perimeter Base Station",
    category: "Defense & National Security",
    metric: "3 km",
    metricLabel: "Perimeter Exclusion Range",
    client: "Critical Strategic Facilities Command",
    summary:
      "Heavy-duty perimeter countermeasure base station with 4-5 frequency bands, AC main power input, and 30 Watts high-gain RF output power per band for permanent facility denial.",
    tags: ["3 km Range", "4-5 Frequency Bands", "30W RF Output / Band", "AC Powered", "IP67 Weatherproof"],
    bgClass: "from-orange-500/10 to-neutral-900/40",
  },
  {
    slug: "alpha-fire-pak-1",
    title: "Alpha Fire Handheld Jammer PAK-1",
    category: "Defense & National Security",
    metric: "90m",
    metricLabel: "Jamming Radius",
    client: "Defense & Strategic Units",
    summary:
      "Compact, battery-operated multi-frequency handheld defense countermeasure with two spot frequencies, directional antenna array, and 2-hour runtime.",
    tags: ["Two Spot Frequencies", "90m Radius", "1x Antenna", "2h Battery Life"],
    bgClass: "from-red-500/10 to-neutral-900/40",
  },
  {
    slug: "stos-dds-jammer",
    title: "STOS Direct Digital Synthesis (DDS) Jammer",
    category: "RF & Electronic Systems",
    metric: "70m",
    metricLabel: "Spherical Protection Bubble",
    client: "Border Defense & Communication Depots",
    summary:
      "Advanced Direct Digital Synthesis frequency sweeping countermeasure module with -25MHz sweep window, 2 spot frequencies, dual antennas, and 12V battery operation.",
    tags: ["Direct Digital Synthesis", "Sweep -25MHz", "Dual Antenna Array", "12V Battery Power", "Zero Phase Drift"],
    bgClass: "from-blue-500/10 to-neutral-900/40",
  },
  {
    slug: "alpha-fire-vehicle-mount",
    title: "Alpha Fire Vehicle Mount VIP Convoy Shield",
    category: "Tactical Mobility",
    metric: "200m+",
    metricLabel: "Convoy Protection Perimeter",
    client: "VIP Escort & Convoy Security Directorate",
    summary:
      "High-power vehicle-mounted tactical countermeasure station engineered for convoy perimeter defense with 12V vehicle alternator feed and mil-spec vibration dampening.",
    tags: ["Vehicle Alternator 12V", "Wideband GaN PAs", "Mil-Spec Shock Mount", "Omni Antenna Mast", "Convoy Defense"],
    bgClass: "from-amber-500/10 to-neutral-900/40",
  },
  {
    slug: "green-arrow-ism",
    title: "Green Arrow (ISM Band) Module",
    category: "RF & Electronic Systems",
    metric: "2.4 GHz",
    metricLabel: "2400-2520 MHz ISM Band",
    client: "Perimeter Frequency Mitigation",
    summary:
      "Specialized ISM band jamming module (2400-2520 MHz) with configurable bandwidth, 80m disruption radius, 12V DC input, and alloy heat sink.",
    tags: ["2400-2520 MHz", "80m Jamming Radius", "12V Battery", "Customizable Band"],
    bgClass: "from-emerald-500/10 to-neutral-900/40",
  },
  {
    slug: "green-arrow-100-101",
    title: "Green Arrow 100 / 101 Jammer Modules",
    category: "RF & Electronic Systems",
    metric: "20-500 MHz",
    metricLabel: "3 Discrete Bands + GSM/LTE",
    summary:
      "Modular triple-band RF suppression system (20-100MHz, 100-200MHz, 200-500MHz) with GSM (2G/3G/4G/LTE) and ISM (2400-2550MHz) active/reactive coverage.",
    tags: ["20-500 MHz", "3 Discrete Bands", "GSM & LTE", "ISM Band", "Active & Reactive"],
    bgClass: "from-purple-500/10 to-neutral-900/40",
  },
  {
    slug: "digital-directional-finder",
    title: "Digital Directional Finder (DF)",
    category: "Aerospace & Avionics",
    metric: "5 km",
    metricLabel: "DF Radius Coverage",
    client: "Signal Intelligence & Tracking",
    summary:
      "Tactical direction finding system for VHF & UHF frequencies with omni-directional antenna array and AC power for hostile RF localization.",
    tags: ["5 km DF Radius", "Omni Antennas", "AC Power", "VHF & UHF"],
    bgClass: "from-cyan-500/10 to-neutral-900/40",
  },
  {
    slug: "jammer-testing-device",
    title: "Jammer Testing & Validation Device",
    category: "Industrial OEM",
    metric: "20-500 MHz",
    metricLabel: "Programmable Diagnostic Set",
    summary:
      "Precision test set with 1x transmitter and 1x receiver covering 20-500 MHz and 2400-2520 MHz with 25m test separation and 2-hour battery.",
    tags: ["1x TX + 1x RX", "20-500 MHz", "ISM 2400-2520 MHz", "2h Battery"],
    bgClass: "from-rose-500/10 to-neutral-900/40",
  },
];

const CATEGORIES = [
  "All",
  "Defense & National Security",
  "RF & Electronic Systems",
  "Aerospace & Avionics",
  "Industrial OEM",
  "Tactical Mobility",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-white">
      <PageHeader
        badge="Tactical Products & Hardware"
        title="Deployed Products & Electronic"
        highlightText="Systems."
        description="Explore 40+ advanced electronic systems and mission-critical hardware engineered and deployed by Haalar Services across defense, aerospace, telecommunications, and industrial sectors."
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
                  Client: {item.client}
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

              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 hover:text-[#f54545] transition-colors"
                >
                  <span>View Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact-us"
                  className="text-xs font-bold text-[#f54545] hover:text-[#a50e19] transition-colors"
                >
                  Request Technical Architecture Brief
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
