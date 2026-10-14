import Link from "next/link";
import { ArrowLeft, Clock, Sparkles, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: "multi-layer-pcb-reverse-engineering" },
    { slug: "dds-vs-vco-jamming" },
    { slug: "ipc-a-610-class-3-standards" },
    { slug: "component-decoding-obsolete-ics" },
    { slug: "thermal-management-rf-amplifiers" },
    { slug: "indigenous-defense-rd-lifecycle" },
  ];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <article className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-[#f54545] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights & Engineering Publications</span>
        </Link>

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs text-neutral-500 font-semibold mb-4">
          <span className="font-mono text-[#f54545] uppercase tracking-wider">
            Hardware Engineering
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 7 min read
          </span>
          <span>·</span>
          <span>Updated June 2026</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
          {formattedTitle}: The Technical Engineering Deep Dive
        </h1>

        {/* Author Card */}
        <div className="flex items-center gap-4 py-6 my-8 border-y border-neutral-100">
          <div className="size-12 rounded-full bg-neutral-900 text-[#f54545] font-bold flex items-center justify-center text-sm border border-neutral-800">
            HS
          </div>
          <div>
            <h4 className="font-bold text-sm text-neutral-900">
              Haalar R&D Engineering Directorate
            </h4>
            <p className="text-xs text-neutral-500">
              RF Systems & Reverse Engineering Division · Haalar Services (Islamabad)
            </p>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed text-base">
          <p className="text-lg text-neutral-800 font-medium leading-relaxed">
            In mission-critical defense and strategic industrial applications, electronic hardware cannot fail. When original OEM schematics are missing or discontinued, precision engineering and rigorous manufacturing standards become indispensable.
          </p>

          <h2 className="text-2xl font-bold text-neutral-950 mt-8 mb-3">
            01. Deconstructing the Engineering Challenge
          </h2>
          <p>
            Hardware operating in extreme tactical environments is exposed to severe thermal stress, mechanical shock, and electromagnetic noise. Re-engineering such systems requires micron-level substrate de-layering, accurate high-frequency impedance extraction, and rigorous signal validation.
          </p>

          <div className="p-6 rounded-2xl bg-neutral-950 text-neutral-200 font-mono text-xs my-6 border border-neutral-800 overflow-x-auto">
            <span className="text-[#f54545] block mb-2"># Engineering Benchmark & Validation Checklist</span>
            <code>
              {`[1] Non-Destructive X-Ray Substrate Layer Mapping
[2] High-Precision De-Layering & Micron Optical Scan
[3] Altium Designer Complete Netlist & Schematic Extraction
[4] Component Decoding & Modern Equivalent Sourcing
[5] IPC-A-610 Class 3 Soldering & Conformal Shielding
[6] Calibrated Spectrum Analysis & Thermal Chamber Validation`}
            </code>
          </div>

          <h2 className="text-2xl font-bold text-neutral-950 mt-8 mb-3">
            02. Precision in Practice: From Netlist to Production
          </h2>
          <p>
            By combining high-resolution optical scanners with curve tracers, our engineers regenerate complete, modular Altium schematics. Discontinued silicon is mapped to modern pin-compatible equivalents, ensuring drop-in form-fit-function replacement without software alterations on the host machinery.
          </p>

          <div className="p-6 rounded-2xl bg-red-50 border border-red-100 my-6">
            <div className="flex items-center gap-2 text-[#f54545] font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Core Engineering Takeaway</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
              True hardware reverse engineering produces full, editable CAD assets and functional schematics — not just a blind Gerber reproduction — allowing the client full sovereign control over future revisions and manufacturing batches.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-neutral-950 mt-8 mb-3">
            03. Operational Reliability & Field Results
          </h2>
          <p>
            Every assembly manufactured at our Humak Industrial Estate facility undergoes comprehensive 72-hour burn-in stress tests and GHz spectrum verification, guaranteeing 100% operational availability under field conditions.
          </p>
        </div>

        {/* CTA Footer Card */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Have an obsolete hardware or custom RF requirement?
            </h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Speak directly with our engineering team in Islamabad to scope technical feasibility.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-6 py-3.5 rounded-full bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-all btn-glow-breath shrink-0 flex items-center gap-2"
          >
            <span>Consult with Engineering Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
