import Link from "next/link";
import { ArrowUpRight, Activity, Scale, Truck, Car, ShoppingBag, GraduationCap, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const INDUSTRIES_DATA = [
  {
    slug: "healthcare",
    title: "Healthcare & MedTech",
    icon: Activity,
    badge: "HIPAA Compliant",
    desc: "Autonomous clinical chart extraction, EHR integration, diagnostic assistant models, and medical billing reconciliation with zero-retention privacy.",
    useCases: ["Clinical Trial Matching", "Automated Patient Chart Summarization", "EHR/EMR Bi-Directional Sync", "Radiology / Pathology Computer Vision"],
    clientProof: "SmartMedHx (42 Clinics) · Top Health AI",
    color: "from-teal-500/10 to-emerald-500/10",
  },
  {
    slug: "legal",
    title: "Legal & LegalTech",
    icon: Scale,
    badge: "SOC 2 Type II",
    desc: "Sub-second contract analysis, automated discovery, cross-examination timeline reconstruction, and regulatory compliance audit agents.",
    useCases: ["1,000+ Page Deposition Extraction", "Clause Anomaly & Risk Detection", "Contract Lifecyle Automation", "Automated Citation Verification"],
    clientProof: "Medico-Legal AI · Top Corporate Law Pods",
    color: "from-blue-500/10 to-indigo-500/10",
  },
  {
    slug: "logistics",
    title: "Logistics & Warehousing",
    icon: Truck,
    badge: "High Throughput",
    desc: "Real-time route planning, automated 3PL order routing, warehouse slotting optimization, and predictive freight maintenance.",
    useCases: ["Multi-Tenant Inventory Sync", "Predictive Demand & Load Balancing", "Driver Dispatch Agent Orchestration", "Bill of Lading Automated Parsing"],
    clientProof: "Extensiv 3PL Suite (3.2x Acceleration)",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    slug: "automotive",
    title: "Automotive & Fleet Management",
    icon: Car,
    badge: "Edge & Hybrid AI",
    desc: "Heavy-duty truck error code diagnostics, fleet telematics telemetry, predictive repair scheduling, and automated parts ordering.",
    useCases: ["Diagnostic Trouble Code (DTC) RAG Search", "Automated Repair Estimation", "Real-Time Sensor Telemetry", "Heavy Vehicle Schematics OCR"],
    clientProof: "Diesel Laptops (Inc. 5000)",
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    slug: "edtech",
    title: "EdTech & Learning Platforms",
    icon: GraduationCap,
    badge: "Multimodal AI",
    desc: "Personalized adaptive tutoring engines, automated homework grading, voice-interactive language tutors, and curriculum synthesis.",
    useCases: ["Adaptive Student Learning Paths", "Real-Time Voice Speech Assessment", "Automated STEM Problem Solvers", "Curriculum Generator for Teachers"],
    clientProof: "Teacher AI ($5M+ First-Year Revenue)",
    color: "from-red-500/10 to-rose-500/10",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce & Retail",
    icon: ShoppingBag,
    badge: "Conversion Engine",
    desc: "Automated catalog enrichment, dynamic price elasticity modeling, visual similarity search, and automated dropship supplier routing.",
    useCases: ["Autonomous Product Catalog Tagging", "Dynamic Competitor Price Scraping", "Predictive Returns Modeling", "Visual Similarity Search"],
    clientProof: "Sell The Trend · Zendrop",
    color: "from-emerald-500/10 to-cyan-500/10",
  },
  {
    slug: "real-estate",
    title: "Real Estate & PropTech",
    icon: Building2,
    badge: "Data Sovereignty",
    desc: "Automated lease abstraction, property valuation AI models, tenant sentiment analysis, and intelligent underwriting workflows.",
    useCases: ["Lease Agreement Key-Value Extraction", "Automated Valuation Models (AVM)", "Tenant Maintenance Dispatch Agents", "Market Trend Forecasting"],
    clientProof: "Commercial PropTech Platforms",
    color: "from-slate-500/10 to-neutral-500/10",
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      <PageHeader
        badge="Target Verticals"
        title="Eight Industry Verticals. One Production"
        highlightText="Partner."
        description="We tailor AI models and software engineering to the exact regulatory constraints, data formats, and workflow mechanics of your specific industry."
        breadcrumbs={[{ label: "Industries" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.slug}
                className={`rounded-3xl p-8 sm:p-10 border border-neutral-200 bg-gradient-to-br ${ind.color} hover-card-elevate flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-2xl bg-white shadow-xs border border-neutral-200 text-[#f54545] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-neutral-800 border border-neutral-200">
                      {ind.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-neutral-900">
                    {ind.title}
                  </h2>

                  <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                    {ind.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-200/60">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold block mb-3">
                      High-Impact Workflows
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ind.useCases.map((uc, i) => (
                        <li key={i} className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                          <span className="size-1 rounded-full bg-[#f54545]" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 p-3 rounded-xl bg-white/90 border border-neutral-200/80">
                    <span className="text-[11px] text-neutral-500 block">Demonstrated Proof:</span>
                    <span className="text-xs font-bold text-neutral-900">{ind.clientProof}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200/60 flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#f54545] hover:text-[#a50e19] transition-colors"
                  >
                    <span>Explore {ind.title} Case Studies</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compliance Callout */}
      <section className="py-16 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Compliance Compromise</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Operating in a Heavily Regulated Industry?
            </h3>
            <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
              We execute Business Associate Agreements (BAA), deploy private VPC clusters with zero telemetry, and deliver full audit logs ready for your compliance officer.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-full bg-[#f54545] text-white text-sm font-bold hover:bg-[#e03535] transition-all btn-glow-breath shrink-0 flex items-center gap-2"
          >
            <span>Request Compliance Packet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
