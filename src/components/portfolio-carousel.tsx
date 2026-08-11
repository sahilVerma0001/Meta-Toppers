"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";

const mockCases = [
  {
    title: "Elevate Luxury Realty",
    summary: "Built a custom property portal that increased high-net-worth lead volume by 60%.",
    role: "Website & Lead Gen",
  },
  {
    title: "Paramount Developments",
    summary: "Designed a high-converting landing page ecosystem for a $50M new development.",
    role: "Landing Pages & SEO",
  },
  {
    title: "Chen & Associates",
    summary: "Executed a local SEO and web redesign strategy that doubled organic seller leads.",
    role: "Website & SEO",
  },
  {
    title: "Skyline Brokerage",
    summary: "Full MLS/IDX integration and CRM setup to automate agent workflows.",
    role: "Platform Integration",
  }
];

export function PortfolioCarousel() {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: number) => {
    if (!ref.current) return;
    const w = ref.current.clientWidth;
    // Scroll smoothly exactly one card width + gap (approx 344px)
    ref.current.scrollBy({ left: dir * 344, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-zinc-200 bg-white/80 p-6 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase">Our Work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              Selected case studies
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={() => scrollBy(-1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdeeff] bg-white text-[#0b6fa8] shadow-sm transition hover:bg-[#f2fbff] hover:shadow-md">
              <ArrowLeft size={18} />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdeeff] bg-white text-[#0b6fa8] shadow-sm transition hover:bg-[#f2fbff] hover:shadow-md">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Removed scroll-smooth to prevent Lenis conflicts, we handle it in JS */}
        <div ref={ref} className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar touch-pan-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {mockCases.map((c) => (
            <article key={c.title} className="group min-w-[320px] max-w-[320px] flex-shrink-0 rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="h-44 w-full rounded-xl bg-gradient-to-br from-[#0b6fa8]/10 to-[#085c8b]/5 p-4 relative overflow-hidden border border-[#cdeeff]/50">
                <div className="absolute inset-0 bg-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="h-full w-full flex items-end">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#0b6fa8] shadow-sm backdrop-blur">
                    {c.role}
                  </div>
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-zinc-950">{c.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 line-clamp-2">{c.summary}</p>
              <Link href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#0b6fa8] transition-colors group-hover:text-[#085c8b]">
                View case study <MoveUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
