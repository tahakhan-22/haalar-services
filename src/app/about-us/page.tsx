import Link from "next/link";
import { ShieldCheck, Star, Users, Award, MapPin, ArrowRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const PRINCIPLES = [
  {
    title: "AI-Native, Not Prompt Wrappers",
    desc: "We don't build toys. We build autonomous agentic workflows, deterministic evaluation suites, and scalable microservices that stand up to enterprise compliance standards.",
  },
  {
    title: "Proof in Production in 14 Days",
    desc: "Long spec documents don't validate products — running code does. We deliver an interactive, production-grade proof of concept in two weeks to validate latency and accuracy.",
  },
  {
    title: "Compliance & Security by Default",
    desc: "From healthcare HIPAA BAA protocols to SOC 2 Type II audit logs and zero-data-retention endpoints, security is engineered from the first commit.",
  },
  {
    title: "You Own 100% of Intellectual Property",
    desc: "Zero licensing lock-in. Full access to repositories, infrastructure terraform scripts, model weights, and clean documentation upon every milestone.",
  },
];

const OFFICES = [
  { city: "Austin, Texas (HQ)", address: "Downtown Technology Hub", focus: "Executive Leadership & Solutions Architecture" },
  { city: "New York, NY", address: "Manhattan Engineering Pod", focus: "Enterprise LegalTech & FinTech Delivery" },
  { city: "San Francisco, CA", address: "Bay Area Labs", focus: "Foundation Models & Agentic AI Research" },
  { city: "Chicago, IL", address: "Loop Innovation Center", focus: "Logistics & Supply Chain Automation" },
  { city: "London, UK", address: "Shoreditch Tech Hub", focus: "EMEA Operations & GDPR Governance" },
  { city: "Karachi, Pakistan", address: "Clifton Technology Park", focus: "Full-Stack Engineering & 24/7 Operations" },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        badge="Company Overview"
        title="We are Kodexo Labs — The AI-Native"
        highlightText="Development Partner."
        description="Founded in 2021, Kodexo Labs is a specialized software engineering firm building web, mobile, and agentic AI systems for mid-market and enterprise organizations."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Story & Mission Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Our Origin Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Bridging the Gap Between Cutting-Edge AI Research & Production Engineering
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              In 2021, Kodexo Labs was founded on a simple observation: mid-market enterprises were being left behind. Large consultancies charged millions for slow theoretical decks, while traditional dev shops lacked the machine learning depth to build reliable production AI.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed">
              We assembled a team of senior software architects, AI researchers, and full-stack builders who treat engineering as a craft. Today, we have shipped 51 production AI systems across 25+ industries, recognized as a <strong>Clutch Elite AI Firm</strong> with a 4.9/5 client satisfaction rating.
            </p>

            <div className="pt-4 flex flex-wrap gap-6 border-t border-neutral-100">
              <div>
                <span className="text-3xl font-extrabold text-neutral-900">51</span>
                <p className="text-xs text-neutral-500 font-semibold mt-0.5">Shipped to Production</p>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-[#f54545]">4.9★</span>
                <p className="text-xs text-neutral-500 font-semibold mt-0.5">Top-Rated on Clutch</p>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-neutral-900">6</span>
                <p className="text-xs text-neutral-500 font-semibold mt-0.5">Global Office Hubs</p>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-neutral-900">2021</span>
                <p className="text-xs text-neutral-500 font-semibold mt-0.5">Founded in Austin, TX</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-neutral-950 text-white p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              <h3 className="text-lg font-bold text-white">Clutch Elite AI Firm 2025</h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              &quot;Kodexo Labs delivered our clinical AI engine in record time. Their architectural thoroughness around HIPAA compliance and latency optimization was exceptional.&quot;
            </p>
            <div className="border-t border-neutral-800 pt-4 flex items-center justify-between text-xs text-neutral-400">
              <span>Verified Client Review</span>
              <span className="text-white font-bold">14 Reviews (100% 5-Star)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Engineering DNA
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

      {/* Global Offices */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
            Worldwide Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-2">
            Global Engineering Presence
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3">
            Providing around-the-clock development and synchronous timezone collaboration across North America and Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICES.map((off, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-neutral-200 hover:border-[#f54545]/40 transition-colors bg-white">
              <div className="flex items-center gap-2 mb-2 text-[#f54545]">
                <MapPin className="w-4 h-4" />
                <h3 className="font-bold text-neutral-900 text-base">{off.city}</h3>
              </div>
              <p className="text-xs font-semibold text-neutral-500">{off.address}</p>
              <p className="text-xs text-neutral-600 mt-2 pt-2 border-t border-neutral-100">{off.focus}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
