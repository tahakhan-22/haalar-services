import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Sparkles, BookOpen, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: "ai-agent-vs-chatbot" },
    { slug: "hipaa-compliant-agentic-ai" },
    { slug: "causal-ai" },
    { slug: "hybrid-rag-bm25" },
    { slug: "nextjs-15-partial-prerendering" },
    { slug: "self-hosting-llms" },
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
          <span>Back to Insights & Publications</span>
        </Link>

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-xs text-neutral-500 font-semibold mb-4">
          <span className="font-mono text-[#f54545] uppercase tracking-wider">
            Technical Architecture
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
          {formattedTitle}: The Architectural Engineering Deep Dive
        </h1>

        {/* Author Card */}
        <div className="flex items-center gap-4 py-6 my-8 border-y border-neutral-100">
          <div className="size-12 rounded-full bg-neutral-900 text-white font-bold flex items-center justify-center text-sm">
            MA
          </div>
          <div>
            <h4 className="font-bold text-sm text-neutral-900">
              Mohammad Ahmed Rajput
            </h4>
            <p className="text-xs text-neutral-500">
              Chief Technology Officer & AI Architect · Kodexo Labs
            </p>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed text-base">
          <p className="text-lg text-neutral-800 font-medium leading-relaxed">
            In enterprise production systems, there is an immense gulf between a theoretical prototype and software that handles real-world business transactions under strict SLAs.
          </p>

          <h2 className="text-2xl font-bold text-neutral-950 mt-8 mb-3">
            01. The Problem with Naive Implementations
          </h2>
          <p>
            When teams first deploy large language models, they typically build a standard wrapper around an external completion endpoint. While this works for simple queries, it quickly collapses when faced with non-deterministic edge cases, schema evolution, and rate limits.
          </p>

          <div className="p-6 rounded-2xl bg-neutral-950 text-neutral-200 font-mono text-xs my-6 border border-neutral-800 overflow-x-auto">
            <span className="text-[#f54545] block mb-2"># Deterministic Multi-Agent State Definition</span>
            <code>
              {`class AgentState(TypedDict):
    task: str
    plan: list[str]
    retrieved_context: list[Document]
    tool_calls: list[ToolInvocation]
    human_approval_required: bool
    final_output: Optional[str]`}
            </code>
          </div>

          <h2 className="text-2xl font-bold text-neutral-950 mt-8 mb-3">
            02. State Graphs & Cyclical Memory
          </h2>
          <p>
            By decomposing monolithic prompts into specialized node graphs (using frameworks like LangGraph), each node can be individually tested, evaluated with synthetic datasets, and rolled back if validation checks fail.
          </p>

          <div className="p-6 rounded-2xl bg-red-50 border border-red-100 my-6">
            <div className="flex items-center gap-2 text-[#f54545] font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Key Architectural Takeaway</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
              Never allow an autonomous agent to execute database mutations or external API webhooks without a typed schema validator and human approval gates for critical actions.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-neutral-950 mt-8 mb-3">
            03. Production Benchmarks
          </h2>
          <p>
            Our benchmark evaluations on client production datasets demonstrate a 99.4% precision score when combining cyclical state machines with hybrid vector and keyword retrieval.
          </p>
        </div>

        {/* CTA Footer Card */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Want to implement this architecture?
            </h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Speak directly with our senior AI engineers to scope out your technical requirements.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="px-6 py-3.5 rounded-full bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-all btn-glow-breath shrink-0 flex items-center gap-2"
          >
            <span>Book Technical Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
