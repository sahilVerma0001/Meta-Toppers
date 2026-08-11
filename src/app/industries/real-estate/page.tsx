import Link from "next/link";
import { ArrowRight, BarChart3, Building, Globe, Laptop, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const services = [
  {
    title: "Property Web Platforms",
    description: "Immersive, high-performance websites that showcase properties and drive digital inquiries.",
    icon: Globe,
  },
  {
    title: "Lead Generation Systems",
    description: "Targeted digital marketing campaigns designed to capture high-intent buyers and sellers.",
    icon: Users,
  },
  {
    title: "Real Estate Branding",
    description: "Positioning and brand identity that builds immediate trust in a highly competitive market.",
    icon: Building,
  },
];

const caseStudies = [
  {
    metric: "+XX%",
    label: "Increase in qualified lead volume",
    description: "Rebuilt the digital acquisition funnel for a luxury brokerage, reducing cost-per-lead.",
  },
  {
    metric: "XXk+",
    label: "Monthly portal visitors",
    description: "Developed a custom property listing platform with advanced filtering and CRM integration.",
  },
  {
    metric: "X.X%",
    label: "Website conversion rate",
    description: "Optimized landing pages for pre-construction developments to maximize early registrations.",
  },
];

export default function RealEstatePage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        
        {/* Hero Section */}
        <section className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-medium text-[#0b6fa8] hover:underline mb-4">
                <ArrowRight size={14} className="rotate-180" />
                Back to Industries
              </Link>
              <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-5xl lg:text-6xl">
                Digital Growth for Real Estate Innovators.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                We build premium digital experiences and lead generation systems that help agencies, brokerages, and developers stand out and close more deals.
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
                  <p className="text-sm text-zinc-600">Average ROI on ad spend</p>
                  <p className="mt-1 text-2xl font-semibold text-zinc-950">XXX%</p>
                </div>
                <div className="rounded-2xl bg-[#0b6fa8] p-4 text-white">
                  <p className="text-sm text-blue-100">Client retention rate</p>
                  <p className="mt-1 text-2xl font-semibold text-white">XX%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-12 rounded-[32px] border border-zinc-200 bg-white/80 p-6 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8 lg:p-10">
          <div className="mb-10">
            <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase">Real Estate Solutions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              How we drive growth in property markets.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => {
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
              Results that speak for themselves.
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              We have partnered with leading real estate brands to transform their digital presence and supercharge their acquisition pipelines.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="rounded-[24px] bg-white p-8 shadow-sm border border-[#cdeeff]">
                <p className="text-4xl font-bold text-[#0b6fa8]">{study.metric}</p>
                <p className="mt-2 text-lg font-semibold text-zinc-950">{study.label}</p>
                <p className="mt-4 text-base leading-7 text-zinc-600">{study.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
