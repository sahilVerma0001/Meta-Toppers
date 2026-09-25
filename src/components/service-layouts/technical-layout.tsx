"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, Quote, Check, Cpu, Code2, Database, Shield, Zap } from "lucide-react";
import type { ServiceData } from "@/data/services/types";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#0b6fa8]">
        <span className="text-lg font-medium text-slate-900">{question}</span>
        {open ? <ChevronUp className="shrink-0 text-[#0b6fa8]" size={20} /> : <ChevronDown className="shrink-0 text-slate-400" size={20} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-6 text-slate-600 leading-relaxed text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TechnicalLayout({ service }: { service: ServiceData }) {
  const Icon = service.icon;
  return (
    <SiteShell>
      {/* ─── LIGHT MODE ENTERPRISE SAAS THEME (MATCHES GLOBAL HEADER) ─── */}
      <main className="bg-[#f7fbff] text-slate-900 overflow-hidden w-full max-w-[100vw] selection:bg-[#0b6fa8] selection:text-white">

        {/* ─── HERO — SUBTLE TECH GRID ─── */}
        <section className="relative pt-16 lg:pt-24 pb-32">
          {/* Light cyber grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(11,111,168,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(11,111,168,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
          
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0b6fa8]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center pb-20 max-w-7xl mx-auto">
              {/* Left Column: Text */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0b6fa8]/20 bg-[#0b6fa8]/5 px-4 py-1.5 text-sm font-medium text-[#0b6fa8] mb-8 shadow-sm">
                  <Icon size={14} /> {service.label}
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.05] mb-8">
                  {service.heroHeadline}
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                  {service.heroSubheadline}
                </p>
                
                <div className="mt-12 flex gap-4">
                  <Link href="#contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-base font-bold text-white hover:bg-[#0b6fa8] transition-colors duration-300 shadow-xl shadow-slate-900/10">
                    Initialize Project <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>

              {/* Right Column: 3D Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                {/* Decorative glows behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#0b6fa8]/10 to-cyan-300/10 rounded-full blur-3xl -z-10" />
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image 
                    src={service.heroImage || "/images/insurance-dashboard.jpg"}
                    alt={service.title}
                    width={800} 
                    height={800}
                    className="w-full h-auto object-cover rounded-3xl shadow-2xl mix-blend-multiply"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* ─── GLASSMORPHIC SYSTEM DASHBOARD MOCKUP (LIGHT) ─── */}
            <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto max-w-5xl rounded-3xl border border-white bg-white/70 backdrop-blur-3xl shadow-[0_30px_100px_rgba(11,111,168,0.12)] overflow-hidden relative">
              
              {/* Mockup Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/50">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-slate-300 hover:bg-red-400 transition-colors" />
                  <div className="h-3 w-3 rounded-full bg-slate-300 hover:bg-yellow-400 transition-colors" />
                  <div className="h-3 w-3 rounded-full bg-slate-300 hover:bg-green-400 transition-colors" />
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                  <Cpu size={14} className="text-[#0b6fa8]" /> {service.slug}_sys_v2.0
                </div>
              </div>
              
              {/* Mockup Body */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 min-h-[400px]">
                {/* Sidebar Wireframe */}
                <div className="hidden md:flex flex-col gap-5">
                  <div className="h-10 w-full rounded-xl bg-slate-100/80 flex items-center px-4 gap-3">
                    <Database size={16} className="text-[#0b6fa8]" /> <div className="h-2 w-1/2 bg-slate-300 rounded" />
                  </div>
                  <div className="h-10 w-full rounded-xl bg-slate-50 flex items-center px-4 gap-3">
                    <Shield size={16} className="text-slate-400" /> <div className="h-2 w-2/3 bg-slate-200 rounded" />
                  </div>
                  <div className="h-10 w-full rounded-xl bg-slate-50 flex items-center px-4 gap-3">
                    <Zap size={16} className="text-slate-400" /> <div className="h-2 w-1/3 bg-slate-200 rounded" />
                  </div>
                  <div className="mt-auto h-24 rounded-xl bg-gradient-to-t from-[#0b6fa8]/10 to-transparent border border-[#0b6fa8]/10 flex items-end p-4">
                     <div className="w-full flex items-center justify-between">
                       <span className="text-xs font-mono text-[#0b6fa8] font-bold">STATUS</span>
                       <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                     </div>
                  </div>
                </div>
                
                {/* Main Content Area */}
                <div className="flex flex-col gap-6">
                   {/* Data Cards */}
                   <div className="grid grid-cols-3 gap-4">
                     <div className="h-28 rounded-2xl border border-[#0b6fa8]/20 bg-[#0b6fa8]/5 p-5 flex flex-col justify-end relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-16 h-16 bg-[#0b6fa8]/10 blur-xl" />
                       <div className="text-[#0b6fa8] font-mono text-xs mb-1 uppercase tracking-wider font-bold">Performance</div>
                       <div className="text-3xl font-black text-slate-900">99.9%</div>
                     </div>
                     <div className="h-28 rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-end shadow-sm">
                       <div className="text-slate-500 font-mono text-xs mb-1 uppercase tracking-wider">Latency</div>
                       <div className="text-3xl font-black text-slate-900">12<span className="text-lg text-slate-500">ms</span></div>
                     </div>
                     <div className="h-28 rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-end shadow-sm">
                       <div className="text-slate-500 font-mono text-xs mb-1 uppercase tracking-wider">Scale</div>
                       <div className="text-3xl font-black text-slate-900">Global</div>
                     </div>
                   </div>
                   
                   {/* Terminal / Code output (Dark contrast block inside light UI) */}
                   <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-950 p-6 font-mono text-sm overflow-hidden relative shadow-2xl">
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                     <div className="relative z-10 text-emerald-400 mb-4 flex items-center gap-2">
                       <Check size={16} /> System deployed successfully
                     </div>
                     {service.solution.map((s, i) => (
                       <div key={i} className="relative z-10 text-slate-300 mt-2 flex items-start gap-3">
                         <span className="text-[#38bdf8]">→</span> <span>{s}</span>
                       </div>
                     ))}
                     <div className="relative z-10 text-[#38bdf8] mt-6 font-bold flex items-center gap-2">
                       <span className="animate-pulse w-2 h-2 rounded-full bg-[#38bdf8]" /> Awaiting incoming requests...
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── PROBLEM ─── */}
        <section className="py-32 bg-white border-t border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0b6fa8]/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#0b6fa8] font-bold mb-6">The Bottleneck</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">{service.problem}</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">{service.agitation}</p>
          </div>
        </section>

        {/* ─── DELIVERABLES BENTO GRID (LIGHT) ─── */}
        <section className="py-32 bg-[#fafafa]">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#0b6fa8] font-bold mb-4 text-center">Architecture</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16 tracking-tight">Engineered for scale.</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {service.deliverables.map((d, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 hover:shadow-2xl hover:shadow-[#0b6fa8]/5 hover:border-[#0b6fa8]/30 transition-all duration-500 group relative overflow-hidden ${i === 0 || i === 3 ? "lg:col-span-2" : ""}`}>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute -inset-px bg-gradient-to-r from-transparent via-[#0b6fa8]/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b6fa8]/10 text-[#0b6fa8] mb-8 group-hover:bg-[#0b6fa8] group-hover:text-white transition-colors duration-500">
                      <Code2 size={24} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{d.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{d.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS — SLEEK TIMELINE ─── */}
        <section className="py-32 bg-white border-y border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#0b6fa8] font-bold mb-4 text-center">Deployment</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 tracking-tight">From kickoff to launch</h2>
            
            <div className="relative max-w-6xl mx-auto">
              {/* Connecting line */}
              <div className="absolute top-10 left-10 right-10 h-px bg-slate-200 hidden md:block" />
              <div className="absolute top-10 left-10 w-1/3 h-[2px] bg-gradient-to-r from-[#0b6fa8] to-cyan-400 hidden md:block shadow-[0_0_10px_rgba(11,111,168,0.3)]" />
              
              <div className="grid md:grid-cols-4 gap-12">
                {service.processSteps.map((step, i) => (
                  <div key={i} className="relative group">
                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white border-2 border-slate-200 text-slate-400 text-2xl font-black shadow-lg relative z-10 group-hover:border-[#0b6fa8] group-hover:text-[#0b6fa8] transition-colors duration-500">
                      {step.num}
                      <div className="absolute inset-0 rounded-2xl bg-[#0b6fa8]/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── BENEFITS ─── */}
        <section className="py-32 bg-[#fafafa]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {service.benefits.map((b, i) => (
                <div key={i} className="text-center group">
                  <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:bg-[#0b6fa8] group-hover:border-[#0b6fa8] transition-colors duration-300">
                    <Check className="text-[#0b6fa8] group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{b.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FOUNDER NOTE (DEEP CONTRAST BLOCK) ─── */}
        {service.founderNote && (
          <section className="py-32 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0b6fa8]/20 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-white text-center relative z-10">
              <Quote className="text-[#38bdf8]/40 mb-10 mx-auto" size={60} />
              <blockquote className="text-2xl md:text-4xl font-bold leading-tight mb-12 text-white">
                &ldquo;{service.founderNote.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-[#0b6fa8] text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-[#0b6fa8]/30">
                  {service.founderNote.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-2xl tracking-wide">{service.founderNote.name}</p>
                  <p className="text-[#38bdf8] uppercase tracking-widest text-sm mt-2">{service.founderNote.role}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── FAQS ─── */}
        {service.faqs.length > 0 && (
          <section className="py-24 bg-[#fafafa]">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-12 tracking-tight">System details</h2>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
                {service.faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
    </SiteShell>
  );
}
