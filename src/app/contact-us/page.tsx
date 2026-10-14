"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ShieldCheck, Clock, Send, CheckCircle2, Calendar } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Original Design Manufacturing (ODM)",
    timeline: "Immediate / Urgent",
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
        badge="Direct Engineering Contact"
        title="Consult with the Haalar Services"
        highlightText="Engineering Team."
        description="Headquartered in Humak Industrial Estate, Islamabad. Contact our technical team for ODM, OEM, reverse engineering, and RF solutions."
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
                Engineering-First Collaboration
              </h2>
              <p className="text-neutral-600 text-sm mt-3 leading-relaxed">
                Speak directly with senior hardware, RF, and reverse engineering specialists who understand schematic extraction, component decoding, and IPC Class 3 manufacturing.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <div className="size-10 rounded-xl bg-red-100 text-[#f54545] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Email Communication</span>
                  <a href="mailto:info@haalarservices.com" className="text-sm font-bold text-neutral-900 block hover:text-[#f54545] transition-colors">
                    info@haalarservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <div className="size-10 rounded-xl bg-red-100 text-[#f54545] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Direct Contact &amp; WhatsApp</span>
                  <span className="text-sm font-bold text-neutral-900 block">
                    0333-0947546 / +92 333 0947546
                  </span>
                  <span className="text-xs text-neutral-500 block mt-0.5">
                    PTCL / Fax: +92 51 4490922
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <div className="size-10 rounded-xl bg-red-100 text-[#f54545] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Manufacturing HQ &amp; Lab</span>
                  <span className="text-sm font-bold text-neutral-900 block">
                    Plot No. 261, Humak Industrial Estate, Kahuta Road, Islamabad
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 text-white space-y-3 border border-neutral-800">
              <div className="flex items-center gap-2 text-[#f54545] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidentiality &amp; NDA Protection</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                All client hardware schematics, sample PCBs, RF spectrum requirements, and custom product designs are governed under strict mutual Non-Disclosure Agreements.
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
                  Thank you, <strong>{form.name}</strong>. An engineering project manager from Haalar Services will review your technical brief and reach out at <strong>{form.email}</strong> promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Request Technical Consultation / Quote
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
                      placeholder="Engr. Tariq Mehmood"
                      className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tariq@organization.com"
                      className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Contact / Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="0300-1234567"
                      className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Primary Service Area
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                    >
                      <option>Original Design Manufacturing (ODM)</option>
                      <option>Original Equipment Manufacturing (OEM)</option>
                      <option>Reverse Engineering of PCBs</option>
                      <option>RF & Microwave Equipment Development</option>
                      <option>Embedded Firmware & RTOS</option>
                      <option>Component Decoding & Schematics</option>
                      <option>Legacy Equipment Diagnostic & Modernization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Organization / Department
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Defense / Industrial Organization"
                    className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Technical Specifications / Project Details
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your PCB layer count, frequency bands, operational environment, or target deliverables..."
                    className="w-full text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#f54545] text-white text-sm font-bold hover:bg-[#e03535] transition-all flex items-center justify-center gap-2 btn-glow-breath cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Engineering Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
