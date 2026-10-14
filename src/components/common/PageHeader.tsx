import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightText?: string;
  description: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({
  badge,
  title,
  highlightText,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 bg-neutral-950 text-white border-b border-neutral-900">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#f54545]/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
              {b.href ? (
                <Link href={b.href} className="hover:text-white transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-neutral-200">{b.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-[#f54545] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
          {title}{" "}
          {highlightText && (
            <span className="text-[#f54545]">{highlightText}</span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mt-4 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </section>
  );
}
