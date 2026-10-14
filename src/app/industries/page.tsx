import Link from "next/link";
import { ArrowUpRight, Shield, Plane, Radio, Factory, Truck, Landmark, ShieldCheck, ArrowRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const INDUSTRIES_DATA = [
  {
    slug: "defense",
    title: "Defense & National Security",
    icon: Shield,
    badge: "Military Standard",
    desc: "Indigenous tactical electronic countermeasures, Counter-UAS drone mitigation, Direct Digital Synthesis (DDS) sweepers, and secure mission-critical hardware.",
    useCases: [
      "Counter-UAS Drone Neutralization",
      "VIP Convoy RCIED Countermeasures",
      "Tactical Directional Jamming",
      "Air-Gapped Sovereign Hardware R&D",
    ],
    clientProof: "Alpha Fire PAK-1 · STOS DDS Jammer Stations",
    color: "from-red-500/10 to-neutral-900/40",
  },
  {
    slug: "aerospace",
    title: "Aerospace & Avionics",
    icon: Plane,
    badge: "IPC Class 3",
    desc: "High-reliability ruggedized electronics, telemetry interfaces, and printed circuit board assemblies engineered to withstand extreme vibration and thermal cycling.",
    useCases: [
      "High-G Vibration Resilient Assemblies",
      "Avionics Power Conditioning & Filtering",
      "Telemetry Transceiver Modules",
      "Mil-Spec Thermal Conformal Protection",
    ],
    clientProof: "IPC-A-610 Class 3 High-Reliability Assemblies",
    color: "from-blue-500/10 to-neutral-900/40",
  },
  {
    slug: "telecom",
    title: "Telecommunications & RF Systems",
    icon: Radio,
    badge: "High-Power RF",
    desc: "Wideband GaN power amplifiers, Direct Digital Synthesis frequency sweepers, custom cavity filters, and high-efficiency antenna array systems.",
    useCases: [
      "Wideband GaN RF Power Amplifiers",
      "VCO & Direct Digital Synthesis Generators",
      "Antenna Array Impedance Matching",
      "GHz Spectrum Harmonic Filtering",
    ],
    clientProof: "Green Arrow ISM & Wideband RF Modules",
    color: "from-amber-500/10 to-neutral-900/40",
  },
  {
    slug: "industrial",
    title: "Industrial & OEM Electronics",
    icon: Factory,
    badge: "Continuous Uptime",
    desc: "Turnkey controller manufacturing, component-level diagnostic repair, and drop-in reverse engineering for obsolete industrial electronic systems.",
    useCases: [
      "Form-Fit-Function PLC Replacements",
      "Component-Level Failure Analysis",
      "High-Voltage Power Regulation Modules",
      "Micro-Soldering & BGA Refurbishment",
    ],
    clientProof: "Modernized High-Value Industrial Systems",
    color: "from-emerald-500/10 to-neutral-900/40",
  },
  {
    slug: "fleet",
    title: "Fleet, Transport & Logistics",
    icon: Truck,
    badge: "Vehicle Tactical",
    desc: "Rugged vehicle-mounted electronic countermeasure stations, tactical antenna masts, and heavy-duty 24V/28V vehicle alternator power conditioning.",
    useCases: [
      "24V/28V Alternator Power Conditioning",
      "Roof Mast Shock-Absorbing Mounts",
      "In-Cabin Telemetry & Remote Control",
      "Harsh Desert Heat Dissipation",
    ],
    clientProof: "Alpha Fire Vehicle Mount Protection Stations",
    color: "from-purple-500/10 to-neutral-900/40",
  },
  {
    slug: "infrastructure",
    title: "Critical Infrastructure Protection",
    icon: Landmark,
    badge: "Perimeter Defense",
    desc: "Facility-wide electromagnetic perimeter defense, active and reactive frequency suppression, and sovereign air-gapped facility protection.",
    useCases: [
      "Perimeter Frequency Mitigation",
      "Active / Reactive Frequency Jamming",
      "Air-Gapped Facility Hardening",
      "24/7 Continuous Countermeasure Operation",
    ],
    clientProof: "Strategic Perimeter Stations (90m - 200m Coverage)",
    color: "from-rose-500/10 to-neutral-900/40",
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      <PageHeader
        badge="Strategic Sectors"
        title="Six Mission-Critical Verticals. One Engineering"
        highlightText="Partner."
        description="We tailor electronic assemblies, RF countermeasure systems, and PCB reverse engineering to the exact operational constraints, vibration tolerances, and military standards of your industry."
        breadcrumbs={[{ label: "Industries" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.slug}
                className={`rounded-3xl p-8 border border-neutral-200 bg-gradient-to-br ${ind.color} hover-card-elevate flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-2xl bg-white shadow-xs border border-neutral-200 text-[#f54545] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-neutral-800 border border-neutral-200">
                      {ind.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-neutral-900">
                    {ind.title}
                  </h2>

                  <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                    {ind.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-200/60">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold block mb-3">
                      Core Mission Focus
                    </span>
                    <ul className="space-y-2">
                      {ind.useCases.map((uc, i) => (
                        <li key={i} className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-[#f54545] shrink-0" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 p-3 rounded-xl bg-white/90 border border-neutral-200/80">
                    <span className="text-[11px] text-neutral-500 block">Demonstrated Proof:</span>
                    <span className="text-xs font-bold text-neutral-900">{ind.clientProof}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200/60 flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#f54545] hover:text-[#a50e19] transition-colors"
                  >
                    <span>Explore Specifications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Military & Industrial Standards Callout */}
      <section className="py-16 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#f54545] font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>IPC-A-610 Class 3 & Military Reliability Standards</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Operating in High-Stakes or Harsh Field Environments?
            </h3>
            <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
              We engineer under strict physical non-disclosure agreements, apply mil-spec conformal coatings, and deliver 100% bench-tested hardware with Certificates of Conformance.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-full bg-[#f54545] text-white text-sm font-bold hover:bg-[#e03535] transition-all btn-glow-breath shrink-0 flex items-center gap-2"
          >
            <span>Request Technical Capability Brief</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
