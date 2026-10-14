import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const ARTICLES = [
  {
    slug: "multi-layer-pcb-reverse-engineering",
    title: "Multi-Layer PCB Reverse Engineering: Micro-Sectioning & Netlist Extraction",
    category: "Hardware Forensics",
    readTime: "7 min read",
    date: "June 2026",
    summary:
      "A deep architectural dive into non-destructive X-ray mapping, substrate de-layering, micron-level optical scanning, and regenerating 100% accurate Altium schematics from obsolete hardware.",
    tags: ["PCB Reverse Engineering", "Altium", "Micro-Sectioning"],
  },
  {
    slug: "dds-vs-vco-jamming",
    title: "Direct Digital Synthesis (DDS) vs VCO in Tactical Countermeasures",
    category: "RF & Countermeasures",
    readTime: "8 min read",
    date: "May 2026",
    summary:
      "Comparing analog voltage-controlled oscillators against FPGA-driven Direct Digital Synthesis frequency sweepers in mission-critical perimeter protection.",
    tags: ["DDS", "RF Systems", "FPGA"],
  },
  {
    slug: "ipc-a-610-class-3-standards",
    title: "IPC-A-610 Class 3 Standards for Defense & Aerospace Electronics",
    category: "Manufacturing Standards",
    readTime: "6 min read",
    date: "April 2026",
    summary:
      "Why Class 3 soldering, barrel fill criteria, and conformal coating are mandatory for electronics operating under extreme vibration and desert thermal stress.",
    tags: ["IPC Class 3", "Quality Assurance", "Soldering"],
  },
  {
    slug: "component-decoding-obsolete-ics",
    title: "Component Decoding & Silicon Decapsulation for Obsolete ICs",
    category: "IC Identification",
    readTime: "6 min read",
    date: "March 2026",
    summary:
      "Techniques for identifying sanded part numbers and proprietary ASICs using V-I curve signature analysis and chemical die decapsulation.",
    tags: ["IC Forensics", "Die Decapsulation", "Curve Tracing"],
  },
  {
    slug: "thermal-management-rf-amplifiers",
    title: "Thermal Management in High-Power GaN RF Power Amplifiers",
    category: "RF Engineering",
    readTime: "7 min read",
    date: "February 2026",
    summary:
      "Optimizing thermal conduction pathways, heat pipe integration, and finned aluminum heatsink design for 50W+ continuous RF transmission in 55°C ambient.",
    tags: ["RF Power Amplifiers", "Thermal Design", "GaN Transistors"],
  },
  {
    slug: "indigenous-defense-rd-lifecycle",
    title: "Indigenous Defense Hardware R&D: Overcoming Foreign OEM Obsolescence",
    category: "Sovereign Engineering",
    readTime: "9 min read",
    date: "January 2026",
    summary:
      "How local turnkey Original Design Manufacturing (ODM) provides strategic self-reliance and guarantees form-fit-function replacement for legacy systems.",
    tags: ["Sovereign R&D", "ODM", "Lifecycle Support"],
  },
];

export default function BlogsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        badge="Engineering Publications"
        title="Technical Papers & Hardware Research"
        highlightText="Articles."
        description="Deep engineering breakdowns, reverse-engineering methodology, and RF countermeasure benchmarks authored by Haalar Services' Islamabad R&D team."
        breadcrumbs={[{ label: "Insights" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((art) => (
            <article
              key={art.slug}
              className="bg-white rounded-3xl p-8 border border-neutral-200 hover-card-elevate flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                  <span className="font-mono font-bold uppercase text-[#f54545]">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-neutral-900 hover:text-[#f54545] transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-neutral-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  {art.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {art.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-400">{art.date}</span>
                <Link
                  href={`/blogs/${art.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#f54545] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
