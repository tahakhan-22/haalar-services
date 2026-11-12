import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, ShieldCheck, Target } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import {
  getProductBySlug,
  STATIC_PRODUCT_SLUGS,
  type ProductItem,
} from "@/data/productsData";

export function generateStaticParams() {
  return STATIC_PRODUCT_SLUGS.map((slug) => ({ slug }));
}

async function ProductDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fallback: ProductItem = {
    slug,
    title: `${slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")} Tactical System`,
    category: "Electronic Warfare & Jammers",
    industry: "Hardware & RF Engineering",
    client: "Strategic Defense & Industry",
    metric: "100%",
    metricLabel: "Indigenous Capability",
    summary:
      "Indigenous hardware and RF electronic system engineered and manufactured by Haalar Services.",
    tags: ["Altium Designer", "RF Engineering", "IPC-A-610 Class 3", "CNC Milling"],
    bgClass: "from-red-500/10 to-neutral-900/40",
    accentColor: "#F54545",
    challenge:
      "Operational requirements demanded specialized indigenous hardware engineered to military reliability standards.",
    solution: [
      "Designed high-density multi-layer PCB and precision RF stages.",
      "Manufactured mil-spec aluminum enclosure with environmental sealing.",
      "Validated via benchtop spectrum and environmental testing.",
    ],
    results: [
      "Complete mission-readiness in operational field deployments.",
      "Indigenous design and 100% sovereign lifecycle support.",
    ],
    specs: [],
  };

  const product = getProductBySlug(slug) ?? fallback;

  return (
    <div className="bg-transparent">
      <PageHeader
        badge={product.industry}
        title={product.title}
        description={product.summary}
        breadcrumbs={[
          { label: "Products & Portfolio", href: "/portfolio" },
          { label: product.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Technical Specifications Table */}
            {product.specs.length > 0 && (
              <div>
                <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                  01 · Technical Specifications
                </span>
                <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                  System Parameters &amp; Architecture
                </h2>
                <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xs">
                  <dl className="divide-y divide-neutral-200">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-5 py-4 hover:bg-neutral-50/70 transition-colors"
                      >
                        <dt className="sm:col-span-4 text-xs font-mono uppercase tracking-wider font-bold text-neutral-500 pt-0.5">
                          {spec.label}
                        </dt>
                        <dd className="sm:col-span-8 text-sm font-semibold text-neutral-900">
                          <div>{spec.value}</div>
                          {spec.detail && (
                            <p className="text-xs font-normal text-neutral-600 mt-1">
                              {spec.detail}
                            </p>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}

            {/* Protections (when present) */}
            {product.protections && product.protections.length > 0 && (
              <div>
                <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                  System Safeguards
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-2">
                  Integrated Protection Mechanisms
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {product.protections.map((protection) => (
                    <div
                      key={protection}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80"
                    >
                      <ShieldAlert className="w-4 h-4 text-[#f54545] shrink-0" />
                      <span className="text-sm font-semibold text-neutral-800">
                        {protection}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications (when present) */}
            {product.applications && product.applications.length > 0 && (
              <div>
                <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                  Deployment Domains
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-2">
                  Operational Applications
                </h2>
                <div className="flex flex-wrap gap-2.5 mt-4">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950 text-white text-xs font-semibold"
                    >
                      <Target className="w-3.5 h-3.5 text-[#f54545]" />
                      <span>{app}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* The Challenge */}
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                02 · Operational Context
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Mission Environment &amp; Requirements
              </h2>
              <p className="text-neutral-600 mt-4 text-base leading-relaxed">
                {product.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                03 · Engineering Design
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Hardware &amp; RF Implementation
              </h2>
              <div className="space-y-3 mt-4">
                {product.solution.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-neutral-800">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Outcomes */}
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                04 · Operational Capabilities
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Verified System Advantages
              </h2>
              <ul className="space-y-3 mt-4">
                {product.results.map((res, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-emerald-950 font-bold text-sm"
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-950 text-white rounded-3xl p-8 border border-neutral-800 shadow-xl text-center">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold block mb-1">
                Key Specification
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white my-3 tracking-tight">
                {product.metric}
              </div>
              <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                {product.metricLabel}
              </span>
            </div>

            {/* Highlights */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
              <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-neutral-500 mb-4">
                Highlights &amp; Configuration
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((t, i) => (
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
              <h4 className="font-bold text-base text-white">
                Need Custom Bands or Integration?
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Haalar Services customizes frequency bands, antenna arrays,
                vehicle or manpack enclosures, and SDR software profiles to your
                operational requirements.
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

export default function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
      <ProductDetailContent params={params} />
    </Suspense>
  );
}
