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
  "alpha-fire-pak-1": {
    title: "Alpha Fire Handheld Jammer PAK-1",
    client: "Tactical Defense Units",
    industry: "Defense & Counter-UAS",
    metric: "90m+",
    metricLabel: "Effective Jamming Radius",
    summary: "Compact, battery-operated multi-frequency handheld defense countermeasure with directional antenna array and 2-hour continuous battery life.",
    challenge:
      "Operational field units required a lightweight, single-operator directional countermeasure capable of instantly disrupting unauthorized commercial and tactical drones without relying on cumbersome external generators or bulky backpacks.",
    solution: [
      "Engineered a high-efficiency dual spot frequency RF power amplifier stage delivering concentrated directional disruption.",
      "Integrated a lightweight high-energy-density Li-Ion battery pack providing 2 hours of continuous active transmission.",
      "Designed an ergonomic CNC aluminum chassis with integrated heatsink fins for rapid thermal convection in desert conditions.",
      "Calibrated directional antenna array offering tight forward beamwidth and high front-to-back isolation.",
    ],
    results: [
      "Reliable neutralization of target control and GNSS telemetry at ranges exceeding 90 meters.",
      "Total system weight kept under 3.8 kg for single-handed rapid deployment.",
      "Zero operational thermal throttles during rigorous 50°C chamber environmental stress tests.",
    ],
    technologies: ["RF Power Amplifier", "Directional Array", "Li-Ion Management", "CNC Anodized Enclosure", "IPC-A-610 Class 3"],
    quote: "The PAK-1 delivered instant neutralization and flawless tactical ergonomics during demanding field trials.",
  },
  "stos-dds-jammer": {
    title: "STOS Direct Digital Synthesis (DDS) Jammer",
    client: "Strategic Installation Command",
    industry: "RF & Electronic Systems",
    metric: "70m",
    metricLabel: "Effective Protection Radius",
    summary: "Advanced DDS multi-channel frequency sweeping countermeasure module with 12V DC power input and precision dual-antenna transmission.",
    challenge:
      "Standard analog VCO jammers suffer from frequency drift under temperature extremes, leaving critical RF holes in perimeter defense. The client needed mathematically precise, rapid frequency hopping across wide operational bands.",
    solution: [
      "Architected a Direct Digital Synthesis (DDS) core driven by an FPGA controller with a programmable sweep window of -25 MHz.",
      "Implemented a dual-antenna configuration to maximize spatial coverage and phase diversity.",
      "Integrated wide-voltage 12V DC power conditioning with reverse polarity and overvoltage suppression.",
      "Engineered multi-stage bandpass and harmonic suppression filters to prevent out-of-band spurious emissions.",
    ],
    results: [
      "Consistent 70-meter spherical protective bubble around sensitive communication and command assets.",
      "Sub-microsecond frequency switching speed with zero observable frequency drift over 24-hour continuous operations.",
      "Seamless integration with vehicle electrical feeds or standalone battery banks.",
    ],
    technologies: ["Direct Digital Synthesis (DDS)", "FPGA Controller", "Dual-Antenna Topology", "12V DC Conditioning", "Spectrum Tuning"],
    quote: "Haalar Services' DDS architecture achieved precision frequency control that conventional VCO units simply cannot match.",
  },
  "alpha-fire-vehicle-mount": {
    title: "Alpha Fire Vehicle Mount Station",
    client: "VIP Escort & Tactical Convoy",
    industry: "Mobile Tactical Countermeasures",
    metric: "200m+",
    metricLabel: "Convoy Protection Perimeter",
    summary: "High-power tactical vehicle-mounted system engineered for VIP convoy protection and perimeter defense with wideband multi-frequency suppression.",
    challenge:
      "Protecting mobile VIP convoys from remote-controlled improvised explosive devices (RCIEDs) and hostile drone swarms while drawing power reliably from standard military vehicle 24V/28V alternators.",
    solution: [
      "Engineered ultra-high-power RF power amplifiers delivering continuous wideband suppression across multiple tactical frequency bands.",
      "Fabricated heavy-duty roof-mounted omni-directional antenna masts tested against extreme road shock and vibration.",
      "Integrated intelligent DC power conditioning with active load-dump protection and secondary backup battery buffer.",
      "Installed a ruggedized in-cabin driver remote control unit with LED status telemetry and emergency band isolation.",
    ],
    results: [
      "Proven 200m+ defensive perimeter shielding lead and escort convoy vehicles simultaneously.",
      "Passed mil-spec environmental vibration, salt-fog, and thermal shock compliance tests.",
      "Zero interference with convoy encrypted UHF communications via sharp notch filtering.",
    ],
    technologies: ["Wideband GaN PAs", "Vehicle Alternator Integration", "Omni-Directional Mast", "In-Cabin Remote", "Mil-Spec Shock Mounts"],
    quote: "The vehicle mount station gave our motorcades uncompromised protection across thousands of kilometers of high-risk territory.",
  },
  "green-arrow-ism": {
    title: "Green Arrow (ISM Band) Module",
    client: "Perimeter Frequency Mitigation",
    industry: "RF & Electronic Systems",
    metric: "2.4 GHz",
    metricLabel: "ISM Suppression Band",
    summary: "Specialized ISM band jamming module (2400-2520 MHz) with configurable bandwidth, 80m disruption radius, and rugged aluminum heat sink.",
    challenge:
      "High density of commercial Wi-Fi, Bluetooth, and digital video transmitters operating in the crowded 2.4 GHz ISM band required targeted, highly focused suppression without bleeding into civilian cellular communications.",
    solution: [
      "Tuned VCO and high-speed modulation circuit strictly bounded between 2400 MHz and 2520 MHz.",
      "Configurable active continuous sweep and reactive burst transmission modes.",
      "Extruded aerospace-grade aluminum finned heatsink with integrated low-noise high-static-pressure cooling fans.",
      "Standard SMA RF connectors for modular drop-in into existing tactical rack frames.",
    ],
    results: [
      "Immediate severance of 2.4 GHz digital video downlinks within an 80-meter operational radius.",
      "Exceptional power efficiency exceeding 45% DC-to-RF conversion ratio.",
      "Modular form factor allowing multi-unit aggregation for omni-directional arrays.",
    ],
    technologies: ["2.4 GHz VCO", "GaN Power Transistors", "Finned Alloy Heatsink", "SMA RF Interfaces", "Active/Reactive Modes"],
    quote: "Haalar Services provided an impeccably tuned module that solved our 2.4 GHz isolation requirements within two weeks.",
  },
  "green-arrow-100-101": {
    title: "Green Arrow 100 / 101 Jammer Modules",
    client: "Tactical Electronic Formations",
    industry: "RF Systems",
    metric: "50W+",
    metricLabel: "RF Output Power",
    summary: "Modular high-power RF disruption units engineered for wideband VHF/UHF suppression, equipped with automatic thermal shutdown and VSWR mismatch protection.",
    challenge:
      "Harsh field environments frequently subject antenna cables to damage, causing dangerous reflected RF power (high VSWR) that incinerates expensive output transistors in traditional amplifiers.",
    solution: [
      "Integrated dual-directional couplers and an automated microsecond VSWR foldback circuit that protects the power stage under open or shorted antenna loads.",
      "Built-in thermal sensors triggering proportional power attenuation before critical junction temperatures are reached.",
      "Standardized 19-inch rack-mount sub-chassis architecture for simple swapping and field maintenance.",
    ],
    results: [
      "Uninterrupted 50W+ continuous RF output with zero transistor failures during open-antenna torture testing.",
      "Over 40 modules deployed in high-temperature base stations with 100% operational availability.",
      "Form-fit-function compatibility with legacy tactical enclosures.",
    ],
    technologies: ["VSWR Protection Circuitry", "Thermal Foldback", "VHF/UHF GaN Stages", "Modular 19-inch Sub-Chassis"],
    quote: "The built-in VSWR protection saved our equipment multiple times when antenna feeds suffered physical damage in the field.",
  },
  "jammer-testing-device": {
    title: "Jammer Testing & Validation Device",
    client: "Field Maintenance & Logistics Depots",
    industry: "Diagnostic Hardware",
    metric: "100%",
    metricLabel: "Bench Calibration Accuracy",
    summary: "Portable diagnostic and calibration test set enabling field engineers to verify RF power output, frequency accuracy, and harmonic integrity across jammer modules.",
    challenge:
      "Field maintenance teams lacked laboratory-grade spectrum analyzers in forward tactical positions, making it impossible to determine if a deployed module's output power or frequency calibration had degraded over time.",
    solution: [
      "Developed a handheld, battery-powered diagnostic receiver with calibrated internal RF attenuators and wideband power detectors.",
      "Integrated an intuitive OLED display showing exact center frequency, bandwidth spread, and measured power output in dBm and Watts.",
      "Equipped with go/no-go automated pass/fail thresholds tailored to Haalar countermeasure product lines.",
    ],
    results: [
      "Reduced routine module diagnostic inspection time from 45 minutes down to under 60 seconds per unit.",
      "Empowered non-specialist tactical personnel to verify operational readiness before missions.",
      "Calibrated against laboratory Keysight analyzers with +/- 0.5 dB measurement repeatability.",
    ],
    technologies: ["Wideband Power Detection", "Internal High-Power Attenuator", "OLED Telemetry", "Embedded Calibration Tables"],
    quote: "This diagnostic unit became mandatory kit for our technicians, eliminating all guesswork about module performance.",
  },
};

export function generateStaticParams() {
  return [
    { slug: "alpha-fire-pak-1" },
    { slug: "stos-dds-jammer" },
    { slug: "alpha-fire-vehicle-mount" },
    { slug: "green-arrow-ism" },
    { slug: "green-arrow-100-101" },
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
    title: `${slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} System`,
    client: "Strategic Defense & Industry",
    industry: "Hardware Engineering",
    metric: "100%",
    metricLabel: "Operational Performance",
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
      "Zero dependency on obsolete foreign modules.",
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
                Requirements & Constraints
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
                Hardware & RF Architecture
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
                Field-Verified Results
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
                Primary Specification
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
                Engineering Stack & Standards
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
                We can formulate custom RF specifications, conduct PCB reverse engineering, or manufacture specialized electronic modules to IPC-A-610 standards.
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
