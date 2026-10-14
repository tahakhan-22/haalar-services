import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Radio, Shield, Wrench, Search, Zap, Check, Settings, Terminal } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const ALL_SERVICES = [
  {
    slug: "odm-manufacturing",
    title: "Original Design Manufacturing (ODM)",
    icon: Zap,
    category: "Turnkey Product",
    desc: "Complete concept-to-deployment engineering. You bring the operational requirement or idea; our engineering team formulates technical specifications, multi-layer schematics, firmware, CNC casing, and pilot production.",
    capabilities: [
      "Product Specification Document (PSD) & System Architecture",
      "High-density multi-layer PCB design & routing (Altium)",
      "Hard real-time embedded firmware development (C/C++)",
      "Mil-grade CNC aluminum enclosures & environmental testing",
    ],
    deliverable: "Turnkey functional hardware prototype and pilot batch",
  },
  {
    slug: "oem-production",
    title: "Original Equipment Manufacturing (OEM)",
    icon: Cpu,
    category: "Precision Assembly",
    desc: "High-precision electronic module production and assembly built to strict IPC-A-610 Class 3 specifications for mission-critical defense, aerospace, and harsh industrial environments.",
    capabilities: [
      "SMD & through-hole high-reliability assembly",
      "IPC-A-610 Class 3 certified soldering & inspection",
      "Automated optical & in-circuit functional testing",
      "Environmental conformal coating for moisture/dust resistance",
    ],
    deliverable: "Batch-manufactured electronic assemblies with Certificates of Conformance",
  },
  {
    slug: "pcb-reverse-engineering",
    title: "Reverse Engineering of PCBs",
    icon: Search,
    category: "Hardware Forensics",
    desc: "Drop-in form-fit-function replacement boards when original vendor schematics are lost or obsolete. We de-layer multi-layer PCBs, extract complete netlists, decode components, and regenerate Altium schematics.",
    capabilities: [
      "Multi-layer PCB micro-sectioning and X-ray de-layering",
      "100% accurate schematic & netlist extraction",
      "Pin-compatible modern component substitution",
      "Functional benchtop validation against original signals",
    ],
    deliverable: "Production-ready Gerber files, BOM, and modern prototype board",
  },
  {
    slug: "rf-microwave-systems",
    title: "RF & Microwave Engineering",
    icon: Radio,
    category: "RF & Electronic Systems",
    desc: "Design and production of high-performance RF modules, wideband power amplifiers, Direct Digital Synthesis (DDS) sweepers, and electronic countermeasures across HF, VHF, UHF, and ISM bands.",
    capabilities: [
      "Custom high-efficiency RF power amplifiers (PA)",
      "Direct Digital Synthesis (DDS) & VCO/PLL frequency sweepers",
      "Directional antenna arrays & impedance matching networks",
      "GHz spectrum analysis and harmonic suppression filtering",
    ],
    deliverable: "Tuned RF module with calibrated spectrum analyzer certification",
  },
  {
    slug: "embedded-firmware",
    title: "Embedded Software & Firmware",
    icon: Terminal,
    category: "Low-Level Systems",
    desc: "Hard real-time embedded software engineered with deterministic execution. Bare-metal microcontrollers, DSP signal processing, FreeRTOS, and hardware-software control loops with zero latency jitter.",
    capabilities: [
      "Bare-metal C/C++ firmware & FreeRTOS kernels",
      "Hardware Abstraction Layers (HAL) for custom silicon",
      "Digital Signal Processing (DSP) modulation algorithms",
      "Encrypted bootloader & field-upgradable firmware architecture",
    ],
    deliverable: "Tested firmware binary, source code repository, and API docs",
  },
  {
    slug: "research-development",
    title: "Research & Development (R&D)",
    icon: Settings,
    category: "Indigenous Defense R&D",
    desc: "Sovereign research and engineering for strategic electronic systems. From theoretical propagation modeling and thermal dissipation simulation to indigenous hardware prototyping.",
    capabilities: [
      "MATLAB & Simulink signal processing simulation",
      "Thermal dynamics & RF heat sink CFD modeling",
      "Rapid hardware bench prototyping in Islamabad lab",
      "Air-gapped development and strict NDA confidentiality",
    ],
    deliverable: "Complete technical feasibility report & validated bench prototype",
  },
  {
    slug: "legacy-modernization",
    title: "Legacy System Modernization & Repair",
    icon: Wrench,
    category: "Lifecycle Support",
    desc: "Component-level failure analysis, micro-soldering, and redesign for mission-critical industrial controllers and strategic electronic systems declared obsolete by foreign OEMs.",
    capabilities: [
      "Component-level fault isolation & signal tracing",
      "BGA rework, micro-soldering, and trace reconstruction",
      "Modern form-fit-function sub-assembly upgrades",
      "Extended service life assurance with warranty SLAs",
    ],
    deliverable: "Certified repaired or modernized unit with test report",
  },
  {
    slug: "component-decoding",
    title: "Component Decoding & Schematics",
    icon: Layers,
    category: "IC Identification",
    desc: "Identification and obsolescence resolution for unmarked, sanded, or proprietary integrated circuits. We trace pinouts, reconstruct internal logic, and locate pin-compatible replacements.",
    capabilities: [
      "Silicon decapsulation & die microscopy analysis",
      "Unmarked IC pinout & voltage signature tracing",
      "Obsolescence management & modern alternative sourcing",
      "Complete CAD library symbols and footprint generation",
    ],
    deliverable: "Component identification report with schematic symbol & footprint",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        badge="Engineering Disciplines"
        title="Hardware, RF & Electronics"
        highlightText="Services."
        description="From turnkey Original Design Manufacturing (ODM) to multi-layer PCB reverse engineering and RF electronic countermeasures, explore Haalar Services' core technical capabilities."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Main Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ALL_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.slug}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 hover-card-elevate flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-2xl bg-red-50 text-[#f54545] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-neutral-600">
                      {srv.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-neutral-900">
                    {srv.title}
                  </h2>

                  <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                      Core Engineering Scope
                    </span>
                    <ul className="space-y-2">
                      {srv.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                    <span className="text-[11px] text-neutral-500 block">Deliverable Benchmark:</span>
                    <span className="text-xs font-bold text-neutral-800">{srv.deliverable}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#f54545] hover:text-[#a50e19] transition-colors"
                  >
                    <span>View Specifications & Case Studies</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement Models Banner */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Engineering Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Three Ways to Engage Haalar Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold">01 · Turnkey ODM</span>
              <h3 className="text-xl font-bold text-white mt-2">Concept to Production</h3>
              <p className="text-sm text-neutral-400 mt-2">
                Bring your operational requirements or rough concept. We deliver complete electronic schematics, multi-layer PCBs, firmware, CNC casing, and pilot batches.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-3xl border border-[#f54545]/40 relative">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold">02 · PCB Reverse Engineering</span>
              <h3 className="text-xl font-bold text-white mt-2">Form-Fit-Function Drop-In</h3>
              <p className="text-sm text-neutral-400 mt-2">
                Drop-in replacements for obsolete or damaged boards. De-layering, netlist generation, unmarked component decoding, and modern fabrication.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold">03 · OEM & Quality Assembly</span>
              <h3 className="text-xl font-bold text-white mt-2">IPC-A-610 Class 3</h3>
              <p className="text-sm text-neutral-400 mt-2">
                High-precision batch manufacturing, micro-soldering, conformal coating, and 100% benchtop RF spectrum validation in our Islamabad facility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
