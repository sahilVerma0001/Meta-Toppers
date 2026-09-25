"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";
import { servicesData } from "@/data/services/index";

const processSteps = [
  { num: "01", title: "Free Growth Audit", copy: "We analyze your website, competitors, and market. You get a clear report showing where you're losing money." },
  { num: "02", title: "Custom Strategy", copy: "We build a tailored plan with fixed pricing and a guaranteed timeline. No surprises, no scope creep." },
  { num: "03", title: "Design & Build", copy: "Our team designs and develops everything — website, campaigns, funnels. Built to convert from day one." },
  { num: "04", title: "Launch & Scale", copy: "We go live, track every metric, and continuously optimize. Your growth compounds month over month." },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24">
          <div className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-20 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase"
              >
                Our Services Ecosystem
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-7xl"
              >
                Stop guessing.<br />Start growing.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-zinc-600 max-w-2xl text-center"
              >
                Three integrated engines that work together to turn your digital presence from a cost center into a revenue machine. No fluff. No vanity metrics. Just clients.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Hub Directory */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8 lg:space-y-12">
          {servicesData.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div 
                key={s.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl sm:p-10 lg:p-12"
              >
                {/* Background glow on hover */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${s.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-5`} />
                
                <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                  
                  {/* Left — Intro */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-lg`}>
                        <Icon size={24} />
                      </div>
                      <span className="text-sm font-bold tracking-[0.2em] text-zinc-400 uppercase">{s.label}</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{s.title}</h2>
                    <p className="mt-4 text-lg text-zinc-600 max-w-xl leading-relaxed">{s.shortDescription}</p>
                  </div>

                  {/* Right — CTA */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-end">
                    <Link 
                      href={`/services/${s.slug}`}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-base font-bold text-zinc-900 transition-all hover:border-zinc-300 hover:bg-zinc-50"
                    >
                      View Case Studies & Process
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* How It Works — Process */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="rounded-[32px] border border-[#cdeeff] bg-[#f2fbff] p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-12 lg:p-16">
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">How it works</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-zinc-950 sm:text-5xl">
                From first call to live results in 21 days.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.num} className="group rounded-[24px] border border-[#cdeeff] bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b6fa8] to-[#085c8b] text-white text-base font-bold mb-6 shadow-md">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-zinc-600">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
          <div className="rounded-[32px] border border-[#0b6fa8]/30 bg-gradient-to-br from-[#0b6fa8] to-[#085c8b] p-8 text-white shadow-[0_24px_80px_rgba(11,111,168,0.2)] sm:p-12 lg:p-16 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 mb-6 backdrop-blur-md">
              <Zap size={32} className="text-blue-200" />
            </div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Custom pricing. Zero surprises.
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-blue-100">
              Every business is different, so every quote is tailored. You&apos;ll get a fixed price and a guaranteed timeline before we start — no hourly billing, no scope creep, no hidden fees.
            </p>
            <Link href="#apply" className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#0b6fa8] shadow-xl transition-transform hover:-translate-y-1">
              Get Your Custom Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Reuse CTA */}
        <CTASection />
      </main>
    </SiteShell>
  );
}
