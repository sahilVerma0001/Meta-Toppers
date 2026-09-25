import { Globe, Users, Building, Home } from "lucide-react";
import type { IndustryData } from "./types";

const industry: IndustryData = {
  slug: "real-estate",
  title: "Real Estate",
  layout: "real-estate",
  icon: Home,
  heroHeadline: "Get More Qualified Leads for Your Real Estate Business.",
  heroDescription: "We build premium websites, property portals, and lead generation systems that help agencies, brokerages, and developers close more deals — faster.",
  marketImpact: {
    label1: "Average ROI on ad spend",
    value1: "340%",
    label2: "Client retention rate",
    value2: "96%",
  },
  solutionsHeadline: "How we drive growth in property markets.",
  services: [
    {
      title: "Property Web Platforms",
      description: "Immersive, high-performance websites that showcase properties and drive digital inquiries.",
      icon: Globe,
    },
    {
      title: "Lead Generation Systems",
      description: "Targeted digital marketing campaigns designed to capture high-intent buyers and sellers.",
      icon: Users,
    },
    {
      title: "Real Estate Branding",
      description: "Positioning and brand identity that builds immediate trust in a highly competitive market.",
      icon: Building,
    },
  ],
  caseStudiesHeadline: "Proven results.",
  caseStudies: [
    {
      metric: "+60%",
      label: "Increase in qualified lead volume",
      description: "Rebuilt the digital acquisition funnel for a luxury brokerage, reducing cost-per-lead by 40%.",
    },
    {
      metric: "85k+",
      label: "Monthly portal visitors",
      description: "Developed a custom property listing platform with advanced filtering and CRM integration.",
    },
    {
      metric: "8.4%",
      label: "Website conversion rate",
      description: "Optimized landing pages for pre-construction developments to maximize early registrations.",
    },
  ],
  benefitsHeadline: "Why top brokerages partner with us.",
  benefits: [
    {
      title: "Data-Driven Targeting",
      description: "We don't guess. We use advanced analytics to target high-net-worth individuals and serious buyers actively searching in your market."
    },
    {
      title: "Premium Brand Positioning",
      description: "Your digital presence will look as expensive as the properties you sell. We elevate your brand to the top tier of your local market."
    },
    {
      title: "End-to-End CRM Integration",
      description: "Every lead generated flows directly into your CRM with full tracking data, so your agents know exactly what the prospect is looking for."
    }
  ],
  faqs: [
    {
      question: "Do you work with individual agents or just brokerages?",
      answer: "We work with top-producing teams, independent brokerages, and developers. If you have the budget to scale and the capacity to handle more volume, we can help."
    },
    {
      question: "How quickly can we launch a property marketing campaign?",
      answer: "For specific developments or high-end listings, we can launch targeted campaigns in under 7 days. Full brokerage website rebuilds take 4-6 weeks."
    },
    {
      question: "Do you provide the CRM systems?",
      answer: "We can integrate with your existing CRM (like Follow Up Boss, HubSpot, or Salesforce) or build a custom GoHighLevel system specifically tailored for your real estate pipeline."
    }
  ]
};

export default industry;
