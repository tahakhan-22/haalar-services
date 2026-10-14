"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Clock, Zap } from "lucide-react";

export default function ContactCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Original Design Manufacturing (ODM)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f54545]/15 blur-[130px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#f54545] font-mono text-xs uppercase tracking-widest font-bold">
                Direct Engineering Access
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Turn Ideas into Hardware Reality.
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Connect directly with the hardware, RF, and reverse engineering architects at our Humak Industrial Estate facility in Islamabad.
              </p>

              <div className="space-y-4 pt-4 border-t border-neutral-800">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-300 font-semibold">
                    IPC-A-610 Class 3 certified assembly &amp; soldering
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-300 font-semibold">
                    Turnkey ODM from schematic design to CNC casing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-300 font-semibold">
                    Strict mutual Non-Disclosure Agreement (NDA) guaranteed
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-neutral-900 rounded-2xl p-6 sm:p-10 border border-neutral-800">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. An engineering project manager from Haalar Services will review your technical specifications and contact you at <strong>{formData.email}</strong> promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-neutral-800 text-neutral-300 text-xs font-bold hover:bg-neutral-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Engr. Tariq Mehmood"
                        className="w-full text-sm p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-[#f54545]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Work / Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="tariq@organization.com"
                        className="w-full text-sm p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-[#f54545]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Organization / Department
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Defense / Strategic / Industrial"
                        className="w-full text-sm p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-[#f54545]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Engineering Discipline
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full text-sm p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-[#f54545]"
                      >
                        <option>Original Design Manufacturing (ODM)</option>
                        <option>Original Equipment Manufacturing (OEM)</option>
                        <option>Reverse Engineering of PCBs</option>
                        <option>RF & Microwave Equipment Development</option>
                        <option>Embedded Firmware & RTOS</option>
                        <option>Legacy Equipment Diagnostic & Modernization</option>
                        <option>Component Decoding & Schematics</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Technical Scope / Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Specify PCB layer count, frequency bands, RF power output, or target deliverables..."
                      className="w-full text-sm p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-[#f54545] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#f54545] text-white text-sm font-bold hover:bg-[#e03535] transition-all flex items-center justify-center gap-2 btn-glow-breath cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Technical Consultation Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
