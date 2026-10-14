import { CLIENT_LOGOS } from "@/data/siteData";

export default function ClientProofMarquee() {
  return (
    <section className="py-14 bg-neutral-950 text-white overflow-hidden border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-bold">
          Proof You&apos;re Working With the Right AI Software Development Company
        </h2>
      </div>

      <div className="flex animate-marquee items-center gap-10">
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 px-6 py-3 rounded-2xl bg-neutral-900/80 border border-neutral-800/80 shrink-0"
          >
            <div className="size-3 rounded-full bg-[#f54545]" />
            <div>
              <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                {logo.name}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] font-bold text-[#f54545]">
                  {logo.metric}
                </span>
                <span className="text-neutral-600 text-xs">·</span>
                <span className="text-[11px] text-neutral-400">{logo.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
