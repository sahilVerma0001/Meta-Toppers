"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, PenTool, LayoutTemplate, Palette, Quote, ChevronDown, ChevronUp, Sparkles, MoveRight, ImageIcon } from "lucide-react";
import type { ServiceData } from "@/data/services/types";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#0b6fa8]">
        <span className="text-xl font-medium text-slate-900">{question}</span>
        {open ? <ChevronUp className="shrink-0 text-[#0b6fa8]" size={24} /> : <ChevronDown className="shrink-0 text-slate-400" size={24} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-6 text-slate-600 text-lg leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CreativeLayout({ service }: { service: ServiceData }) {
  return (
    <SiteShell>
      <main className="bg-[#f7fbff] selection:bg-[#0b6fa8] selection:text-white pb-12 overflow-hidden w-full max-w-[100vw]">
        
        {/* ─── FLOATING PORTAL HERO (DARK MODE, NO CLASH) ─── */}
        <div className="px-3 md:px-6 pt-4">
          <section className="relative w-full rounded-[2.5rem] md:rounded-[3.5rem] bg-[#050505] text-white min-h-[85vh] flex flex-col justify-center overflow-hidden shadow-2xl">
            {/* Ambient Glowing Orbs */}
            <motion.div 
               animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
               transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
               className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#0b6fa8]/30 blur-[130px] pointer-events-none" 
            />
            <motion.div 
               animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
               transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
               className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full bg-cyan-600/20 blur-[150px] pointer-events-none" 
            />
            {/* Cinematic Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="container relative z-10 mx-auto px-6 md:px-12 py-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 text-sm font-semibold text-cyan-400 mb-8">
                <Sparkles size={16} /> {service.title}
              </motion.div>
              
              {/* Editorial Typography mix (Sans-Serif + Italic Serif) */}
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[12vw] sm:text-[9vw] md:text-7xl lg:text-[8.5rem] leading-[0.9] font-black tracking-tighter uppercase">
                We design <br />
                <span className="font-serif italic font-light lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0b6fa8]">desire.</span>
              </motion.h1>
              
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                className="grid md:grid-cols-[1fr_auto] gap-12 mt-16 md:mt-32 items-end border-t border-white/10 pt-10">
                <p className="text-xl md:text-3xl font-light text-slate-300 leading-snug max-w-2xl">
                  {service.heroSubheadline}
                </p>
                <Link href="#contact" className="group flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-white text-[#0b6fa8] hover:bg-cyan-400 hover:text-white transition-colors duration-500 shadow-[0_0_40px_rgba(11,111,168,0.4)]">
                   <ArrowDownRight size={40} className="group-hover:rotate-[-45deg] transition-transform duration-500" />
                </Link>
              </motion.div>
            </div>
          </section>
        </div>

        {/* ─── SCROLLING MARQUEE ─── */}
        <div className="w-full overflow-hidden my-16 py-4">
          <div className="py-4 flex whitespace-nowrap border-y border-slate-200/60 rotate-[2deg] scale-[1.05] transform origin-center">
            <motion.div 
              animate={{ x: ["-50%", "0%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex text-4xl md:text-6xl font-black uppercase tracking-widest text-slate-900/10"
            >
              <span className="mx-6">Creative Direction</span> • 
              <span className="mx-6">Brand Identity</span> • 
              <span className="mx-6">UI/UX</span> • 
              <span className="mx-6">Art Direction</span> • 
              <span className="mx-6">Creative Direction</span> • 
              <span className="mx-6">Brand Identity</span> • 
              <span className="mx-6">UI/UX</span> • 
              <span className="mx-6">Art Direction</span> • 
            </motion.div>
          </div>
        </div>

        {/* ─── HIGH-END BENTO DELIVERABLES ─── */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] uppercase">
                The <span className="font-serif italic font-light text-[#0b6fa8] lowercase">arsenal</span> you need to stand out.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
              
              {/* Card 1 - Dark Cinematic Glass */}
              <motion.div whileHover={{ y: -8 }} className="lg:col-span-2 rounded-[2.5rem] bg-[#050505] p-10 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0b6fa8]/30 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                <PenTool className="text-cyan-400 mb-8 relative z-10" size={48} />
                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{service.deliverables[0].title}</h3>
                <p className="text-slate-400 text-lg relative z-10 max-w-md">{service.deliverables[0].description}</p>
                <div className="absolute bottom-10 right-10 z-10">
                   <div className="h-16 w-16 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                     <MoveRight />
                   </div>
                </div>
              </motion.div>
              
              {/* Card 2 - Brand Gradient */}
              <motion.div whileHover={{ y: -8 }} className="rounded-[2.5rem] bg-gradient-to-br from-[#0b6fa8] to-cyan-600 p-10 relative overflow-hidden group shadow-xl">
                <Palette className="text-white mb-8" size={48} />
                <h3 className="text-3xl font-bold text-white mb-4">{service.deliverables[1].title}</h3>
                <p className="text-blue-100 text-lg">{service.deliverables[1].description}</p>
                <div className="absolute -bottom-8 -right-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                  <Palette size={200} className="text-white" />
                </div>
              </motion.div>

              {/* Card 3 - Stark White */}
              <motion.div whileHover={{ y: -8 }} className="rounded-[2.5rem] bg-white border border-slate-200 p-10 relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow">
                <LayoutTemplate className="text-[#0b6fa8] mb-8" size={48} />
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.deliverables[2].title}</h3>
                <p className="text-slate-600 text-lg">{service.deliverables[2].description}</p>
              </motion.div>

              {/* Card 4 - Wide Slate */}
              <motion.div whileHover={{ y: -8 }} className="lg:col-span-2 rounded-[2.5rem] bg-slate-900 p-10 relative overflow-hidden group shadow-xl flex flex-col justify-end">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,111,168,0.2),transparent_50%)]" />
                <ImageIcon className="text-[#38bdf8] mb-8 relative z-10" size={48} />
                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{service.deliverables[3]?.title || "Digital Assets"}</h3>
                <p className="text-slate-400 text-lg relative z-10 max-w-xl">{service.deliverables[3]?.description || "Custom iconography, 3D assets, and web graphics that elevate your digital presence."}</p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─── EDITORIAL PROCESS SECTION ─── */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-[3rem] bg-white border border-slate-200 p-8 md:p-16 lg:p-24 shadow-sm">
              <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24">
                <div>
                  <div className="sticky top-32">
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-slate-900 mb-8">
                      The <br/> <span className="text-[#0b6fa8]">Method.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-sm leading-relaxed">
                      How we turn abstract ideas into premium visual identities that convert.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-16">
                  {service.processSteps.map((step, i) => (
                    <div key={i} className="relative group">
                      <div className="flex items-center gap-6 mb-6">
                        <span className="text-2xl font-serif italic font-light text-[#0b6fa8] border-b border-[#0b6fa8] pb-1">
                          Step {step.num}
                        </span>
                        <div className="h-px flex-1 bg-slate-100 group-hover:bg-[#0b6fa8]/30 transition-colors" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{step.title}</h3>
                      <p className="text-xl text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── EDITORIAL FOUNDER NOTE ─── */}
        {service.founderNote && (
          <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="rounded-[3rem] bg-[#0b6fa8] text-white p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
                {/* Background graphic */}
                <Quote size={250} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.03] pointer-events-none" />
                
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic font-light leading-[1.15] tracking-tight mb-16 max-w-5xl mx-auto relative z-10">
                  &ldquo;{service.founderNote.quote}&rdquo;
                </h2>
                
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div className="h-20 w-20 rounded-full bg-white text-[#0b6fa8] flex items-center justify-center text-3xl font-black shadow-lg">
                    {service.founderNote.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-2xl uppercase tracking-widest">{service.founderNote.name}</p>
                    <p className="text-cyan-200 text-lg font-medium uppercase tracking-widest mt-1">{service.founderNote.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── CASE STUDIES ─── */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 uppercase text-slate-900 text-center">
              Brands <span className="font-serif italic font-light text-[#0b6fa8] lowercase">Elevated.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {service.caseStudies.map((cs, i) => (
                <div key={i} className="group cursor-pointer bg-white rounded-[2rem] border border-slate-200 p-10 hover:border-[#0b6fa8]/40 hover:shadow-xl transition-all duration-500">
                  <div className="w-12 h-1 bg-slate-200 mb-8 group-hover:bg-[#0b6fa8] transition-colors duration-500" />
                  <p className="font-mono text-[#0b6fa8] tracking-widest uppercase mb-4 text-sm">{cs.name}</p>
                  <p className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 group-hover:text-[#0b6fa8] transition-colors">{cs.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQS ─── */}
        {service.faqs.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-16 uppercase text-center">
                The Details.
              </h2>
              <div className="bg-white rounded-[2.5rem] border border-slate-200 p-6 md:p-12 shadow-sm">
                {service.faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
              </div>
            </div>
          </section>
        )}

        {/* Wrap CTA in matching container */}
        <div className="px-4 md:px-6 pb-6">
          <div className="rounded-[3rem] overflow-hidden">
            <CTASection />
          </div>
        </div>

      </main>
    </SiteShell>
  );
}
