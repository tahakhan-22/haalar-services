import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const SERVICE_DETAILS: Record<
  string,
  {
    title: string;
    badge: string;
    subtitle: string;
    description: string;
    pillars: { title: string; desc: string }[];
    techStack: string[];
    timeline: string;
    faq: { q: string; a: string }[];
  }
> = {
  "agentic-ai-development": {
    title: "Agentic AI & Multi-Agent Systems Development",
    badge: "Multi-Agent Systems",
    subtitle: "Coordinate autonomous agents that plan, reason, invoke external tools, and execute end-to-end workflows.",
    description:
      "Modern businesses require AI that does more than answer questions — they require autonomous agents that can query ERPs, extract data from legacy systems, call external APIs, and submit pull requests with human-in-the-loop safety gates.",
    pillars: [
      {
        title: "Autonomous Planning & State Graph",
        desc: "Engineered with LangGraph to maintain deterministic cyclical states, memory checkpoints, and fault-tolerant rollback capabilities.",
      },
      {
        title: "Dynamic Tool & Sandbox Execution",
        desc: "Secure sandbox containers allowing agents to run Python, SQL, web scraping, and third-party SaaS actions safely.",
      },
      {
        title: "Human-in-the-Loop Oversight",
        desc: "Structured approval checkpoints for high-risk actions such as payment authorizations, medical records updates, and legal submissions.",
      },
      {
        title: "Deterministic Benchmarks & Evals",
        desc: "Continuous evaluation pipelines benchmarking agent accuracy, token consumption, and latency before every deployment.",
      },
    ],
    techStack: ["LangGraph", "Python 3.12", "FastAPI", "OpenAI GPT-4o", "Claude 3.5 Sonnet", "PostgreSQL pgvector", "Docker"],
    timeline: "Interactive Prototype in 14 Days · Production Pod in 6-8 Weeks",
    faq: [
      {
        q: "How do multi-agent systems differ from standard RAG chatbots?",
        a: "Standard chatbots only respond to single prompts. Multi-agent systems decompose complex goals into discrete sub-tasks, delegate work across specialized agent personas, execute actions via tools, and evaluate their own outputs before replying.",
      },
      {
        q: "How do you prevent agents from hallucinating or taking destructive actions?",
        a: "We implement strict schema validation, deterministic fallback logic, and human approval gates for any action that modifies production data.",
      },
    ],
  },
  "custom-software": {
    title: "Custom Software & Web Application Development",
    badge: "Platform Engineering",
    subtitle: "Enterprise SaaS, web portals, and platform architectures built with Next.js 15 and cloud-native backends.",
    description:
      "We design and build bespoke software applications for mid-market companies that require high concurrency, rock-solid security, and seamless integration with intelligent AI backends.",
    pillars: [
      {
        title: "Next.js 15 & React 19 Core",
        desc: "Server components, streaming SSR, partial prerendering, and optimized Core Web Vitals from day one.",
      },
      {
        title: "Scalable Data Modeling",
        desc: "Relational and vector database architectures optimized for sub-10ms response times under heavy concurrent loads.",
      },
      {
        title: "Enterprise RBAC & SSO",
        desc: "SAML, OAuth2, and multi-tenant security architecture that easily passes enterprise vendor security audits.",
      },
      {
        title: "Automated CI/CD Pipelines",
        desc: "Automated testing, linting, preview environments, and zero-downtime blue-green deployments.",
      },
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "AWS / Vercel"],
    timeline: "Full MVP in 4-6 Weeks · Enterprise Platform in 8-12 Weeks",
    faq: [
      {
        q: "Do we own 100% of the intellectual property?",
        a: "Yes. All code, design assets, database schemas, and documentation are 100% owned by your company with zero licensing fees.",
      },
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "agentic-ai-development" },
    { slug: "custom-software" },
    { slug: "mobile-app" },
    { slug: "ai-security-compliance" },
    { slug: "cloud-ai-infrastructure" },
    { slug: "applied-ai" },
    { slug: "intelligent-automation" },
    { slug: "staff-augmentation" },
  ];
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug] || {
    title: `${slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} Development`,
    badge: "Practice Area",
    subtitle: "Custom enterprise engineering tailored for scale, security, and measurable business outcomes.",
    description:
      "Kodexo Labs delivers production-grade engineering, strict security audits, and dedicated technical teams to help mid-market organizations build and modernize their core technology stack.",
    pillars: [
      { title: "Architecture & Design", desc: "Rigorous planning and technical specification prior to code commit." },
      { title: "Agile Production Engineering", desc: "Two-week sprints with transparent demos and continuous deployments." },
      { title: "Compliance & Security", desc: "HIPAA, SOC 2, and GDPR-aligned controls built directly into the codebase." },
      { title: "Long-Term SLA & Support", desc: "Continuous monitoring, performance tuning, and 24/7 reliability coverage." },
    ],
    techStack: ["Next.js 15", "Python", "FastAPI", "TypeScript", "PostgreSQL", "AWS / GCP"],
    timeline: "Proof of Concept in 14 Days · Production Release in 6-8 Weeks",
    faq: [
      {
        q: "How does Kodexo Labs get started on this service?",
        a: "We start with a 45-minute technical discovery session to review your existing stack, constraints, and target outcomes.",
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <PageHeader
        badge={service.badge}
        title={service.title}
        description={service.subtitle}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.badge }]}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                Overview & Methodology
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
                Engineering Approach
              </h2>
              <p className="text-neutral-600 mt-4 text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.pillars.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <div className="size-8 rounded-lg bg-red-100 text-[#f54545] flex items-center justify-center font-bold text-xs mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-neutral-900 text-lg">{p.title}</h3>
                  <p className="text-neutral-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="pt-8 border-t border-neutral-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Technical FAQ
              </h3>
              <div className="space-y-4">
                {service.faq.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-neutral-200">
                    <h4 className="font-bold text-neutral-900 text-base">{item.q}</h4>
                    <p className="text-neutral-600 text-sm mt-2 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-950 text-white rounded-3xl p-8 border border-neutral-800 shadow-xl">
              <span className="text-xs font-mono uppercase text-[#f54545] font-bold block mb-2">
                Delivery Benchmark
              </span>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.timeline}
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                Every project includes guaranteed milestones, test coverage, and transparent bi-weekly sprint demos.
              </p>

              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-all btn-glow-breath"
              >
                <span>Book Scoping Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tech Stack */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
              <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-neutral-500 mb-4">
                Technologies Utilized
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-neutral-800 border border-neutral-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
