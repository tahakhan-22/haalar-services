import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const CITY_NAMES: Record<string, string> = {
  "islamabad-pk": "Islamabad, Pakistan",
  "karachi-pk": "Karachi, Pakistan",
  "lahore-pk": "Lahore, Pakistan",
  "rawalpindi-pk": "Rawalpindi, Pakistan",
  "dubai-uae": "Dubai, UAE",
  "london-uk": "London, United Kingdom",
};

export function generateStaticParams() {
  return [
    { city: "islamabad-pk", service: "odm-manufacturing" },
    { city: "islamabad-pk", service: "pcb-reverse-engineering" },
    { city: "karachi-pk", service: "oem-production" },
    { city: "lahore-pk", service: "rf-microwave-systems" },
    { city: "rawalpindi-pk", service: "odm-manufacturing" },
    { city: "dubai-uae", service: "rf-microwave-systems" },
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
        badge={`Regional Hub · ${cityName}`}
        title={`${serviceName} in`}
        highlightText={cityName}
        description={`Defense and industrial grade hardware engineering, PCB reverse engineering, and RF systems delivered by Haalar Services for organizations in ${cityName}.`}
        breadcrumbs={[{ label: "Locations" }, { label: cityName }, { label: serviceName }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                Regional Engineering Delivery
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Why Organizations in {cityName} Partner with Haalar Services
              </h2>
              <p className="text-neutral-600 mt-4 text-base leading-relaxed">
                Whether you need turnkey Original Design Manufacturing (ODM), precision multi-layer PCB reverse engineering, or tactical RF countermeasure hardware, our engineering team provides sovereign capabilities, military-standard durability, and complete intellectual property transfer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mb-2" />
                <h3 className="font-bold text-neutral-900 text-base">Direct Lead Engineers</h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Collaborate directly with hardware, RF, and firmware specialists from project inception.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mb-2" />
                <h3 className="font-bold text-neutral-900 text-base">IPC-A-610 Class 3 Standards</h3>
                <p className="text-xs text-neutral-600 mt-1">
                  All electronic assemblies built and tested to high-reliability military and aerospace specifications.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-950 text-white space-y-4 border border-neutral-800">
              <div className="flex items-center gap-2 text-[#f54545] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Regional Client Support: {cityName}</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Ready to scope your {serviceName.toLowerCase()} project?
              </h3>
              <p className="text-xs text-neutral-400 max-w-xl leading-relaxed">
                Contact our engineering facility in Islamabad. We provide technical requirement reviews, non-destructive PCB assessments, and rapid bench prototyping.
              </p>
              <div className="pt-2">
                <Link
                  href="/book-a-meeting"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-all btn-glow-breath"
                >
                  <span>Book Consultation with Haalar Engineers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase text-neutral-400 block mb-3">
                Related Disciplines
              </span>
              <ul className="space-y-2.5 text-xs font-semibold">
                <li>
                  <Link href="/services/odm-manufacturing" className="text-neutral-700 hover:text-[#f54545] flex items-center justify-between">
                    <span>Original Design Manufacturing</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/oem-production" className="text-neutral-700 hover:text-[#f54545] flex items-center justify-between">
                    <span>Original Equipment Manufacturing</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/pcb-reverse-engineering" className="text-neutral-700 hover:text-[#f54545] flex items-center justify-between">
                    <span>Reverse Engineering of PCBs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/rf-microwave-systems" className="text-neutral-700 hover:text-[#f54545] flex items-center justify-between">
                    <span>RF & Microwave Engineering</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900 p-6 rounded-3xl text-white border border-neutral-800 space-y-2">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold block">Headquarters Facility</span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Plot No. 261, Humak Industrial Estate, Kahuta Road, Islamabad, Pakistan.
              </p>
              <div className="text-xs text-neutral-400 pt-2">
                info@haalarservices.com · 0333-0947546
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
