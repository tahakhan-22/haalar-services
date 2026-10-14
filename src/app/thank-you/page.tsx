import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="bg-white min-h-[80vh] flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="size-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm border border-emerald-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
            Consultation Confirmed
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight mt-2">
            You&apos;re On the Engineering Calendar.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg mt-4 max-w-lg mx-auto leading-relaxed">
            We have registered your session. A confirmation and meeting invitation have been dispatched to your email address.
          </p>
        </div>

        <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 text-left space-y-3">
          <h3 className="font-bold text-sm text-neutral-900">What happens next:</h3>
          <ul className="text-xs text-neutral-600 space-y-2">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#f54545]" />
              <span>A Senior Hardware / RF Solutions Engineer will review your organization context and requirements.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#f54545]" />
              <span>We will prepare comparable module architecture diagrams from our 40+ deployed electronic systems.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#f54545]" />
              <span>Our meeting will focus 100% on circuit feasibility, IPC-A-610 standards, and prototype timelines.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
          >
            <span>Explore Deployed Products</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-700 border border-neutral-200 text-xs font-bold hover:bg-neutral-50 transition-colors"
          >
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
