"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, ArrowRight, Sparkles } from "lucide-react";
import { NAV_SERVICES, NAV_INDUSTRIES } from "@/data/siteData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <span className="font-heading tracking-tight text-2xl md:text-3xl font-extrabold text-neutral-950">
              KODEXO
            </span>
            <span className="font-sans text-2xl md:text-3xl font-bold text-[#f54545] ml-1">
              LABS
            </span>
            <span className="h-2 w-2 rounded-full bg-[#f54545] ml-1 animate-pulse" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="/about-us"
            className="text-[15px] font-medium text-neutral-700 hover:text-[#f54545] px-3 py-2 rounded-md transition-colors"
          >
            About us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-neutral-700 hover:text-[#f54545] px-3 py-2 rounded-md transition-colors cursor-pointer">
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180 text-[#f54545]" : ""
                }`}
              />
            </button>

            {activeDropdown === "services" && (
              <div className="absolute top-full -left-20 w-[640px] bg-white rounded-2xl shadow-2xl border border-neutral-100 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150">
                {NAV_SERVICES.map((srv) => (
                  <Link
                    key={srv.href}
                    href={srv.href}
                    className="p-3 rounded-xl hover:bg-neutral-50 transition-colors group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-neutral-900 group-hover:text-[#f54545] transition-colors text-sm">
                          {srv.label}
                        </span>
                        {srv.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-[#f54545] border border-red-100">
                            {srv.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                        {srv.description}
                      </p>
                    </div>
                  </Link>
                ))}
                <div className="col-span-2 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">
                    Need tailored architecture review?
                  </span>
                  <Link
                    href="/services"
                    className="text-xs font-bold text-[#f54545] hover:underline flex items-center gap-1"
                  >
                    Explore all 10 Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-neutral-700 hover:text-[#f54545] px-3 py-2 rounded-md transition-colors cursor-pointer">
              <span>Industries</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "industries" ? "rotate-180 text-[#f54545]" : ""
                }`}
              />
            </button>

            {activeDropdown === "industries" && (
              <div className="absolute top-full -left-10 w-[480px] bg-white rounded-2xl shadow-2xl border border-neutral-100 p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-150">
                {NAV_INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    className="p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
                  >
                    <span className="font-semibold text-neutral-900 group-hover:text-[#f54545] transition-colors text-sm block">
                      {ind.label}
                    </span>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {ind.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            className="text-[15px] font-medium text-neutral-700 hover:text-[#f54545] px-3 py-2 rounded-md transition-colors"
          >
            Portfolio
          </Link>

          <Link
            href="/blogs"
            className="text-[15px] font-medium text-neutral-700 hover:text-[#f54545] px-3 py-2 rounded-md transition-colors"
          >
            Insights
          </Link>
        </nav>

        {/* Action Button & Mobile Toggles */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact-us"
            className="hidden lg:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#f54545] text-white text-sm font-bold btn-glow-breath cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>

          {/* Quick Phone for Mobile */}
          <Link
            href="/contact-us"
            className="lg:hidden p-2.5 rounded-full bg-red-50 text-[#f54545] hover:bg-red-100 transition-colors"
            aria-label="Contact Us Phone"
          >
            <Phone className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl">
          <Link
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-neutral-800 hover:text-[#f54545]"
          >
            About us
          </Link>
          <div className="border-t border-neutral-100 pt-3">
            <span className="text-xs uppercase tracking-wider font-bold text-neutral-400">
              Services
            </span>
            <div className="grid grid-cols-1 gap-2 mt-2 pl-2">
              {NAV_SERVICES.slice(0, 5).map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-neutral-700 hover:text-[#f54545] py-1"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-neutral-800 hover:text-[#f54545]"
          >
            Portfolio & Case Studies
          </Link>
          <Link
            href="/blogs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-neutral-800 hover:text-[#f54545]"
          >
            Insights & Research
          </Link>
          <div className="pt-2">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#f54545] text-white font-bold text-sm shadow-md"
            >
              Book an Intro Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
