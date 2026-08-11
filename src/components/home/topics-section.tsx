import { topics } from "@/data/home";

export function TopicsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-zinc-200 bg-white/80 p-6 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase">Built for every stage of growth</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              Dedicated thinking for the topics that shape modern growth.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-600">
            From positioning and performance to portfolio storytelling and long-term brand trust, Meta Toppers helps business owners navigate every critical growth conversation.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic) => (
            <div key={topic.title} className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6 transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm font-medium tracking-[0.2em] text-[#0b6fa8] uppercase">{topic.title}</p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{topic.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
