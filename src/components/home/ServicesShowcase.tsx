"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Shield, Smartphone, Bot, Cloud, Check } from "lucide-react";

const SOFTWARE_SERVICES = [
  {
    title: "Custom Software Development",
    desc: "Web, SaaS, MVP, and platform engineering for mid-market teams that need software to actually think. Next.js 15, cloud-native backend, UI/UX design, and API integration from day one.",
    features: ["Next.js 15 & React 19 Architecture", "Scalable Multi-Tenant Databases", "Enterprise Role-Based Access Control", "Microservices & Serverless Backends"],
    icon: Layers,
    href: "/services/custom-software",
  },
  {
    title: "Mobile App Development",
    desc: "Ship apps your customers actually open. Native iOS and Android, React Native and Flutter cross-platform, and AI-powered mobile apps with on-device inference and cloud agent integration.",
    features: ["React Native & Flutter Cross-Platform", "On-Device CoreML / TFLite Models", "Offline-First Sync Protocols", "App Store Compliance & CI/CD"],
    icon: Smartphone,
    href: "/services/mobile-app",
  },
  {
    title: "Intelligent Automation",
    desc: "Automate the workflow, not just the task. Business process automation, workflow automation, system integration, and legacy modernization that reduce back-office headcount pressure.",
    features: ["Intelligent Document Parsing (OCR/LLM)", "Autonomous Back-Office Reconciliations", "Legacy Mainframe Integration", "Continuous Anomaly Monitoring"],
    icon: Cpu,
    href: "/services/intelligent-automation",
  },
  {
    title: "Staff Augmentation",
    desc: "Scale your team with elite senior AI and full-stack software engineers in less than 72 hours. Pre-vetted, time-zone aligned, and ready to contribute to sprint backlogs immediately.",
    features: ["Senior Full-Stack & ML Pods", "Onboarding in under 72 Hours", "Guaranteed Timezone Alignment", "Zero Recruitment Overheads"],
    icon: Layers,
    href: "/services/staff-augmentation",
  },
];

const AI_SERVICES = [
  {
    title: "Agentic AI & Multi-Agent Systems",
    desc: "Autonomous reasoning agents built on LangGraph that coordinate complex multi-step workflows, execute API actions, and leverage human-in-the-loop validation.",
    features: ["LangGraph Multi-Agent Workflows", "Dynamic External Tool Calling", "Human-in-the-Loop Safeguards", "Sub-Second State Serialization"],
    icon: Bot,
    href: "/services/agentic-ai-development",
  },
  {
    title: "AI Security, Governance & Compliance",
    desc: "HIPAA, SOC 2 Type II, and GDPR-compliant custom AI systems with strict data sovereignty, self-hosted deployment options, and audited prompt-injection defense.",
    features: ["Zero-Data-Retention Endpoints", "HIPAA BAA & SOC 2 Audits", "Adversarial Red-Teaming Guardrails", "Role-Based Data Redaction"],
    icon: Shield,
    href: "/services/ai-security-compliance",
  },
  {
    title: "Cloud and AI Infrastructure",
    desc: "Production AI that survives real traffic. Cloud architecture, self-hosted LLM clusters, edge AI, and MLOps with observability instrumentation from the first commit.",
    features: ["Self-Hosted vLLM & TensorRT Clusters", "Kubernetes & Multi-GPU Orchestration", "Real-Time Observability & Tracing", "Cost-Optimized Token Caching"],
    icon: Cloud,
    href: "/services/cloud-ai-infrastructure",
  },
  {
    title: "Applied AI Solutions",
    desc: "Tailored fine-tuning, retrieval-augmented generation (RAG), and computer vision models engineered to solve domain-specific enterprise problems.",
    features: ["Domain Model Fine-Tuning", "Hybrid Vector + Keyword RAG", "Custom Vision Diagnostic Models", "Latency & Cost Benchmark Matrices"],
    icon: Cpu,
    href: "/services/applied-ai",
  },
];

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState<"software" | "ai">("ai");

  const services = activeTab === "software" ? SOFTWARE_SERVICES : AI_SERVICES;

  return (
    <section id="services" className="py-24 bg-neutral-50/60 border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
              Engineering Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-3 tracking-tight">
              Ten AI Software Development Services. <br />
              <span className="text-neutral-500 font-bold">One Production-Grade Partner.</span>
            </h2>
          </div>

          {/* Segmented Switcher */}
          <div className="bg-neutral-200/80 p-1.5 rounded-full inline-flex self-start md:self-auto">
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "ai"
                  ? "bg-neutral-950 text-white shadow-md"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              AI Systems & Agents
            </button>
            <button
              onClick={() => setActiveTab("software")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "software"
                  ? "bg-neutral-950 text-white shadow-md"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              Build & Modernize Software
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 hover-card-elevate flex flex-col justify-between group"
              >
                <div>
                  <div className="size-12 rounded-2xl bg-red-50 text-[#f54545] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-[#f54545] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                      Core Capabilities
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#f54545] hover:text-[#a50e19] transition-colors"
                  >
                    <span>View Service Specifications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
