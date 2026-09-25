import { PanelsTopLeft } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "web-design",
  variant: "technical",
  icon: PanelsTopLeft,
  label: "Engine 02",
  title: "Website Design & Development",
  shortDescription: "Premium, conversion-focused websites built to attract high-value clients and turn traffic into revenue.",
  problem: "You know your service is the best in the market. But when potential clients visit your website, they don't see the market leader—they see a generic template that looks exactly like your cheapest competitor.",
  agitation: "Every day you stick with an outdated, slow, or confusing website, you are literally handing high-ticket clients to competitors who offer worse services but have better digital storefronts. You aren't losing because of your service; you're losing because of your packaging.",
  solution: [
    "Custom-designed for your specific audience & brand",
    "Conversion-optimized from the first pixel to the last CTA",
    "Mobile-first, blazing fast, SEO-ready out of the box",
  ],
  stat: "+250%",
  statLabel: "avg. lead increase after launch",
  accent: "from-[#0b6fa8] to-[#085c8b]",
  benefits: [
    { title: "Psychology-Driven Layouts", desc: "We map user journeys to guide visitors naturally toward booking a call." },
    { title: "Lightning Fast Load Times", desc: "Built on Next.js to ensure zero drop-off from slow loading pages." },
    { title: "Premium Aesthetic", desc: "Position your brand as the expensive, premium choice in your market." }
  ],
  caseStudies: [
    { name: "Elevate Luxury Realty", result: "Increased high-net-worth lead volume by 60% in 8 weeks." },
    { name: "Paramount Developments", result: "Sold out Phase 1 of a $50M development purely through digital traffic." }
  ],
  heroHeadline: "We don't build digital brochures. We engineer revenue machines.",
  heroSubheadline: "Your website should be your hardest-working salesperson. We design premium, psychology-driven websites that force your ideal clients to stop scrolling and start booking.",
  deliverables: [
    { title: "UI/UX Strategy & Wireframing", description: "We don't guess. We map out the exact psychological journey your user needs to take to convert before we draw a single pixel." },
    { title: "Custom Premium Design", description: "Forget templates. We build bespoke, high-end interfaces that immediately position you as the premium, expensive choice in your industry." },
    { title: "Next.js Development", description: "We code your site using the same technology powering the world's fastest apps. Lightning-fast load times mean zero drop-off." },
    { title: "On-Page SEO Foundation", description: "Your site isn't just pretty—it's built to be read by Google. Proper tagging, schema markup, and speed optimization come standard." }
  ],
  processSteps: [
    { num: "01", title: "Discovery & Strategy", description: "We sit down with you to understand your exact business model, your best clients, and your biggest competitors. We diagnose before we prescribe." },
    { num: "02", title: "Wireframing & Copy", description: "We sketch the layout and structure the messaging. The words sell; the design just proves the words are true." },
    { num: "03", title: "High-Fidelity Design", description: "We bring the wireframes to life with your brand colors, premium typography, and custom animations that create a 'wow' factor." },
    { num: "04", title: "Development & Launch", description: "We write clean, scalable code. After rigorous mobile and speed testing, we push your new revenue engine live." }
  ],
  founderNote: {
    name: "Kartik Sharma",
    role: "Founder, Meta Toppers",
    quote: "I've seen too many brilliant business owners lose to inferior competitors simply because their website looked cheap. My promise to you is simple: We will not stop iterating until your website looks like the undisputed leader in your industry. When someone lands on your page, I want them to think, 'Wow, these guys are the real deal.' That's what we deliver."
  },
  faqs: [
    { question: "How much does a custom website cost?", answer: "We don't do cookie-cutter pricing because we don't do cookie-cutter websites. Most of our custom builds range depending on complexity, but we always provide a fixed-price quote after our discovery call. No hidden fees. No hourly billing." },
    { question: "How long does it take to launch?", answer: "For a standard conversion-focused website, our typical turnaround is 21 to 30 days from kickoff to going live. We move fast because we have a dedicated, unified team." },
    { question: "Do you use templates like WordPress or Wix?", answer: "Absolutely not. We design custom interfaces in Figma and code them from scratch using Next.js and React. This guarantees your site is blazing fast, unhackable, and 100% unique to your brand." },
    { question: "Will I be able to update the content myself?", answer: "Yes. We can integrate a headless CMS that gives you a beautiful, foolproof dashboard to update text, add team members, or post blogs without writing a single line of code." }
  ],
  heroImage: "/images/luxury-realty.jpg"
};

export default service;
