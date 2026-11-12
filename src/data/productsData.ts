export interface ProductSpec {
  label: string;
  value: string;
  detail?: string;
}

export interface ProductItem {
  slug: string;
  title: string;
  category: string;
  industry: string;
  client: string;
  metric: string;
  metricLabel: string;
  summary: string;
  tags: string[];
  bgClass: string;
  accentColor: string;
  challenge: string;
  solution: string[];
  results: string[];
  specs: ProductSpec[];
  protections?: string[];
  applications?: string[];
}

export const PRODUCT_CATEGORIES = [
  "All",
  "Electronic Warfare & Jammers",
  "Counter-UAS & Drones",
  "Direction Finding & Testing",
  "Avionics & Secure Links",
];

export const HAALAR_PRODUCTS: ProductItem[] = [
  {
    slug: "green-arrow-digital",
    title: "Green Arrow Digital (Active & Reactive Jammer)",
    category: "Electronic Warfare & Jammers",
    industry: "Electronic Warfare & RF Suppression",
    client: "Military, Border, Convoy & VIP Security",
    metric: "7–8 Bands",
    metricLabel: "DDS & SDR Active / Reactive",
    summary:
      "Modular DDS & SDR software-defined active and reactive jammer covering VHF Low, VHF, UHF, GSM I/II/III, ISM, STOS, and LoRaWAN IEDs with user-programmable threat profiles.",
    tags: [
      "DDS & SDR",
      "7–8 Omni Antennas",
      "24–28 V DC",
      "VHF/UHF/GSM/ISM",
      "10x Protections",
    ],
    bgClass: "from-emerald-500/10 to-neutral-900/40",
    accentColor: "#10B981",
    challenge:
      "Modern operational theaters face rapidly evolving multi-band RF threats spanning VHF, UHF, cellular GSM tiers, ISM telemetry, STOS links, and LoRaWAN IED triggers requiring fast reprogramming and fail-safe power protection.",
    solution: [
      "Architected on a modular Software Defined Radio (SDR) and Direct Digital Synthesis (DDS) core for precise, rapid signal generation with extra expansion ports for future band upgrades.",
      "Covers VHF Low, VHF, UHF, GSM I, GSM II, GSM III, and ISM bands including STOS and LoRaWAN IED threat profiles.",
      "Drives 7–8 high-gain omnidirectional antennas at 50 Ohm output impedance with heat sink and forced-air cooling fans over a 24–28 V DC supply.",
      "Secured with protected operating software supporting user-programmable threat profiles for active and reactive jamming operations.",
    ],
    results: [
      "Multi-band coverage from VHF Low through GSM I/II/III, ISM, STOS, and LoRaWAN IEDs in a modular upgradeable chassis.",
      "Comprehensive self-diagnostics across 10 integrated RF, electrical, antenna, and thermal protection circuits.",
      "Field-ready for continuous convoy, border, VIP, critical infrastructure, and tactical EW deployments.",
    ],
    specs: [
      {
        label: "Technique",
        value: "DDS & SDR Based Jammer",
        detail: "Software Defined Architecture — precise and rapid signal generation",
      },
      {
        label: "Frequency Bands",
        value: "VHF Low, VHF, UHF, GSM I, GSM II, GSM III, ISM",
        detail: "Covers STOS and LoRaWAN IEDs; modular form with extra ports for future upgradation",
      },
      {
        label: "Antennas",
        value: "7–8 High-Gain Omnidirectional Antennas",
      },
      {
        label: "Operating Voltage",
        value: "24–28 V DC",
      },
      {
        label: "Frequency Programming",
        value: "User-Programmable Threat Profiles",
      },
      {
        label: "Software Protection",
        value: "Secure Operating Software",
      },
      {
        label: "Cooling",
        value: "Heat Sink & Forced-Air Cooling Fans",
      },
      {
        label: "RF Output",
        value: "High-Power RF Transmission",
      },
      {
        label: "Output Impedance",
        value: "50 Ohm",
      },
    ],
    protections: [
      "VSWR Fail Alarm",
      "Surge Current Protection",
      "Overload / Over-Current Protection",
      "Over-Temperature Protection",
      "Reverse Polarity Protection",
      "Under-Voltage Protection",
      "Over-Voltage Protection",
      "Short Antenna Protection",
      "Open Antenna Protection",
      "Wrong Antenna Detection",
    ],
    applications: [
      "Military Operations",
      "Border Security",
      "Convoy Protection",
      "VIP Security",
      "Tactical Response Units",
      "Critical Infrastructure Protection",
      "Electronic Warfare Operations",
    ],
  },
  {
    slug: "green-arrow-stos-jammer",
    title: "Green Arrow STOS Jammer",
    category: "Electronic Warfare & Jammers",
    industry: "Tactical & Vehicle RF Countermeasures",
    client: "Vehicle Convoys & Manpack Field Units",
    metric: "75 m",
    metricLabel: "Jamming Radius (25m Initiator)",
    summary:
      "DDS & SDR based active and reactive jammer programmable across 410–520 MHz, covering STOS, 433 MHz, and 315 MHz bands on 12V vehicle battery in vehicle-mounted and manpack forms.",
    tags: [
      "410–520 MHz",
      "Active & Reactive",
      "STOS / 433 / 315 MHz",
      "12V Battery",
      "Vehicle & Manpack",
    ],
    bgClass: "from-blue-500/10 to-neutral-900/40",
    accentColor: "#3B82F6",
    challenge:
      "Tactical patrols and mobile convoys require compact, 12V vehicle-compatible suppression specifically tuned for STOS, 433 MHz, and 315 MHz triggers in both dismounted manpack and vehicle-mounted configurations.",
    solution: [
      "Engineered on a DDS & SDR synthesis architecture delivering both Active and Reactive jamming operational versions.",
      "Provides a user-programmable 410–520 MHz tuning band alongside dedicated STOS, 433 MHz, and 315 MHz coverage.",
      "Paired with high-gain omnidirectional antennas powered directly from a standard 12V vehicle battery.",
      "Available in ruggedized vehicle-mounted and portable manpack configurations.",
    ],
    results: [
      "Verified 75 m defensive jamming radius with initiator protection at 25 m standoff.",
      "Flexible deployment across mobile convoy vehicles and dismounted foot-patrol manpacks.",
      "Rapid DDS/SDR waveform agility across programmable 410–520 MHz threat channels.",
    ],
    specs: [
      { label: "Technique", value: "DDS & SDR Based Jammer" },
      { label: "Variants", value: "Both Active and Reactive Versions Available" },
      { label: "Programmable Band", value: "410–520 MHz" },
      { label: "Frequencies Covered", value: "STOS, 433 MHz & 315 MHz" },
      { label: "Jamming Radius", value: "75 m (Initiator at 25 m)" },
      { label: "Antennas", value: "High-Gain Omnidirectional Antennas" },
      { label: "Power Source", value: "Operated from Vehicle Battery (12V)" },
      { label: "Deployment Versions", value: "Vehicle-Mounted & Manpack Versions" },
    ],
  },
  {
    slug: "uav-quadcopter-jammers",
    title: "UAV / Quadcopter Jammers",
    category: "Counter-UAS & Drones",
    industry: "Counter-UAS Drone Defense",
    client: "Defense Perimeters & Mobile Anti-Drone Squads",
    metric: "1.5–2 km",
    metricLabel: "Directional Jamming Radius",
    summary:
      "Indigenously designed and manufactured counter-UAS jammers featuring 6–8 configurable frequencies, AC & DC power, 1.5–2 km directional or 600–800 m omni coverage, plus Anti-Drone Gun availability.",
    tags: [
      "6–8 Frequencies",
      "1.5–2 km Directional",
      "600–800 m Omni",
      "Anti-Drone Gun",
      "AC & DC Power",
    ],
    bgClass: "from-red-500/10 to-neutral-900/40",
    accentColor: "#F54545",
    challenge:
      "Hostile reconnaissance and payload quadcopters operate across varied command, video downlink, and navigation frequencies, demanding adaptable standoff denial in both directional rifle and fixed omni perimeter roles.",
    solution: [
      "Indigenously designed and manufactured across 6–8 customizable RF frequency bands configured strictly to customer threat requirements.",
      "Engineered for high-gain directional deployment (1.5–2 km radius) as well as 360° omnidirectional perimeter denial (600–800 m radius).",
      "Dual AC mains and DC battery power architecture supporting stationary facility towers and rapid mobile operation.",
      "Also offered as an ergonomic UAV / Quadcopter Anti-Drone Gun configuration for point-and-suppress field engagement.",
    ],
    results: [
      "Standoff counter-UAS neutralization at 1.5–2 km directional range or 600–800 m omni perimeter radius.",
      "Customizable 6–8 frequency configuration tailored cleanly to client operational bands.",
      "100% sovereign indigenous design, production, and lifecycle maintenance.",
    ],
    specs: [
      {
        label: "No. of Frequencies",
        value: "6–8 (As Per Customer Requirement)",
      },
      {
        label: "Jamming Radius (Directional)",
        value: "1.5–2 km with Directional Antenna",
      },
      {
        label: "Jamming Radius (Omni)",
        value: "600–800 m with Omnidirectional Antennas",
      },
      { label: "Power Source", value: "AC & DC Both Supported" },
      { label: "Handheld Variant", value: "UAV / Quadcopter Anti-Drone Gun Available" },
      { label: "Manufacturing", value: "Indigenously Designed & Manufactured" },
    ],
  },
  {
    slug: "uav-quadcopter-detector",
    title: "UAV / Quadcopter Detector",
    category: "Counter-UAS & Drones",
    industry: "Counter-UAS Early Warning",
    client: "Critical Facilities & Forward Observation Posts",
    metric: "1–3 km",
    metricLabel: "SDR Detection Range",
    summary:
      "SDR-based 3-frequency UAV detection receiver delivering early warning across 1–3 km against all commercial DJI models and locally built quadcopters.",
    tags: [
      "3 Frequencies",
      "SDR Detection",
      "1–3 km Range",
      "DJI & Local Quadcopters",
    ],
    bgClass: "from-orange-500/10 to-neutral-900/40",
    accentColor: "#EA580C",
    challenge:
      "Standard acoustic and radar sensors struggle with low-altitude micro-quadcopters and custom DIY builds, requiring passive RF spectrum monitoring across commercial DJI protocols and custom control links.",
    solution: [
      "Built around a Software Defined Radio (SDR) passive monitoring receiver covering 3 distinct drone communication bands.",
      "Tuned signal classification capable of identifying all DJI commercial models alongside locally assembled custom quadcopters.",
      "Engineered for high-sensitivity passive monitoring without emitting detectable RF signatures.",
    ],
    results: [
      "Passive 1–3 km early-warning detection range (depending upon environmental conditions).",
      "Reliable recognition across both factory DJI links and locally built quadcopters.",
      "Pairs seamlessly with Haalar Counter-UAS jammers for integrated detect-to-mitigate workflows.",
    ],
    specs: [
      { label: "Detection Method", value: "Software Defined Radio (SDR)" },
      { label: "No. of Frequencies", value: "3 Frequency Bands" },
      {
        label: "Detection Range",
        value: "1–3 km (Depending Upon Environmental Conditions)",
      },
      {
        label: "Supported Targets",
        value: "All DJI Models & Locally Made Quadcopters",
      },
    ],
  },
  {
    slug: "digital-direction-finder",
    title: "Digital Direction Finder",
    category: "Direction Finding & Testing",
    industry: "Signal Intelligence (SIGINT)",
    client: "Defense EW & Spectrum Control",
    metric: "5–8 km",
    metricLabel: "100–500 MHz SDR Range",
    summary:
      "SDR-based direction finding receiver spanning 100–500 MHz (VHF & UHF) at 5–8 km operational range with an indigenously developed real-time Triangulation GUI.",
    tags: [
      "SDR Detection",
      "5–8 km Range",
      "100–500 MHz VHF/UHF",
      "Triangulation GUI",
    ],
    bgClass: "from-cyan-500/10 to-neutral-900/40",
    accentColor: "#06B6D4",
    challenge:
      "Locating unauthorized VHF and UHF emitters rapidly across complex terrain requires high-sensitivity SDR direction finding coupled with intuitive multi-bearing emitter triangulation software.",
    solution: [
      "Developed an SDR-based wideband VHF & UHF direction finding receiver tuned continuously from 100–500 MHz.",
      "Engineered an indigenous real-time Triangulation GUI for plotting emitter bearings, intersection fixes, and tracking telemetry.",
      "Calibrated for long-range intercept performance extending from 5 to 8 km.",
    ],
    results: [
      "Accurate VHF/UHF direction finding and triangulation across a 5–8 km operational envelope.",
      "Sovereign indigenous Triangulation GUI with full operator workflow control.",
      "Covers the full 100–500 MHz tactical VHF and UHF bands.",
    ],
    specs: [
      { label: "Detection", value: "Software Defined Radio (SDR)" },
      { label: "Operational Range", value: "5–8 km" },
      { label: "Frequencies", value: "100–500 MHz (VHF & UHF)" },
      {
        label: "Software Interface",
        value: "Indigenously Developed Triangulation GUI",
      },
    ],
  },
  {
    slug: "jammer-testing-device",
    title: "Jammer Testing Device",
    category: "Direction Finding & Testing",
    industry: "Diagnostic & Field Calibration",
    client: "Maintenance Depots & Pre-Deployment Teams",
    metric: "100–500 MHz",
    metricLabel: "+ ISM Programmable Band",
    summary:
      "Dedicated transmitter-and-receiver validation set programmable across 100–500 MHz and ISM using 2 omnidirectional antennas operated at a 25m separation distance.",
    tags: [
      "100–500 MHz (Prog.)",
      "ISM Band",
      "2 Omni Antennas",
      "25m TX/RX Separation",
    ],
    bgClass: "from-rose-500/10 to-neutral-900/40",
    accentColor: "#F43F5E",
    challenge:
      "Field readiness teams need an objective, repeatable field test set to confirm that deployed VHF/UHF and ISM jammers effectively disrupt link integrity across standard standoff geometry before patrol dispatch.",
    solution: [
      "Engineered a paired Transmitter and Receiver diagnostic test set equipped with 2 omnidirectional antennas.",
      "Programmable test coverage across 100–500 MHz alongside dedicated ISM band validation.",
      "Calibrated link-loss evaluation designed with the transmitter and receiver positioned at a 25 m separation distance.",
    ],
    results: [
      "Fast, reliable go/no-go verification of active and reactive jammer effectiveness in field depots.",
      "Repeatable 25 m TX-to-RX link validation across 100–500 MHz and ISM frequencies.",
      "Eliminates guesswork before dispatching vehicles or manpack units.",
    ],
    specs: [
      {
        label: "Frequencies",
        value: "100–500 MHz (Programmable) & ISM",
      },
      { label: "No. of Antennas", value: "2 Omnidirectional Antennas" },
      {
        label: "Operating Distance",
        value: "Transmitter & Receiver Kept at Distance of 25 m",
      },
    ],
  },
  {
    slug: "secure-information-system",
    title: "Secure Information System (Air-to-Air & Ground-to-Air)",
    category: "Avionics & Secure Links",
    industry: "Defense Aviation Communications",
    client: "Airborne & Ground Control Formations",
    metric: "A2A / G2A",
    metricLabel: "Secure Information Architecture",
    summary:
      "Indigenously engineered secure information system providing protected air-to-air and ground-to-air data and communication links for coordinated defense operations.",
    tags: [
      "Air-to-Air",
      "Ground-to-Air",
      "Secure Comms",
      "Indigenous R&D",
    ],
    bgClass: "from-indigo-500/10 to-neutral-900/40",
    accentColor: "#6366F1",
    challenge:
      "Airborne platforms and ground command nodes require resilient, indigenously controlled information exchange between air-to-air and ground-to-air links free from third-party dependency.",
    solution: [
      "Designed an end-to-end secure information architecture supporting both air-to-air and ground-to-air operational links.",
      "Engineered custom embedded hardware and protected protocol stacks with strict NDA and local lifecycle ownership.",
      "Built for rugged airborne and field ground station environmental integration.",
    ],
    results: [
      "Unified air-to-air and ground-to-air secure information capability under full sovereign control.",
      "Eliminates foreign black-box dependencies in critical aviation data links.",
    ],
    specs: [
      { label: "Link Architecture", value: "Air-to-Air & Ground-to-Air" },
      { label: "System Purpose", value: "Secure Information System" },
      { label: "Engineering", value: "Indigenous Hardware & Firmware" },
    ],
  },
  {
    slug: "decoy-systems",
    title: "Decoy Systems",
    category: "Electronic Warfare & Jammers",
    industry: "Electronic Countermeasures & Survivability",
    client: "Strategic Defense & Radar Protection",
    metric: "EW Decoy",
    metricLabel: "Signature Emulation & Deception",
    summary:
      "Indigenously developed RF and electronic decoy systems engineered to project false emitter signatures and protect high-value strategic assets.",
    tags: [
      "Electronic Decoy",
      "EW Survivability",
      "Threat Deception",
      "Indigenous R&D",
    ],
    bgClass: "from-amber-500/10 to-neutral-900/40",
    accentColor: "#F59E0B",
    challenge:
      "High-value command posts and defense assets exposed to RF-guided threats require specialized electronic decoys capable of drawing away hostile targeting sensors.",
    solution: [
      "Developed indigenous RF signature generation and decoy electronics tailored for tactical field deployment.",
      "Packaged in ruggedized mil-grade enclosures engineered to withstand harsh operational conditions.",
    ],
    results: [
      "Enhances platform and site survivability through active electronic threat deception.",
      "Indigenously designed, manufactured, and customizable to specific threat profiles.",
    ],
    specs: [
      { label: "System Type", value: "RF / Electronic Decoy System" },
      { label: "Mission Role", value: "Electronic Warfare Threat Deception" },
      { label: "Origin", value: "Indigenous Design & Production" },
    ],
  },
  {
    slug: "gps-anti-jamming",
    title: "GPS Anti-Jamming System",
    category: "Avionics & Secure Links",
    industry: "Protected Navigation (PNT)",
    client: "Defense Platforms & Unmanned Vehicles",
    metric: "GNSS Shield",
    metricLabel: "Contested RF Navigation Integrity",
    summary:
      "Indigenous GPS anti-jamming hardware designed to safeguard navigation receivers and maintain reliable positioning in contested electronic warfare environments.",
    tags: [
      "GPS Anti-Jamming",
      "Contested RF",
      "Resilient PNT",
      "Indigenous R&D",
    ],
    bgClass: "from-purple-500/10 to-neutral-900/40",
    accentColor: "#8B5CF6",
    challenge:
      "Unmanned vehicles and tactical mobile assets operating under intense RF interference risk sudden GNSS loss, mission abort, or navigation drift without dedicated anti-jamming hardware.",
    solution: [
      "Engineered specialized RF front-end filtering and anti-jamming signal processing protecting GPS navigation links.",
      "Compact hardware footprint tailored for integration onto unmanned aerial systems and defense vehicles.",
    ],
    results: [
      "Preserves trusted positioning and timing continuity in jammed electromagnetic environments.",
      "100% locally developed hardware and RF architecture with sovereign support.",
    ],
    specs: [
      { label: "Capability", value: "GPS Anti-Jamming Protection" },
      { label: "Application", value: "Resilient Positioning & Navigation" },
      { label: "Integration", value: "Unmanned Platforms & Defense Assets" },
    ],
  },
  {
    slug: "gcs-drones-swarm",
    title: "GCS for Drones & Swarm",
    category: "Counter-UAS & Drones",
    industry: "Unmanned Systems Command & Control",
    client: "Tactical UAV & Multi-Drone Swarm Squadrons",
    metric: "Multi-UAV",
    metricLabel: "Single & Swarm Ground Control",
    summary:
      "Indigenously engineered Ground Control Station (GCS) for real-time telemetry, mission planning, and coordinated command of individual drones and multi-UAV swarms.",
    tags: [
      "Drone GCS",
      "Swarm C2",
      "Mission Planning",
      "Indigenous Software",
    ],
    bgClass: "from-sky-500/10 to-neutral-900/40",
    accentColor: "#0EA5E9",
    challenge:
      "Operating coordinated drone formations requires a unified, ruggedized Ground Control Station capable of managing both single unmanned aircraft and synchronized multi-drone swarms reliably.",
    solution: [
      "Designed and built an indigenous Ground Control Station software and rugged hardware interface for single-UAV and swarm flight control.",
      "Unifies multi-aircraft telemetry visualization, coordinated waypoint execution, and mission status oversight in a single tactical console.",
    ],
    results: [
      "Streamlined operator control over individual UAVs as well as multi-drone swarm operations.",
      "Custom-tailored indigenous command stack with zero external software lock-in.",
    ],
    specs: [
      { label: "System Type", value: "Ground Control Station (GCS)" },
      { label: "Operational Mode", value: "Single Drones & Multi-UAV Swarm Control" },
      { label: "Origin", value: "Indigenously Developed Hardware & Software" },
    ],
  },
];

const PRODUCT_ALIASES: Record<string, string> = {
  "green-arrow-100-101": "green-arrow-digital",
  "green-arrow-ism": "green-arrow-digital",
  "stos-dds-jammer": "green-arrow-stos-jammer",
  "drone-jammer-handheld": "uav-quadcopter-jammers",
  "drone-jammer-static": "uav-quadcopter-jammers",
  "digital-directional-finder": "digital-direction-finder",
};

export const STATIC_PRODUCT_SLUGS = [
  ...HAALAR_PRODUCTS.map((p) => p.slug),
  ...Object.keys(PRODUCT_ALIASES),
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  const canonicalSlug = PRODUCT_ALIASES[slug] ?? slug;
  return HAALAR_PRODUCTS.find((p) => p.slug === canonicalSlug);
}
