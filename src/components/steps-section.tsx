"use client";

import { CheckCircle, Phone, Clipboard, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const stepVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

export function StepsSection() {
  const steps = [
    {
      id: "01",
      title: "Free Strategy Call",
      copy: "Tell us what's eating your time. We'll map how a website + growth system can free up 20+ hours a week.",
      icon: Phone,
    },
    {
      id: "02",
      title: "Custom Game Plan",
      copy: "Within 24 hours you'll get a clear plan, timeline, and pricing — no surprise fees.",
      icon: Clipboard,
    },
    {
      id: "03",
      title: "We Hit the Ground Running",
      copy: "Work begins fast: design, build, and test with visible progress from Day 1.",
      icon: Rocket,
    },
    {
      id: "04",
      title: "You Focus on Growth",
      copy: "We run the systems and report progress so you can focus on deals and scaling.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-zinc-950">From overwhelmed to in control — in 4 simple steps.</h2>
        <p className="mt-4 max-w-2xl mx-auto text-zinc-600">No complicated onboarding. No endless meetings. Tell us what you need, and we make it happen.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => {
          const Icon = s.icon as any;
          return (
            <motion.div
              key={s.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stepVariants}
              className="relative flex flex-col items-start gap-4 rounded-2xl border border-[#e8f5ff] bg-white p-6 shadow-sm"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#eef6fb] bg-[#f7fcff]">
                  <Icon size={20} className="text-[#0b6fa8]" />
                </div>
              </div>

              <div className="mt-8 w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-950">{s.title}</h3>
                  <div className="text-xs font-medium text-zinc-500">{s.id}</div>
                </div>
                <p className="mt-3 text-sm text-zinc-600">{s.copy}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-6 py-3 text-sm font-medium text-white hover:bg-[#085c8b]">
          Book a strategy call
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
