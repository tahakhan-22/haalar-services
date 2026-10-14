export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export const ANNOUNCEMENT_ITEMS = [
  "Disrupt · Defend · Dominate — Next-Gen Hardware & Software",
  "Indigenous R&D, OEM & ODM Engineering Solutions",
  "IPC Military & Industrial Standards Certified Manufacturing",
  "Islamabad (HQ) · Humak Industrial Estate · Global Delivery",
  "40+ Advanced Electronic Modules & Defense Systems Deployed",
];

export const NAV_SERVICES: NavItem[] = [
  {
    label: "Original Design Manufacturing (ODM)",
    href: "/services/odm-manufacturing",
    description: "Turnkey concept-to-product engineering. Bring your idea, we engineer the rest.",
    badge: "Flagship",
  },
  {
    label: "Original Equipment Manufacturing (OEM)",
    href: "/services/oem-production",
    description: "High-precision electronic module production and assembly built to IPC standards.",
  },
  {
    label: "Reverse Engineering of PCBs",
    href: "/services/pcb-reverse-engineering",
    description: "Multi-layer PCB de-layering, netlist generation, and exact schematic reconstruction.",
    badge: "Specialized",
  },
  {
    label: "RF & Microwave Engineering",
    href: "/services/rf-microwave-systems",
    description: "Custom power amplifiers, frequency synthesis, radar modules, and countermeasures.",
  },
  {
    label: "Embedded Software & Firmware",
    href: "/services/embedded-firmware",
    description: "Real-time operating systems (RTOS), DSP algorithms, and hardware-software control.",
  },
  {
    label: "Research & Development (R&D)",
    href: "/services/research-development",
    description: "Indigenous prototyping, simulation, and thermal/mechanical validation.",
  },
  {
    label: "Legacy System Modernization & Repair",
    href: "/services/legacy-modernization",
    description: "Form-fit-function upgrades for obsolete defense and industrial electronic equipment.",
  },
  {
    label: "Component Decoding & Schematics",
    href: "/services/component-decoding",
    description: "Silicon decapsulation, IC identification, and obsolescence management.",
  },
];

export const NAV_INDUSTRIES: NavItem[] = [
  { label: "Defense & National Security", href: "/industries/defense", description: "Counter-UAS, RF countermeasures, and secure communication systems." },
  { label: "Aerospace & Avionics", href: "/industries/aerospace", description: "High-reliability ruggedized electronics and telemetry interfaces." },
  { label: "Telecommunications & RF", href: "/industries/telecom", description: "Wideband power amplifiers, custom filters, and antenna arrays." },
  { label: "Industrial & OEM Electronics", href: "/industries/industrial", description: "Automated controller boards, power regulation, and PLCs." },
  { label: "Fleet, Transport & Logistics", href: "/industries/fleet", description: "Rugged vehicle tracking, onboard diagnostics, and telematics." },
  { label: "Critical Infrastructure Protection", href: "/industries/infrastructure", description: "Electronic perimeter defense and frequency mitigation." },
];

export const CLIENT_LOGOS = [
  { name: "Defense & Strategic Systems", metric: "Tier-1 Partner", tag: "Aerospace & Security" },
  { name: "Industrial OEM Pods", metric: "IPC Class 3", tag: "Electronics Manufacturing" },
  { name: "Telecommunications Networks", metric: "High-Power RF", tag: "Amplifier Modules" },
  { name: "Critical Facilities", metric: "90m - 200m Radius", tag: "Countermeasure Stations" },
  { name: "Fleet Transport Units", metric: "Vehicle Mount", tag: "Rugged Hardware" },
  { name: "Government Infrastructure", metric: "Air-Gapped", tag: "Sovereign R&D" },
];

