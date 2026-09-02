import { Orbit, PanelsTopLeft, Sparkles } from "lucide-react";

const solutions = [
  {
    title: "Websites That Convert",
    copy: "Not just pretty — engineered to turn every visitor into a lead. Custom-built for your audience, your market, your goals.",
    icon: PanelsTopLeft,
  },
  {
    title: "SEO & Ads That Pay For Themselves",
    copy: "We put you on page 1 and connect every ad dollar to real revenue. You'll always know exactly what's working.",
    icon: Orbit,
  },
  {
    title: "Lead Gen On Autopilot",
    copy: "Automated funnels that deliver qualified leads while you sleep. No more chasing. They come to you.",
    icon: Sparkles,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-[#cdeeff] bg-gradient-to-b from-[#f2fbff] to-white p-6 shadow-[0_24px_80px_rgba(11,111,168,0.05)] backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">The fix</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              One system. Three engines. Predictable growth.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-600">
            Every problem you just read about has a system-level solution. Here's how we eliminate them — permanently.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-hover group rounded-[24px] border border-[#cdeeff] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2fbff] text-[#0b6fa8] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-zinc-950">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{s.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
