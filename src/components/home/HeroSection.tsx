import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-radial from-red-50/40 via-white to-white">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Clutch Verified Rating Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200/80 shadow-xs mb-8 hover:border-neutral-300 transition-colors">
          <div className="flex items-center text-amber-500 text-xs">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-semibold text-neutral-800">
            4.9 / 5 on Clutch
          </span>
          <span className="text-neutral-300">·</span>
          <span className="text-xs text-neutral-500 font-medium">
            14 verified reviews
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Clutch Elite AI Firm
          </span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-neutral-950 tracking-tight max-w-5xl mx-auto leading-[1.1] sm:leading-[1.08]">
          Your AI-Native <br className="hidden sm:inline" />
          <span className="text-[#f54545] underline decoration-red-200 underline-offset-8">
            Development Partner
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto mt-6 leading-relaxed font-normal">
          Web, mobile, and intelligent systems, built for mid-market companies that need software to{" "}
          <strong className="text-neutral-900 font-semibold">actually think</strong>. 51 AI systems shipped into production.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#f54545] text-white text-base font-bold shadow-lg hover:bg-[#e03535] transition-all duration-200 btn-glow-breath"
          >
            <Sparkles className="w-5 h-5" />
            <span>Talk to Our AI Team</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          <Link
            href="#case-studies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-neutral-800 border border-neutral-300 font-semibold text-base hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200 shadow-xs"
          >
            <span>See Our Work</span>
          </Link>
        </div>

        {/* Key Guarantees Ribbon */}
        <div className="mt-14 pt-10 border-t border-neutral-200/60 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#f54545] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-neutral-800">
              51 Shipped to Production
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-neutral-800">
              HIPAA & SOC 2 Audited
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#f54545] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-neutral-800">
              Inc. 5000 Client Base
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-neutral-800">
              Self-Hosted / Private VPC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
