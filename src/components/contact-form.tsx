"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData) => {
    const errs: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) errs.name = "Please enter your name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email";
    if (!message || message.trim().length < 10) errs.message = "Tell us a bit more (at least 10 characters)";

    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setState("submitting");

    // Simulate a server action delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setState("success");
  };

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12 px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f2fbff] text-[#0b6fa8] mb-6"
        >
          <svg viewBox="0 0 52 52" className="h-10 w-10">
            <circle cx="26" cy="26" r="24" fill="none" stroke="#0b6fa8" strokeWidth="2" opacity="0.2" />
            <path className="check-animate" fill="none" stroke="#0b6fa8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M14 27l8 8 16-16" />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-semibold text-zinc-950">Message sent!</h3>
        <p className="mt-3 text-base text-zinc-600 max-w-sm">
          We&apos;ll review your project and get back to you within 2 hours during business hours.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 text-sm font-medium text-[#0b6fa8] hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Smith"
            className={`form-input-animated w-full rounded-xl border ${errors.name ? 'border-red-300 bg-red-50/30' : 'border-zinc-200'} bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none`}
            onChange={() => errors.name && setErrors((prev) => ({ ...prev, name: "" }))}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1 text-xs text-red-500">
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            className={`form-input-animated w-full rounded-xl border ${errors.email ? 'border-red-300 bg-red-50/30' : 'border-zinc-200'} bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none`}
            onChange={() => errors.email && setErrors((prev) => ({ ...prev, email: "" }))}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1 text-xs text-red-500">
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1.5">
            Phone <span className="text-zinc-400 text-xs">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="form-input-animated w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none"
          />
        </div>
        <div>
          <label htmlFor="project" className="block text-sm font-medium text-zinc-700 mb-1.5">
            Project Type
          </label>
          <select
            id="project"
            name="project"
            className="form-input-animated w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none appearance-none"
            defaultValue=""
          >
            <option value="" disabled>Select a service...</option>
            <option value="website">Website Design & Development</option>
            <option value="seo">SEO & Content Strategy</option>
            <option value="ads">Paid Advertising & Lead Gen</option>
            <option value="branding">Brand Positioning</option>
            <option value="full">Full Growth Package</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-1.5">
          Company Name <span className="text-zinc-400 text-xs">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Corp"
          className="form-input-animated w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1.5">
          Tell us about your project <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What are your goals? What challenges are you facing? The more detail, the better our initial recommendations."
          className={`form-input-animated w-full rounded-xl border ${errors.message ? 'border-red-300 bg-red-50/30' : 'border-zinc-200'} bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none resize-none`}
          onChange={() => errors.message && setErrors((prev) => ({ ...prev, message: "" }))}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1 text-xs text-red-500">
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="cta-pulse btn-interactive group w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0b6fa8] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#085c8b] disabled:opacity-70 disabled:cursor-not-allowed disabled:animate-none"
      >
        {state === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Get Your Free Growth Audit
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-zinc-400">
        No spam, no commitment. We&apos;ll reply within 2 hours.
      </p>
    </form>
  );
}
