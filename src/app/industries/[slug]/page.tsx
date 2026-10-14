import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
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
  healthcare: {
    title: "Healthcare & MedTech AI Development",
    badge: "HIPAA Certified",
    subtitle: "Clinical chart analysis, EHR automation, and diagnostic support with guaranteed PHI encryption.",
    overview:
      "Healthcare software cannot tolerate hallucinations, latency spikes, or privacy oversights. Kodexo Labs engineers clinical AI systems under strict Business Associate Agreements (BAAs) with zero-data-retention models deployed directly within private AWS HIPAA VPCs or on-premise clusters.",
    regulations: ["HIPAA Security & Privacy Rules", "HITECH Compliance", "SOC 2 Type II Audited Controls", "FDA SaMD Architecture Readiness"],
    useCases: [
      { title: "Clinical Chart Extraction", desc: "Automate intake, EHR transcription, and ICD-10 medical code assignment from unstructured clinical notes." },
      { title: "Medico-Legal Cross-Examination", desc: "Synthesize 1,000+ page patient histories into deterministic chronological evidence timelines." },
      { title: "Diagnostic Imaging OCR & Vision", desc: "Assist specialists with multi-spectral segmentation of CT scans, dermatological images, and pathology slides." },
    ],
    caseStudyRef: "SmartMedHx (Serving 42 Providers & Clinics across North America)",
  },
  legal: {
    title: "Legal & LegalTech AI Engineering",
    badge: "SOC 2 Type II",
    subtitle: "Autonomous contract review, clause anomaly detection, and discovery automation.",
    overview:
      "Legal professionals spend hundreds of hours reviewing contracts and cross-referencing deposition records. We build private, deterministic legal retrieval systems that quote verbatim source passages without external model training.",
    regulations: ["Client-Attorney Privilege Safeguards", "SOC 2 Type II Confidentiality", "Air-Gapped Private Cloud Deployment", "Detailed Audit Trails"],
    useCases: [
      { title: "Deposition & Discovery Mining", desc: "Index hundreds of hours of trial transcripts and exhibits with sub-second keyword and semantic search." },
      { title: "Contract Risk Analyzer", desc: "Automatically compare vendor agreements against company standard playbook clauses and redline deviations." },
    ],
    caseStudyRef: "Medico-Legal AI Platform",
  },
};

export function generateStaticParams() {
  return [
    { slug: "healthcare" },
    { slug: "legal" },
    { slug: "logistics" },
    { slug: "automotive" },
    { slug: "edtech" },
    { slug: "ecommerce" },
    { slug: "real-estate" },
  ];
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = INDUSTRY_PROFILES[slug] || {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} AI & Software Development`,
    badge: "Target Vertical",
    subtitle: "Custom AI systems, compliance guardrails, and platform engineering for regulated market leaders.",
    overview:
      "Kodexo Labs designs bespoke software solutions tailored to the operational realities and compliance requirements of this industry. We combine modern web frameworks with autonomous AI agent workflows.",
    regulations: ["Strict Data Residency & Encryption", "Role-Based Access Control (RBAC)", "Zero Third-Party Model Training", "Automated Vulnerability Scanning"],
    useCases: [
      { title: "Autonomous Process Automation", desc: "Eliminate repetitive manual data entry and system reconciliation with high-accuracy agents." },
      { title: "Domain Model Fine-Tuning", desc: "Train private models on proprietary industry terminology and historical transactions." },
    ],
    caseStudyRef: "Shipped across Inc. 5000 and growth-stage enterprises.",
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
                Vertical Architecture
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
                Security & Regulatory Framework
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
                Verified Outcome
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                {profile.caseStudyRef}
              </p>

              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-all btn-glow-breath"
              >
                <span>Request Industry Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
