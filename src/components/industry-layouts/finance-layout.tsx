import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";
import type { IndustryData } from "@/data/industries/types";

export function FinanceLayout({ industry }: { industry: IndustryData }) {
  return (
    <SiteShell>
      <main className="bg-slate-50 text-slate-900 pb-20 pt-8">
        
        {/* Authoritative Hero */}
        <section className="px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16 sm:pt-12 sm:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center border-b border-slate-200 pb-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 mb-6 shadow-sm">
              <Shield size={16} className="text-amber-600" />
              Secure & Compliant
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-5xl xl:text-6xl">
              {industry.heroHeadline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {industry.heroDescription}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/contact" className="bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors">
                Request a Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 border-b border-slate-100 pb-4">Performance Metrics</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">{industry.marketImpact.label1}</span>
                <span className="text-2xl font-bold text-slate-900">{industry.marketImpact.value1}</span>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                <span className="text-slate-600">{industry.marketImpact.label2}</span>
                <span className="text-2xl font-bold text-slate-900">{industry.marketImpact.value2}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
          
          {/* Solutions Section - Corporate Style */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-12">
              {industry.solutionsHeadline}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {industry.services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="border-l-2 border-slate-200 pl-6 hover:border-amber-500 transition-colors bg-white/50 py-2 rounded-r-xl">
                    <Icon size={28} className="text-amber-600 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Benefits - Structural List */}
          {industry.benefits && industry.benefits.length > 0 && (
            <section className="mb-24 bg-white border border-slate-200 p-8 sm:p-12 shadow-sm rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-10 pb-6 border-b border-slate-100">
                {industry.benefitsHeadline}
              </h2>
              <div className="grid gap-12 md:grid-cols-3">
                {industry.benefits.map((benefit, idx) => (
                  <div key={idx}>
                    <div className="text-amber-600 font-mono text-sm mb-3 font-semibold">0{idx + 1} //</div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* FAQs - Accordion */}
          {industry.faqs && industry.faqs.length > 0 && (
            <section className="max-w-3xl mb-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Compliance & Strategy Questions
              </h2>
              <div className="space-y-4">
                {industry.faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-white p-6 border border-slate-200 shadow-sm rounded-xl [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 outline-none">
                      {faq.question}
                      <span className="text-amber-600 group-open:-rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-slate-600">
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
