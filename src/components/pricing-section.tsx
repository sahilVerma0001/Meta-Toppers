import Link from "next/link";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$4k\u2013$8k",
      description: "Perfect for businesses that need a professional web presence fast.",
      bullets: ["Discovery & strategy session", "Landing page or 3\u20135 page website", "Mobile-responsive design", "Basic SEO setup & analytics", "30 days post-launch support"],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Growth",
      price: "$8k\u2013$18k",
      description: "For businesses ready to turn their website into a lead generation machine.",
      bullets: ["Full custom website (up to 10 pages)", "Conversion-optimized design", "SEO & content strategy", "CRM & lead funnel integration", "90 days of optimization support"],
      cta: "Most Popular \u2014 Let\u2019s Talk",
      featured: true,
    },
    {
      name: "Premium",
      price: "Custom",
      description: "Enterprise-level projects with ongoing marketing and growth execution.",
      bullets: ["Custom platform or product UI", "Full digital marketing campaigns", "Advanced analytics & reporting", "Dedicated account manager", "Monthly retainer & execution"],
      cta: "Book a Consultation",
      featured: false,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="text-center mb-10">
        <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Pricing</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">Transparent pricing. No surprise fees.</h3>
        <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-zinc-600">Every project starts with a free strategy call. We&apos;ll scope your needs and give you a clear price before any work begins.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`relative rounded-[24px] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${p.featured ? 'border-[#0b6fa8] bg-[#f2fbff] ring-2 ring-[#0b6fa8]/20' : 'border-[#e8f5ff] bg-white'}`}>
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0b6fa8] px-4 py-1 text-xs font-semibold text-white shadow-sm">
                Most Popular
              </div>
            )}
            <h4 className="text-lg font-semibold text-zinc-950">{p.name}</h4>
            <div className="mt-2 text-3xl font-bold text-zinc-900">{p.price}</div>
            <p className="mt-2 text-sm text-zinc-600">{p.description}</p>
            <ul className="mt-6 space-y-3">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-zinc-700">
                  <Check size={16} className="mt-0.5 shrink-0 text-[#0b6fa8]" />
                  {b}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`mt-6 block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition ${p.featured ? 'bg-[#0b6fa8] text-white hover:bg-[#085c8b]' : 'border border-[#cdeeff] bg-white text-zinc-900 hover:bg-[#f2fbff] hover:border-[#0b6fa8]'}`}>
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
