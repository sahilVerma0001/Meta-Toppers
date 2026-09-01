import Link from "next/link";
import { ArrowRight, Briefcase, Building2, Compass, TrendingUp, Home } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const industries = [
  {
    title: "SaaS",
    description: "Convert free users to paid. We build landing pages, run targeted campaigns, and optimize funnels for SaaS companies.",
    icon: TrendingUp,
  },
  {
    title: "Real Estate",
    description: "Property portals, lead capture systems, and local SEO that bring in qualified buyers and sellers every day.",
    icon: Home,
    href: "/industries/real-estate",
  },
  {
    title: "Professional Services",
    description: "Websites that establish instant credibility and turn visitors into booked consultations.",
    icon: Briefcase,
  },
  {
    title: "Fintech",
    description: "Make complex products feel simple. We build trust through clear messaging and intuitive digital experiences.",
    icon: Building2,
  },
  {
    title: "Consumer Brands",
    description: "E-commerce optimization, brand storytelling, and growth campaigns that drive both awareness and sales.",
    icon: Compass,
  },
];

export default function IndustriesPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <section className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Industries</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-5xl">
                We build growth systems tailored to your industry.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Different industries need different approaches. We adapt our strategy, messaging, and tech stack to match the way your customers actually buy.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#085c8b]">
                Talk about your industry
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-sm">
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Our approach</p>
              <p className="mt-3 text-base leading-8 text-zinc-600">
                We don&apos;t just swap out logos. Every campaign, landing page, and funnel is built around the specific language, objections, and buying patterns of your target audience.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const CardContent = (
              <div className="h-full rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon size={18} className="text-[#0b6fa8]" />
                  </div>
                  {industry.href && (
                    <ArrowRight size={18} className="text-[#0b6fa8] opacity-50" />
                  )}
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-zinc-950">{industry.title}</h2>
                <p className="mt-3 text-base leading-7 text-zinc-600">{industry.description}</p>
              </div>
            );

            if (industry.href) {
              return (
                <Link key={industry.title} href={industry.href} className="block group">
                  {CardContent}
                </Link>
              );
            }

            return <div key={industry.title}>{CardContent}</div>;
          })}
        </section>
      </main>
    </SiteShell>
  );
}
