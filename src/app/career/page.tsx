import Link from "next/link";
import { ArrowUpRight, Cpu, Radio, Shield, Award, ArrowRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const ROLES = [
  {
    title: "Senior RF & Microwave Systems Engineer",
    department: "RF & Countermeasure Systems",
    location: "Islamabad (Humak Facility)",
    type: "Full-Time",
    stack: ["Keysight Analyzers", "GaN PAs", "Direct Digital Synthesis", "MATLAB", "Altium"],
    desc: "Design, simulate, and calibrate high-power RF amplifier stages, Direct Digital Synthesis (DDS) sweepers, and tactical countermeasure antennas across VHF, UHF, and ISM bands.",
  },
  {
    title: "Senior PCB Reverse Engineering Specialist",
    department: "Hardware Forensics & EDA",
    location: "Islamabad (Humak Facility)",
    type: "Full-Time",
    stack: ["Altium Designer", "Substrate De-Layering", "Netlist Extraction", "Curve Tracing"],
    desc: "Perform microscopic de-layering of multi-layer circuit boards, extract complete electrical netlists, decode proprietary silicon, and regenerate production-grade Altium schematics.",
  },
  {
    title: "Embedded Firmware & DSP Engineer",
    department: "Firmware & Digital Control",
    location: "Islamabad (Humak Facility)",
    type: "Full-Time",
    stack: ["C / Modern C++", "FreeRTOS", "ARM Cortex-M", "FPGA", "DSP Filtering"],
    desc: "Engineer hard real-time bare-metal and FreeRTOS firmware for countermeasure modulators, sensor telemetry interfaces, and DDS frequency control loops with microsecond determinism.",
  },
  {
    title: "IPC-A-610 Class 3 Assembly & Quality Inspector",
    department: "OEM Manufacturing & Quality",
    location: "Islamabad (Humak Facility)",
    type: "Full-Time",
    stack: ["IPC-A-610 Class 3", "SMD Assembly", "BGA Micro-Rework", "Conformal Coating"],
    desc: "Lead high-reliability SMD assembly operations, inspect micro-solder joints to aerospace/military standards, and execute environmental thermal/vibration stress qualifications.",
  },
];

const PERKS = [
  { title: "Advanced EDA & RF Testbench", desc: "Access high-end Keysight/Rohde & Schwarz spectrum analyzers, automated pick-and-place lines, and PCB de-layering labs." },
  { title: "Indigenous Sovereign R&D", desc: "Build strategic electronic systems and countermeasures with full engineering autonomy and direct national impact." },
  { title: "IPC-A-610 Class 3 Certification", desc: "Formal sponsorship and continuous professional training in military and aerospace soldering and quality inspection." },
  { title: "Islamabad Engineering Facility", desc: "Modern hardware laboratory and production benches located at Plot No. 261, Humak Industrial Estate, Kahuta Road." },
];

export default function CareerPage() {
  return (
    <div className="bg-white">
      <PageHeader
        badge="Join Haalar Engineering"
        title="Engineer the Next Generation of Defense &"
        highlightText="Electronic Systems."
        description="We are a team of hardware architects, RF engineers, and reverse-engineering specialists who design and manufacture critical electronic systems. Explore our open roles."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Perks Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Engineering Environment
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
              Why Engineers Choose Haalar Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <span className="text-xs font-mono font-bold text-[#f54545] block mb-2">0{i + 1}</span>
                <h3 className="font-bold text-neutral-900 text-base mb-1.5">{p.title}</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions List */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                Open Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
                Featured Hardware & Engineering Roles
              </h2>
            </div>
            <span className="text-xs font-bold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full">
              4 Roles Available · Islamabad Facility
            </span>
          </div>

          <div className="space-y-6">
            {ROLES.map((role, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-neutral-200 hover-card-elevate flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase text-[#f54545] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {role.department}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-500 font-medium">{role.location}</span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-500 font-medium">{role.type}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    {role.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {role.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {role.stack.map((s, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white text-xs font-bold hover:bg-[#f54545] transition-colors"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
