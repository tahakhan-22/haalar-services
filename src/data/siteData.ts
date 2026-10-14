export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavCategory {
  title: string;
  href: string;
  items: NavItem[];
}

export const ANNOUNCEMENT_ITEMS = [
  "4.9/5 on Clutch — 13 verified reviews",
  "51 AI products shipped to production",
  "AI-native development partner since 2021",
  "Austin · New York · San Francisco · Chicago · London · Karachi",
  "Clutch Elite AI Firm — July 2025",
];

export const NAV_SERVICES: NavItem[] = [
  {
    label: "Agentic AI & Multi-Agent Systems",
    href: "/services/agentic-ai-development",
    description: "Autonomous reasoning agents with LangGraph and real-time tool use.",
    badge: "Popular",
  },
  {
    label: "Custom Software Development",
    href: "/services/custom-software",
    description: "Web, SaaS, MVP, and platform engineering for mid-market teams.",
  },
  {
    label: "Mobile App Development",
    href: "/services/mobile-app",
    description: "Native iOS/Android, React Native, and Flutter with on-device inference.",
  },
  {
    label: "Intelligent Automation",
    href: "/services/intelligent-automation",
    description: "Business process automation reducing operational headcount strain.",
  },
  {
    label: "AI Security & Compliance",
    href: "/services/ai-security-compliance",
    description: "HIPAA, SOC 2, and GDPR-governed model architectures.",
    badge: "Enterprise",
  },
  {
    label: "Cloud & AI Infrastructure",
    href: "/services/cloud-ai-infrastructure",
    description: "Production self-hosted clusters, MLOps, and edge inference.",
  },
  {
    label: "Applied AI Solutions",
    href: "/services/applied-ai",
    description: "Custom fine-tuning, computer vision, and high-precision RAG.",
  },
  {
    label: "Staff Augmentation",
    href: "/services/staff-augmentation",
    description: "Embedded elite AI engineers and full-stack technical pods.",
  },
];

export const NAV_INDUSTRIES: NavItem[] = [
  { label: "Healthcare & MedTech", href: "/industries/healthcare", description: "HIPAA-grade AI diagnostics and EHR automation." },
  { label: "Legal & LegalTech", href: "/industries/legal", description: "Automated contract discovery and medico-legal intelligence." },
  { label: "Logistics & Fleet", href: "/industries/logistics", description: "Real-time dispatch, route planning, and predictive repair." },
  { label: "Real Estate & PropTech", href: "/industries/real-estate", description: "Intelligent valuation models and tenant management." },
  { label: "EdTech & Learning", href: "/industries/edtech", description: "Adaptive tutoring engines and assessment automation." },
  { label: "E-Commerce & Retail", href: "/industries/ecommerce", description: "Dynamic pricing, visual search, and catalog enrichment." },
];

export const CLIENT_LOGOS = [
  { name: "Diesel Laptops", metric: "Inc. 5000", tag: "Automotive Diagnostics" },
  { name: "Extensiv", metric: "3PL Leader", tag: "Logistics & Warehousing" },
  { name: "SmartMedHx", metric: "42 Providers", tag: "HIPAA Healthcare" },
  { name: "Teacher AI", metric: "$5M+ First-Year ARR", tag: "EdTech AI" },
  { name: "Sell The Trend", metric: "Top Dropship SaaS", tag: "E-Commerce AI" },
  { name: "Zendrop", metric: "High-Volume Fulfillment", tag: "Global Retail" },
];

