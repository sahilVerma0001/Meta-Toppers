"use client";

import { SiteShell } from "@/components/site-shell";
import { StepsSection } from "@/components/steps-section";
import { PortfolioCarousel } from "@/components/portfolio-carousel";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { PricingSection } from "@/components/pricing-section";
import Link from "next/link";
import { ArrowRight, PanelsTopLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function WebsitePage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Website services</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-5xl">
              Professional websites that convert and communicate trust.
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              We design and build conversion-focused websites and landing pages with clear messaging, modern UI, and reliable performance. From discovery to launch, we own the experience.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#085c8b]">
              Talk about a website
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.section>

        <StepsSection />

        <PortfolioCarousel />

        <TestimonialsSection />

        <PricingSection />

        <FAQSection />
      </main>
    </SiteShell>
  );
}
