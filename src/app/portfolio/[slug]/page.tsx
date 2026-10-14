import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Star } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const CASE_STUDIES_DATA: Record<
  string,
  {
    title: string;
    client: string;
    industry: string;
    metric: string;
    metricLabel: string;
    summary: string;
    challenge: string;
    solution: string[];
    results: string[];
    technologies: string[];
    quote?: string;
  }
> = {
  "drone-jammer-handheld": {
    title: "Drone Jammer (Handheld Tactical Rifle)",
    client: "Forward Tactical Units",
    industry: "Counter-UAS Drone Defense",
    metric: "1,500m",
    metricLabel: "Directional Jamming Range",
    summary: "Complete tactical counter-UAS rifle with 6 spot frequencies, optical scope, 2x hot-swappable batteries, rapid charger, and 2-hour continuous battery life.",
    challenge:
      "Hostile commercial and modified tactical drones operating at standoff distances up to 1.5 km require immediate directional mitigation by infantry or security personnel without fixed infrastructure.",
    solution: [
      "Engineered a 6-frequency multi-band directional RF transmitter covering GNSS navigation (GPS/GLONASS/BeiDou/Galileo), 2.4 GHz, 5.8 GHz, and telemetry frequencies.",
      "Mounted high-magnification optical scope calibrated to match directional antenna beamwidth for precision target acquisition.",
      "Designed a complete ergonomic transit case featuring 2x high-capacity batteries and tactical vehicle/mains rapid charger.",
      "Integrated instant trigger activation with zero pre-warm latency.",
    ],
    results: [
      "Reliable directional drone force-landing or return-to-home trigger up to 1,500 meters.",
      "Continuous 2-hour active transmission per battery pack.",
      "Ruggedized weather-resistant casing certified for demanding field operations.",
    ],
    technologies: ["6 Spot Frequencies", "High-Gain Directional Array", "Optical Scope", "Dual Li-Ion Packs", "Tactical Carry Case"],
    quote: "The handheld tactical rifle neutralized rogue surveillance drones instantly during forward security drills.",
  },
  "drone-jammer-static": {
    title: "Drone Jammer (Static Base Station)",
    client: "Critical Strategic Facilities",
    industry: "Perimeter Drone Defense",
    metric: "3 km",
    metricLabel: "Perimeter Jamming Range",
    summary: "Heavy-duty perimeter countermeasure base station with 4-5 frequency bands, AC main power input, and 30 Watts high-gain RF output power per band.",
    challenge:
      "Critical facilities and military installations face persistent aerial surveillance and swarm threats requiring permanent 24/7 spherical exclusion zones at multi-kilometer standoff ranges.",
    solution: [
      "Constructed a stationary multi-band transmission array delivering 30 Watts of dedicated RF output power across each individual frequency band (4-5 bands).",
      "Integrated continuous AC main power conditioning with automatic battery backup switchover.",
      "Housed in an IP67 weatherproof, high-efficiency convection-cooled aluminum enclosure designed for perpetual desert operation.",
      "Engineered omni-directional or sector-sweeping antenna configurations.",
    ],
    results: [
      "Full aerial exclusion zone shielding sensitive facilities up to 3 kilometers away.",
      "Continuous 24/7/365 uninterrupted operational capability with zero thermal throttling.",
      "High RF spectral purity preventing harmonic bleed into friendly tactical communications.",
    ],
    technologies: ["30W RF / Band", "4-5 Frequency Bands", "AC Mains Integration", "IP67 Enclosure", "Keysight Spectrum Calibration"],
    quote: "Haalar Services' static station established an impenetrable 3-kilometer aerial bubble over our operational perimeter.",
  },
  "alpha-fire-pak-1": {
    title: "Alpha Fire Handheld Jammer PAK-1",
    client: "Defense & Strategic Units",
    industry: "Tactical Defense Countermeasures",
    metric: "90m",
    metricLabel: "Effective Jamming Radius",
    summary: "Compact, battery-operated multi-frequency handheld defense countermeasure with two spot frequencies, directional antenna array, and 2-hour runtime.",
    challenge:
      "Single operators required an ultra-portable countermeasure unit to suppress localized unauthorized radio and drone communications within a 90m tactical radius.",
    solution: [
      "Engineered dual spot frequency RF power amplifier stages into a single compact housing.",
      "Integrated high-energy-density Li-Ion battery pack delivering 2 hours of continuous active transmission.",
      "Designed an ergonomic CNC aluminum chassis with integrated heatsink fins for thermal convection.",
      "Calibrated high-efficiency single directional antenna for immediate target pointing.",
    ],
    results: [
      "Effective suppression of target frequencies across a 90-meter radius.",
      "Lightweight, balanced design allowing prolonged single-handed tactical operation.",
      "100% benchtop validation conforming to IPC-A-610 Class 3 standards.",
    ],
    technologies: ["Two Spot Frequencies", "Directional Array", "Li-Ion Management", "CNC Enclosure", "IPC-A-610 Class 3"],
    quote: "The PAK-1 delivered tactical ergonomics and decisive suppression during rigorous field trials.",
  },
  "stos-dds-jammer": {
    title: "STOS Direct Digital Synthesis (DDS) Jammer",
    client: "Strategic Installation Command",
    industry: "RF & Electronic Countermeasures",
    metric: "70m",
    metricLabel: "Radius Coverage",
    summary: "Advanced DDS multi-channel frequency sweeping countermeasure module with -25MHz sweep window, 2 spot frequencies, 12V battery, and dual antennas.",
    challenge:
      "Legacy analog sweepers wander off-target under extreme desert heat. The requirement called for mathematically exact, sub-microsecond frequency sweeping across defined bandwidths.",
    solution: [
      "Built a high-speed Direct Digital Synthesis (DDS) architecture with a programmable sweep window of -25 MHz.",
      "Engineered dual spot frequency synthesizer paths driving independent dual antennas for spatial diversity.",
      "Designed for 12V DC vehicle battery or portable DC field battery operation.",
      "Integrated multi-stage harmonic suppression filters to maintain spectral cleanliness.",
    ],
    results: [
      "Consistent 70-meter defensive coverage with zero frequency drift across operating temperatures from -10°C to +55°C.",
      "Sub-microsecond frequency switching with zero observable phase jitter.",
      "Seamless integration with vehicle electrical systems or standalone battery banks.",
    ],
    technologies: ["Direct Digital Synthesis (DDS)", "SWEEP -25MHz", "2 Spot Frequencies", "Dual Antennas", "12V Battery"],
    quote: "The DDS synthesizer provided surgical frequency control that conventional VCO units cannot match.",
  },
  "alpha-fire-vehicle-mount": {
    title: "Alpha Fire Vehicle Mount Station",
    client: "VIP Escort & Tactical Convoy",
    industry: "Mobile Tactical Countermeasures",
    metric: "200m+",
    metricLabel: "Convoy Protection Perimeter",
    summary: "High-power tactical vehicle-mounted system for VIP convoy defense, featuring two spot frequencies and 12V vehicle alternator DC feed.",
    challenge:
      "Protecting mobile VIP motorcades from remote-controlled threats while drawing power directly from vehicle 12V alternators under severe off-road vibration.",
    solution: [
      "Engineered high-power RF amplifier stages delivering a continuous 200m+ protective perimeter.",
      "Fabricated heavy-duty roof-mounted antenna mast tested against mil-spec shock and vibration.",
      "Integrated active load-dump protection safeguarding sensitive RF transistors against vehicle alternator transients.",
      "Installed two spot frequency modules for targeted tactical band coverage.",
    ],
    results: [
      "Proven 200m+ defensive bubble shielding lead and escort motorcade vehicles simultaneously.",
      "Surpasses military environmental standards for road vibration and thermal convection.",
      "Direct plug-and-play installation into standard tactical and civilian escort vehicles.",
    ],
    technologies: ["200m+ Perimeter", "2 Spot Frequencies", "12V Vehicle Integration", "Mil-Spec Shock Mount", "GaN Power Stage"],
    quote: "The vehicle mount station provided uncompromised protection across thousands of kilometers of high-risk convoy operations.",
  },
  "green-arrow-ism": {
    title: "Green Arrow (ISM Band) Module",
    client: "Perimeter Frequency Mitigation",
    industry: "RF Frequency Suppression",
    metric: "2.4 GHz",
    metricLabel: "2400-2520 MHz ISM Band",
    summary: "Specialized ISM band jamming module (2400-2520 MHz) with configurable bandwidth, 80m disruption radius, 12V DC input, and alloy heat sink.",
    challenge:
      "Dense civilian Wi-Fi and Bluetooth equipment in proximity to sensitive installations required surgical frequency isolation strictly bounded to 2400-2520 MHz.",
    solution: [
      "Engineered an RF power stage strictly calibrated for the 2400-2520 MHz ISM band (customizable upon requirement).",
      "Built-in 12V DC power conditioning for standalone battery or rack-mount power supply.",
      "Integrated extruded aluminum finned heatsink ensuring continuous maximum power output.",
      "Single-antenna high-efficiency radiation topology delivering an 80m disruption radius.",
    ],
    results: [
      "Instant severance of hostile 2.4 GHz digital links within an 80-meter operational radius.",
      "Over 45% DC-to-RF power efficiency keeping thermal generation to a minimum.",
      "Modular form factor allowing multi-unit aggregation for wide-area base defense.",
    ],
    technologies: ["2400-2520 MHz", "80m Jamming Radius", "12V Battery Input", "Single Antenna", "Alloy Heatsink"],
    quote: "Haalar Services' ISM module provided clean, reliable frequency suppression with zero bleeding into adjacent bands.",
  },
  "green-arrow-100-101": {
    title: "Green Arrow 100 / 101 Jammer Modules",
    client: "Tactical Defense Formations",
    industry: "Wideband RF Countermeasures",
    metric: "20-500 MHz",
    metricLabel: "Multi-Band Coverage",
    summary: "Modular triple-band RF suppression system (20-100MHz, 100-200MHz, 200-500MHz) with GSM (2G/3G/4G/LTE) and ISM (2400-2550MHz) active/reactive coverage.",
    challenge:
      "Wide-spectrum remote threat devices operating across HF, VHF, UHF, cellular, and ISM bands required an integrated multi-band solution capable of both VCO continuous sweep and active/reactive jamming.",
    solution: [
      "Architected a 3-band wideband RF suppression stage: Band 1 (20-100MHz), Band 2 (100-200MHz), and Band 3 (200-500MHz).",
      "Integrated cellular GSM (2G, 3G, 4G & LTE) and ISM (2400-2550 MHz) countermeasure sub-modules.",
      "Configured dual operational variants: Green Arrow 100 (VCO Sweep) and Green Arrow 101 (Active and Reactive).",
      "Protected with automatic thermal foldback and VSWR mismatch circuitry.",
    ],
    results: [
      "Comprehensive multi-octave RF suppression across 20 MHz to 2550 MHz in a single modular sub-rack.",
      "Tested and deployed in demanding operational installations with 100% reliability.",
      "Flexible active sweep and signal-triggered reactive modes for power conservation.",
    ],
    technologies: ["20-500 MHz (3 Bands)", "GSM & LTE", "ISM 2400-2550 MHz", "Active/Reactive Modes", "VSWR Protection"],
    quote: "The Green Arrow 100/101 modules delivered unparalleled multi-band coverage for our electronic warfare stations.",
  },
  "digital-directional-finder": {
    title: "Digital Directional Finder (DF)",
    client: "Signal Intelligence & Tracking",
    industry: "Signal Intelligence (SIGINT)",
    metric: "5 km",
    metricLabel: "Direction Finding Radius",
    summary: "Tactical direction finding system for VHF & UHF frequencies with omni-directional antenna array and AC power for hostile RF localization.",
    challenge:
      "Locating unauthorized or hostile radio transmitters across dense urban or rugged mountain terrain requires high-sensitivity direction finding with wide operational radius.",
    solution: [
      "Constructed a multi-element omni-directional antenna array for precision phase and amplitude interferometry.",
      "Calibrated high-speed digital receiver processing VHF and UHF signals across the spectrum.",
      "Integrated AC mains power for continuous base station or command post operations.",
      "Delivers real-time bearing angle and signal strength telemetry to field operators.",
    ],
    results: [
      "Accurate emitter bearing detection across an operational radius up to 5 kilometers.",
      "High angular resolution for VHF and UHF communications interception.",
      "Robust immunity against multipath signal reflections in complex terrain.",
    ],
    technologies: ["5 km DF Radius", "Omni-Directional Array", "VHF & UHF Receiver", "AC Power Supply", "Bearing Calculation"],
    quote: "The Digital Directional Finder pinpointed unauthorized RF emitters with remarkable bearing accuracy up to 5 kilometers away.",
  },
  "jammer-testing-device": {
    title: "Jammer Testing & Validation Device",
    client: "Field Maintenance & Testing Depots",
    industry: "Diagnostic & Calibration Hardware",
    metric: "20-500 MHz",
    metricLabel: "Programmable Spectrum",
    summary: "Precision test set with 1x transmitter and 1x receiver covering 20-500 MHz and 2400-2520 MHz with 25m test separation and 2-hour battery.",
    challenge:
      "Field maintenance teams in forward tactical positions lacked test sets to verify whether deployed countermeasure units were transmitting correct frequencies and expected power levels.",
    solution: [
      "Engineered an integrated diagnostic set comprising 1x calibrated transmitter and 1x receiver unit.",
      "Equipped with programmable frequency coverage spanning 20-500 MHz and the 2400-2520 MHz ISM band.",
      "Designed for calibrated operational testing with a transmitter-to-receiver test separation of 25 meters.",
      "Powered by internal rechargeable batteries providing 2 hours of continuous bench or field testing.",
    ],
    results: [
      "Enables rapid 60-second go/no-go verification of all deployed countermeasure modules.",
      "Eliminates dependency on fragile laboratory bench analyzers in forward tactical depots.",
      "Accurate power and frequency readouts ensuring mission readiness before deployment.",
    ],
    technologies: ["1x TX + 1x RX", "20-500 MHz", "ISM 2400-2520 MHz", "25m Range", "2h Battery Life"],
    quote: "This testing device eliminated all uncertainty from our pre-mission countermeasure readiness checks.",
  },
};

