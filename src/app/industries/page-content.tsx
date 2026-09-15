"use client";

import { Building, Stethoscope, Coffee, ShieldPlus, ArrowRight, Zap, Target, BarChart3 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";

const industries = [
  {
    icon: Building,
    title: "Real Estate & Developers",
    subtitle: "The Property Growth Playbook",
    context: "The real estate market is flooded with generic property portals. If you rely on 99acres or MagicBricks, you are fighting price wars on shared leads.",
    phases: [
      { step: "Phase 1: Foundation", desc: "We build a premium, gated property portal that forces high-net-worth buyers to register to view floor plans and pricing." },
      { step: "Phase 2: Acquisition", desc: "Hyper-targeted Google and Meta campaigns targeting specific neighborhoods and income brackets." },
      { step: "Phase 3: Automation", desc: "Instant WhatsApp and SMS triggers the second a lead registers, ensuring you contact them while they are still looking at their phone." }
    ],
    accent: "from-[#0b6fa8] to-[#085c8b]",
    iconBg: "bg-[#f2fbff]",
    iconColor: "text-[#0b6fa8]"
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    subtitle: "The Patient Acquisition Playbook",
    context: "Patients don't choose the best doctor; they choose the doctor they trust the most online. If your clinic's website looks outdated, you lose high-ticket patients.",
    phases: [
      { step: "Phase 1: Authority", desc: "Complete digital rebranding to position your clinic as the premium, most trusted option in your city." },
      { step: "Phase 2: Local Dominance", LocalSearch: "Aggressive Local SEO so you rank #1 when a patient searches for 'implant dentist near me' or 'skin clinic'." },
      { step: "Phase 3: Retention", desc: "Automated booking systems with SMS reminders that drastically cut down no-show rates." }
    ],
    accent: "from-emerald-600 to-emerald-700",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    icon: Coffee,
    title: "Cafes & Hospitality",
    subtitle: "The Direct-Revenue Playbook",
    context: "Swiggy and Zomato are eating your margins. To survive and scale, you need to own your customer data and drive direct footfall.",
    phases: [
      { step: "Phase 1: Direct Ordering", desc: "We build a direct web-app for your restaurant that bypasses aggregator commissions entirely." },
      { step: "Phase 2: Geo-Fenced Ads", desc: "Social media campaigns targeting corporate offices within a 3km radius during your slowest afternoon hours." },
      { step: "Phase 3: Loyalty", desc: "Digital loyalty programs that capture WhatsApp numbers to send offers and turn one-time diners into regulars." }
    ],
    accent: "from-amber-600 to-amber-700",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    icon: ShieldPlus,
    title: "Insurance & Finance",
    subtitle: "The Exclusive Lead Playbook",
    context: "Buying shared leads from vendors means your advisors are calling people who have already been called 5 times. You need an exclusive pipeline.",
    phases: [
      { step: "Phase 1: Lead Magnets", desc: "We build gated financial calculators (e.g., Term Insurance Estimators) to capture high-intent contact details." },
      { step: "Phase 2: Paid Traffic", desc: "Facebook and LinkedIn campaigns offering free portfolio reviews or financial health checks to young professionals." },
      { step: "Phase 3: Nurturing", desc: "A CRM setup with automated email sequences that educate cold leads over time until they are ready to buy." }
    ],
    accent: "from-violet-600 to-violet-700",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600"
  },
];

export default function IndustriesPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">Our Specialized Systems</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                We don&apos;t do generic.<br />We run playbooks.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Marketing a real estate firm is completely different from marketing a dental clinic. We don&apos;t guess what works; we deploy proven, 3-phase growth playbooks tailored to your specific industry.
              </p>
            </div>
          </div>
        </section>

        {/* Playbooks */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.title} className="rounded-[32px] border border-zinc-200 bg-white/85 p-6 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8 lg:p-10">
                
                <div className="flex flex-col lg:flex-row gap-10">
                  
                  {/* Left — Industry Context */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${ind.iconBg} ${ind.iconColor}`}>
                        <Icon size={28} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-zinc-950">{ind.title}</h2>
                        <p className="text-sm font-bold tracking-wider text-zinc-400 uppercase mt-1">{ind.subtitle}</p>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6">
                      <p className="text-xs font-bold text-zinc-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Target size={16} className="text-zinc-400" /> The Market Reality
                      </p>
                      <p className="text-sm leading-relaxed text-zinc-600">{ind.context}</p>
                    </div>
                  </div>

                  {/* Right — The 3 Phases */}
                  <div className="lg:w-2/3">
                    <div className="grid gap-4 sm:grid-cols-3 h-full">
                      {ind.phases.map((phase, idx) => {
                        const isLast = idx === 2;
                        return (
                          <div key={idx} className={`rounded-2xl border ${isLast ? 'border-transparent bg-gradient-to-br ' + ind.accent : 'border-zinc-200 bg-white'} p-6 relative overflow-hidden flex flex-col`}>
                            
                            {/* Phase Number Background */}
                            <div className={`absolute -right-4 -top-6 text-9xl font-black opacity-[0.03] ${isLast ? 'text-white' : 'text-zinc-900'} select-none`}>
                              {idx + 1}
                            </div>
                            
                            <div className="relative z-10 flex-1">
                              <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${isLast ? 'text-white/80' : 'text-[#0b6fa8]'}`}>
                                {phase.step}
                              </p>
                              <p className={`text-sm leading-relaxed ${isLast ? 'text-white font-medium' : 'text-zinc-600'}`}>
                                {phase.desc || phase.LocalSearch}
                              </p>
                            </div>
                            
                            {/* Icon at bottom */}
                            <div className={`mt-6 relative z-10 ${isLast ? 'text-white/50' : 'text-zinc-300'}`}>
                              {idx === 0 && <Zap size={24} />}
                              {idx === 1 && <Target size={24} />}
                              {idx === 2 && <BarChart3 size={24} />}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <CTASection />
      </main>
    </SiteShell>
  );
}