export const PROBLEM_MATRIX = [
  {
    id: "obsolete",
    tab: "Obsolete Components",
    headline: "Form-Fit-Function PCB Reverse Engineering When OEM Schematics Are Lost.",
    description:
      "When mission-critical hardware fails and original manufacturers no longer support obsolete components, we reverse engineer multi-layer PCBs, extract complete schematics, decode unmarked ICs, and fabricate drop-in modern replacements.",
    deliverables: ["Multi-Layer X-Ray & Micro-Sectioning", "Complete Schematic Extraction (Altium/KiCad)", "Modern Pin-Compatible Component Sourcing", "100% Functional Validation Bench Test"],
    cta: "Request Reverse Engineering Scope",
  },
  {
    id: "odm",
    tab: "Turnkey ODM Need",
    headline: "Transform Raw Operational Concepts into Deployment-Ready Hardware.",
    description:
      "All you have to bring is an operational requirement or idea. Our multi-disciplinary engineering team handles circuit design, multi-layer layout, firmware development, CNC mechanical casing, and pilot production.",
    deliverables: ["Product Specification Document (PSD)", "Working Hardware Prototyping (PCB + Firmware)", "Custom Aluminum/Mil-Spec Enclosures", "Pilot Manufacturing Batch"],
    cta: "Start Turnkey ODM Project",
  },
  {
    id: "rf",
    tab: "High-Frequency RF & EW",
    headline: "Custom RF Amplifiers, Direct Digital Synthesis (DDS), and Countermeasures.",
    description:
      "Design and manufacture indigenous RF modules operating across HF, VHF, UHF, and ISM bands. Engineered with high power-efficiency, targeted suppression, and rugged thermal dissipation.",
    deliverables: ["Custom Power Amplifier (PA) Modules", "Direct Digital Synthesis (DDS) Sweepers", "Antenna Array Tuning & Impedance Matching", "Harmonic & Spectrum Analyzer Certification"],
    cta: "Consult with RF Engineers",
  },
  {
    id: "repair",
    tab: "Unrepairable Equipment",
    headline: "Component-Level Diagnostic, Servicing & Lifecycle Modernization.",
    description:
      "Restore high-value industrial and strategic electronics deemed unserviceable by OEM vendors. We identify blown substrate traces, damaged BGA microcontrollers, and degraded RF amplifiers.",
    deliverables: ["Component-Level Failure Analysis Report", "Micro-Soldering & BGA Reballing", "Thermal Stress & Reliability Testing", "Extended Warranty & Support SLA"],
    cta: "Book Diagnostic Inspection",
  },
  {
    id: "firmware",
    tab: "Firmware Bottlenecks",
    headline: "Hard Real-Time Embedded Firmware with Deterministic Execution.",
    description:
      "Bridge hardware sensors and control interfaces with low-level C, C++, and Rust firmware. Built for bare-metal microcontrollers, DSP processors, and RTOS environments with zero latency jitter.",
    deliverables: ["Bare-Metal & RTOS Firmware Core", "Hardware Abstraction Layer (HAL)", "Secure Bootloader & Over-the-Wire Updates", "Complete Source Code Ownership"],
    cta: "Develop Custom Firmware",
  },
  {
    id: "standards",
    tab: "Strict Military Standards",
    headline: "Manufacturing Aligned with Strict IPC and Military Quality Standards.",
    description:
      "Every mechanical assembly, PCB assembly, and solder joint adheres to IPC-A-610 Class 3 specifications for mission-critical and defense applications requiring extreme durability.",
    deliverables: ["IPC-A-610 Class 3 Soldering & Assembly", "Environmental Vibration & Drop Testing", "Conformal Coating for Moisture/Dust Defense", "Certificates of Conformance (CoC)"],
    cta: "Review Manufacturing Standards",
  },
];

export const CASE_STUDIES = [
  {
    title: "Alpha Fire Handheld Jammer PAK-1",
    category: "Defense & Counter-UAS",
    metric: "90m+",
    metricLabel: "Effective Jamming Radius",
    summary: "Compact, battery-operated multi-frequency handheld defense countermeasure with directional antenna array and 2-hour continuous battery life.",
    tags: ["RF Countermeasures", "Handheld", "Two Spot Frequencies", "Directional Array"],
    bgClass: "from-red-500/10 to-neutral-900/40",
    accentColor: "#F54545",
  },
  {
    title: "STOS Direct Digital Synthesis (DDS) Jammer",
    category: "RF & Electronic Systems",
    metric: "70m",
    metricLabel: "Radius Coverage",
    summary: "Advanced DDS multi-channel frequency sweeping countermeasure module with 12V DC power input and precision dual-antenna transmission.",
    tags: ["Direct Digital Synthesis", "Sweep -25MHz", "Dual Antenna", "12V Battery"],
    bgClass: "from-blue-500/10 to-neutral-900/40",
    accentColor: "#3B82F6",
  },
  {
    title: "Alpha Fire Vehicle Mount Station",
    category: "Mobile Tactical Countermeasures",
    metric: "200m+",
    metricLabel: "Protection Perimeter",
    summary: "High-power tactical vehicle-mounted system engineered for VIP convoy protection and perimeter defense with multi-band suppression.",
    tags: ["Vehicle Mount", "Tactical Mobile", "High-Power PA", "Convoy Defense"],
    bgClass: "from-amber-500/10 to-neutral-900/40",
    accentColor: "#F59E0B",
  },
  {
    title: "Green Arrow (ISM Band) Module",
    category: "Frequency Suppression",
    metric: "2.4 GHz",
    metricLabel: "ISM Frequency Band",
    summary: "Specialized ISM band jamming module (2400-2520 MHz) with configurable bandwidth, 80m disruption radius, and rugged aluminum heat sink.",
    tags: ["2400-2520 MHz", "ISM Band", "Active/Reactive", "VCO"],
    bgClass: "from-emerald-500/10 to-neutral-900/40",
    accentColor: "#10B981",
  },
];

