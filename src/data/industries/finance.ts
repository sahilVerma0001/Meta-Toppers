import { Briefcase, Landmark, TrendingUp, ShieldCheck } from "lucide-react";
import type { IndustryData } from "./types";

const industry: IndustryData = {
  slug: "finance",
  title: "Financial Services",
  layout: "finance",
  icon: Landmark,
  heroHeadline: "Trust-Building Digital Experiences for the Financial Sector.",
  heroDescription: "We design premium, highly secure websites and client acquisition systems for wealth managers, fintech startups, accountants, and institutional firms.",
  marketImpact: {
    label1: "Increase in lead quality",
    value1: "85%",
    label2: "Client onboarding speed",
    value2: "3x Faster",
  },
  solutionsHeadline: "How we elevate financial brands.",
  services: [
    {
      title: "Premium Brand Identity",
      description: "Sophisticated, high-end visual design that immediately establishes trust and authority with high-net-worth clients.",
      icon: Briefcase,
    },
    {
      title: "Secure Client Portals",
      description: "Encrypted, custom-built dashboards for seamless document sharing and portfolio tracking.",
      icon: ShieldCheck,
    },
    {
      title: "Lead Nurturing Systems",
      description: "Automated email sequences and CRM workflows that educate prospects and slowly build trust over time.",
      icon: TrendingUp,
    },
  ],
  caseStudiesHeadline: "Measurable financial growth.",
  caseStudies: [
    {
      metric: "$45M+",
      label: "In new assets under management",
      description: "Generated through a highly targeted LinkedIn and Google Ads campaign for a boutique wealth management firm.",
    },
    {
      metric: "120%",
      label: "Increase in consultation requests",
      description: "Redesigned a CPA firm's website with clear, niche-specific service funnels and automated booking.",
    },
    {
      metric: "Zero",
      label: "Security breaches",
      description: "Deployed enterprise-grade security protocols across all client applications to ensure absolute data safety.",
    },
  ],
  benefitsHeadline: "Why finance professionals partner with us.",
  benefits: [
    {
      title: "Uncompromising Security",
      description: "We employ banking-level encryption, regular penetration testing, and strict access controls on all digital products we build."
    },
    {
      title: "Compliance Ready",
      description: "We understand the strict advertising regulations in the financial sector (FINRA, SEC guidelines) and build marketing systems that keep you compliant."
    },
    {
      title: "Authority Positioning",
      description: "We don't use generic templates. We build bespoke digital experiences that position your firm as the undeniable leader in your specific financial niche."
    }
  ],
  faqs: [
    {
      question: "Are you familiar with financial compliance guidelines?",
      answer: "Yes. We work closely with your compliance officers to ensure all website copy, disclosures, and marketing campaigns adhere to FINRA, SEC, or local regulatory standards."
    },
    {
      question: "Can you integrate with our financial CRM software?",
      answer: "Absolutely. We have integrated with specialized tools like Wealthbox, Redtail, Salesforce Financial Services Cloud, and more."
    },
    {
      question: "Do you offer content marketing for financial firms?",
      answer: "Yes, we produce high-level, authoritative content (whitepapers, market updates, SEO blogs) designed specifically for sophisticated investors and corporate clients."
    }
  ]
};

export default industry;
