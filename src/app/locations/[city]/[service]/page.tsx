import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const CITY_NAMES: Record<string, string> = {
  "austin-tx": "Austin, Texas",
  "new-york": "New York, NY",
  "san-francisco-ca": "San Francisco, CA",
  "chicago-il": "Chicago, IL",
  "london-uk": "London, United Kingdom",
  "los-angeles-ca": "Los Angeles, CA",
  "miami-fl": "Miami, FL",
};

export function generateStaticParams() {
  return [
    { city: "austin-tx", service: "custom-software-development" },
    { city: "new-york", service: "mobile-app-development" },
    { city: "new-york", service: "custom-software-development" },
    { city: "san-francisco-ca", service: "mobile-app-development" },
    { city: "chicago-il", service: "custom-software-development" },
    { city: "london-uk", service: "custom-software-development" },
  ];
}

export default async function LocationServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city, service } = await params;
  const cityName = CITY_NAMES[city] || city.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const serviceName = service.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge={`Local Hub · ${cityName}`}
        title={`${serviceName} in`}
        highlightText={cityName}
        description={`Enterprise-grade software and AI systems engineered by Kodexo Labs for mid-market and growth-stage companies in ${cityName}.`}
        breadcrumbs={[{ label: "Locations" }, { label: cityName }, { label: serviceName }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                Regional Engineering Pod
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Why Companies in {cityName} Partner with Kodexo Labs
              </h2>
              <p className="text-neutral-600 mt-4 text-base leading-relaxed">
                Whether you need to architect an autonomous multi-agent system, build an offline-first mobile application, or modernize monolithic databases, our engineers in {cityName} provide synchronous timezone collaboration and enterprise compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mb-2" />
                <h3 className="font-bold text-neutral-900 text-base">Direct Senior Access</h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Work directly with senior solutions architects aligned with {cityName} business hours.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mb-2" />
                <h3 className="font-bold text-neutral-900 text-base">HIPAA & SOC 2 Audited</h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Proven compliance track record serving regional healthcare, legal, and financial leaders.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-950 text-white space-y-4 border border-neutral-800">
              <div className="flex items-center gap-2 text-[#f54545] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Local Presence: {cityName}</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Ready to scope your {serviceName.toLowerCase()} project?
              </h3>
              <p className="text-xs text-neutral-400 max-w-xl leading-relaxed">
                We deliver an interactive working prototype within 14 days to validate latency, UX, and accuracy before full production rollout.
              </p>
              <div className="pt-2">
                <Link
                  href="/book-a-meeting"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-all btn-glow-breath"
                >
                  <span>Book Scoping Call with {cityName} Lead</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase text-neutral-400 block mb-3">
                Related Services in {cityName}
              </span>
              <ul className="space-y-2.5 text-xs font-semibold">
                <li>
                  <Link href="/services/agentic-ai-development" className="text-neutral-700 hover:text-[#f54545] flex items-center justify-between">
                    <span>Agentic AI Development</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-software" className="text-neutral-700 hover:text-[#f54545] flex items-center justify-between">
                    <span>Custom Software Development</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-app" className="text-neutral-700 hover:text-[#f54545] flex items-center justify-between">
                    <span>Mobile App Development</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-security-compliance" className="text-neutral-700 hover:text-[#f54545] flex items-center justify-between">
                    <span>AI Security & Governance</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
