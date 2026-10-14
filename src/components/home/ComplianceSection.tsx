import { ShieldCheck, Lock, Server, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { COMPLIANCE_ITEMS } from "@/data/siteData";

export default function ComplianceSection() {
  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#f54545]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
            Audited Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Compliance Built Into Every AI System We Ship.
          </h2>
          <p className="text-neutral-400 mt-4 text-base sm:text-lg">
            Mid-market and enterprise teams in healthcare, legal, and finance cannot afford data leaks or compliance infractions. We engineer zero-retention privacy by default.
          </p>
        </div>

        {/* 4 Compliance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPLIANCE_ITEMS.map((item, idx) => {
            const icons = [ShieldCheck, FileCheck, Lock, Server];
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-neutral-900/90 rounded-3xl p-8 border border-neutral-800 hover:border-[#f54545]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="size-12 rounded-2xl bg-neutral-800 text-[#f54545] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-red-950 text-[#f54545] text-[11px] font-bold uppercase tracking-wider mb-3 border border-red-800/40">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Self-Hosted Callout */}
        <div className="mt-12 bg-neutral-900 rounded-3xl p-8 sm:p-10 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white">
              Need a 100% On-Premise Air-Gapped LLM Stack?
            </h4>
            <p className="text-sm text-neutral-400 max-w-2xl">
              We deploy models onto sovereign hardware or isolated VPCs using vLLM, TensorRT, and open weights like Llama 3 and DeepSeek R1 with zero external network dependencies.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f54545] text-white text-sm font-bold hover:bg-[#e03535] transition-all btn-glow-breath shrink-0"
          >
            <span>Book Security Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
