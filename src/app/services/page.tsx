import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Shield, Smartphone, Bot, Cloud, Check, Sparkles, Server } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const ALL_SERVICES = [
  {
    slug: "agentic-ai-development",
    title: "Agentic AI & Multi-Agent Systems",
    icon: Bot,
    category: "AI Native",
    desc: "Autonomous reasoning agents built on LangGraph that coordinate complex multi-step workflows, execute API actions, and leverage human-in-the-loop validation.",
    capabilities: [
      "LangGraph multi-agent coordination pipelines",
      "Dynamic external tool calling & web browsing",
      "Human-in-the-loop authorization safeguards",
      "Sub-second state serialization and rollback",
    ],
    deliverable: "Production multi-agent pod with custom tools & eval suite",
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    icon: Layers,
    category: "Web & SaaS",
    desc: "Web, SaaS, MVP, and platform engineering for mid-market teams that need software to actually think. Next.js 15, cloud-native backend, UI/UX design, and API integration from day one.",
    capabilities: [
      "Next.js 15 & React 19 App Router architecture",
      "Scalable multi-tenant PostgreSQL/Supabase databases",
      "Enterprise Role-Based Access Control (RBAC)",
      "Microservices & event-driven background queues",
    ],
    deliverable: "Full-stack SaaS platform deployed with automated CI/CD",
  },
  {
    slug: "mobile-app",
    title: "Mobile App Development",
    icon: Smartphone,
    category: "Mobile",
    desc: "Ship apps your customers actually open. Native iOS and Android, React Native and Flutter cross-platform, and AI-powered mobile apps with on-device inference.",
    capabilities: [
      "React Native & Flutter cross-platform codebases",
      "On-device CoreML & TensorFlow Lite inference",
      "Offline-first local cache & background sync",
      "Automated App Store & Google Play deployment pipelines",
    ],
    deliverable: "Production mobile app in iOS App Store & Google Play",
  },
  {
    slug: "ai-security-compliance",
    title: "AI Security, Governance & Compliance",
    icon: Shield,
    category: "Enterprise Trust",
    desc: "HIPAA, SOC 2 Type II, and GDPR-compliant custom AI systems with strict data sovereignty, self-hosted deployment options, and audited prompt-injection defense.",
    capabilities: [
      "Zero-data-retention LLM endpoints & HIPAA BAA",
      "Adversarial red-teaming & prompt-injection firewalls",
      "Automated PII/PHI redaction proxy layers",
      "Continuous compliance audit log streaming",
    ],
    deliverable: "Compliance-certified AI architecture ready for audit",
  },
  {
    slug: "cloud-ai-infrastructure",
    title: "Cloud and AI Infrastructure",
    icon: Cloud,
    category: "DevOps & MLOps",
    desc: "Production AI that survives real traffic. Cloud architecture, self-hosted LLM clusters, edge AI, and MLOps with observability instrumentation from the first commit.",
    capabilities: [
      "Self-hosted vLLM, TensorRT-LLM, & Ollama clusters",
      "Kubernetes (EKS/GKE) GPU auto-scaling pods",
      "Langfuse & OpenTelemetry tracing instrumentation",
      "Cost-optimized semantic prompt & response caching",
    ],
    deliverable: "High-throughput GPU cluster with 99.9% uptime SLA",
  },
  {
    slug: "applied-ai",
    title: "Applied AI Solutions",
    icon: Cpu,
    category: "Specialized AI",
    desc: "Tailored fine-tuning, retrieval-augmented generation (RAG), and computer vision models engineered to solve domain-specific enterprise problems.",
    capabilities: [
      "LoRA & full fine-tuning on proprietary corpora",
      "Hybrid vector + BM25 keyword RAG pipelines",
      "Custom computer vision object detection & OCR",
      "Accuracy benchmark matrix & drift monitoring",
    ],
    deliverable: "Fine-tuned model checkpoint with accuracy eval report",
  },
  {
    slug: "intelligent-automation",
    title: "Intelligent Automation",
    icon: Server,
    category: "Operations",
    desc: "Automate the workflow, not just the task. Business process automation, workflow automation, system integration, and legacy modernization that reduce operational pressure.",
    capabilities: [
      "Intelligent document parsing (IDP) for invoices & charts",
      "Multi-system ERP & CRM bidirectional synchronization",
      "Automated exception handling & human approval gates",
      "Headcount savings & operational throughput analytics",
    ],
    deliverable: "End-to-end automated pipeline saving 100+ weekly hours",
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation & Dedicated Pods",
    icon: Layers,
    category: "Engineering Talent",
    desc: "Scale your team with elite senior AI and full-stack software engineers in less than 72 hours. Pre-vetted, time-zone aligned, and ready to contribute to sprint backlogs immediately.",
    capabilities: [
      "Top 1% vetted senior full-stack & AI engineers",
      "Rapid deployment into your Slack & Jira in < 72h",
      "Guaranteed North American & European timezone overlap",
      "Flexible monthly contracts with zero lock-in",
    ],
    deliverable: "Dedicated technical pods embedded in your sprint cycle",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        badge="Practice Areas"
        title="Full-Stack AI & Custom Software"
        highlightText="Services."
        description="From autonomous multi-agent pipelines to scalable cloud-native SaaS platforms, explore the 10 engineering disciplines trusted by mid-market enterprises."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Main Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ALL_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.slug}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 hover-card-elevate flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-2xl bg-red-50 text-[#f54545] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-neutral-600">
                      {srv.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-neutral-900">
                    {srv.title}
                  </h2>

                  <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                      Core Engineering Scope
                    </span>
                    <ul className="space-y-2">
                      {srv.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                    <span className="text-[11px] text-neutral-500 block">Deliverable Benchmark:</span>
                    <span className="text-xs font-bold text-neutral-800">{srv.deliverable}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#f54545] hover:text-[#a50e19] transition-colors"
                  >
                    <span>View Specifications & Case Studies</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement Models Banner */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Collaboration Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Three Ways to Engage Kodexo Labs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold">01 · Dedicated Pod</span>
              <h3 className="text-xl font-bold text-white mt-2">Staff Augmentation</h3>
              <p className="text-sm text-neutral-400 mt-2">
                Embedded senior engineers and technical leads ready to integrate into your sprints in under 72 hours.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-3xl border border-[#f54545]/40 relative">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold">02 · Full Lifecycle</span>
              <h3 className="text-xl font-bold text-white mt-2">Turnkey Product Build</h3>
              <p className="text-sm text-neutral-400 mt-2">
                End-to-end architecture, UI/UX design, engineering, testing, and production deployment with guaranteed milestones.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold">03 · Strategic Advisory</span>
              <h3 className="text-xl font-bold text-white mt-2">Architecture & Audit</h3>
              <p className="text-sm text-neutral-400 mt-2">
                2-week deep dive into your AI security, prompt injection defenses, HIPAA compliance, and vector infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
