"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { HAALAR_PRODUCTS, PRODUCT_CATEGORIES } from "@/data/productsData";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? HAALAR_PRODUCTS
      : HAALAR_PRODUCTS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-transparent">
      <PageHeader
        badge="Haalar Products & Hardware"
        title="Deployed Products & Electronic"
        highlightText="Systems."
        description="Explore indigenous EW jammers, counter-UAS detectors & anti-drone guns, SDR digital direction finders, jammer testing devices, decoy systems, GPS anti-jamming, and swarm GCS hardware by Haalar Services."
        breadcrumbs={[{ label: "Products & Portfolio" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {PRODUCT_CATEGORIES.map((cat) => (
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
