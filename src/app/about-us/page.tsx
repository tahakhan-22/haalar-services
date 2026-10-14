import Link from "next/link";
import { ShieldCheck, Star, Award, MapPin, ArrowRight, Cpu, Radio, Wrench } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const PRINCIPLES = [
  {
    title: "Disrupt · Defend · Dominate",
    desc: "We develop indigenous, high-reliability electronic systems designed to outperform foreign dependency while delivering unmatched operational durability.",
  },
  {
    title: "Precision Reverse Engineering",
    desc: "When original OEM blueprints are lost, our de-layering and optical analysis benches reconstruct complete schematics, netlists, and component decoding.",
  },
  {
    title: "IPC-A-610 Military Compliance",
    desc: "From component placement to thermal mechanical enclosures, our manufacturing lines adhere strictly to military-grade IPC standards.",
  },
  {
    title: "Concept-to-Deployment ODM",
    desc: "All our clients need to bring is an operational requirement. We manage electronic design, multi-layer layout, firmware, and pilot fabrication.",
  },
];

const FACILITIES = [
  {
    title: "Islamabad R&D & Manufacturing HQ",
    address: "Plot No. 261, Humak Industrial Estate, Kahuta Road, Islamabad",
    focus: "PCB Reverse Engineering, SMT Assembly & RF Microwave Testing",
  },
  {
    title: "Precision Mechanical & CNC Lab",
    address: "Humak Industrial Complex, Islamabad",
    focus: "Mil-Grade Heat-Dissipating Enclosures & Directional Antenna Masts",
  },
  {
    title: "RF & High-Frequency Testing Range",
    address: "Islamabad Technical Facility",
    focus: "GHz Spectrum Analysis, DDS Signal Sweepers & Countermeasure Evals",
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        badge="About Haalar Services"
        title="Disrupt · Defend · Dominate — Next-Gen"
        highlightText="Hardware & Electronics."
        description="We are specialized in providing reliable and trusted next-generation hardware and software solutions using latest innovation technologies."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Story & Mission Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Company Mission & Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Indigenous Innovation for Defense, Aerospace &amp; Industrial Systems
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              <strong>Haalar Services</strong> is a premier engineering and manufacturing firm headquartered in the Humak Industrial Estate, Islamabad. Our mission is to provide indigenous and cost-effective hardware, electronic modules, and firmware solutions to the defense, aerospace, logistics, and critical security markets.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed">
              Our multidisciplinary engineering team combines electrical engineers, mechanical designers, and embedded software architects. We bridge the gap between initial ideation and turnkey production, executing advanced <strong>Original Design Manufacturing (ODM)</strong>, <strong>Original Equipment Manufacturing (OEM)</strong>, and multi-layer <strong>PCB reverse engineering</strong> under strict IPC standards.
            </p>

            <div className="pt-4 flex flex-wrap gap-6 border-t border-neutral-100">
              <div>
                <span className="text-3xl font-extrabold text-neutral-900">IPC-A-610</span>
                <p className="text-xs text-neutral-500 font-semibold mt-0.5">Manufacturing Standard</p>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-[#f54545]">100%</span>
                <p className="text-xs text-neutral-500 font-semibold mt-0.5">Indigenous Capability</p>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-neutral-900">40+</span>
                <p className="text-xs text-neutral-500 font-semibold mt-0.5">Electronic Systems Shipped</p>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-neutral-900">Plot 261</span>
                <p className="text-xs text-neutral-500 font-semibold mt-0.5">Humak Industrial Estate</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-neutral-950 text-white p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#f54545]" />
              <h3 className="text-lg font-bold text-white">Military & Industrial Quality Objective</h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              &quot;Our company quality objective is to deliver products and services of uncompromised reliability through continuous quality improvement based on our mission to provide indigenous, field-proven solutions to strategic sectors.&quot;
            </p>
            <div className="border-t border-neutral-800 pt-4 flex items-center justify-between text-xs text-neutral-400">
              <span>Standard Compliance</span>
              <span className="text-white font-bold">IPC Class 3 & Mil-Spec Mechanicals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Engineering Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-2">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-2xs">
                <span className="text-xs font-mono font-bold text-[#f54545] block mb-3">0{i + 1}</span>
                <h3 className="font-bold text-neutral-900 text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Address */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
            Engineering Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-2">
            R&D, Testing & Manufacturing Centers
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3">
            Operating from the Humak Industrial Estate in Islamabad with dedicated laboratories for reverse engineering, RF testing, and assembly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FACILITIES.map((fac, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-neutral-200 hover:border-[#f54545]/40 transition-colors bg-white">
              <div className="flex items-center gap-2 mb-2 text-[#f54545]">
                <MapPin className="w-4 h-4" />
                <h3 className="font-bold text-neutral-900 text-base">{fac.title}</h3>
              </div>
              <p className="text-xs font-semibold text-neutral-500">{fac.address}</p>
              <p className="text-xs text-neutral-600 mt-3 pt-3 border-t border-neutral-100">{fac.focus}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
