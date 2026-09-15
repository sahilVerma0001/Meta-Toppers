"use client";

import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";
import { Users, TrendingUp, Trophy, Zap, Target, Heart, Eye } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: TrendingUp, value: "+146%", label: "Avg. Lead Increase" },
  { icon: Trophy, value: "96%", label: "Retention Rate" },
  { icon: Zap, value: "21 Days", label: "Avg. Launch" },
];

const team = [
  { name: "Kartik Sharma", role: "Founder & Strategy Lead", initials: "KS", color: "from-[#0b6fa8] to-[#085c8b]" },
  { name: "Sahil Parjapat", role: "SEO & Marketing Lead", initials: "SP", color: "from-violet-600 to-violet-700" },
  { name: "Khushi Nama", role: "Full-Stack Developer", initials: "KN", color: "from-emerald-600 to-emerald-700" },
];

const values = [
  {
    icon: Target,
    title: "Results Over Everything",
    copy: "We don't celebrate pretty designs. We celebrate leads generated, revenue driven, and businesses transformed.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    copy: "No jargon, no hidden fees, no vanity metrics. You'll always know exactly what we're doing and why.",
  },
  {
    icon: Heart,
    title: "Your Growth = Our Growth",
    copy: "We win when you win. That's why 96% of our clients stay beyond year one — we're invested in your long-term success.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">About Us</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
                  We&apos;re not an agency.<br />We&apos;re your growth team.
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  Meta Toppers exists for one reason: to help businesses stop leaving money on the table. We combine strategy, design, and marketing into one system that delivers predictable, measurable growth.
                </p>
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="rounded-[20px] border border-[#cdeeff] bg-[#f2fbff] p-5 text-center">
                      <Icon size={20} className="mx-auto text-[#0b6fa8] mb-2" />
                      <p className="text-2xl font-black text-zinc-950">{s.value}</p>
                      <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mt-1">{s.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#0b6fa8]/30 bg-gradient-to-br from-[#0b6fa8] to-[#085c8b] p-8 text-white shadow-[0_24px_80px_rgba(11,111,168,0.15)] sm:p-10 lg:p-14 text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-200 uppercase">Our Mission</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl max-w-3xl mx-auto">
              Every business deserves a digital presence that works as hard as they do.
            </h2>
            <p className="mt-5 text-base leading-8 text-blue-100 max-w-2xl mx-auto">
              Too many businesses are stuck with websites that look nice but do nothing. We believe your website should be your hardest-working employee — generating leads, building trust, and closing deals 24/7.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="rounded-[32px] border border-zinc-200 bg-white/85 p-6 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8 lg:p-10">
            <div className="text-center mb-10">
              <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">The Team</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Small team. Big results.
              </h2>
              <p className="mt-3 text-base text-zinc-600 max-w-xl mx-auto">
                No layers of account managers. You work directly with the people who build your growth engine.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3 max-w-4xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="card-hover group flex flex-col items-center text-center rounded-[24px] border border-[#cdeeff] bg-white p-6 transition-all hover:shadow-md">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.color} text-white text-xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950">{member.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#cdeeff] bg-[#f2fbff] p-6 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-8 lg:p-10">
            <div className="text-center mb-10">
              <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">What We Stand For</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Three principles that drive everything we do.
              </h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="card-hover group rounded-[24px] border border-[#cdeeff] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2fbff] text-[#0b6fa8] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-zinc-950">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">{v.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
    </SiteShell>
  );
}
