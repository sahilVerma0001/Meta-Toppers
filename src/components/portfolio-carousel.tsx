"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";

const mockCases = [
  {
    title: "Elevate Luxury Realty",
    summary: "Built a custom luxury property portal that generated ₹12 Cr in new pipeline in just 120 days.",
    role: "Real Estate",
    image: "/images/luxury-realty.jpg",
  },
  {
    title: "SmileCare Dental",
    summary: "Redesigned web presence and local SEO, driving a 3× increase in high-ticket implant bookings.",
    role: "Healthcare & Clinics",
    image: "/images/dental-mockup.jpg",
  },
  {
    title: "The Daily Grind",
    summary: "Built a direct-ordering web app that bypassed delivery platforms and saved ₹1.8L monthly.",
    role: "Cafes & Hospitality",
    image: "/images/cafe-dashboard.jpg",
  },
  {
    title: "SecureLife Advisors",
    summary: "Launched a term insurance calculator lead magnet, generating exclusive leads at ₹150 each.",
    role: "Insurance & Finance",
    image: "/images/insurance-dashboard.jpg",
  }
];

export function PortfolioCarousel() {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: number) => {
    if (!ref.current) return;
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
              <div className="h-44 w-full rounded-xl bg-white p-2 relative overflow-hidden border border-[#cdeeff]/50 group-hover:border-[#cdeeff]">
                <div className="relative h-full w-full rounded-lg overflow-hidden border border-zinc-100">
                  <Image src={c.image} alt={c.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 h-full w-full flex items-end p-3 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#0b6fa8] shadow-sm backdrop-blur">
                      {c.role}
                    </div>
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
