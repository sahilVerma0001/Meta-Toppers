import { Sparkles } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "lead-generation",
  variant: "growth",
  icon: Sparkles,
  label: "Engine 01",
  title: "Lead Generation",
  shortDescription: "Automated funnels and targeted campaigns that deliver qualified leads to your calendar, every single day.",
  problem: "You're chasing leads manually. You rely on referrals, cold outreach, or networking events. You have no predictable system, meaning your revenue fluctuates wildly month-to-month.",
  agitation: "When you have to manually hunt for every deal, you become the biggest bottleneck in your own business. You can't scale a business if you're stuck doing the prospecting. Your competitors who have automated their lead flow are scaling faster and with less effort.",
  solution: [
    "Automated funnels that qualify and deliver leads 24/7",
    "Social ad campaigns targeting buyers ready to act",
    "CRM integration so no lead ever falls through the cracks",
  ],
  stat: "42",
  statLabel: "qualified leads/week (avg. client)",
  accent: "from-violet-600 to-violet-700",
  benefits: [
    { title: "Automated Qualification", desc: "Stop talking to tire-kickers. Our systems filter out bad leads before they reach you." },
    { title: "Omnichannel Funnels", desc: "Capture leads across Meta, LinkedIn, and Google simultaneously." },
    { title: "Seamless CRM Sync", desc: "Every lead drops directly into your CRM with their full context and history." }
  ],
  caseStudies: [
    { name: "Apex Financial", result: "Generated 120 qualified consultations in the first 30 days." },
    { name: "Horizon Tech", result: "Built an automated webinar funnel yielding a 400% ROI." }
  ],
  heroHeadline: "Predictable pipeline, delivered daily.",
  heroSubheadline: "We build automated funnels that work 24/7 to capture, qualify, and deliver high-ticket leads directly to your calendar.",
  deliverables: [
    { title: "Automated Sales Funnels", description: "We build multi-step funnels designed specifically for high-ticket services. We turn cold traffic into warm, booked appointments." },
    { title: "Lead Qualification Systems", description: "Stop wasting time on tire-kickers. We build friction into the funnel with dynamic questionnaires so you only speak to people who have the budget and intent." },
    { title: "Omnichannel Retargeting", description: "96% of visitors won't convert on the first visit. We build retargeting nets across Meta, LinkedIn, and Google to bring them back when they are ready." },
    { title: "CRM & Automation Sync", description: "Every lead drops directly into your CRM. They instantly receive an automated SMS and email sequence, completely removing manual follow-up from your plate." }
  ],
  processSteps: [
    { num: "01", title: "The Avatar Deep-Dive", description: "We don't build a funnel until we know exactly who we are targeting. We map out your dream client's pain points, desires, and objections." },
    { num: "02", title: "Funnel Architecture & Copy", description: "We design the landing pages and write the psychological copy required to get a stranger to hand over their contact information." },
    { num: "03", title: "System Integration", description: "We connect the funnel to your calendar, your CRM, and set up the automated SMS/email sequences." },
    { num: "04", title: "Traffic & Optimization", description: "We turn on the ads. As the leads flow in, we analyze the conversion rates and optimize the funnel to lower your Cost Per Acquisition." }
  ],
  founderNote: {
    name: "Kartik Sharma",
    role: "Founder, Meta Toppers",
    quote: "The biggest lie in business is that you need to work 80 hours a week to scale. You don't. You just need a system that prospects for you while you sleep. Our lead generation funnels are designed to give you your time back so you can focus on what you do best: closing deals and serving clients."
  },
  faqs: [
    { question: "What constitutes a 'qualified' lead?", answer: "A qualified lead is someone who has actively engaged with our funnel, answered specific qualifying questions (like budget and timeline), and voluntarily booked a call on your calendar. We don't buy email lists; we generate real intent." },
    { question: "Do I need to handle the follow-up?", answer: "No. The system we build includes automated email and SMS follow-ups to ensure the lead shows up to the meeting. All you have to do is show up to the Zoom call and close the deal." },
    { question: "What if the leads are bad?", answer: "If a lead slips through that isn't a fit, we want to know immediately. We use that feedback loop to tighten the targeting on the ads and add more strict qualifying questions to the funnel." },
    { question: "Which platforms do you use to get traffic?", answer: "We are platform agnostic. We go where your audience is. For B2B, it's heavily LinkedIn and Google. For B2C, it's Meta (Facebook/Instagram), TikTok, and Google. We test multiple channels to find the lowest Cost Per Qualified Lead." }
  ]
};

export default service;
