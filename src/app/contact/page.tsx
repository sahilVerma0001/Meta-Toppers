"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, ArrowRight, Users, TrendingUp, Zap, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteShell } from "@/components/site-shell";

const trustStats = [
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: TrendingUp, value: "+146%", label: "Avg. Lead Increase" },
  { icon: Trophy, value: "96%", label: "Client Retention" },
  { icon: Zap, value: "21 Days", label: "Avg. Launch Time" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">Let&apos;s build your growth engine</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              Ready to stop losing clients?
            </h1>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Tell us about your business. We&apos;ll review your application and get back within 24 hours with a personalized growth audit.
            </p>
          </div>
        </section>

        {/* Form + Info Grid */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            
            {/* Left — Application Form */}
            <div className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-zinc-950 mb-6">Apply for Your Free Growth Audit</h2>
                    
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">Full Name *</label>
                        <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#0b6fa8]/30 focus:border-[#0b6fa8] transition-all" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">Email *</label>
                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#0b6fa8]/30 focus:border-[#0b6fa8] transition-all" />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 mb-2">Phone</label>
                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#0b6fa8]/30 focus:border-[#0b6fa8] transition-all" />
                      </div>
                      <div>
                        <label htmlFor="website" className="block text-sm font-semibold text-zinc-700 mb-2">Website URL</label>
                        <input id="website" name="website" type="url" value={formData.website} onChange={handleChange}
                          placeholder="https://yoursite.com"
                          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#0b6fa8]/30 focus:border-[#0b6fa8] transition-all" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-zinc-700 mb-2">Monthly Budget Range</label>
                      <select id="budget" name="budget" required value={formData.budget} onChange={handleChange}
                        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#0b6fa8]/30 focus:border-[#0b6fa8] transition-all appearance-none">
                        <option value="" disabled>Select your budget range</option>
                        <option value="under-25k">Under ₹25,000/mo</option>
                        <option value="25k-50k">₹25,000 – ₹50,000/mo</option>
                        <option value="50k-1l">₹50,000 – ₹1,00,000/mo</option>
                        <option value="1l-plus">₹1,00,000+/mo</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">Tell us about your project</label>
                      <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
                        placeholder="What are your biggest challenges? What does success look like for you?"
                        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#0b6fa8]/30 focus:border-[#0b6fa8] transition-all resize-none" />
                    </div>

                    <button type="submit"
                      className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b6fa8] px-6 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#085c8b] hover:-translate-y-0.5 hover:shadow-lg">
                      <Send size={18} />
                      Submit Application
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-xs text-zinc-400">
                      We review every application within 24 hours. No spam, ever.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 mb-6">
                      <CheckCircle size={40} className="text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-950">Application Received!</h3>
                    <p className="mt-4 text-base text-zinc-600 max-w-md mx-auto">
                      We&apos;ll review your details and get back to you within 24 hours with your personalized growth audit.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right — Contact Info */}
            <div className="space-y-5">
              {/* Availability */}
              <div className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6">
                <p className="text-sm font-bold tracking-[0.15em] text-[#0b6fa8] uppercase">Limited Availability</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  We take on a limited number of clients each month to ensure every project gets our full attention.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-[20px] border border-[#cdeeff] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2fbff] text-[#0b6fa8]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-950 text-sm">Office</p>
                    <p className="text-sm text-zinc-600">Mansarover Plaza, Madhyam Marg, Mansarovar, Jaipur, Rajasthan 302020</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-[20px] border border-[#cdeeff] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2fbff] text-[#0b6fa8]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-950 text-sm">Phone</p>
                    <div className="text-sm text-zinc-600">
                      <a href="tel:+919799917630" className="hover:text-[#0b6fa8] transition-colors">+91 97999 17630</a>
                      <br />
                      <a href="tel:+919351673834" className="hover:text-[#0b6fa8] transition-colors">+91 93516 73834</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-[20px] border border-[#cdeeff] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2fbff] text-[#0b6fa8]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-950 text-sm">Email</p>
                    <a href="mailto:metatoppers@gmail.com" className="text-sm text-zinc-600 hover:text-[#0b6fa8] transition-colors">metatoppers@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-[20px] border border-[#cdeeff] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2fbff] text-[#0b6fa8]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-950 text-sm">Response Time</p>
                    <p className="text-sm text-zinc-600">We reply within 24 hours. Always.</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="rounded-[24px] border border-[#0b6fa8]/20 bg-gradient-to-br from-[#0b6fa8] to-[#085c8b] p-6 text-white">
                <div className="grid grid-cols-2 gap-4">
                  {trustStats.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="text-center">
                        <Icon size={18} className="mx-auto text-blue-200 mb-2" />
                        <p className="text-xl font-black text-white">{s.value}</p>
                        <p className="text-[11px] font-medium text-blue-200 uppercase tracking-wider">{s.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-16" />
      </main>
    </SiteShell>
  );
}
