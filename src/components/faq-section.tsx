"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "I've been burned by agencies before. How are you different?", a: "We get it — most agencies overpromise and underdeliver. That's exactly why we offer a guarantee: live in 21 days or we work free. No retainers that lock you in, no vague timelines. You see real metrics (leads, revenue, conversion rates) — not just pretty reports." },
  { q: "Honestly, can I afford this right now?", a: "If your business is already generating revenue, you can't afford NOT to fix a broken digital presence. Every month you wait, you're losing clients to competitors who showed up first on Google. We offer flexible payment structures, and most clients see ROI within the first 30 days." },
  { q: "Will this actually work for my specific industry?", a: "We've built growth systems for real estate firms, dental clinics, cafes, and insurance advisors — each with completely different audiences and buying cycles. We don't copy-paste. Every system is custom-built for your market, your audience, and your revenue goals." },
  { q: "I don't have time for a long, complicated project.", a: "Neither do we. Most projects launch in 3–4 weeks. You won't be dragged into endless meetings or approval loops. We handle strategy, design, development, and marketing — you just review and approve. That's it." },
  { q: "What if I want to stop or change direction midway?", a: "No lock-in contracts. No exit fees. If at any point you feel this isn't working, you can walk away. But honestly? 96% of our clients stay beyond year one — because the system keeps delivering results month after month." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-[#cdeeff] bg-white/80 p-6 shadow-[0_24px_80px_rgba(11,111,168,0.05)] backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-md">
            <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">Before you apply</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Is Meta Toppers right for you?
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              We're selective about who we work with. Here's how to know if we're a good fit.
            </p>
          </div>
          
          <div className="mt-8 w-full lg:mt-0 lg:max-w-2xl space-y-4">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className={`rounded-[20px] border transition-all duration-300 ${isOpen ? 'border-[#0b6fa8] bg-[#f2fbff] shadow-md' : 'border-[#e8f5ff] bg-white hover:border-[#cdeeff]'}`}>
                  <button 
                    className="flex w-full items-center justify-between px-6 py-5 text-left" 
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div className={`font-semibold transition-colors ${isOpen ? 'text-[#0b6fa8]' : 'text-zinc-900'}`}>
                      {f.q}
                    </div>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-[#0b6fa8] text-white' : 'bg-[#f2fbff] text-[#0b6fa8]'}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-0 text-sm leading-7 text-zinc-600">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
