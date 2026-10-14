"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar as CalendarIcon, Clock, Video, ShieldCheck, CheckCircle2, User, Mail, Building, ArrowRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

const DATES = [
  { day: "Mon", date: "Oct 19" },
  { day: "Tue", date: "Oct 20" },
  { day: "Wed", date: "Oct 21" },
  { day: "Thu", date: "Oct 22" },
  { day: "Fri", date: "Oct 23" },
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
];

export default function BookMeetingPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("Oct 20");
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "Agentic AI Scoping",
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    router.push("/thank-you");
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Direct Calendar"
        title="Book a 30-Minute Architecture"
        highlightText="Scoping Call."
        description="Select a time that suits your team. You will speak directly with a Senior AI Solutions Architect with zero sales intermediaries."
        breadcrumbs={[{ label: "Book a Meeting" }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Meeting Details & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-950 text-white p-8 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-2xl bg-[#f54545] text-white flex items-center justify-center font-bold text-xl">
                  KL
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Technical Scoping Session</h3>
                  <span className="text-xs text-neutral-400">30 Mins · Google Meet Video</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-center gap-3">
                  <Video className="w-4 h-4 text-[#f54545] shrink-0" />
                  <span>Interactive web conferencing via Google Meet</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#f54545] shrink-0" />
                  <span>30 minutes focused on your architectural constraints</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Protected under mutual Non-Disclosure Agreement</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 leading-relaxed">
                💡 <strong>What we will cover:</strong> Review of your existing data pipelines, model selection criteria (latency vs accuracy), infrastructure hosting constraints (HIPAA/VPC), and a preliminary 14-day prototype roadmap.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Widget */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xl">
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider font-bold text-neutral-500 mb-3">
                  1. Select a Date (Central Time - US)
                </label>
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {DATES.map((d) => (
                    <button
                      type="button"
                      key={d.date}
                      onClick={() => setSelectedDate(d.date)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        selectedDate === d.date
                          ? "bg-[#f54545] text-white border-[#f54545] shadow-md shadow-red-500/20"
                          : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      <span className="block text-[11px] font-medium opacity-80">{d.day}</span>
                      <span className="block text-sm font-bold mt-0.5">{d.date.split(" ")[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider font-bold text-neutral-500 mb-3">
                  2. Select a Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        selectedTime === slot
                          ? "bg-neutral-950 text-white border-neutral-950"
                          : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-4">
                <label className="block text-xs uppercase font-mono tracking-wider font-bold text-neutral-500">
                  3. Your Contact Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Company / Product Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#f54545] text-white text-sm font-bold hover:bg-[#e03535] transition-all flex items-center justify-center gap-2 btn-glow-breath cursor-pointer mt-4"
              >
                <span>Confirm Architecture Call ({selectedDate} at {selectedTime})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
