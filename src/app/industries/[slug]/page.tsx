import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const INDUSTRY_PROFILES: Record<
  string,
  {
    title: string;
    badge: string;
    subtitle: string;
    overview: string;
    regulations: string[];
    useCases: { title: string; desc: string }[];
    caseStudyRef: string;
  }
> = {
  defense: {
    title: "Defense & National Security Engineering",
    badge: "Military Standard",
    subtitle: "Tactical RF countermeasures, Counter-UAS drone neutralization, and sovereign hardware R&D.",
    overview:
      "Modern defense forces require indigenous electronic countermeasure equipment that operates reliably under harsh tactical conditions without relying on foreign OEM supply chains. Haalar Services designs and manufactures hand-held, vehicle-mounted, and base-station countermeasure systems engineered for immediate drone disruption and tactical frequency suppression.",
    regulations: [
      "IPC-A-610 Class 3 High-Reliability Standards",
      "Mil-Spec Shock & Environmental Vibration Tolerance",
      "Air-Gapped Sovereign Hardware Facility Protocols",
      "Classified Physical Security & Non-Disclosure Governance",
    ],
    useCases: [
      { title: "Counter-UAS Drone Neutralization", desc: "Instantly sever hostile commercial and tactical drone command links, video downlinks, and GNSS navigation signals." },
      { title: "Tactical Directional Countermeasures", desc: "Equip forward infantry units with directional handheld jamming systems delivering 90m+ effective mitigation." },
      { title: "VIP Convoy RCIED Protection", desc: "Deploy vehicle-mounted multi-band electronic jamming umbrellas shielding motorcades against remote-controlled improvised explosive devices." },
    ],
    caseStudyRef: "Alpha Fire PAK-1 Handheld Jammer & Alpha Fire Vehicle Mount Station",
  },
  aerospace: {
    title: "Aerospace & Avionics Electronics",
    badge: "IPC Class 3",
    subtitle: "Ruggedized electronics, high-G telemetry boards, and extreme thermal cycling resilience.",
    overview:
      "Avionics and aerospace payloads face high-G shocks, rapid atmospheric pressure transitions, and wide thermal fluctuations. Haalar Services manufactures printed circuit board assemblies conforming to IPC-A-610 Class 3 with precision conformal coating and environmental qualification.",
    regulations: [
      "IPC-A-610 Class 3 Aerospace Assembly Standards",
      "Thermal Cycling & High-G Shock Testing",
      "Mil-Spec Silicone / Acrylic Conformal Coating",
      "Full Component Traceability & Certificates of Conformance",
    ],
    useCases: [
      { title: "High-G Vibration Resilient Assemblies", desc: "Engineered trace routing and component staking to survive intense launch, thrust, and atmospheric turbulence." },
      { title: "Avionics Power Conditioning", desc: "Low-noise, surge-protected DC-to-DC regulation protecting sensitive digital controllers from alternator spikes." },
      { title: "Telemetry & Sensor Transceiver Modules", desc: "Compact RF transceivers transmitting telemetry and sensor data under extreme electromagnetic noise." },
    ],
    caseStudyRef: "IPC-A-610 Class 3 Certified Module Production for Aerospace Units",
  },
  telecom: {
    title: "Telecommunications & RF Systems",
    badge: "High-Power RF",
    subtitle: "Wideband power amplifiers, Direct Digital Synthesis (DDS), and precision antenna tuning.",
    overview:
      "In congested RF environments, signal purity, power efficiency, and harmonic suppression are paramount. Haalar Services engineers custom power amplifier stages using modern GaN and LDMOS transistors, combined with Direct Digital Synthesis sweepers and cavity filters.",
    regulations: [
      "GHz Spectrum Purity & Harmonic Suppression Standards",
      "VSWR Mismatch Protection Circuitry",
      "Thermal Convection & Heat Sink CFD Qualification",
      "Electromagnetic Compatibility (EMC) Shielding",
    ],
    useCases: [
      { title: "High-Power RF Amplifier Stages", desc: "Design and fabrication of GaN-based power modules providing 50W+ continuous RF output with >45% power efficiency." },
      { title: "Direct Digital Synthesis (DDS) Modulation", desc: "Programmable high-speed frequency sweeping with sub-microsecond hopping and ultra-low phase noise." },
      { title: "Precision Cavity & Bandpass Filtering", desc: "Sharply notched bandpass filters preventing spurious out-of-band bleed into adjacent civilian bands." },
    ],
    caseStudyRef: "Green Arrow ISM Band (2.4 GHz) & STOS DDS Multi-Channel Jammer",
  },
  industrial: {
    title: "Industrial & OEM Electronics",
    badge: "Continuous Uptime",
    subtitle: "Turnkey controller manufacturing, PCB reverse engineering, and lifecycle repair for high-value machinery.",
    overview:
      "When legacy industrial automation equipment fails and the original equipment manufacturer no longer supports discontinued modules, entire production lines are jeopardized. We reverse engineer obsolete controller boards and perform component-level micro-soldering to restore continuous 24/7 uptime.",
    regulations: [
      "Industrial Continuous-Operation Standards",
      "Component-Level Failure Analysis Protocols",
      "Drop-In Form-Fit-Function Compatibility",
      "Extended 72-Hour Burn-In Quality Testing",
    ],
    useCases: [
      { title: "Form-Fit-Function Drop-In Replacements", desc: "Fabricating modern pin-compatible controller boards that plug directly into existing factory backplanes." },
      { title: "Component-Level Diagnostic Repair", desc: "Using thermal imaging, curve tracing, and micro-soldering to isolate and replace damaged fine-pitch components." },
      { title: "Custom OEM Electronics Production", desc: "Turnkey SMD assembly and conformal coating for industrial sensor hubs and power regulation units." },
    ],
    caseStudyRef: "Form-Fit-Function Modernization of Obsolete Industrial Control Hardware",
  },
  fleet: {
    title: "Fleet, Transport & Logistics",
    badge: "Vehicle Tactical",
    subtitle: "Rugged vehicle-mounted electronic stations, tactical antenna masts, and heavy-duty DC power conditioning.",
    overview:
      "Vehicle electrical systems produce severe voltage transients, alternator spikes, and load dumps. Haalar Services engineers vehicle-mounted electronic countermeasure stations and tracking hardware with multi-stage input conditioning and vibration-absorbing roof mounts.",
    regulations: [
      "Automotive & Tactical 24V/28V Transient Protection",
      "Mil-Spec Roof-Mount Vibration & Shock Damping",
      "IP67 Dust & Water Weather Resistance",
      "Extended Ambient Desert Convection Rating (55°C+)",
    ],
    useCases: [
      { title: "Alternator Load Dump Conditioning", desc: "Active overvoltage clamping circuitry safeguarding sensitive RF modules from vehicle electrical surges." },
      { title: "Tactical Roof Mast Integration", desc: "Reinforced spring-loaded antenna masts designed to endure severe off-road vibration and tree strikes." },
      { title: "In-Cabin Remote Telemetry Control", desc: "Driver-accessible dashboard consoles with instant band isolation buttons and LED status monitors." },
    ],
    caseStudyRef: "Alpha Fire Vehicle Mount Station for Convoy Protection",
  },
  infrastructure: {
    title: "Critical Infrastructure Protection",
    badge: "Perimeter Defense",
    subtitle: "Facility-wide electromagnetic shielding, frequency mitigation, and continuous perimeter protection.",
    overview:
      "Critical government buildings, sensitive research laboratories, and sovereign infrastructure require complete protection against unauthorized airborne observation and remote electronic triggers. Haalar Services designs stationary perimeter countermeasure stations providing spherical exclusion zones up to 200m.",
    regulations: [
      "24/7 Continuous Operation Reliability Certification",
      "Air-Gapped Facility Hardening & Security",
      "Non-Interference with Essential Services Filtering",
      "Strict Physical Access Non-Disclosure Protocols",
    ],
    useCases: [
      { title: "Perimeter Frequency Mitigation", desc: "Establishing spherical exclusion zones preventing unauthorized drone entry and wireless data exfiltration." },
      { title: "Active / Reactive Jamming Integration", desc: "Switching between continuous defensive carrier sweep and reactive burst transmission upon signal detection." },
      { title: "Sovereign Air-Gapped Infrastructure", desc: "All hardware developed and assembled indigenously with zero foreign backdoors or telemetric links." },
    ],
    caseStudyRef: "Stationary RF Countermeasure Installation (70m - 200m Coverage)",
  },
};

