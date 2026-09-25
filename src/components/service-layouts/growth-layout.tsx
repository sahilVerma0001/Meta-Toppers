"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Quote,
  Target,
  BarChart3,
  MousePointerClick
} from "lucide-react";
import type { ServiceData } from "@/data/services/types";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#0b6fa8]"
      >
        <span className="text-lg font-medium text-slate-900">{question}</span>
        {open ? (
          <ChevronUp className="shrink-0 text-[#0b6fa8]" size={20} />
        ) : (
          <ChevronDown className="shrink-0 text-slate-400" size={20} />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function GrowthLayout({ service }: { service: ServiceData }) {
  const Icon = service.icon;

  return (
    <SiteShell>
      <main className="bg-[#f7fbff] text-slate-900 overflow-hidden selection:bg-[#0b6fa8] selection:text-white">

        {/* ─── HERO — PERFORMANCE DASHBOARD MOCKUP ─── */}
        <section className="relative pt-16 lg:pt-20 pb-32">
          {/* Subtle tech background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(11,111,168,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(11,111,168,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center pt-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-700 mb-8 shadow-sm">
                  <TrendingUp size={16} /> ROI-Focused {service.title}
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.05] mb-8">
                  {service.heroHeadline}
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
                  {service.heroSubheadline}
                </p>
                
                <div className="mt-12 flex justify-center gap-4">
                  <Link href="#contact" className="inline-flex h-16 items-center justify-center gap-2 rounded-full bg-[#0b6fa8] px-10 text-lg font-bold text-white hover:bg-slate-900 transition-colors duration-300 shadow-xl shadow-[#0b6fa8]/20">
                    Get Your Free Audit <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Performance Analytics Mockup */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mt-20 max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl relative">
              <div className="absolute top-0 right-10 -translate-y-1/2 flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg animate-bounce">
                <TrendingUp size={18} /> Conversions surging
              </div>
              
              <div className="rounded-[1.5rem] bg-slate-50 border border-slate-100 p-8 md:p-12 h-[350px] md:h-[450px] relative overflow-hidden flex flex-col justify-end group">
                
                {/* SVG Chart line */}
                <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-[70%] opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                  <path d="M0,300 L0,250 C150,260 250,150 400,180 C550,210 650,80 800,100 C900,110 950,40 1000,0 L1000,300 Z" fill="url(#blue-gradient)" />
                  <path d="M0,250 C150,260 250,150 400,180 C550,210 650,80 800,100 C900,110 950,40 1000,0" fill="none" stroke="#0b6fa8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg" />
                  <defs>
                    <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0b6fa8" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0b6fa8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Massive floating Stat */}
                <div className="relative z-10 flex flex-col gap-2 items-start">
                   <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 shadow-sm text-slate-500 font-bold uppercase tracking-widest text-xs">
                     <Target size={14} className="text-[#0b6fa8]"/> {service.statLabel}
                   </div>
                   <span className="text-7xl md:text-[8rem] font-black text-slate-900 leading-none tracking-tighter drop-shadow-sm">{service.stat}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── THE BOTTLENECK (HIGH CONTRAST SPLIT) ─── */}
        <section className="py-0">
          <div className="container mx-auto px-4 md:px-6">
             <div className="rounded-[3rem] overflow-hidden grid md:grid-cols-2 shadow-2xl border border-slate-200">
                {/* Problem - Dark */}
                <div className="bg-slate-900 p-12 md:p-20 text-white flex flex-col justify-center relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
                   <p className="text-red-400 font-bold uppercase tracking-widest text-sm mb-6">The Current Reality</p>
                   <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{service.problem}</h2>
                </div>
                {/* Agitation - Light */}
                <div className="bg-white p-12 md:p-20 text-slate-900 flex flex-col justify-center relative">
                   <div className="absolute top-0 left-0 w-full h-1 bg-[#0b6fa8]" />
                   <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium">
                     {service.agitation}
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* ─── CASE STUDIES (BENTO CARDS) ─── */}
        <section className="py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center mb-16 tracking-tight">The Proof.</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {service.caseStudies.map((cs, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-[2.5rem] border border-slate-200 bg-white p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-500" />
                  
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-8">
                    <BarChart3 size={24} />
                  </div>
                  <p className="font-bold text-slate-400 text-sm uppercase tracking-widest mb-3">
                    {cs.name}
                  </p>
                  <p className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight relative z-10">{cs.result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DELIVERABLES GRID ─── */}
        <section className="py-32 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0b6fa8] mb-4 text-center">The Arsenal</p>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center mb-20 tracking-tight">Exactly what we execute.</h2>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
              {service.deliverables.map((d, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 text-[#0b6fa8] shadow-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{d.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BENEFITS ROW ─── */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {service.benefits.map((b, i) => (
                <div key={i} className="text-center group">
                  <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#0b6fa8] transition-colors duration-300">
                    <CheckCircle2 className="text-[#0b6fa8] group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{b.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FOUNDER NOTE (AGGRESSIVE BRAND BLUE) ─── */}
        {service.founderNote && (
          <section className="py-32 bg-[#0b6fa8] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-white text-center relative z-10">
              <Quote className="text-white/30 mx-auto mb-10" size={60} />
              <blockquote className="text-3xl md:text-5xl font-bold leading-tight mb-16 text-white drop-shadow-sm">
                &ldquo;{service.founderNote.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-white text-[#0b6fa8] flex items-center justify-center text-3xl font-black shadow-2xl">
                  {service.founderNote.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-2xl tracking-wide">{service.founderNote.name}</p>
                  <p className="text-blue-200 uppercase tracking-widest text-sm mt-2">{service.founderNote.role}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── PROCESS TIMELINE ─── */}
        <section className="py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-24 tracking-tight">The Growth Protocol</h2>
            
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute top-8 left-10 right-10 h-px bg-white/10 hidden md:block" />
              <div className="grid md:grid-cols-4 gap-12">
                {service.processSteps.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border-2 border-[#0b6fa8] text-[#38bdf8] text-xl font-black relative z-10">
                      {step.num}
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQS ─── */}
        {service.faqs.length > 0 && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-12 tracking-tight">The details</h2>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
                {service.faqs.map((faq, i) => (
                  <FAQItem key={i} {...faq} />
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
    </SiteShell>
  );
}