export const PROBLEM_MATRIX = [
  {
    id: "concept",
    tab: "Stuck at Concept",
    headline: "Transform Ambiguous AI Vision into an Audited Production Architecture in 14 Days.",
    description:
      "Most AI initiatives stall because teams jump straight into prompt wrappers without architecting data pipelines, eval benchmarks, or token budget limits. We build an interactive, production-grade proof of concept with enterprise guardrails.",
    deliverables: ["Technical Architecture Document (TAD)", "Interactive MVP / Proof of Concept", "Accuracy & Latency Eval Benchmark", "Production Cost Matrix"],
    cta: "Book Concept Scoping Session",
  },
  {
    id: "legacy",
    tab: "Legacy systems",
    headline: "Modernize Monolithic Systems Without Risky Multi-Year Re-writes.",
    description:
      "Extract core business logic into decoupled event-driven microservices with intelligent API wrappers. We wrap, refactor, and migrate mission-critical legacy backends without downtime.",
    deliverables: ["Zero-Downtime Migration Blueprint", "Modern Next.js & Cloud-Native Core", "Automated Regression Test Suites", "Decoupled Event Streaming"],
    cta: "Modernize Your Infrastructure",
  },
  {
    id: "behind",
    tab: "Behind on AI",
    headline: "Catch Up and Leapfrog Competitors with Agentic AI Workflows.",
    description:
      "Generic chatbots don't move balance sheets. Multi-agent systems that autonomously execute multi-step database actions, external API requests, and human-in-the-loop approvals do.",
    deliverables: ["Multi-Agent Workflow Blueprint", "LangGraph & Vector Storage Setup", "Domain-Specific Agent Tools", "Enterprise Security Audit"],
    cta: "Deploy Agentic Systems",
  },
  {
    id: "manual",
    tab: "Too Much Manual",
    headline: "Eliminate Repetitive Operational Bottlenecks Across Operations.",
    description:
      "Automate manual document extraction, reconciliation, customer intake, and cross-platform syncs. Free up hundreds of operational hours per week with guaranteed accuracy.",
    deliverables: ["End-to-End Workflow Map", "Intelligent Document Processing (IDP)", "Continuous Error Monitoring", "Headcount ROI Report"],
    cta: "Automate Back-Office Workflows",
  },
  {
    id: "disconnected",
    tab: "Disconnected systems",
    headline: "Unify Siloed Data Sources into a Single Real-Time Knowledge Engine.",
    description:
      "Connect your ERP, CRM, custom databases, and communication channels into a unified graph. Let AI pull verified context without hallucinating out-of-date records.",
    deliverables: ["Unified API Integration Layer", "Enterprise RAG Pipeline", "Sub-Second Retrieval Latency", "Strict Role-Based Access Control"],
    cta: "Unify Your Data Stack",
  },
  {
    id: "talent",
    tab: "Talent Gap",
    headline: "Inject Top 1% Senior AI & Full-Stack Engineers into Your Team in 72 Hours.",
    description:
      "Hiring specialized machine learning and full-stack engineers takes months and carries massive recruiter fees. Our pre-vetted engineers integrate seamlessly into your daily standups.",
    deliverables: ["Staff Augmentation in < 72h", "Senior Engineers with Shipped Products", "Flexible Monthly Scaling", "Timezone Overlap Guaranteed"],
    cta: "Request Dedicated Engineers",
  },
];

export const CASE_STUDIES = [
  {
    title: "Teacher AI",
    category: "EdTech & Generative AI",
    metric: "$5M+",
    metricLabel: "First-Year Revenue",
    summary: "Built an intelligent adaptive tutoring platform serving hundreds of thousands of students with real-time multimodal instruction.",
    tags: ["Next.js 15", "Python", "FastAPI", "OpenAI Fine-Tuning", "CloudFront"],
    bgClass: "from-amber-500/10 to-red-500/10",
    accentColor: "#F59E0B",
  },
  {
    title: "SmartMedHx & Medico-Legal AI",
    category: "Healthcare & LegalTech",
    metric: "42",
    metricLabel: "Active Providers & Clinics",
    summary: "HIPAA-compliant autonomous clinical chart extraction and legal cross-examination timeline generation from 1,000+ page medical records.",
    tags: ["HIPAA Compliant", "Multi-Agent System", "SOC 2 Type II", "LangGraph"],
    bgClass: "from-teal-500/10 to-cyan-500/10",
    accentColor: "#0D9488",
  },
  {
    title: "Diesel Laptops Diagnostic AI",
    category: "Automotive & Fleet Management",
    metric: "68%",
    metricLabel: "Faster Diagnostic Resolution",
    summary: "Enterprise diagnostic search engine parsing millions of heavy-duty truck error codes, schematics, and mechanical repair work orders.",
    tags: ["Hybrid RAG", "Computer Vision", "Self-Hosted LLMs", "AWS Bedrock"],
    bgClass: "from-blue-500/10 to-indigo-500/10",
    accentColor: "#3B82F6",
  },
  {
    title: "Extensiv Warehouse Automation",
    category: "Logistics & Supply Chain",
    metric: "3.2x",
    metricLabel: "Throughput Acceleration",
    summary: "Multi-tenant inventory reconciliation and automated 3PL order routing across distributed fulfillment facilities.",
    tags: ["Microservices", "Event-Driven", "Tailwind CSS", "PostgreSQL"],
    bgClass: "from-purple-500/10 to-pink-500/10",
    accentColor: "#8B5CF6",
  },
];

