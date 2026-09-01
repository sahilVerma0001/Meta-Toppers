import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const values = [
  "We say what we\u2019ll do, then we do it \u2014 on time, every time",
  "No jargon, no fluff. Just clear communication and honest advice",
  "Every decision is backed by data, not gut feelings",
  "We treat your budget like it\u2019s our own money",
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
                We&apos;re a small team that builds websites which actually bring in clients.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Meta Toppers started with a simple frustration: too many businesses pay for beautiful websites that don&apos;t generate a single lead. We decided to fix that. Every site we build is designed with one purpose — to convert visitors into paying clients.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#085c8b]">
                Book a free growth audit
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-[24px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-sm">
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">How we work</p>
              <p className="mt-3 text-base leading-8 text-zinc-600">
                We keep our client roster intentionally small so every project gets our full attention. No interns, no outsourcing — the people you talk to are the people who build your site.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[32px] border border-[#cdeeff] bg-[#f2fbff] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">What we believe</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
                Our promises to every client.
              </h2>
            </div>
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded-[20px] border border-[#cdeeff] bg-white px-4 py-3 shadow-sm">
                  <ShieldCheck size={18} className="text-[#0b6fa8] shrink-0" />
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
