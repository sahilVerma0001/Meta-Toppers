import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/home";

export function ResultsSection() {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="reveal rounded-[32px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Selected outcomes</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
              The work compounds because the strategy is built to scale.
            </h2>
          </div>
          <a href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#0b6fa8]">
            Start your next chapter
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.name} className="rounded-[24px] border border-[#cdeeff] bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-zinc-950">{caseStudy.name}</p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{caseStudy.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
