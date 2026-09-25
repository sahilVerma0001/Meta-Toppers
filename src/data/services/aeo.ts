import { MessageSquareText } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "aeo",
  variant: "technical",
  icon: MessageSquareText,
  label: "Engine 11",
  title: "Answer Engine Optimization (AEO)",
  heroHeadline: "Win the Voice Search and Featured Snippet war.",
  heroSubheadline: "Users don't search anymore; they ask questions. We structure your content to be the exact answer delivered by Google's AI Overviews, Siri, and Alexa.",
  shortDescription: "Optimize for zero-click searches, Voice Assistants, and Google's AI Overviews.",
  problem: "Over 50% of searches now end without a click. Users get their answer directly on the results page or via voice assistant. If your content isn't formatted as a direct answer, you get zero traffic.",
  agitation: "Ranking #1 on standard search doesn't matter if Google's AI Overview pushes you below the fold. You are losing massive amounts of traffic because your content isn't engineered to be scraped and read aloud by answer engines.",
  solution: [
    "Google AI Overview (SGE) Optimization",
    "Featured Snippet & Position Zero targeting",
    "Voice Search query mapping",
    "FAQ Schema and semantic structuring"
  ],
  stat: "50%+",
  statLabel: "of searches end without a click",
  accent: "from-teal-500 to-emerald-600",
  benefits: [
    { title: "Position Zero", desc: "Skip the traditional rankings and appear directly at the top in the Answer Box." },
    { title: "Voice Search Ready", desc: "Become the default answer provided by Siri, Alexa, and Google Assistant." },
    { title: "High-Trust Visibility", desc: "Users implicitly trust the direct answer provided by Google's AI." }
  ],
  caseStudies: [
    { name: "Healthcare Provider", result: "Captured 65% of local voice search queries for urgent care." },
    { name: "Legal Practice", result: "Secured 40+ Featured Snippets for high-intent legal questions." }
  ],
  deliverables: [
    { title: "Question Mapping", description: "We extract the exact natural language questions your target audience is asking Voice Assistants." },
    { title: "Snippet Formatting", description: "We restructure your content into precise paragraphs, lists, and tables designed specifically to be stolen by Google's Featured Snippets." },
    { title: "Advanced FAQ Schema", description: "We deploy deep structured data that directly feeds your answers into Google's Knowledge Graph." },
    { title: "AI Overview (SGE) Targeting", description: "We optimize your authority signals so your brand is cited in Google's new Generative AI search results." }
  ],
  founderNote: {
    name: "The Growth Team",
    role: "Meta Toppers",
    quote: "Search is no longer a list of links. It's a conversation. If your business isn't providing the direct answer, someone else is taking your customer."
  },
  processSteps: [
    { num: "01", title: "Query Intent Analysis", description: "We analyze exactly how users phrase questions verbally vs. how they type them." },
    { num: "02", title: "Content Restructuring", description: "We rebuild your key pages to follow the strict formatting rules required by Answer Engines." },
    { num: "03", title: "Schema Deployment", description: "We inject structured data code into your site to hand-feed answers to the algorithms." },
    { num: "04", title: "Position Zero Tracking", description: "We monitor exactly how many snippets and zero-click results your brand owns." }
  ],
  faqs: [
    { question: "Why do I want zero-click searches?", answer: "While they don't drive website traffic, they drive brand authority and direct actions. For local businesses, a Voice Search often results directly in a phone call or navigation request without the user ever visiting your site." },
    { question: "How does AEO work with GEO?", answer: "AEO focuses on traditional search engine features (Featured Snippets, Google AI Overviews, Voice Assistants), while GEO focuses on Large Language Models (ChatGPT, Perplexity). They work perfectly together to blanket the entire modern search landscape." }
  ],
  heroImage: "/images/aeo-dashboard.jpg"
};

export default service;
