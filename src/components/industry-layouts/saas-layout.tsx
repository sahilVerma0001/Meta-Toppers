import Link from "next/link";
import { ArrowRight, ChevronRight, Terminal } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";
import type { IndustryData } from "@/data/industries/types";

export function SaaSLayout({ industry }: { industry: IndustryData }) {
  return (
    <SiteShell>
      <main className="bg-white text-zinc-900 pb-20 pt-8 font-sans">
        
        {/* Light Tech Hero */}
        <section className="relative overflow-hidden pt-6 pb-24 sm:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
          
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-600 ring-1 ring-zinc-200 hover:ring-zinc-300 bg-white/50 backdrop-blur-sm">
                {industry.title} Growth Agency <span className="text-zinc-300">|</span> <Link href="/contact" className="font-semibold text-blue-600"><span className="absolute inset-0" aria-hidden="true"></span>Read our thesis <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600">
              {industry.heroHeadline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-2xl mx-auto">
              {industry.heroDescription}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="rounded-md bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 transition-colors">
                Start building
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-zinc-900 flex items-center gap-2 group">
                View stack <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Stats Bento Grid */}
          <section className="mb-24 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-zinc-50 p-10 ring-1 ring-zinc-200 flex flex-col justify-center shadow-sm">
              <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">{industry.marketImpact.label1}</p>
              <p className="mt-2 text-5xl font-bold text-zinc-900 tracking-tight">{industry.marketImpact.value1}</p>
            </div>
            <div className="rounded-3xl bg-zinc-50 p-10 ring-1 ring-zinc-200 flex flex-col justify-center shadow-sm">
              <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">{industry.marketImpact.label2}</p>
              <p className="mt-2 text-5xl font-bold text-zinc-900 tracking-tight">{industry.marketImpact.value2}</p>
            </div>
          </section>

          {/* Solutions - Technical Style */}
          <section className="mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-200 pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                {industry.solutionsHeadline}
              </h2>
              <p className="mt-4 md:mt-0 text-zinc-500 font-mono text-sm flex items-center gap-2">
                <Terminal size={14} /> _architecture_overview
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {industry.services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 ring-1 ring-zinc-200 group-hover:bg-blue-50 transition-colors">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-8 text-zinc-900">{service.title}</h3>
                    <p className="mt-2 text-base leading-7 text-zinc-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Benefits - Light Cards */}
          {industry.benefits && industry.benefits.length > 0 && (
            <section className="mb-32">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-10 text-center">
                {industry.benefitsHeadline}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {industry.benefits.map((benefit, idx) => (
                  <div key={idx} className="rounded-2xl bg-white p-8 ring-1 ring-zinc-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-zinc-900">{benefit.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-zinc-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
      
      {/* SaaS specific CTA styling handled inside CTASection usually, but we keep it global */}
      <CTASection />
    </SiteShell>
  );
}
