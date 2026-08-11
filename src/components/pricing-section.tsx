import Link from "next/link";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$4k–$8k",
      bullets: ["Discovery & strategy", "Landing page or small site", "Basic SEO & analytics"],
    },
    {
      name: "Growth",
      price: "$8k–$18k",
      bullets: ["Full website (responsive)", "Conversion optimization", "Growth system integration"],
    },
    {
      name: "Premium",
      price: "Custom",
      bullets: ["Design system & product UI", "Advanced analytics", "Retainer & execution support"],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <h3 className="text-2xl font-semibold text-zinc-950">Pricing & engagement</h3>
      <p className="mt-3 text-zinc-600">We price to fit outcomes. Below are typical starting ranges—final scope and price are set during the game-plan stage.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="rounded-2xl border border-[#e8f5ff] bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-zinc-950">{p.name}</h4>
            <div className="mt-2 text-2xl font-bold text-zinc-900">{p.price}</div>
            <ul className="mt-4 space-y-2 text-zinc-600">
              {p.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
            <Link href="/contact" className="mt-6 inline-block rounded-full bg-[#0b6fa8] px-5 py-2 text-sm font-medium text-white hover:bg-[#085c8b]">
              Talk about this plan
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
