import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Star } from "lucide-react";
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
  "teacher-ai": {
    title: "Teacher AI: Building an Autonomous Multimodal Tutoring Engine",
    client: "Teacher AI Inc.",
    industry: "EdTech & Generative AI",
    metric: "$5M+",
    metricLabel: "First-Year Revenue",
    summary: "Built an intelligent adaptive tutoring platform serving hundreds of thousands of students with real-time multimodal instruction.",
    challenge:
      "The client needed to transform static curriculum into an interactive, voice-interactive tutor that could diagnose student comprehension gaps in real-time without hallucinating mathematical proofs or grammar rules.",
    solution: [
      "Engineered an evaluation framework benchmarking GPT-4o and custom fine-tuned open-source models.",
      "Built a sub-300ms WebSocket streaming pipeline for bidirectional voice and multimodal screen analysis.",
      "Implemented step-by-step mathematical reasoning verification checks before presenting answers to students.",
      "Architected a Next.js 15 front-end with CloudFront global CDN edge caching.",
    ],
    results: [
      "$5M+ verified ARR generated within the first 12 months.",
      "Over 400,000 active students onboarded with 99.98% platform uptime.",
      "Average session duration increased by 3.8x compared to legacy video platforms.",
    ],
    technologies: ["Next.js 15", "Python FastAPI", "OpenAI Fine-Tuning", "CloudFront", "WebSockets", "Docker"],
    quote: "Kodexo Labs didn't just write code; they fundamentally architected our AI engine from first principles.",
  },
  "smartmedhx": {
    title: "SmartMedHx: HIPAA-Compliant Chart Extraction & Clinical Automation",
    client: "SmartMedHx Healthcare",
    industry: "Healthcare & MedTech",
    metric: "42",
    metricLabel: "Clinics Deployed",
    summary: "HIPAA-compliant autonomous clinical chart extraction and legal cross-examination timeline generation from 1,000+ page medical records.",
    challenge:
      "Clinicians and legal medical reviewers were spending an average of 6 to 8 hours per patient digesting dense, unstructured medical records. Strict HIPAA requirements prohibited public API telemetry.",
    solution: [
      "Architected a private, air-gapped AWS HIPAA-compliant VPC cluster using self-hosted vLLM endpoints.",
      "Engineered a multi-agent state graph decomposing chart reviews into vitals, diagnostics, and timeline nodes.",
      "Implemented zero-data-retention cryptographic logging with automated PHI redaction.",
    ],
    results: [
      "Chart review time slashed from 7.5 hours down to 18 minutes per case.",
      "42 clinics onboarded with zero security incidents or compliance warnings.",
      "100% precision score on ICD-10 medical billing code extractions.",
    ],
    technologies: ["LangGraph", "Python 3.12", "FastAPI", "PostgreSQL pgvector", "AWS HIPAA VPC", "Docker"],
    quote: "The security rigor Kodexo Labs brought to our clinical data gave our hospital board 100% confidence.",
  },
};

export function generateStaticParams() {
  return [
    { slug: "teacher-ai" },
    { slug: "smartmedhx" },
    { slug: "diesel-laptops" },
    { slug: "extensiv" },
    { slug: "zendrop" },
    { slug: "sell-the-trend" },
  ];
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA[slug] || {
    title: `${slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} Production Case Study`,
    client: "Enterprise Partner",
    industry: "Custom AI Software",
    metric: "3.2x",
    metricLabel: "Operational Efficiency Gain",
    summary: "Production deployment delivering measurable business acceleration and enterprise reliability.",
    challenge: "The client needed to modernize legacy bottlenecks and deploy high-accuracy AI without downtime.",
    solution: [
      "Designed decoupled microservices architecture with Next.js and cloud-native backends.",
      "Implemented automated CI/CD and regression evaluation suites.",
      "Trained custom retrieval pipelines tailored to domain terminology.",
    ],
    results: [
      "Substantial acceleration in system throughput.",
      "Zero downtime during data migration.",
      "Full IP ownership handed over on schedule.",
    ],
    technologies: ["Next.js 15", "Python", "FastAPI", "TypeScript", "PostgreSQL"],
    quote: "Kodexo Labs executed with speed, precision, and complete architectural transparency.",
  };

  return (
    <div className="bg-white">
      <PageHeader
        badge={study.industry}
        title={study.title}
        description={study.summary}
        breadcrumbs={[{ label: "Portfolio", href: "/portfolio" }, { label: study.client }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Challenge */}
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                01 · The Problem
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                The Core Business Challenge
              </h2>
              <p className="text-neutral-600 mt-4 text-base leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                02 · The Engineering
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Architectural Solution
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
                03 · Production Outcomes
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Measurable Business ROI
              </h2>
              <ul className="space-y-3 mt-4">
                {study.results.map((res, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-emerald-950 font-bold text-sm">
                    <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
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
                  — Leadership, {study.client}
                </span>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-950 text-white rounded-3xl p-8 border border-neutral-800 shadow-xl text-center">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold block mb-1">
                Primary Outcome
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
                Tech Stack
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
              <h4 className="font-bold text-base text-white">Have a similar project?</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We can architect a proof of concept or review your requirements in 14 days.
              </p>
              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-all btn-glow-breath"
              >
                <span>Book Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