export function generateStaticParams() {
  return [
    { slug: "drone-jammer-handheld" },
    { slug: "drone-jammer-static" },
    { slug: "alpha-fire-pak-1" },
    { slug: "stos-dds-jammer" },
    { slug: "alpha-fire-vehicle-mount" },
    { slug: "green-arrow-ism" },
    { slug: "green-arrow-100-101" },
    { slug: "digital-directional-finder" },
    { slug: "jammer-testing-device" },
  ];
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA[slug] || {
    title: `${slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} Tactical System`,
    client: "Strategic Defense & Industry",
    industry: "Hardware & RF Engineering",
    metric: "100%",
    metricLabel: "Mission Performance",
    summary: "Indigenous hardware and RF electronic countermeasure system engineered by Haalar Services.",
    challenge: "The operational requirement required specialized electronic architecture engineered to IPC standards.",
    solution: [
      "Designed high-density multi-layer PCB and precision RF stages.",
      "Manufactured mil-spec aluminum enclosure with environmental sealing.",
      "Subjected to 100% benchtop spectrum and environmental testing.",
    ],
    results: [
      "Complete mission-readiness in operational field testing.",
      "Indigenous design and 100% sovereign lifecycle support.",
      "Zero dependency on foreign modules.",
    ],
    technologies: ["Altium Designer", "RF Engineering", "IPC-A-610 Class 3", "CNC Milling"],
    quote: "Haalar Services delivered tactical reliability and exceptional engineering execution.",
  };

  return (
    <div className="bg-white">
      <PageHeader
        badge={study.industry}
        title={study.title}
        description={study.summary}
        breadcrumbs={[{ label: "Products & Portfolio", href: "/portfolio" }, { label: study.title }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Challenge */}
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                01 · The Operational Challenge
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Operational Context & Requirements
              </h2>
              <p className="text-neutral-600 mt-4 text-base leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                02 · The Engineering Solution
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Hardware Architecture & Specifications
              </h2>
              <div className="space-y-3 mt-4">
                {study.solution.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-neutral-800">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Results */}
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                03 · Tactical Outcomes
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Field-Verified Specifications
              </h2>
              <ul className="space-y-3 mt-4">
                {study.results.map((res, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-emerald-950 font-bold text-sm">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            {study.quote && (
              <div className="p-8 rounded-3xl bg-neutral-950 text-white space-y-4 border border-neutral-800">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-lg italic text-neutral-200">
                  &quot;{study.quote}&quot;
                </blockquote>
                <span className="text-xs text-[#f54545] font-bold block">
                  — Feedback, {study.client}
                </span>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-950 text-white rounded-3xl p-8 border border-neutral-800 shadow-xl text-center">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold block mb-1">
                Primary Metric
              </span>
              <div className="text-5xl font-extrabold text-white my-3 tracking-tight">
                {study.metric}
              </div>
              <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                {study.metricLabel}
              </span>
            </div>

            {/* Technologies */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
              <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-neutral-500 mb-4">
                Key Features & Standards
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-neutral-800 border border-neutral-200 shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-900 text-white space-y-4">
              <h4 className="font-bold text-base text-white">Have a specific tactical requirement?</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We formulate custom RF parameters, design multi-layer PCBs, and manufacture specialized electronic countermeasures to IPC-A-610 Class 3 standards.
              </p>
              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-all btn-glow-breath"
              >
                <span>Consult with Haalar Engineers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
