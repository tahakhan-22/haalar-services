import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const ARTICLES = [
  {
    title: "AI Agent vs Chatbot: The Architectural Differences",
    category: "Agentic AI",
    readTime: "6 min read",
    date: "June 2026",
    summary:
      "Why traditional prompt-response chatbots fail in enterprise environments, and how cyclical state machines with tool execution pipelines deliver reliable autonomous outcomes.",
    tags: ["LangGraph", "Multi-Agent Systems", "Python"],
  },
  {
    title: "Building HIPAA-Compliant Multi-Agent Systems for Patient Care",
    category: "Healthcare AI",
    readTime: "8 min read",
    date: "May 2026",
    summary:
      "A deep architectural dive into zero-data-retention LLM endpoints, automated PII/PHI redaction proxies, and auditable BAA-governed models in clinical workflows.",
    tags: ["HIPAA", "Healthcare", "Security"],
  },
  {
    title: "Causal AI: Moving Beyond Statistical Correlation in Production",
    category: "Machine Learning",
    readTime: "7 min read",
    date: "April 2026",
    summary:
      "How structural causal models (SCMs) allow machine learning systems to answer counterfactual questions and eliminate spurious bias in high-stakes domains.",
    tags: ["Causal Inference", "PyTorch", "Research"],
  },
  {
    title: "Sub-Second Hybrid RAG: Combining Vector Distance with BM25 Keywords",
    category: "Information Retrieval",
    readTime: "5 min read",
    date: "March 2026",
    summary:
      "Dense vector embeddings struggle with exact part numbers, medical IDs, and legal citations. Learn how reciprocal rank fusion (RRF) delivers 99.4% precision.",
    tags: ["RAG", "pgvector", "BM25"],
  },
  {
    title: "Next.js 15 & Partial Prerendering (PPR) for AI Applications",
    category: "Web Engineering",
    readTime: "6 min read",
    date: "February 2026",
    summary:
      "Achieving instant initial server loads with streaming React Server Components while lazily streaming token completions via WebSockets.",
    tags: ["Next.js 15", "React 19", "Turbopack"],
  },
  {
    title: "Self-Hosting LLMs with vLLM & TensorRT-LLM on AWS EKS",
    category: "DevOps & Infrastructure",
    readTime: "9 min read",
    date: "January 2026",
    summary:
      "How to slash inference costs by 65% and maintain 100% data privacy by deploying Llama 3 on private multi-GPU Kubernetes clusters.",
    tags: ["vLLM", "AWS EKS", "MLOps"],
  },
];

export default function BlogsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        badge="Technical Publications"
        title="Engineering Insights & AI Research"
        highlightText="Articles."
        description="Deep architectural breakdowns, benchmarks, and production case studies written by the senior engineers building Kodexo Labs systems."
        breadcrumbs={[{ label: "Insights" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((art, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl p-8 border border-neutral-200 hover-card-elevate flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                  <span className="font-mono font-bold uppercase text-[#f54545]">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-neutral-900 hover:text-[#f54545] transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-neutral-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  {art.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {art.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-400">{art.date}</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#f54545] hover:underline">
                  Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