export function generateStaticParams() {
  return [
    { slug: "defense" },
    { slug: "aerospace" },
    { slug: "telecom" },
    { slug: "industrial" },
    { slug: "fleet" },
    { slug: "infrastructure" },
  ];
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = INDUSTRY_PROFILES[slug] || {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Hardware Engineering`,
    badge: "Target Vertical",
    subtitle: "Advanced electronic systems, RF countermeasures, and turnkey manufacturing tailored to industry standards.",
    overview:
      "Haalar Services designs bespoke hardware solutions tailored to the operational realities, mechanical constraints, and reliability standards of this industry.",
    regulations: [
      "IPC-A-610 Class 3 Standards",
      "Mil-Spec Environmental Testing",
      "Sovereign In-House Manufacturing",
      "Strict NDA & Facility Security",
    ],
    useCases: [
      { title: "Turnkey Hardware Engineering", desc: "From operational requirement to validated bench prototype and pilot manufacturing batch." },
      { title: "Reverse Engineering & Lifecycle Modernization", desc: "Drop-in form-fit-function replacement for obsolete electronic assemblies." },
    ],
    caseStudyRef: "Deployed across defense, aerospace, and industrial installations.",
  };

  return (
    <div className="bg-white">
      <PageHeader
        badge={profile.badge}
        title={profile.title}
        description={profile.subtitle}
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: profile.badge }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                Operational Context
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Industry-Specific Engineering
              </h2>
              <p className="text-neutral-600 mt-4 text-base leading-relaxed">
                {profile.overview}
              </p>
            </div>

            {/* High-Impact Use Cases */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Key Production Workflows
              </h3>
              <div className="space-y-4">
                {profile.useCases.map((uc, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                    <h4 className="font-bold text-neutral-900 text-lg">{uc.title}</h4>
                    <p className="text-neutral-600 text-sm mt-2 leading-relaxed">{uc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory Safeguards */}
            <div className="pt-6 border-t border-neutral-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Quality Standards & Compliance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.regulations.map((reg, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-neutral-200">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-neutral-800">{reg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-950 text-white rounded-3xl p-8 border border-neutral-800 shadow-xl">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold block mb-2">
                Proven Track Record
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Demonstrated Deployment
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                {profile.caseStudyRef}
              </p>

              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-all btn-glow-breath"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
