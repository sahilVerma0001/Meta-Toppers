import { AlertTriangle, DollarSign, Search, UserX } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Beautiful but useless",
    copy: "Your site looks fine — but it generates zero leads and zero calls.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: DollarSign,
    title: "Burning ad budget",
    copy: "You're spending on ads but can't tell what's actually working.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: Search,
    title: "Invisible on Google",
    copy: "Your competitors rank on page 1. You're buried on page 3.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: UserX,
    title: "Freelancer roulette",
    copy: "You've hired 3 different people and got burned every time.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-zinc-200 bg-white/85 p-6 shadow-[0_24px_80px_rgba(11,111,168,0.05)] backdrop-blur sm:p-8 lg:p-10">
        
        {/* Header */}
        <div className="mb-10 text-center lg:mb-12">
          <p className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">Sound familiar?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            If any of this hits home, you're leaving money on the table.
          </h2>
        </div>

        {/* Pain-point cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="card-hover group relative overflow-hidden rounded-[24px] border border-zinc-100 bg-white p-6 shadow-sm transition-all hover:border-zinc-200 hover:shadow-md">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${p.bg} ${p.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-zinc-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{p.copy}</p>
              </div>
            );
          })}
        </div>

        {/* Transition line */}
        <div className="mt-10 text-center">
          <p className="text-base font-semibold text-[#0b6fa8]">
            If you nodded at even one — keep scrolling. We built the fix.
          </p>
        </div>
      </div>
    </section>
  );
}
