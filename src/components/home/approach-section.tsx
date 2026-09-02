import { MoveUpRight, Clock, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Clock,
    title: "Week 1 — Research & Strategy",
    copy: "We audit your market, study your competitors, and map the exact plan to outperform them.",
  },
  {
    icon: Zap,
    title: "Week 2–3 — Design & Build",
    copy: "We design and develop your premium website and marketing assets — built to convert from day one.",
  },
  {
    icon: BarChart3,
    title: "Week 3+ — Launch & Scale",
    copy: "We launch campaigns, track every metric, and compound your results month over month.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal rounded-[32px] border border-[#0b6fa8]/30 bg-gradient-to-br from-[#0b6fa8] to-[#085c8b] p-8 text-white shadow-[0_24px_80px_rgba(11,111,168,0.15)] sm:p-10">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-200 uppercase">Our guarantee</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Live in 21 days.<br />Or we work free.
          </h2>
          <p className="mt-5 text-base leading-8 text-blue-50">
            No endless timelines. No "we'll get back to you." We follow a battle-tested 3-week framework that gets you from zero to live, generating leads — or you don't pay.
          </p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
            <MoveUpRight size={16} />
            Zero risk. Full transparency. Real deadlines.
          </div>
        </div>

        <div className="reveal space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="card-hover group rounded-[24px] border border-[#cdeeff] bg-white/80 p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2fbff] text-[#0b6fa8] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm font-bold tracking-[0.15em] text-[#0b6fa8] uppercase">{step.title}</p>
                </div>
                <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">{step.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
