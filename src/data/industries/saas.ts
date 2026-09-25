import { Cloud, Zap, Cpu, Server } from "lucide-react";
import type { IndustryData } from "./types";

const industry: IndustryData = {
  slug: "saas",
  title: "SaaS & Tech",
  layout: "saas",
  icon: Cloud,
  heroHeadline: "Scalable Web Experiences for Fast-Growing Tech Companies.",
  heroDescription: "We design and build high-performance marketing sites, interactive product demos, and acquisition funnels that convert traffic into active users.",
  marketImpact: {
    label1: "Average reduction in CAC",
    value1: "35%",
    label2: "Increase in free trial signups",
    value2: "180%",
  },
  solutionsHeadline: "How we accelerate SaaS growth.",
  services: [
    {
      title: "Conversion-Optimized Sites",
      description: "Lightning-fast marketing websites built on modern frameworks (Next.js/React) to minimize bounce rates.",
      icon: Zap,
    },
    {
      title: "Interactive Product Demos",
      description: "Custom web-GL and interactive animations that let users experience your product before signing up.",
      icon: Cpu,
    },
    {
      title: "Technical SEO Architecture",
      description: "Deep, programmatic SEO infrastructure designed to capture long-tail technical search queries.",
      icon: Server,
    },
  ],
  caseStudiesHeadline: "Metrics that matter.",
  caseStudies: [
    {
      metric: "4.2x",
      label: "Growth in organic traffic",
      description: "Built a programmatic SEO glossary for a B2B SaaS, generating thousands of new highly-targeted monthly visitors.",
    },
    {
      metric: "65%",
      label: "Increase in demo requests",
      description: "Redesigned the core acquisition funnel and pricing page, removing friction and boosting enterprise leads.",
    },
    {
      metric: "<1s",
      label: "Average page load time",
      description: "Migrated a legacy WordPress site to a headless architecture, passing all Core Web Vitals with flying colors.",
    },
  ],
  benefitsHeadline: "Why tech founders choose Meta Toppers.",
  benefits: [
    {
      title: "We Speak Your Language",
      description: "We understand MRR, churn, CAC, and LTV. Our designs are built entirely around improving your core SaaS metrics."
    },
    {
      title: "Modern Tech Stacks",
      description: "We don't use clunky builders. We deploy enterprise-grade stacks (React, Next.js, Tailwind, Vercel) that your engineering team will actually respect."
    },
    {
      title: "Agile Delivery",
      description: "Tech moves fast. We work in rapid sprints to get your MVP or site redesign live in weeks, not months."
    }
  ],
  faqs: [
    {
      question: "Do you build the actual SaaS application or just the marketing site?",
      answer: "Both. While we specialize in high-converting marketing sites, our engineering team is fully equipped to build complex, scalable web applications and dashboards."
    },
    {
      question: "Can you migrate us from Webflow/WordPress to a custom stack?",
      answer: "Yes, this is one of our most popular services for scaling startups that have outgrown their initial visual builder."
    },
    {
      question: "How do you handle pricing page design?",
      answer: "Pricing pages are the highest-stakes real estate on a SaaS site. We use behavioral psychology and A/B testing frameworks to design pricing tiers that maximize ARPU (Average Revenue Per User)."
    }
  ]
};

export default industry;
