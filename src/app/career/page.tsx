import Link from "next/link";
import { ArrowUpRight, Briefcase, Zap, Globe, Heart, Award, ArrowRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const ROLES = [
  {
    title: "Senior Agentic AI Engineer",
    department: "AI Research & Systems",
    location: "Remote (Global)",
    type: "Full-Time",
    stack: ["LangGraph", "Python 3.12", "FastAPI", "Vector DBs", "Docker"],
    desc: "Architect and deploy autonomous multi-agent state machines, deterministic evaluation benchmarks, and external tool execution sandboxes for enterprise mid-market clients.",
  },
  {
    title: "Staff Full-Stack Engineer",
    department: "Platform Engineering",
    location: "Austin, TX or Remote",
    type: "Full-Time",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    desc: "Build mission-critical web applications, SaaS dashboards, and streaming real-time interfaces powered by React Server Components and cloud-native backends.",
  },
  {
    title: "Senior MLOps & Infrastructure Engineer",
    department: "Cloud & Reliability",
    location: "Remote (US / EMEA)",
    type: "Full-Time",
    stack: ["vLLM", "TensorRT-LLM", "Kubernetes", "AWS EKS", "Multi-GPU"],
    desc: "Deploy, auto-scale, and optimize high-throughput self-hosted open-weight LLM clusters with zero telemetry leaks and sub-100ms time-to-first-token latency.",
  },
  {
    title: "Healthcare AI Compliance & Security Specialist",
    department: "Governance & Security",
    location: "Remote (US)",
    type: "Full-Time",
    stack: ["HIPAA BAA", "SOC 2 Type II", "GDPR", "Adversarial Red-Teaming"],
    desc: "Audit model architectures, configure PII/PHI redaction proxies, and conduct penetration testing to ensure zero-data-retention compliance across medical deployments.",
  },
];

const PERKS = [
  { title: "Remote-First Worldwide", desc: "Work from wherever you are most productive. We coordinate asynchronously with synchronous core hours." },
  { title: "$5,000 Annual Learning Budget", desc: "Unlimited books, GPU compute credits for personal research projects, and conference attendance." },
  { title: "Top-Tier Compensation & Equity", desc: "Competitive global compensation packages benchmarked against US tech tiers." },
  { title: "Zero Bureaucracy", desc: "Engineers talk directly with technical decision-makers. No endless steering committees or busywork." },
];

export default function CareerPage() {
  return (
    <div className="bg-white">
      <PageHeader
        badge="Join The Pod"
        title="Build the Future of Agentic"
        highlightText="AI Systems."
        description="We are a team of senior engineers and researchers who care deeply about shipping real code to production. Explore our open roles."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Perks Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Engineering Culture
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 mt-2">
              Why Engineers Thrive at Kodexo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <span className="text-xs font-mono font-bold text-[#f54545] block mb-2">0{i + 1}</span>
                <h3 className="font-bold text-neutral-900 text-base mb-1.5">{p.title}</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions List */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                Open Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
                Featured Engineering Roles
              </h2>
            </div>
            <span className="text-xs font-bold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full">
              4 Roles Available
            </span>
          </div>

          <div className="space-y-6">
            {ROLES.map((role, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-neutral-200 hover-card-elevate flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase text-[#f54545] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {role.department}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-500 font-medium">{role.location}</span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-500 font-medium">{role.type}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    {role.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {role.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {role.stack.map((s, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white text-xs font-bold hover:bg-[#f54545] transition-colors"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
