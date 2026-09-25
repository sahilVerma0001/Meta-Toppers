import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";
import type { IndustryData } from "@/data/industries/types";

export function RealEstateLayout({ industry }: { industry: IndustryData }) {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8">
        
        {/* Hero Section */}
        <section className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-5xl lg:text-6xl">
                {industry.heroHeadline}
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                {industry.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#085c8b] shadow-[0_10px_30px_rgba(11,111,168,0.2)] hover:shadow-[0_16px_42px_rgba(11,111,168,0.24)] hover:-translate-y-0.5">
                  Book a strategy call
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="rounded-[28px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-medium text-[#0b6fa8]">Market Impact</p>
                  <p className="mt-1 text-xl font-semibold text-zinc-950">Built for scale.</p>
                </div>
                <div className="rounded-full bg-white p-3 shadow-sm">
                  <BarChart3 size={20} className="text-[#0b6fa8]" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#cdeeff] bg-white p-4">
                  <p className="text-sm text-zinc-600">{industry.marketImpact.label1}</p>
                  <p className="mt-1 text-2xl font-semibold text-zinc-950">{industry.marketImpact.value1}</p>
                </div>
                <div className="rounded-2xl bg-[#0b6fa8] p-4 text-white">
                  <p className="text-sm text-blue-100">{industry.marketImpact.label2}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{industry.marketImpact.value2}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-12 rounded-[32px] border border-zinc-200 bg-white/80 p-6 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8 lg:p-10">
          <div className="mb-10">
            <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase">{industry.title} Solutions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              {industry.solutionsHeadline}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {industry.services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon size={20} className="text-[#0b6fa8]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-zinc-950">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-zinc-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-12 rounded-[32px] border border-[#cdeeff] bg-[#f2fbff] p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Proven Experience</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              {industry.caseStudiesHeadline}
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              We have partnered with leading brands in the {industry.title.toLowerCase()} sector to transform their digital presence and supercharge their acquisition pipelines.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {industry.caseStudies.map((study, idx) => (
              <div key={idx} className="rounded-[24px] bg-white p-8 shadow-sm border border-[#cdeeff]">
                <p className="text-4xl font-bold text-[#0b6fa8]">{study.metric}</p>
                <p className="mt-2 text-lg font-semibold text-zinc-950">{study.label}</p>
                <p className="mt-4 text-base leading-7 text-zinc-600">{study.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        {industry.benefits && industry.benefits.length > 0 && (
          <section className="mt-12 rounded-[32px] border border-zinc-200 bg-white/80 p-6 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8 lg:p-10">
            <div className="mb-10 text-center">
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
                {industry.benefitsHeadline}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {industry.benefits.map((benefit, idx) => (
                <div key={idx} className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-zinc-950">{benefit.title}</h3>
                  <p className="mt-3 text-base leading-7 text-zinc-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {industry.faqs && industry.faqs.length > 0 && (
          <section className="mt-12 rounded-[32px] border border-zinc-200 bg-white/80 p-8 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-10 lg:p-14">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {industry.faqs.map((faq, idx) => (
                  <details key={idx} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-zinc-950 outline-none">
                      {faq.question}
                      <span className="relative ml-1.5 h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-zinc-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      
      <CTASection />
    </SiteShell>
  );
}
