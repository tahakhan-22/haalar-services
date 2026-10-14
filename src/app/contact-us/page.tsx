"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ShieldCheck, Clock, Send, CheckCircle2, Calendar } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$25,000 - $50,000",
    service: "Agentic AI & Multi-Agent Systems",
    timeline: "Immediately",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <PageHeader
        badge="Direct Discovery"
        title="Let's Architect Your Next Production"
        highlightText="AI System."
        description="Speak directly with a Senior AI Solutions Architect. We respond in under 2 hours during business days."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Inquiries & Office Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                Direct Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-2">
                We Prioritize Engineering Over Sales
              </h2>
              <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                When you reach out, you won&apos;t be routed to an aggressive SDR. You will speak with a technical solutions architect who understands your codebase, constraints, and latency targets.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <div className="size-10 rounded-xl bg-red-100 text-[#f54545] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Email Inquiry</span>
                  <a href="mailto:hello@kodexolabs.com" className="text-sm font-bold text-neutral-900 block hover:text-[#f54545] transition-colors">
                    hello@kodexolabs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <div className="size-10 rounded-xl bg-red-100 text-[#f54545] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Direct Telephone</span>
                  <span className="text-sm font-bold text-neutral-900 block">
                    +1 (512) 890-3490 (Austin, TX)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <div className="size-10 rounded-xl bg-red-100 text-[#f54545] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Instant Scheduling</span>
                  <span className="text-sm font-bold text-neutral-900 block">
                    Book an intro 30-min call on Google Meet
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 text-white space-y-3 border border-neutral-800">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Privacy Assurance</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                All client project briefs and architectural discussions are governed under strict mutual non-disclosure agreements before review.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-neutral-900">
                  Inquiry Received!
                </h3>
                <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{form.name}</strong>. A Senior Solutions Architect has received your brief and will contact you at <strong>{form.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Request an Architecture Review
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="David Miller"
                      className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="david@enterprise.com"
                      className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Apex Diagnostics"
                      className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Primary Service Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                    >
                      <option>Agentic AI & Multi-Agent Systems</option>
                      <option>Custom Software Development</option>
                      <option>Mobile App Development</option>
                      <option>Intelligent Automation</option>
                      <option>AI Security & Compliance Review</option>
                      <option>Cloud & AI Infrastructure</option>
                      <option>Staff Augmentation (72h Pods)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                  >
                    <option>&lt; $25,000 (Proof of Concept)</option>
                    <option>$25,000 - $50,000 (MVP Build)</option>
                    <option>$50,000 - $100,000 (Production System)</option>
                    <option>$100,000+ (Enterprise Overhaul / Dedicated Pods)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Project Context & Objectives
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your current tech stack, target users, and key deliverables..."
                    className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#f54545] text-white text-sm font-bold hover:bg-[#e03535] transition-all flex items-center justify-center gap-2 btn-glow-breath cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Engineering Call</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
