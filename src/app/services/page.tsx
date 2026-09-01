import Link from "next/link";
import { ArrowRight, BarChart3, PanelsTopLeft, Orbit, Sparkles, Target } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const services = [
  {
    title: "Website Design & Development",
    description: "Custom-built, mobile-responsive websites designed to convert visitors into leads and clients.",
    result: "Avg. 3.2x increase in lead volume",
    icon: PanelsTopLeft,
  },
  {
    title: "Brand Positioning & Messaging",
    description: "We sharpen your message so prospects instantly understand why you\u2019re the best choice in your market.",
    result: "Clients report 40% faster sales cycles",
    icon: Sparkles,
  },
  {
    title: "SEO & Content Strategy",
    description: "Get found by the people searching for exactly what you sell. We build rankings that compound over time.",
    result: "Avg. 2.8x increase in organic traffic",
    icon: Orbit,
  },
  {
    title: "Paid Advertising & Lead Gen",
    description: "Targeted Google and Meta ad campaigns that bring in qualified leads at a cost you can scale.",
    result: "Avg. $18 cost per qualified lead",
    icon: Target,
  },
  {
    title: "Analytics & Performance Tracking",
    description: "Know exactly what\u2019s working. We set up dashboards that track leads, conversions, and revenue — not vanity metrics.",
    result: "Full ROI visibility from day one",
    icon: BarChart3,
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <section className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Services</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-5xl">
                Everything you need to get more clients online.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                From your website to your ads to your SEO — we handle the full digital growth stack so you can focus on running your business.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#085c8b]">
                Get a free growth audit
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-sm">
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">How we work</p>
              <p className="mt-3 text-base leading-8 text-zinc-600">
                Every engagement starts with a free audit of your current digital presence. We identify what&apos;s costing you leads, then build a clear plan to fix it — with a fixed price and timeline.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon size={18} className="text-[#0b6fa8]" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-zinc-950">{service.title}</h2>
                <p className="mt-3 text-base leading-7 text-zinc-600">{service.description}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white border border-[#cdeeff] px-3 py-1 text-xs font-semibold text-[#0b6fa8]">
                  {service.result}
                </p>
              </div>
            );
          })}
        </section>
      </main>
    </SiteShell>
  );
}
