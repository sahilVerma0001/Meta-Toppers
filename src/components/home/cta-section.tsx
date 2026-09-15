"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-[#0b6fa8]/30 bg-gradient-to-br from-[#0b6fa8] to-[#085c8b] p-8 shadow-[0_24px_80px_rgba(11,111,168,0.15)] sm:p-12 lg:p-16 relative overflow-hidden">
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: `32px 32px`,
        }} />

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative z-10"
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                {/* Left — Copy */}
                <div>
                  <p className="text-sm font-bold tracking-[0.2em] text-blue-200 uppercase">Ready to stop losing clients?</p>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Apply for a free<br />growth audit.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-blue-100 max-w-lg">
                    We'll analyze your website, your competitors, and your market — then show you exactly where you're leaving money on the table. No strings attached.
                  </p>
                  <div className="mt-6 space-y-3">
                    {[
                      "Full website & SEO audit",
                      "Competitor analysis report",
                      "Custom growth roadmap",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-blue-100">
                        <CheckCircle size={16} className="text-emerald-300 shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — Application Form */}
                <form onSubmit={handleSubmit} className="rounded-[24px] bg-white/10 backdrop-blur-md border border-white/15 p-6 sm:p-8 space-y-5">
                  <div>
                    <label htmlFor="cta-name" className="block text-sm font-semibold text-blue-100 mb-2">What&apos;s your name?</label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-phone" className="block text-sm font-semibold text-blue-100 mb-2">Best number to reach you?</label>
                    <input
                      id="cta-phone"
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-business" className="block text-sm font-semibold text-blue-100 mb-2">What does your business do?</label>
                    <select
                      id="cta-business"
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all appearance-none"
                    >
                      <option value="" disabled className="bg-[#085c8b]">Select your industry</option>
                      <option value="real-estate" className="bg-[#085c8b]">Real Estate</option>
                      <option value="healthcare" className="bg-[#085c8b]">Healthcare / Clinic</option>
                      <option value="hospitality" className="bg-[#085c8b]">Cafe / Restaurant / Hotel</option>
                      <option value="insurance" className="bg-[#085c8b]">Insurance / Finance</option>
                      <option value="other" className="bg-[#085c8b]">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-[15px] font-bold text-[#0b6fa8] transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Send size={18} />
                    Get My Free Audit
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-blue-200/60">
                    Takes 10 seconds. We&apos;ll call you within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 text-center py-12"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/20 mb-6">
                <CheckCircle size={40} className="text-emerald-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">Application Received.</h3>
              <p className="mt-4 text-lg text-blue-100 max-w-md mx-auto">
                We'll review your application and get back to you within 24 hours with your personalized growth audit.
              </p>
              <p className="mt-6 text-sm text-blue-200/60">
                Check your inbox for a confirmation email.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
