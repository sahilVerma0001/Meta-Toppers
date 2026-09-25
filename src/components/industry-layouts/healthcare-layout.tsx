import Link from "next/link";
import { ArrowRight, ActivitySquare } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";
import type { IndustryData } from "@/data/industries/types";

export function HealthcareLayout({ industry }: { industry: IndustryData }) {
  return (
    <SiteShell>
      <main className="bg-slate-50/50 pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Centered Hero Section */}
          <section className="text-center py-8 lg:py-12 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 mb-8 border border-teal-100">
              <ActivitySquare size={16} />
              <span>{industry.title} Marketing Specialists</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              {industry.heroHeadline}
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl mx-auto">
              {industry.heroDescription}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="rounded-full bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all shadow-teal-600/20">
                Book a Strategy Call
              </Link>
            </div>
          </section>

          {/* Clean Metric Cards */}
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mb-20">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{industry.marketImpact.label1}</p>
                <p className="mt-2 text-3xl font-bold text-teal-600">{industry.marketImpact.value1}</p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-teal-600 p-8 shadow-md flex items-center justify-between text-white">
              <div>
                <p className="text-sm font-medium text-teal-100">{industry.marketImpact.label2}</p>
                <p className="mt-2 text-3xl font-bold">{industry.marketImpact.value2}</p>
              </div>
            </div>
          </section>

          {/* Solutions Section - Different Grid */}
          <section className="mt-16 sm:mt-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {industry.solutionsHeadline}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industry.services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition-shadow">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Benefits Section */}
          {industry.benefits && industry.benefits.length > 0 && (
            <section className="mt-24 rounded-[3rem] bg-slate-900 px-6 py-16 sm:p-20 text-white">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {industry.benefitsHeadline}
                </h2>
              </div>
              <div className="grid gap-10 md:grid-cols-3">
                {industry.benefits.map((benefit, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-teal-400">{benefit.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQs Section */}
          {industry.faqs && industry.faqs.length > 0 && (
            <section className="mt-24 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-10 text-center">
                Frequently Asked Questions
              </h2>
              <div className="divide-y divide-slate-100 border-t border-slate-100">
                {industry.faqs.map((faq, idx) => (
                  <details key={idx} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900 outline-none">
                      {faq.question}
                      <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 group-open:bg-teal-50 group-open:border-teal-100 transition-colors">
                        <ArrowRight size={14} className="transition-transform group-open:rotate-90 text-slate-400 group-open:text-teal-600" />
                      </span>
                    </summary>
                    <p className="mt-4 leading-7 text-slate-600 pr-12">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
      
      <CTASection />
    </SiteShell>
  );
}
