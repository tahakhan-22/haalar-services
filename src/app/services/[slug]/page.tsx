import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles, Layers, ArrowUpRight, Radio, Wrench, Search, Zap, Terminal, Settings } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const SERVICE_DETAILS: Record<
  string,
  {
    title: string;
    badge: string;
    subtitle: string;
    description: string;
    pillars: { title: string; desc: string }[];
    techStack: string[];
    timeline: string;
    faq: { q: string; a: string }[];
  }
> = {
  "odm-manufacturing": {
    title: "Original Design Manufacturing (ODM)",
    badge: "Turnkey Hardware",
    subtitle: "Turnkey concept-to-product engineering. You bring the operational requirement or idea; we engineer the rest.",
    description:
      "Haalar Services specializes in complete Original Design Manufacturing for defense, aerospace, telecommunications, and industrial sectors. From architectural concept formulation and high-density multi-layer PCB design to bare-metal firmware and rugged CNC enclosures, our multi-disciplinary team handles the complete lifecycle.",
    pillars: [
      {
        title: "Product Specification & Architecture",
        desc: "Drafting detailed Product Specification Documents (PSD), defining power budgets, thermal limits, component selections, and signal topologies.",
      },
      {
        title: "Multi-Layer Schematic & PCB Layout",
        desc: "Designing high-density multi-layer printed circuit boards in Altium Designer with differential pair routing, impedance matching, and EMI/EMC shielding.",
      },
      {
        title: "Embedded Firmware & Signal Logic",
        desc: "Writing deterministic C/C++ firmware, FreeRTOS kernels, and DSP algorithms tailored specifically for custom-designed target silicon.",
      },
      {
        title: "Mil-Grade Mechanical Enclosures",
        desc: "Precision CNC milled aluminum casings engineered for thermal conduction, IP67 weather sealing, and mil-spec vibration dampening.",
      },
    ],
    techStack: ["Altium Designer", "Embedded C/C++", "FreeRTOS", "SolidWorks 3D CAD", "Precision CNC Milling", "IPC-A-610 Class 3"],
    timeline: "Functional Bench Prototype in 3-4 Weeks · Pilot Batch in 6-8 Weeks",
    faq: [
      {
        q: "What inputs are needed to start an ODM project?",
        a: "You only need to provide an operational requirement document, desired physical form factor, input/output interfaces, and target performance metrics. We will formulate the complete engineering specification.",
      },
      {
        q: "Who owns the intellectual property and design schematics?",
        a: "All schematics, Gerber files, bill of materials (BOM), firmware source code, and mechanical CAD models are 100% transferred to the client with full sovereign ownership.",
      },
    ],
  },
  "oem-production": {
    title: "Original Equipment Manufacturing (OEM)",
    badge: "IPC Class 3 Assembly",
    subtitle: "Precision electronic assembly, module production, and rigorous quality testing built to IPC standards.",
    description:
      "When you already have verified schematics and require flawless assembly, Haalar Services provides comprehensive OEM manufacturing services. Operating from our Humak Industrial Estate facility in Islamabad, we deliver precision SMD placement, through-hole assembly, conformal coating, and 100% functional testing.",
    pillars: [
      {
        title: "SMD & Fine-Pitch Placement",
        desc: "Automated pick-and-place assembly capable of 0201 passives, fine-pitch QFP, and multi-ball BGA microcontrollers.",
      },
      {
        title: "IPC-A-610 Class 3 Certified Soldering",
        desc: "Every solder joint adheres to strict aerospace and defense durability standards to withstand thermal cycles and mechanical stress.",
      },
      {
        title: "Automated Optical & In-Circuit Testing",
        desc: "Complete pre-power optical inspection and automated in-circuit functional testing to guarantee zero defective components.",
      },
      {
        title: "Environmental Conformal Coating",
        desc: "Silicone, acrylic, or polyurethane conformal coatings applied to shield electronics against moisture, salt spray, and extreme dust.",
      },
    ],
    techStack: ["Automated Pick & Place", "Reflow Profiling", "AOI Systems", "Conformal Coating Station", "BGA Rework Station"],
    timeline: "Pilot Batch Assembly in 1-2 Weeks · Volume Production in 3-4 Weeks",
    faq: [
      {
        q: "Can you source hard-to-find or mil-spec components?",
        a: "Yes. We maintain a verified global supply chain for authorized military, automotive, and industrial components, complete with Certificates of Conformance (CoC).",
      },
      {
        q: "Can we supply our own components (consignment)?",
        a: "Yes, we accept full turnkey procurement or partial/full consigned component kits from clients.",
      },
    ],
  },
  "pcb-reverse-engineering": {
    title: "Reverse Engineering of PCBs",
    badge: "Hardware Forensics",
    subtitle: "Reconstruct complete schematics, netlists, and Gerber files from physical multi-layer circuit boards.",
    description:
      "When original manufacturer schematics are lost, suppliers cease operations, or legacy equipment fails without support, Haalar Services provides exact form-fit-function PCB reverse engineering. We de-layer multi-layer boards, extract complete electrical netlists, decode proprietary/unmarked ICs, and reproduce modern, drop-in replacement boards.",
    pillars: [
      {
        title: "Non-Destructive X-Ray & Micro-Sectioning",
        desc: "Multi-layer trace analysis, via topology inspection, and non-destructive substrate imaging to map internal copper layers.",
      },
      {
        title: "De-Layering & High-Resolution Imaging",
        desc: "Precision mechanical or chemical substrate stripping with micron-level scanning to reveal every buried trace, plane, and blind/buried via.",
      },
      {
        title: "Complete Netlist & Schematic Extraction",
        desc: "Reconstruction of full electrical netlists and regeneration of searchable, modular schematics in Altium Designer.",
      },
      {
        title: "Modern Component Substitution",
        desc: "Replacing obsolete or discontinued chips with modern, pin-compatible, readily available equivalents without altering operational behavior.",
      },
    ],
    techStack: ["Altium Designer", "Optical Micro-Scanners", "Substrate De-Layering", "Curve Tracers", "Digital Signal Analyzers"],
    timeline: "Complete Schematic Extraction in 10-14 Days · Validated Replacement Board in 3-4 Weeks",
    faq: [
      {
        q: "Can you reverse engineer boards with 8 or more layers?",
        a: "Yes. Our Islamabad laboratory regularly processes high-density multi-layer boards up to 16+ layers, including internal power planes and buried/blind micro-vias.",
      },
      {
        q: "What if some integrated circuits on the board have sanded part numbers?",
        a: "Our Component Decoding team uses in-circuit signature analysis, voltage tracing, and die decapsulation to identify unknown and marked-off ICs.",
      },
    ],
  },
  "rf-microwave-systems": {
    title: "RF & Microwave Engineering",
    badge: "Tactical RF & EW",
    subtitle: "Indigenous design and fabrication of wideband RF power amplifiers, DDS sweepers, and countermeasures.",
    description:
      "Haalar Services engineers and manufactures tactical RF modules, countermeasure transmitters, and direct digital synthesis (DDS) sweepers across HF, VHF, UHF, and ISM frequencies. Our systems feature high power efficiency, minimal harmonic distortion, and ruggedized thermal dissipation.",
    pillars: [
      {
        title: "Direct Digital Synthesis (DDS) Frequency Generators",
        desc: "High-speed sweepers generating precision jamming and countermeasure signals with programmable sweep widths and fast frequency hopping.",
      },
      {
        title: "High-Efficiency RF Power Amplifiers (PA)",
        desc: "GaN and LDMOS-based high-gain power amplifier stages engineered for maximum power output and extreme thermal resilience.",
      },
      {
        title: "Directional & Omni Antenna Integration",
        desc: "Custom antenna array tuning, VSWR optimization, and impedance matching networks to ensure maximum radiation efficiency.",
      },
      {
        title: "Laboratory Spectrum Verification",
        desc: "Calibrated spectrum analyzer bench tests measuring output power, harmonics, phase noise, and intermodulation distortion.",
      },
    ],
    techStack: ["Direct Digital Synthesis (DDS)", "GaN / LDMOS PAs", "VCO / PLL", "Keysight Spectrum Analyzers", "MATLAB RF Toolbox"],
    timeline: "Custom RF Module in 3-4 Weeks · Integrated Tactical Unit in 6-8 Weeks",
    faq: [
      {
        q: "What frequency bands can Haalar Services design for?",
        a: "We engineer RF systems spanning HF (1.5-30 MHz), VHF (30-300 MHz), UHF (300-3000 MHz), and ISM/GNSS frequencies (including 2.4 GHz and 5.8 GHz).",
      },
      {
        q: "Are your countermeasure products available for civilian use?",
        a: "Our jamming and countermeasure modules are reserved strictly for authorized government, defense, national security, and licensed critical infrastructure entities.",
      },
    ],
  },
  "embedded-firmware": {
    title: "Embedded Software & Firmware",
    badge: "Low-Level Firmware",
    subtitle: "Deterministic real-time firmware, FreeRTOS kernels, and DSP algorithms with microsecond-level precision.",
    description:
      "Hardware is only as reliable as the firmware driving it. We engineer bare-metal C, modern C++, and FreeRTOS firmware for ARM Cortex, STM32, Texas Instruments, and FPGA controllers, ensuring zero jitter, high throughput, and fail-safe recovery.",
    pillars: [
      {
        title: "Hard Real-Time Determinism",
        desc: "Sub-microsecond interrupt handling and real-time execution loops optimized for sensor acquisition and countermeasure timing.",
      },
      {
        title: "Hardware Abstraction Layers (HAL)",
        desc: "Modular low-level drivers interfacing SPI, I2C, UART, CAN Bus, Ethernet, and high-speed ADCs/DACs.",
      },
      {
        title: "Secure Cryptographic Bootloaders",
        desc: "Encrypted memory execution, authenticated over-the-wire updates, and tamper-detection routines.",
      },
      {
        title: "DSP & Signal Processing Algorithms",
        desc: "Indigenous implementation of digital filters (FIR/IIR), FFT spectral analysis, and DDS modulation controllers.",
      },
    ],
    techStack: ["C / C++", "FreeRTOS", "ARM Cortex-M", "STM32CubeIDE", "J-Link Debuggers", "Logic Analyzers"],
    timeline: "Firmware Core in 2-3 Weeks · Full Validation in 4-5 Weeks",
    faq: [
      {
        q: "Do you supply complete source code?",
        a: "Yes. All firmware repositories, compilation toolchains, build scripts, and register-level documentation are delivered with full client ownership.",
      },
    ],
  },
  "research-development": {
    title: "Research & Development (R&D)",
    badge: "Indigenous Defense R&D",
    subtitle: "Sovereign research and rapid bench prototyping for proprietary defense and strategic electronic systems.",
    description:
      "Our Islamabad R&D facility conducts applied research into novel electromagnetic countermeasures, ultra-low-noise frequency synthesis, and extreme-environment electronics. We turn speculative requirements into working lab prototypes and validated production blueprints.",
    pillars: [
      {
        title: "Electromagnetic & Propagation Simulation",
        desc: "Simulating signal propagation, antenna coverage footprints, and multipath interference under varied operational terrains.",
      },
      {
        title: "Thermal & Mechanical Finite Element Analysis",
        desc: "CFD heat dissipation modeling to ensure continuous full-power operation under 55°C+ ambient desert conditions.",
      },
      {
        title: "Rapid Laboratory Prototyping",
        desc: "In-house milling, assembly, and testing benches allowing iterative design modifications within hours rather than weeks.",
      },
      {
        title: "Sovereign IP & Security",
        desc: "Air-gapped development benches, strict physical facility controls, and non-disclosure governance protecting client research.",
      },
    ],
    techStack: ["MATLAB", "Simulink", "Altium Designer", "Keysight RF Test Suite", "Thermal Imaging", "CNC Milling"],
    timeline: "Feasibility Study in 2 Weeks · Bench Prototyping in 4-6 Weeks",
    faq: [
      {
        q: "Can Haalar Services undertake classified defense R&D projects?",
        a: "Yes. We maintain dedicated air-gapped development labs, strict access control protocols, and comprehensive physical security at our Islamabad headquarters.",
      },
    ],
  },
  "legacy-modernization": {
    title: "Legacy System Modernization & Repair",
    badge: "Lifecycle Support",
    subtitle: "Component-level failure diagnostics, BGA micro-soldering, and form-fit-function upgrades for obsolete electronics.",
    description:
      "Mission-critical industrial equipment, radar sub-assemblies, and defense control systems often fail because of a handful of damaged traces or discontinued components. We perform microscopic fault diagnosis, trace reconstruction, and drop-in upgrades that extend system lifespans by decades.",
    pillars: [
      {
        title: "Component-Level Diagnostic Inspection",
        desc: "Using curve tracers, thermal cameras, and oscilloscopes to pinpoint microscopic substrate cracks, shorted capacitors, or blown drivers.",
      },
      {
        title: "Precision BGA Reballing & Micro-Soldering",
        desc: "Stereomicroscope rework replacing damaged fine-pitch ICs, rebuilding severed PCB tracks, and replacing burnt discrete components.",
      },
      {
        title: "Form-Fit-Function Sub-Assembly Replacement",
        desc: "Designing modernized plug-compatible sub-modules that interface directly with existing legacy backplanes without modifying host systems.",
      },
      {
        title: "Extended Warranty & Reliability SLAs",
        desc: "Every repaired or modernized sub-system undergoes 72-hour burn-in stress testing before return to service.",
      },
    ],
    techStack: ["Stereomicroscopes", "BGA Reballing Stations", "Thermal Cameras", "High-Speed Oscilloscopes", "IPC-A-610 Repair"],
    timeline: "Diagnostic Report in 3-5 Days · Complete Repair & Refurbishment in 7-14 Days",
    faq: [
      {
        q: "What happens if a damaged component is permanently out of production?",
        a: "Our Reverse Engineering and Component Decoding engineers identify modern alternatives or design an active adapter module to replace the obsolete chip transparently.",
      },
    ],
  },
  "component-decoding": {
    title: "Component Decoding & Schematics",
    badge: "IC Forensics",
    subtitle: "Identify sanded, unmarked, or proprietary ICs, extract pinouts, and locate pin-compatible modern replacements.",
    description:
      "Manufacturers frequently scrub part numbers, utilize custom house codes, or use obsolete silicon to lock clients into costly vendor relationships. Haalar Services deploys electrical signature tracing, silicon die decapsulation, and functional logic probing to decode any chip.",
    pillars: [
      {
        title: "Silicon Decapsulation & Die Microscopy",
        desc: "Chemical etching to expose internal silicon dies and inspect manufacturer logos, die masks, and revision markings under high-power optical magnification.",
      },
      {
        title: "V-I Characteristic Curve Signature Analysis",
        desc: "Mapping electrical signatures across every pin to deduce internal diode protection networks, input stages, and power rails.",
      },
      {
        title: "Logic & Waveform Protocol Decoding",
        desc: "Logic analyzer capture of bus communications (SPI, I2C, proprietary protocols) to deduce internal controller registers.",
      },
      {
        title: "Modern Pin-Compatible Sourcing",
        desc: "Supplying exact modern replacement parts with full datasheet specifications, pinout schematics, and Altium library symbols.",
      },
    ],
    techStack: ["Die Decapsulation Station", "High-Resolution Optical Microscopy", "Curve Tracing", "Multi-Channel Logic Analyzers"],
    timeline: "Component Identification in 5-7 Days · Complete Pinout & Replacement Report in 10 Days",
    faq: [
      {
        q: "Does component decoding damage the target chip?",
        a: "Whenever possible, we use non-destructive electrical curve tracing. For deeply sanded or coated components, die decapsulation of one sacrificial sample reveals the internal die mask.",
      },
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "odm-manufacturing" },
    { slug: "oem-production" },
    { slug: "pcb-reverse-engineering" },
    { slug: "rf-microwave-systems" },
    { slug: "embedded-firmware" },
    { slug: "research-development" },
    { slug: "legacy-modernization" },
    { slug: "component-decoding" },
  ];
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug] || {
    title: `${slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} Engineering`,
    badge: "Discipline",
    subtitle: "Advanced hardware engineering, manufacturing, and lifecycle support engineered to IPC standards.",
    description:
      "Haalar Services delivers indigenous hardware engineering, multi-layer PCB design, RF countermeasures, and turnkey ODM production from our facility in Islamabad.",
    pillars: [
      { title: "System Specification", desc: "Rigorous planning and component evaluation prior to board design." },
      { title: "Precision Prototyping", desc: "In-house PCB fabrication, SMD assembly, and firmware integration." },
      { title: "IPC-A-610 Class 3 Standards", desc: "Military-grade assembly, conformal coating, and thermal stress testing." },
      { title: "Lifecycle & SLA Support", desc: "Comprehensive testing, calibration, and long-term hardware support." },
    ],
    techStack: ["Altium Designer", "Embedded C/C++", "DDS Systems", "Keysight RF Analyzers", "CNC Milling"],
    timeline: "Working Prototype in 2-4 Weeks · Pilot Batch in 4-6 Weeks",
    faq: [
      {
        q: "How does Haalar Services start an engagement?",
        a: "We begin with a technical review of your hardware requirements, form factor constraints, and operating standards.",
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <PageHeader
        badge={service.badge}
        title={service.title}
        description={service.subtitle}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.badge }]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                Overview & Engineering Methodology
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Technical Capabilities
              </h2>
              <p className="text-neutral-600 mt-4 text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.pillars.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <div className="size-8 rounded-lg bg-red-100 text-[#f54545] flex items-center justify-center font-bold text-xs mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-neutral-900 text-lg">{p.title}</h3>
                  <p className="text-neutral-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="pt-8 border-t border-neutral-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Technical FAQ
              </h3>
              <div className="space-y-4">
                {service.faq.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-neutral-200">
                    <h4 className="font-bold text-neutral-900 text-base">{item.q}</h4>
                    <p className="text-neutral-600 text-sm mt-2 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-950 text-white rounded-3xl p-8 border border-neutral-800 shadow-xl">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold block mb-2">
                Delivery Benchmark
              </span>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.timeline}
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                Every hardware engagement is backed by IPC-A-610 Class 3 assembly standards, environmental test reports, and 100% bench validation.
              </p>

              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-all btn-glow-breath"
              >
                <span>Consult with Engineering Lead</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tech Stack */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
              <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-neutral-500 mb-4">
                Laboratory & Manufacturing Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-neutral-800 border border-neutral-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900 text-neutral-300 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold block">Facility & Lab</span>
              <p className="text-xs leading-relaxed">
                Plot No. 261, Humak Industrial Estate, Kahuta Road, Islamabad, Pakistan.
              </p>
              <div className="text-xs text-neutral-400">
                Phone: 0333-0947546 / +92 51 4490922
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
