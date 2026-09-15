"use client";

import Image from "next/image";
import { TrendingUp, Clock, Target, Quote, CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";

const stories = [
  {
    client: "Elevate Luxury Realty",
    industry: "Real Estate",
    timeline: "Month 1 to Month 4",
    image: "/images/luxury-realty.jpg",
    situation: "The founder, Vikram, was spending ₹80,000/month on generic real estate portals. The leads were shared with 10 other brokers, leading to price wars and dead ends. His beautiful website was getting traffic, but generating zero exclusive inquiries.",
    execution: [
      "Built a gated property portal where high-net-worth buyers had to register to view floor plans",
      "Launched Google Ads targeting specific luxury neighborhoods in South Mumbai",
      "Set up an automated SMS follow-up sequence that triggered within 2 minutes of a lead registering"
    ],
    results: [
      { metric: "₹12 Cr", label: "Pipeline generated in 120 days" },
      { metric: "45+", label: "Exclusive, unshared leads per month" }
    ],
    quote: "We finally stopped competing on price because we are the only ones talking to these buyers. The system paid for itself in week three.",
    accent: "from-[#0b6fa8] to-[#085c8b]"
  },
  {
    client: "SmileCare Dental",
    industry: "Healthcare & Clinics",
    timeline: "Month 1 to Month 6",
    image: "/images/dental-mockup.jpg", 
    situation: "Dr. Sharma's clinic had a massive problem: empty chairs. They were getting basic cleaning appointments, but losing highly profitable implant and Invisalign patients to a flashy competitor down the street. Their old website looked like it was built in 2012.",
    execution: [
      "Completely redesigned the website to position Dr. Sharma as the premium authority in the city",
      "Created dedicated landing pages for high-ticket treatments (Implants, Braces)",
      "Launched a local SEO campaign to ensure they ranked #1 for 'implant dentist near me'"
    ],
    results: [
      { metric: "3×", label: "Increase in high-ticket patient bookings" },
      { metric: "₹4.5L", label: "Additional monthly revenue" }
    ],
    quote: "Patients come in already trusting us because of how professional our online presence is now. We had to hire a new associate doctor to handle the overflow.",
    accent: "from-emerald-600 to-emerald-700"
  },
  {
    client: "The Daily Grind",
    industry: "Cafes & Hospitality",
    timeline: "Month 1 to Month 3",
    image: "/images/cafe-dashboard.jpg",
    situation: "A popular premium cafe that was dying during afternoon hours. Worse, 60% of their revenue was coming through food delivery apps that were taking a 30% commission, bleeding their margins dry.",
    execution: [
      "Built a direct-ordering web app that bypassed delivery platforms entirely",
      "Ran hyper-local Instagram ads targeting corporate offices within a 3km radius during 3PM-5PM",
      "Implemented a digital loyalty program to turn one-time visitors into daily regulars"
    ],
    results: [
      { metric: "40%", label: "Orders shifted from Swiggy/Zomato to Direct" },
      { metric: "₹1.8L", label: "Saved in commissions monthly" }
    ],
    quote: "Getting our margins back changed the business. The afternoon slump is completely gone thanks to the targeted corporate campaigns.",
    accent: "from-amber-600 to-amber-700"
  },
  {
    client: "SecureLife Advisors",
    industry: "Insurance & Finance",
    timeline: "Month 1 to Month 5",
    image: "/images/insurance-dashboard.jpg",
    situation: "Rahul and his team of 5 insurance advisors were cold-calling lists and buying shared leads. Morale was low, rejection was high, and they had no predictable way to generate their own pipeline of people actually looking for term insurance.",
    execution: [
      "Built a 'Term Insurance Calculator' lead magnet that captured name, number, and salary details",
      "Ran Facebook lead campaigns offering free portfolio reviews for young professionals",
      "Set up a CRM that automatically nurtured cold leads with educational financial content via email"
    ],
    results: [
      { metric: "₹150", label: "Cost per exclusive, qualified lead" },
      { metric: "100%", label: "Team shifted away from cold calling entirely" }
    ],
    quote: "My advisors actually enjoy coming to work now because they are talking to people who asked us to call them. It's a completely different business.",
    accent: "from-violet-600 to-violet-700"
  }
];

export default function PortfolioPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10 lg:p-14 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">Client Growth Stories</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Real businesses.<br />Real revenue.
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                We don&apos;t just build websites; we solve business problems. Read the stories of how we partnered with founders to engineer predictable growth and take back control of their lead generation.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Case Studies */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8 lg:space-y-12">
          {stories.map((story, i) => (
            <div key={story.client} className="group rounded-[32px] border border-zinc-200 bg-white/85 p-6 shadow-[0_24px_80px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8 lg:p-12">
              
              <div className="flex flex-col lg:flex-row gap-10">
                
                {/* Left Column — The Narrative */}
                <div className="flex-1 lg:max-w-[60%]">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f2fbff] border border-[#cdeeff] px-3 py-1.5 text-xs font-bold text-[#0b6fa8] uppercase tracking-wider">
                      <Target size={14} /> {story.industry}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      <Clock size={14} /> Partnership Timeline: {story.timeline}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl mb-8">{story.client}</h2>
                  
                  <div className="space-y-8">
                    {/* The Situation */}
                    <div>
                      <h3 className="text-lg font-bold text-zinc-950 flex items-center gap-2 mb-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs">1</span>
                        The Situation
                      </h3>
                      <p className="text-base leading-relaxed text-zinc-700 bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                        {story.situation}
                      </p>
                    </div>

                    {/* The Execution */}
                    <div>
                      <h3 className="text-lg font-bold text-zinc-950 flex items-center gap-2 mb-4">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b6fa8]/10 text-[#0b6fa8] text-xs">2</span>
                        Our Execution
                      </h3>
                      <ul className="space-y-3">
                        {story.execution.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-[#0b6fa8] shrink-0 mt-0.5" />
                            <span className="text-base leading-relaxed text-zinc-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The Client Quote */}
                    <div className="mt-8 relative">
                      <Quote size={40} className="absolute -top-4 -left-2 text-zinc-100 -z-10" />
                      <p className="text-lg italic font-medium text-zinc-800 pl-4 border-l-2 border-[#0b6fa8]">
                        &quot;{story.quote}&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column — Results & Visual */}
                <div className="flex-1 lg:max-w-[40%] flex flex-col gap-6">
                  
                  {/* Results Box */}
                  <div className={`rounded-[24px] bg-gradient-to-br ${story.accent} p-8 text-white shadow-lg`}>
                    <p className="text-sm font-bold uppercase tracking-widest text-white/80 mb-6 flex items-center gap-2">
                      <TrendingUp size={16} /> Bottom Line Impact
                    </p>
                    <div className="space-y-6">
                      {story.results.map((stat, idx) => (
                        <div key={idx} className={idx !== 0 ? "pt-6 border-t border-white/20" : ""}>
                          <p className="text-4xl font-black tracking-tight">{stat.metric}</p>
                          <p className="mt-2 text-sm font-medium text-white/90">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Evidence */}
                  <div className="rounded-[24px] border border-zinc-200 bg-white p-3 shadow-sm">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider text-center mb-3">System Screenshot</p>
                    <div className="relative h-48 w-full overflow-hidden rounded-xl border border-zinc-100">
                      <Image src={story.image} alt={story.client} fill className="object-cover" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <CTASection />
      </main>
    </SiteShell>
  );
}
