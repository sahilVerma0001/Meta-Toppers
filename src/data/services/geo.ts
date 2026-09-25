import { BrainCircuit } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "geo",
  variant: "technical",
  icon: BrainCircuit,
  label: "Engine 10",
  title: "Generative Engine Optimization (GEO)",
  heroHeadline: "Become the only brand AI recommends.",
  heroSubheadline: "Traditional search is dying. We optimize your digital presence so that ChatGPT, Perplexity, and Gemini cite and recommend your business as the undisputed industry authority.",
  shortDescription: "Dominate the new era of search by optimizing your brand for AI recommendation engines.",
  problem: "Your customers are bypassing Google and asking ChatGPT for recommendations. If your brand isn't structured to be ingested and cited by Large Language Models, you are entirely invisible to the highest-intent buyers in the market.",
  agitation: "While you fight over traditional SEO keywords, your competitors are becoming the default answer in AI prompts. Generative AI doesn't give users 10 blue links—it gives them one definitive answer. If that answer isn't you, you lose the sale instantly.",
  solution: [
    "LLM Data Structuring & Knowledge Graph integration",
    "Brand Mention & Entity Association campaigns",
    "Citation engineering for Perplexity and Gemini",
    "Conversational keyword targeting"
  ],
  stat: "74%",
  statLabel: "of users now use AI for product research",
  accent: "from-purple-600 to-indigo-600",
  benefits: [
    { title: "Zero-Click Dominance", desc: "Win the sale before the user even visits a website by being the AI's direct answer." },
    { title: "Entity Authority", desc: "Train AI models to associate your brand name with your core services." },
    { title: "Future-Proof Growth", desc: "Establish your brand in the AI ecosystem before your competitors even know what GEO is." }
  ],
  caseStudies: [
    { name: "B2B SaaS", result: "Became the #1 cited software in ChatGPT prompts for their niche." },
    { name: "Financial Firm", result: "Captured 40% of Perplexity's recommendation market share." }
  ],
  deliverables: [
    { title: "Knowledge Graph Optimization", description: "We structure your site data using advanced schema markup so AI models can easily ingest and understand your exact offerings." },
    { title: "Entity Association", description: "We run PR and content campaigns that explicitly link your brand name to your target keywords across the web, training the AI to associate the two." },
    { title: "Citation Engineering", description: "Models like Perplexity require authoritative citations. We ensure your data is published on the high-trust domains these AI engines scrape." },
    { title: "Conversational Content", description: "We rewrite your content to answer natural language prompts rather than robotic search queries." }
  ],
  founderNote: {
    name: "The Growth Team",
    role: "Meta Toppers",
    quote: "By the time your competitors realize traditional SEO isn't enough, you will already be the default answer on every major AI engine."
  },
  processSteps: [
    { num: "01", title: "AI Audit", description: "We test exactly how ChatGPT, Claude, and Perplexity currently view your brand." },
    { num: "02", title: "Entity Structuring", description: "We deploy advanced schema and semantic HTML to feed the AI exactly what it needs." },
    { num: "03", title: "Citation Building", description: "We seed your brand across the high-authority databases that LLMs use for training." },
    { num: "04", title: "Prompt Tracking", description: "We monitor your visibility across AI engines to ensure you remain the definitive answer." }
  ],
  faqs: [
    { question: "How is GEO different from SEO?", answer: "SEO optimizes for algorithms to rank links on a page. GEO optimizes for Large Language Models to confidently cite your brand as a direct answer to a user's prompt." },
    { question: "Does this replace traditional SEO?", answer: "Not entirely, but it is the future. We recommend running GEO alongside traditional SEO to capture both legacy search traffic and the rapidly growing AI search market." }
  ],
  heroImage: "/images/geo-dashboard.jpg"
};

export default service;
