import Link from "next/link";
import { ArrowRight, Briefcase, Building2, Compass, TrendingUp, Home } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const industries = [
  {
    title: "SaaS",
    description: "Sharper positioning and conversion systems for companies selling to ambitious buyers.",
    icon: TrendingUp,
  },
  {
    title: "Real Estate",
    description: "High-converting property portals and lead generation systems for digital real estate.",
    icon: Home,
    href: "/industries/real-estate",
  },
  {
    title: "Professional services",
    description: "A premium digital presence that makes expertise feel credible and easy to trust.",
    icon: Briefcase,
  },
  {
    title: "Fintech",
    description: "Messaging, trust, and clarity that help complex products feel instantly understandable.",
    icon: Building2,
  },
  {
    title: "Consumer brands",
    description: "Brand storytelling and growth systems designed to create attention with intent.",
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
                We tailor growth systems to the realities of your market.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                From early-stage ventures to established companies, our work adapts to the context, audience, and commercial goals that matter most.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#085c8b]">
                Discuss your industry
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-sm">
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Market fit</p>
              <p className="mt-3 text-base leading-8 text-zinc-600">
                We tailor the voice, offer, and experience to the audience you want to win over, whether that’s investors, buyers, or high-value clients.
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
