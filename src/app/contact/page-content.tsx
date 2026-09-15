"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    business: "",
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
      <main className="bg-white min-h-screen relative pt-20 pb-24">
        
        {/* Optional: extremely subtle vertical grid lines to match reference */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px)`,
          backgroundSize: `33.333% 100%`,
        }} />

        {/* Subtle brand blue glow in top left to connect with theme */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#0b6fa8]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
            
            {/* LEFT COLUMN — Huge Typography & Clean Info Grid */}
            <div className="pt-4 lg:pt-12">
              <p className="text-[11px] font-bold tracking-[0.25em] text-[#0b6fa8] uppercase mb-8">
                / get in touch /
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-medium tracking-tight text-zinc-950 mb-8 leading-[1.05]">
                Ready to stop<br />losing clients?
              </h1>
              <p className="text-lg leading-relaxed text-zinc-500 mb-16 max-w-md">
                Tell us about your business. We&apos;ll review your application and get back within 24 hours with a personalized growth audit.
              </p>

              {/* Minimalist Info Grid */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-12 max-w-xl">
                <div>
                  <h3 className="text-[15px] font-bold text-zinc-950 mb-3">Call or WhatsApp</h3>
                  <div className="text-zinc-500 text-sm space-y-1.5">
                    <a href="tel:+919799917630" className="hover:text-[#0b6fa8] transition-colors block">+91 97999 17630</a>
                    <a href="tel:+919351673834" className="hover:text-[#0b6fa8] transition-colors block">+91 93516 73834</a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[15px] font-bold text-zinc-950 mb-3">Our Location</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Mansarover Plaza, Madhyam Marg<br />
                    Mansarovar, Jaipur<br />
                    Rajasthan 302020
                  </p>
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-zinc-950 mb-3">Email</h3>
                  <a href="mailto:metatoppers@gmail.com" className="text-zinc-500 text-sm hover:text-[#0b6fa8] transition-colors">
                    metatoppers@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-zinc-950 mb-3">Availability</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    We take on a strictly limited number of clients each month to ensure absolute focus.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Clean Form Card (Tinted with brand colors) */}
            <div className="bg-[#f4fbff] rounded-[2.5rem] p-8 sm:p-12 border border-[#cdeeff]">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col h-full"
                  >
                    <h2 className="text-[28px] font-medium text-zinc-950 mb-3">Tell us about your business</h2>
                    <p className="text-sm text-zinc-500 mb-10 leading-relaxed">
                      Define your goals and identify areas where we can add value to your business. Takes 30 seconds.
                    </p>
                    
                    <div className="space-y-8 flex-grow">
                      
                      <div className="grid gap-8 sm:grid-cols-2">
                        <div>
                          <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
                            placeholder="Full name *"
                            className="w-full bg-transparent px-0 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 transition-colors rounded-none !border-t-0 !border-l-0 !border-r-0 !border-b !border-b-zinc-200 focus:!border-b-[#0b6fa8] !shadow-none focus:!ring-0 focus:!shadow-none focus:!outline-none" />
                        </div>
                        <div>
                          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                            placeholder="Email address *"
                            className="w-full bg-transparent px-0 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 transition-colors rounded-none !border-t-0 !border-l-0 !border-r-0 !border-b !border-b-zinc-200 focus:!border-b-[#0b6fa8] !shadow-none focus:!ring-0 focus:!shadow-none focus:!outline-none" />
                        </div>
                      </div>

                      <div className="grid gap-8 sm:grid-cols-2">
                        <div>
                          <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                            placeholder="Phone number *"
                            className="w-full bg-transparent px-0 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 transition-colors rounded-none !border-t-0 !border-l-0 !border-r-0 !border-b !border-b-zinc-200 focus:!border-b-[#0b6fa8] !shadow-none focus:!ring-0 focus:!shadow-none focus:!outline-none" />
                        </div>
                        <div>
                          <input id="company" name="company" type="text" required value={formData.company} onChange={handleChange}
                            placeholder="Company name"
                            className="w-full bg-transparent px-0 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 transition-colors rounded-none !border-t-0 !border-l-0 !border-r-0 !border-b !border-b-zinc-200 focus:!border-b-[#0b6fa8] !shadow-none focus:!ring-0 focus:!shadow-none focus:!outline-none" />
                        </div>
                      </div>

                      <div>
                        <select id="business" name="business" required value={formData.business} onChange={handleChange}
                          className={`w-full bg-transparent px-0 py-3 text-[15px] transition-colors rounded-none !border-t-0 !border-l-0 !border-r-0 !border-b !border-b-zinc-200 focus:!border-b-[#0b6fa8] !shadow-none focus:!ring-0 focus:!shadow-none focus:!outline-none ${formData.business ? 'text-zinc-900' : 'text-zinc-400'}`}>
                          <option value="" disabled>Select your industry *</option>
                          <option value="real-estate" className="text-zinc-900">Real Estate</option>
                          <option value="healthcare" className="text-zinc-900">Healthcare / Clinic</option>
                          <option value="hospitality" className="text-zinc-900">Cafe / Restaurant / Hotel</option>
                          <option value="insurance" className="text-zinc-900">Insurance / Finance</option>
                          <option value="other" className="text-zinc-900">Other</option>
                        </select>
                      </div>

                      <div>
                        <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange}
                          placeholder="What's your biggest challenge right now?"
                          className="w-full bg-transparent px-0 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 transition-colors rounded-none resize-none !border-t-0 !border-l-0 !border-r-0 !border-b !border-b-zinc-200 focus:!border-b-[#0b6fa8] !shadow-none focus:!ring-0 focus:!shadow-none focus:!outline-none" />
                      </div>
                    </div>

                    <div className="mt-12">
                      <button type="submit"
                        className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0b6fa8] px-8 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#085c8b] hover:shadow-lg hover:-translate-y-0.5">
                        Get My Free Audit
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 flex flex-col items-center justify-center h-full"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0b6fa8]/10 mb-6">
                      <CheckCircle size={40} className="text-[#0b6fa8]" />
                    </div>
                    <h3 className="text-3xl font-medium text-zinc-950">Application Received!</h3>
                    <p className="mt-4 text-base text-zinc-500 max-w-sm mx-auto">
                      We&apos;ll review your details and get back to you within 24 hours with your personalized growth audit.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </main>
    </SiteShell>
  );
}
