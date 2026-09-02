"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Who is Meta Toppers best for?", a: "We work best with business owners who are already generating revenue and want to scale — Real Estate, SaaS, Fintech, Professional Services, and Consumer Brands. If you're pre-revenue or looking for the cheapest option, we're probably not the right fit." },
  { q: "How fast can you launch?", a: "Most projects go live in 3–4 weeks. Complex platforms take 6–8 weeks. We guarantee launch within 21 days for standard projects — or we work free." },
  { q: "What if it doesn't work?", a: "We track real business metrics: leads, conversion rates, cost per acquisition, and revenue impact. If we don't hit the targets we set together, we keep optimizing at no extra cost until we do." },
  { q: "How is this different from hiring a freelancer?", a: "Freelancers give you a deliverable. We give you a system — strategy, design, development, SEO, and paid ads under one roof. One team, one vision, one point of accountability. No handoffs, no miscommunication." },
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