export const COMPLIANCE_ITEMS = [
  {
    badge: "IPC-A-610 Class 3",
    title: "High-Reliability Electronics",
    desc: "Rigorous PCB assembly and soldering standards for mission-critical systems where uncompromised uptime and harsh operating environments are non-negotiable.",
  },
  {
    badge: "Indigenous Defense R&D",
    title: "100% Sovereign Capability",
    desc: "All hardware schematics, PCB layouts, firmware code, and mechanical CAD models are indigenously developed and manufactured locally.",
  },
  {
    badge: "Strict NDA & Security",
    title: "Classified & Confidential Protocols",
    desc: "Comprehensive physical and digital security protocols safeguarding defense specifications, client schematics, and tactical hardware blueprints.",
  },
  {
    badge: "Precision Military Standards",
    title: "Tactical Durability & Shock Resistance",
    desc: "Precision CNC milled aluminum enclosures, environmental conformal coating, and thermal dissipation engineered for demanding field use.",
  },
];

export const FOUNDATION_MODELS = [
  { name: "Altium Designer", provider: "EDA Tools", capability: "High-Density Multi-Layer PCB Layouts" },
  { name: "Direct Digital Synthesis", provider: "RF Core", capability: "High-Speed Frequency Modulation" },
  { name: "MATLAB & Simulink", provider: "Simulation", capability: "RF Filter & Signal Processing Modeling" },
  { name: "Embedded C / C++", provider: "Firmware", capability: "Deterministic Bare-Metal & RTOS Control" },
  { name: "Keysight / R&S Analyzers", provider: "Lab Testing", capability: "GHz Spectrum & Harmonic Verification" },
  { name: "Precision CNC Milling", provider: "Mechanical", capability: "Mil-Grade Heat-Dissipating Enclosures" },
  { name: "PCB Reverse Engineering Lab", provider: "De-Layering", capability: "Micro-Sectioning & Netlist Extraction" },
  { name: "VCO / PLL Architectures", provider: "Oscillators", capability: "Low-Phase-Noise RF Signal Generation" },
];

export const FAQS = [
  {
    q: "What core capabilities distinguish Haalar Services?",
    a: "Haalar Services is an advanced engineering and manufacturing firm specializing in next-generation hardware and software solutions. Under our motto 'Disrupt · Defend · Dominate', we deliver turnkey Original Design Manufacturing (ODM), Original Equipment Manufacturing (OEM), PCB reverse engineering, and indigenous RF/microwave equipment for defense, aerospace, and industrial sectors.",
  },
  {
    q: "How does your PCB reverse engineering process work?",
    a: "Our multi-step reverse engineering process includes non-destructive X-ray inspection, precision de-layering of multi-layer PCBs, high-resolution optical scanning, netlist extraction, and full schematic regeneration in Altium Designer. We decode unmarked components and deliver production-ready Gerber files with modern, readily available components.",
  },
  {
    q: "Can you manufacture hardware to specific military or industrial standards?",
    a: "Yes. All electronic assemblies, soldering, and mechanical integrations conform to IPC-A-610 Class 3 specifications and military reliability standards, ensuring robust resistance to extreme temperatures, mechanical vibrations, and moisture.",
  },
  {
    q: "What information is needed to initiate an ODM product development cycle?",
    a: "You only need to bring an operational requirement or conceptual idea. Our engineers formulate the technical specification, design the electronic circuitry, program the firmware, model the mechanical enclosure, and deliver a fully functional working prototype followed by pilot manufacturing.",
  },
  {
    q: "Where is Haalar Services headquartered?",
    a: "Haalar Services operates from Plot No. 261, Humak Industrial Estate, Kahuta Road, Islamabad, Pakistan, housing our R&D laboratories, PCB reverse engineering benches, RF testing equipment, and production facilities.",
  },
];
