"use client";

import Link from "next/link";
import { ArrowRight, PanelsTopLeft, Orbit, Sparkles, CheckCircle, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";

const services = [
  {
    icon: PanelsTopLeft,
    label: "Engine 01",
    title: "Websites That Convert",
    problem: "Your website looks fine — but it's not bringing in clients. Visitors land, look around, and leave.",
    solution: [
      "Custom-designed for your specific audience & brand",
      "Conversion-optimized from the first pixel to the last CTA",
      "Mobile-first, blazing fast, SEO-ready out of the box",
    ],
    stat: "+250%",
    statLabel: "avg. lead increase after launch",
    accent: "from-[#0b6fa8] to-[#085c8b]",
  },
  {
    icon: Orbit,
    label: "Engine 02",
    title: "SEO & Ads That Pay For Themselves",
    problem: "You're invisible on Google while your competitors dominate page 1. Your ad budget disappears with nothing to show.",
    solution: [
      "Data-driven SEO that builds compounding organic traffic",
      "Paid campaigns connected to real revenue, not vanity clicks",
      "Full ROI dashboard — know exactly what every rupee earns",
    ],
    stat: "3×",
    statLabel: "avg. organic traffic increase",
    accent: "from-emerald-600 to-emerald-700",
  },
  {
    icon: Sparkles,
    label: "Engine 03",
    title: "Lead Gen On Autopilot",
    problem: "You're chasing leads manually. No system, no funnel, no predictability. Growth feels random.",
    solution: [
      "Automated funnels that qualify and deliver leads 24/7",
      "Social ad campaigns targeting buyers ready to act",
      "CRM integration so no lead ever falls through the cracks",
    ],
    stat: "42",
    statLabel: "qualified leads/week (avg. client)",
    accent: "from-violet-600 to-violet-700",
  },
];

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
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">Our Services</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Stop guessing.<br />Start growing.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-2xl text-center">
                Three integrated engines that work together to turn your digital presence from a cost center into a revenue machine. No fluff. No vanity metrics. Just clients.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center w-full">
                <Link href="#apply" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b6fa8] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#085c8b]">
                  Apply for a Free Audit
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Deep-Dives */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-[32px] border border-zinc-200 bg-white/85 p-6 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                  
                  {/* Left — Problem + Solution */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white`}>
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">{s.label}</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{s.title}</h2>
                    
                    {/* The Problem */}
                    <div className="mt-5 rounded-xl border border-red-100 bg-red-50/50 p-4">
                      <p className="text-sm font-semibold text-red-600 mb-1">The problem:</p>
                      <p className="text-sm text-red-700/80">{s.problem}</p>
                    </div>

                    {/* The Solution */}
                    <div className="mt-4 space-y-3">
                      {s.solution.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-zinc-700 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right — Stat Card */}
                  <div className={`flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className={`w-full max-w-sm rounded-[28px] bg-gradient-to-br ${s.accent} p-8 text-center text-white shadow-lg`}>
                      <p className="text-6xl font-black tracking-tight sm:text-7xl">{s.stat}</p>
                      <p className="mt-3 text-sm font-medium text-white/80">{s.statLabel}</p>
                      <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                        <TrendingUp size={16} />
                        Proven across 50+ clients
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* How It Works — Process */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="rounded-[32px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-8 lg:p-10">
            <div className="text-center mb-10">
              <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">How it works</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                From first call to live results in 21 days.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.num} className="group rounded-[24px] border border-[#cdeeff] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b6fa8] text-white text-sm font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Philosophy */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#0b6fa8]/30 bg-gradient-to-br from-[#0b6fa8] to-[#085c8b] p-8 text-white shadow-[0_24px_80px_rgba(11,111,168,0.15)] sm:p-10 lg:p-14 text-center">
            <Zap size={32} className="mx-auto text-blue-200 mb-4" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Custom pricing. Zero surprises.
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base leading-8 text-blue-100">
              Every business is different, so every quote is tailored. You'll get a fixed price and a guaranteed timeline before we start — no hourly billing, no scope creep, no hidden fees.
            </p>
            <Link href="#apply" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-[#0b6fa8] transition-all hover:-translate-y-1 hover:shadow-lg">
              Get Your Custom Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Reuse CTA */}
        <CTASection />
      </main>
    </SiteShell>
  );
}
