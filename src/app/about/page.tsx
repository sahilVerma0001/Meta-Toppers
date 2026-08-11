import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const values = [
  "Clarity over noise",
  "Premium execution without ego",
  "Growth thinking grounded in real business goals",
  "Trusted partnerships built for the long term",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <section className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">About us</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-5xl">
                We help businesses grow with precision, strategy, and confidence.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Meta Toppers is a growth-focused studio helping ambitious companies turn strategy into visible, measurable momentum.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#085c8b]">
                Start a conversation
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-sm">
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Our focus</p>
              <p className="mt-3 text-base leading-8 text-zinc-600">
                We blend positioning, design, and execution so the message feels strong, the experience feels premium, and the growth plan remains practical.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[32px] border border-[#cdeeff] bg-[#f2fbff] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Why we exist</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
                Growth should feel thoughtful, not chaotic.
              </h2>
            </div>
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded-[20px] border border-[#cdeeff] bg-white px-4 py-3 shadow-sm">
                  <ShieldCheck size={18} className="text-[#0b6fa8]" />
                  <span className="text-base text-zinc-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
