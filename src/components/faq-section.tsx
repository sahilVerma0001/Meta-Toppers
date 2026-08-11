"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How do you generate leads for real estate clients?", a: "We build high-converting property landing pages paired with targeted Google and Meta ads to capture high-intent buyers and sellers in your local market." },
  { q: "Do you integrate with real estate CRMs?", a: "Yes — we seamlessly integrate your website with platforms like Follow Up Boss, Salesforce, and Hubspot so leads flow directly to your agents." },
  { q: "Can you build custom property search functionality?", a: "Absolutely. We specialize in integrating MLS/IDX feeds into beautiful, custom-designed property search interfaces that keep buyers on your site." },
  { q: "What is your typical project timeline?", a: "Most custom real estate platforms take 6–8 weeks to design, develop, and launch, depending on the complexity of CRM and MLS integrations." }
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-[#cdeeff] bg-white/80 p-6 shadow-[0_24px_80px_rgba(11,111,168,0.05)] backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-md">
            <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Common Questions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              Everything you need to know.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Can't find the answer you're looking for? Reach out to our team and we'll get back to you immediately.
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
