import { features } from "@/data/home";

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-[#cdeeff] bg-white/85 p-6 shadow-[0_24px_80px_rgba(11,111,168,0.05)] backdrop-blur sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Why founders choose us</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              We make growth feel clearer, sharper, and easier to act on.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600">
              Our process combines strategy, storytelling, and execution so your company can present a stronger market position without losing momentum.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item) => (
              <div key={item.title} className="rounded-[22px] border border-[#e8f5ff] bg-[#f2fbff] p-5 shadow-sm">
                <p className="text-lg font-semibold text-zinc-950">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
