import { MousePointerClick } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "google-ads",
  variant: "growth",
  icon: MousePointerClick,
  label: "Engine 09",
  title: "Google Ads Management",
  heroHeadline: "Capture high-intent traffic ready to buy right now.",
  heroSubheadline: "Stop wasting budget on broad match keywords and tire-kickers. We build hyper-targeted Google Ads campaigns that dominate the top of search results and drive immediate, measurable ROI.",
  shortDescription: "Data-driven Google Ads campaigns engineered for maximum ROI and low acquisition costs.",
  problem: "You're spending thousands on Google Ads, but your cost-per-acquisition is too high and lead quality is too low. You're bleeding budget on irrelevant clicks while competitors steal the highest-intent traffic.",
  agitation: "Every day your campaigns run without precise optimization, you are handing money to Google and losing market share. Without proper negative keyword lists and high-converting landing pages, Google Ads is a casino where the house always wins.",
  solution: [
    "Comprehensive keyword research & competitor gap analysis",
    "High-converting ad copy and extension optimization",
    "Continuous bid management and negative keyword pruning",
    "Custom landing page design for maximum conversion rate"
  ],
  stat: "3.5×",
  statLabel: "average ROAS increase in 90 days",
  accent: "from-blue-600 to-[#0b6fa8]",
  benefits: [
    { title: "Immediate Visibility", desc: "Instantly place your business at the very top of Google for your most profitable keywords." },
    { title: "High-Intent Traffic", desc: "We only target users who are actively searching to buy your exact product or service today." },
    { title: "Data-Driven Scaling", desc: "Once we find the profitable keywords, we aggressively scale your budget to dominate the market." }
  ],
  caseStudies: [
    { name: "Legal Practice", result: "Reduced cost-per-lead by 45% while doubling lead volume in 60 days." },
    { name: "E-Commerce Brand", result: "Scaled from $10k to $50k monthly ad spend while maintaining a 4.2x ROAS." }
  ],
  deliverables: [
    { title: "Campaign Architecture", description: "Fully structured campaigns with hyper-segmented ad groups for maximum relevance." },
    { title: "Ad Copy & Extensions", description: "High-converting ad copy dynamically tested to find the highest click-through rate." },
    { title: "Conversion Tracking", description: "Pixel-perfect tracking for every form submit, phone call, and purchase." },
    { title: "Landing Pages", description: "Dedicated, high-converting landing pages built specifically for your paid traffic." }
  ],
  founderNote: {
    name: "Sahil Verma",
    role: "Founder & Growth Director",
    quote: "Google Ads isn't about getting the most clicks. It's about buying the most profitable customers at the lowest possible cost."
  },
  processSteps: [
    { num: "01", title: "Market Audit", description: "We analyze your exact market, identify what your competitors are bidding on, and find the profitable gaps." },
    { num: "02", title: "Campaign Architecture", description: "We build highly segmented ad groups to ensure your ads perfectly match the user's search intent." },
    { num: "03", title: "Landing Pages", description: "Traffic is useless if it doesn't convert. We optimize where the click lands to maximize your ROI." },
    { num: "04", title: "Optimization", description: "We monitor your campaigns daily, pruning wasted spend and scaling the winners." }
  ],
  faqs: [
    { question: "How much should I spend on Google Ads?", answer: "We recommend a minimum ad spend of $3,000/month to generate enough data for our algorithms to optimize effectively. However, the exact amount depends on your industry's cost-per-click and your revenue goals." },
    { question: "How long until we see results?", answer: "Unlike SEO, Google Ads can generate traffic and leads on day one. However, it typically takes 30-60 days of data collection and optimization to hit peak ROI." },
    { question: "Do you also build the landing pages?", answer: "Yes. Sending paid traffic to a standard homepage is a massive mistake. We build and test dedicated, high-converting landing pages for your campaigns." }
  ]
};

export default service;