export const FOUNDATION_MODELS = [
  { name: "OpenAI GPT-4o", provider: "OpenAI", capability: "Multimodal & High Reasoning" },
  { name: "Claude 3.5 Sonnet", provider: "Anthropic", capability: "Coding & Agentic Automation" },
  { name: "Llama 3.3 70B", provider: "Meta", capability: "Open-Weights On-Premise" },
  { name: "Gemini 1.5 Pro", provider: "Google", capability: "2M Context Window Analysis" },
  { name: "Mistral Large 2", provider: "Mistral AI", capability: "Multilingual & Cost Efficiency" },
  { name: "Grok 2", provider: "xAI", capability: "Real-Time Synthesis" },
  { name: "Command R+", provider: "Cohere", capability: "Enterprise RAG & Tool Calling" },
  { name: "DeepSeek R1", provider: "DeepSeek", capability: "Chain-of-Thought Math & Logic" },
];

export const COMPLIANCE_ITEMS = [
  {
    badge: "HIPAA Certified",
    title: "Healthcare Grade Security",
    desc: "Strict BAA agreements, end-to-end PHI encryption in transit and at rest, and zero-data-retention LLM endpoints.",
  },
  {
    badge: "SOC 2 Type II",
    title: "Continuous Audit Controls",
    desc: "Rigorous role-based access control (RBAC), multi-region redundancy, and continuous automated vulnerability scanning.",
  },
  {
    badge: "GDPR Compliant",
    title: "Data Sovereignty & Privacy",
    desc: "Full right-to-be-forgotten implementation, EU residency data residency options, and explicit consent orchestration.",
  },
  {
    badge: "Self-Hosted Options",
    title: "100% Private Cloud or On-Prem",
    desc: "Deploy models directly into your private AWS VPC, Azure tenant, or sovereign bare-metal hardware. Your data never leaves your perimeter.",
  },
];

export const FAQS = [
  {
    q: "How does Kodexo Labs differ from traditional software agencies?",
    a: "Unlike legacy software shops that tack on superficial AI wrappers, Kodexo Labs is AI-native from day one. We engineer end-to-end systems that combine modern web architectures (Next.js 15, cloud-native backends) with autonomous multi-agent pipelines (LangGraph, PyTorch, RAG) with guaranteed HIPAA and SOC 2 security compliance.",
  },
  {
    q: "How fast can you ship a production-grade MVP?",
    a: "Our typical turnaround for a production-grade proof-of-concept or MVP is between 4 to 8 weeks. We use battle-tested architectural scaffolds and pre-audited building blocks so you don't spend months reinventing auth, pipelines, or design systems.",
  },
  {
    q: "Can you host AI models on our private cloud to ensure data privacy?",
    a: "Yes. We regularly deploy open-weight and proprietary models directly within client-controlled AWS VPCs, Microsoft Azure, Google Cloud, or on-premise hardware using vLLM and TensorRT-LLM with zero telemetry back to third parties.",
  },
  {
    q: "What engagement models do you offer?",
    a: "We offer three flexible models: (1) Dedicated Engineering Teams / Staff Augmentation with <72h onboarding, (2) Fixed-Scope Milestone-Based Projects with guaranteed deliverables, and (3) AI Advisory & Architecture Audits.",
  },
  {
    q: "Where is Kodexo Labs located?",
    a: "Kodexo Labs is headquartered in Austin, Texas, with strategic engineering hubs in New York, San Francisco, Chicago, London, and Karachi to provide 24/7 engineering coverage.",
  },
];
