import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Mail, MapPin } from "lucide-react";
import { NAV_SERVICES, NAV_INDUSTRIES } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Row */}
        <div className="border-b border-neutral-800 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[#f54545] font-mono text-xs uppercase tracking-wider font-semibold">
              Disrupt · Defend · Dominate
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 tracking-tight">
              Your Idea, Our Expertise — Hardware & RF Systems.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f54545] text-white font-bold text-base hover:bg-[#e03535] transition-all duration-200 btn-glow-breath"
            >
              <span>Consult with Engineering Team</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-900 text-neutral-200 border border-neutral-800 font-semibold text-base hover:bg-neutral-800 transition-colors"
            >
              Browse Products & Systems
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="col-span-2">
            <div className="flex items-center">
              <span className="font-heading tracking-tight text-3xl font-extrabold text-white">
                HAALAR
              </span>
              <span className="font-sans text-3xl font-bold text-[#f54545] ml-1">
                SERVICES
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#f54545] ml-1.5" />
            </div>
            <p className="text-sm text-neutral-400 mt-4 max-w-sm leading-relaxed">
              Disrupt · Defend · Dominate. Specialized in reliable and trusted next-generation hardware, PCB reverse engineering, and indigenous RF/microwave systems.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>IPC-A-610 Class 3 & Military Standards Manufacturing</span>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full py-1.5 px-4 w-max">
              <span className="text-[#f54545]">✦</span>
              <span>ODM · OEM · Lifecycle Engineering Support</span>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-mono text-neutral-400 font-bold mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_SERVICES.slice(0, 6).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-mono text-neutral-400 font-bold mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_INDUSTRIES.map((ind) => (
                <li key={ind.href}>
                  <Link
                    href={ind.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Facilities */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-mono text-neutral-400 font-bold mb-4">
              Headquarters & Labs
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f54545] shrink-0 mt-0.5" />
                <span>Plot No. 261, Humak Industrial Estate, Kahuta Road, Islamabad</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <a href="mailto:info@haalarservices.com" className="hover:text-white transition-colors">
                  info@haalarservices.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#f54545] font-bold">Mob:</span>
                <span>0333-0947546</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neutral-500 font-bold">PTCL:</span>
                <span>+92 51 4490922</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Haalar Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-neutral-300">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-neutral-300">
              Terms & Conditions
            </Link>
            <Link href="/cookies-policy" className="hover:text-neutral-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
