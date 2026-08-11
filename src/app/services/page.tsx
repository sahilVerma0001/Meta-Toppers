import Link from "next/link";
import { ArrowRight, BarChart3, PanelsTopLeft, Orbit, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const services = [
  {
    title: "Website & Product",
    description: "Design and build conversion-focused websites, landing pages, and product UI.",
    icon: PanelsTopLeft,
  },
  {
    title: "Brand positioning",
    description: "We sharpen your message so the market understands your value instantly.",
    icon: Sparkles,
  },
  {
    title: "Digital growth systems",
    description: "We build campaigns, funnels, and journeys that turn attention into revenue.",
    icon: Orbit,
  },
  {
    title: "Conversion design",
    description: "We design product and marketing experiences that guide people toward action.",
    icon: PanelsTopLeft,
  },
  {
    title: "Analytics and reporting",
    description: "We connect your business goals to clear reporting and measurable progress.",
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
                Strategy, design, and growth systems built for ambitious businesses.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Meta Toppers helps founders and business leaders create a sharper presence, stronger demand, and more confident growth.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#085c8b]">
                Book a consultation
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-sm">
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Engagement model</p>
              <p className="mt-3 text-base leading-8 text-zinc-600">
                We work in concentrated engagements with a clear point of view, fast decision-making, and room for thoughtful execution.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon size={18} className="text-[#0b6fa8]" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-zinc-950">{service.title}</h2>
                <p className="mt-3 text-base leading-7 text-zinc-600">{service.description}</p>
              </div>
            );
          })}
        </section>
      </main>
    </SiteShell>
  );
}
