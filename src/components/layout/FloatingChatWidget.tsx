"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setEmail("");
      setMessage("");
    }, 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="size-14 rounded-full bg-[#f54545] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer btn-glow-breath relative"
          aria-label="Open AI Consultation Chat"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
          </span>
        </button>
      )}

      {/* Chat Popout Dialog */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#0a0a0a] text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-[#f54545] flex items-center justify-center font-bold text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Kodexo AI Team</h4>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Online · Avg response &lt; 15 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h5 className="font-bold text-neutral-900 text-base">Request Received!</h5>
                <p className="text-xs text-neutral-500 max-w-[260px] mx-auto">
                  Our senior engineering lead will review your requirements and reach out promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <p className="text-xs text-neutral-600 leading-relaxed bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                  👋 <strong>Looking to build or scale an AI system?</strong> Send us a quick note or request a free architecture review.
                </p>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                    Your Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                    Project Brief / Challenge
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="We want to automate clinical chart extraction or build an AI agent..."
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#f54545] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#f54545] text-white text-xs font-bold hover:bg-[#e03535] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
