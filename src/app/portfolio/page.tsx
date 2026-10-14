"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const PORTFOLIO_ITEMS = [
  {
    title: "Teacher AI",
    category: "EdTech",
    metric: "$5M+",
    metricLabel: "First-Year Revenue",
    client: "Teacher AI Inc.",
    summary:
      "Engineered an autonomous multimodal tutoring engine with personalized speech synthesis, real-time assessment scoring, and custom fine-tuned math models.",
    tags: ["Next.js 15", "Python", "FastAPI", "OpenAI Fine-Tuning", "CloudFront"],
    bgClass: "from-amber-500/10 to-red-500/10",
  },
  {
    title: "SmartMedHx & Medico-Legal AI",
    category: "Healthcare",
    metric: "42",
    metricLabel: "Active Providers & Clinics",
    client: "SmartMedHx Network",
    summary:
      "HIPAA-compliant autonomous clinical chart extraction and legal cross-examination timeline generation from 1,000+ page medical records.",
    tags: ["HIPAA Compliant", "Multi-Agent System", "SOC 2 Type II", "LangGraph"],
    bgClass: "from-teal-500/10 to-cyan-500/10",
  },
  {
    title: "Diesel Laptops Diagnostic AI",
    category: "Automotive",
    metric: "68%",
    metricLabel: "Faster Diagnostic Resolution",
    client: "Diesel Laptops (Inc. 5000)",
    summary:
      "Enterprise diagnostic search engine parsing millions of heavy-duty truck error codes, schematics, and mechanical repair work orders.",
    tags: ["Hybrid RAG", "Computer Vision", "Self-Hosted LLMs", "AWS Bedrock"],
    bgClass: "from-blue-500/10 to-indigo-500/10",
  },
  {
    title: "Extensiv Warehouse Automation",
    category: "Logistics",
    metric: "3.2x",
    metricLabel: "Throughput Acceleration",
    client: "Extensiv 3PL Suite",
    summary:
      "Multi-tenant inventory reconciliation and automated 3PL order routing across distributed fulfillment facilities with zero manual intervention.",
    tags: ["Microservices", "Event-Driven", "Tailwind CSS", "PostgreSQL"],
    bgClass: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Zendrop Global Fulfillment AI",
    category: "Logistics",
    metric: "99.8%",
    metricLabel: "Fulfillment Accuracy",
    client: "Zendrop E-Commerce",
    summary:
      "Automated dropshipping supply chain routing, inventory sync, and intelligent price elasticity estimation engine.",
    tags: ["FastAPI", "React", "Redis", "Celery", "PostgreSQL"],
    bgClass: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Sell The Trend SaaS Modernization",
    category: "E-Commerce",
    metric: "4.8★",
    metricLabel: "App Store Rating",
    client: "Sell The Trend",
    summary:
      "End-to-end frontend and backend rebuild of the industry's leading viral e-commerce product discovery suite.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    bgClass: "from-red-500/10 to-orange-500/10",
  },
];

const CATEGORIES = ["All", "Healthcare", "EdTech", "Automotive", "Logistics", "E-Commerce"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-white">
      <PageHeader
        badge="Case Studies"
        title="Production Systems & Measurable"
        highlightText="Outcomes."
        description="Explore 25+ real-world products engineered and shipped by Kodexo Labs across regulated industries and growth-stage platforms."
        breadcrumbs={[{ label: "Portfolio" }]}
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
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border border-neutral-200 bg-gradient-to-br ${item.bgClass} hover-card-elevate flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-800 bg-white px-2.5 py-0.5 rounded-full border border-neutral-200">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
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

              <div className="mt-6 pt-4 border-t border-neutral-200/60">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 hover:text-[#f54545] transition-colors"
                >
                  <span>Request Technical Architecture Brief</span>
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
