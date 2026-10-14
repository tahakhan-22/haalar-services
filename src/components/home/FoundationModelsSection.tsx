import { Cpu, Sparkles } from "lucide-react";
import { FOUNDATION_MODELS } from "@/data/siteData";

export default function FoundationModelsSection() {
  return (
    <section className="py-24 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
            Foundation Intelligence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 mt-3 tracking-tight">
            The Foundation Models Powering Our Generative AI Work.
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            We are model-agnostic. We evaluate, benchmark, and deploy the precise model combination that maximizes reasoning capability while minimizing token latency and cost.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {FOUNDATION_MODELS.map((model, idx) => (
            <div
              key={idx}
              className="bg-neutral-50/70 rounded-2xl p-6 border border-neutral-200/70 hover-card-elevate flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase text-neutral-400">
                    {model.provider}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#f54545]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                  {model.name}
                </h3>
              </div>
              <p className="text-xs text-neutral-500 mt-3 pt-3 border-t border-neutral-200/50">
                {model.capability}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
