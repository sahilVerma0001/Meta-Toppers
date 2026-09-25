import { Orbit } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "seo",
  variant: "growth",
  icon: Orbit,
  label: "Engine 03",
  title: "SEO & Digital Advertising",
  shortDescription: "Data-driven search optimization and paid campaigns that put your brand directly in front of ready-to-buy clients.",
  problem: "You're pouring money into Google Ads and SEO, but all you're getting are monthly reports filled with jargon like 'impressions' and 'click-through rates'. Meanwhile, your actual revenue hasn't moved an inch.",
  agitation: "Traffic is a vanity metric if it doesn't convert. Every dollar you spend on broad keywords or generic SEO is literally subsidizing Google, while your competitors capture the high-intent buyers who are ready to pull out their credit cards today.",
  solution: [
    "Data-driven SEO that builds compounding organic traffic",
    "Paid campaigns connected to real revenue, not vanity clicks",
    "Full ROI dashboard — know exactly what every rupee earns",
  ],
  stat: "3×",
  statLabel: "avg. organic traffic increase",
  accent: "from-emerald-600 to-emerald-700",
  benefits: [
    { title: "Local SEO Dominance", desc: "Capture high-intent searches in your specific city and region." },
    { title: "Content That Ranks", desc: "We build authority through strategic content clusters and backlinks." },
    { title: "High-ROI Paid Ads", desc: "Stop bleeding money on broad keywords. We target the exact buyers you want." }
  ],
  caseStudies: [
    { name: "Chen & Associates", result: "Doubled organic seller leads within 90 days." },
    { name: "Vertex Consulting", result: "Decreased Cost-Per-Acquisition by 45% on Google Ads." }
  ],
  heroHeadline: "Stop paying for clicks. Start paying for clients.",
  heroSubheadline: "We build organic compounding traffic and run hyper-targeted paid campaigns that actually generate revenue, not just vanity metrics.",
  deliverables: [
    { title: "Technical SEO Audit & Fixes", description: "We fix the foundational errors holding your site back. If Google can't crawl your site efficiently, nothing else matters." },
    { title: "High-Intent Keyword Strategy", description: "We ignore 'broad' terms and target 'bottom-of-the-funnel' keywords where the searcher is already looking to buy your exact service." },
    { title: "Content Silos & Backlinks", description: "We build your domain authority through structured, high-quality content hubs and ethical outreach, positioning you as the market leader." },
    { title: "Hyper-Targeted Paid Campaigns", description: "We run Google & Meta ads that don't bleed money. We rigorously test copy, creative, and audiences to find the lowest Cost-Per-Acquisition." }
  ],
  processSteps: [
    { num: "01", title: "The Audit & Revenue Math", description: "We don't start spending until we know the math works. We audit your current accounts, find the leaks, and establish a baseline Cost-Per-Lead target." },
    { num: "02", title: "Foundation & Tracking", description: "We fix technical SEO issues and set up airtight conversion tracking. If we can't measure the exact ROI of a campaign, we don't run it." },
    { num: "03", title: "Campaign Launch & Organic Push", description: "We launch highly targeted paid ads for immediate cash flow while simultaneously publishing SEO clusters for long-term, compounding growth." },
    { num: "04", title: "Ruthless Optimization", description: "We analyze the data weekly, killing losing ads and scaling winners. We don't 'set and forget'." }
  ],
  founderNote: {
    name: "The Growth Team",
    role: "Meta Toppers",
    quote: "Marketing agencies love to hide behind impressions and clicks because they are easy to get. We refuse to operate that way. If our campaigns aren't directly putting more money into your bank account than you are paying us, we haven't done our job. Period."
  },
  faqs: [
    { question: "How long does SEO take to work?", answer: "SEO is a long-term investment. You will typically start seeing significant movement in rankings between months 3 and 6. However, we offset this waiting period by running highly targeted Paid Ads to generate immediate leads while the organic foundation builds." },
    { question: "Do you guarantee page 1 on Google?", answer: "No honest agency guarantees the #1 spot because Google's algorithm is entirely out of human control. What we guarantee is a rigorous, proven methodology that historically dominates search results in competitive niches." },
    { question: "What is a 'good' ad budget to start with?", answer: "It depends entirely on your industry and competition. We recommend a minimum ad spend that allows for enough data collection to optimize effectively—usually starting around $1,500/month (separate from our management fee). We will calculate the exact math on our discovery call." },
    { question: "Am I locked into a long-term contract?", answer: "We don't lock you in. We operate on month-to-month agreements after an initial 90-day setup phase. We want you to stay with us because you are making money, not because a piece of paper forces you to." }
  ]
};

export default service;
