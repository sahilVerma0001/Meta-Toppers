import { services } from "@/data/home";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-zinc-200 bg-white/80 p-6 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium tracking-[0.24em] text-zinc-500 uppercase">What we do</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              Premium strategy, intelligent execution, and a clear growth narrative.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-600">
            We don’t chase vanity metrics. We build brand systems and conversion journeys that create market confidence and predictable commercial momentum.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon size={18} className="text-[#0b6fa8]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-zinc-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{service.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
