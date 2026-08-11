import { MoveUpRight } from "lucide-react";
import { steps } from "@/data/home";

export function ApproachSection() {
  return (
    <section id="approach" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal rounded-[32px] border border-[#0b6fa8]/30 bg-gradient-to-br from-[#0b6fa8] to-[#085c8b] p-8 text-white shadow-[0_24px_80px_rgba(11,111,168,0.15)] sm:p-10">
          <p className="text-sm font-medium tracking-[0.24em] text-blue-100 uppercase">Why it works</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            The best agencies don’t just look polished. They create momentum.
          </h2>
          <p className="mt-5 text-base leading-8 text-blue-50">
            Our work sits at the intersection of positioning, product storytelling, and digital experience design—so every interaction feels intentional and every message builds trust.
          </p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-sm text-blue-50">
            <MoveUpRight size={16} />
            Built for teams that need clarity, speed, and conviction.
          </div>
        </div>

        <div className="reveal space-y-4">
          {steps.map((step) => (
            <div key={step.title} className="rounded-[24px] border border-[#cdeeff] bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-medium tracking-[0.2em] text-[#0b6fa8] uppercase">{step.title}</p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-600">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
