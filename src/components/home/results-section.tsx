import { ArrowRight, TrendingUp } from "lucide-react";

const transformations = [
  {
    name: "Elevate Luxury Realty",
    before: "5 leads/week",
    after: "30+ leads/week",
    lift: "+500%",
    result: "Custom property portal increased high-net-worth lead volume in 8 weeks.",
  },
  {
    name: "Chen & Associates",
    before: "Page 3 on Google",
    after: "Top 3 results",
    lift: "2× leads",
    result: "Redesigned website and local SEO doubled organic seller leads in 90 days.",
  },
  {
    name: "Paramount Developments",
    before: "12% page conversion",
    after: "38% conversion",
    lift: "3× sales",
    result: "Landing pages sold out Phase 1 of a $50M development in record time.",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">The proof</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Before Meta Toppers vs. After.
            </h2>
          </div>
          <a href="#apply" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b6fa8] hover:text-[#085c8b] transition-colors">
            Get results like these
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {transformations.map((t) => (
            <div key={t.name} className="card-hover group rounded-[24px] border border-[#cdeeff] bg-white p-6 shadow-sm">
              <p className="text-lg font-bold text-zinc-950">{t.name}</p>
              
              {/* Before/After visual */}
              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 sm:flex-nowrap">
                <div className="rounded-lg bg-zinc-100 px-2 py-2 sm:px-3">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase">Before</p>
                  <p className="text-[11px] font-bold text-zinc-500 sm:text-sm">{t.before}</p>
                </div>
                <ArrowRight size={14} className="text-[#0b6fa8] shrink-0 sm:w-4 sm:h-4" />
                <div className="rounded-lg bg-[#f2fbff] border border-[#cdeeff] px-2 py-2 sm:px-3">
                  <p className="text-[10px] font-bold text-[#0b6fa8] uppercase">After</p>
                  <p className="text-[11px] font-bold text-[#0b6fa8] sm:text-sm">{t.after}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-600 sm:ml-auto sm:px-2.5 sm:text-xs">
                  <TrendingUp size={12} /> {t.lift}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600">{t.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
