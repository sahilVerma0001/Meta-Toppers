import { Database } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "crm-solutions",
  variant: "technical",
  icon: Database,
  label: "Engine 07",
  title: "CRM & Sales Pipeline",
  shortDescription: "Custom CRM setups and sales pipeline automation that give you complete visibility and control over every deal.",
  problem: "Your leads are scattered across spreadsheets, WhatsApp chats, and email threads. You have no idea where any deal stands, which follow-ups are overdue, or why potential clients are going cold.",
  agitation: "A disorganized sales pipeline is a revenue leak you can't see. Deals are slipping through the cracks every single day—not because you have a bad product, but because no one is following up at the right time with the right message.",
  solution: [
    "Full CRM setup and configuration tailored to your sales process",
    "Automated follow-up sequences so no lead goes cold",
    "Real-time pipeline dashboards so you always know your revenue forecast",
  ],
  stat: "35%",
  statLabel: "avg. increase in deal close rate",
  accent: "from-sky-600 to-cyan-700",
  benefits: [
    { title: "Total Pipeline Visibility", desc: "See exactly where every deal stands at every moment, from first contact to closed-won." },
    { title: "Automated Follow-Ups", desc: "Never let a warm lead go cold. Automated sequences keep you top-of-mind without manual effort." },
    { title: "Revenue Forecasting", desc: "Know your projected revenue for the next 30, 60, and 90 days based on live pipeline data." }
  ],
  caseStudies: [
    { name: "Sterling Properties", result: "Recovered 18 stalled deals within 2 weeks of CRM implementation." },
    { name: "Apex Consulting", result: "Increased deal close rate by 41% through automated nurture sequences." }
  ],
  heroHeadline: "Stop losing deals you already have.",
  heroSubheadline: "We build and configure your entire CRM system so every lead is tracked, every follow-up is automated, and no deal ever slips through the cracks again.",
  deliverables: [
    { title: "CRM Configuration & Setup", description: "We configure your CRM (HubSpot, GoHighLevel, Zoho, etc.) to mirror your exact sales process—stages, deal values, contact properties, and team assignments." },
    { title: "Pipeline Architecture", description: "We map out your complete sales journey and build a visual pipeline that gives your entire team instant clarity on every deal's status." },
    { title: "Automated Nurture Sequences", description: "We build email and SMS follow-up sequences triggered by deal stage changes, ensuring no lead ever goes more than 48 hours without a touchpoint." },
    { title: "Reporting & Dashboards", description: "We build custom dashboards showing your close rate, average deal size, and pipeline velocity so you make decisions based on data, not gut feel." }
  ],
  processSteps: [
    { num: "01", title: "Sales Process Mapping", description: "We interview your team to document exactly how a deal moves from first contact to closed-won, including every objection and bottleneck." },
    { num: "02", title: "CRM Build & Configuration", description: "We build out every stage, field, and workflow in your chosen CRM platform. We handle the technical setup completely." },
    { num: "03", title: "Data Migration & Cleanup", description: "We migrate your existing contacts from spreadsheets and import them cleanly into the new system." },
    { num: "04", title: "Team Training & Handover", description: "We run a live training session with your team and provide a recorded walkthrough so adoption is seamless." }
  ],
  founderNote: {
    name: "Kartik Sharma",
    role: "Founder, Meta Toppers",
    quote: "Most businesses have a lead generation problem. But when we dig deeper, we often find the real issue is a follow-up problem. Leads exist; they just aren't being nurtured. A properly configured CRM doesn't just organize your contacts—it turns your sales team into a predictable revenue machine."
  },
  faqs: [
    { question: "Which CRM platforms do you work with?", answer: "We are platform agnostic. We work with HubSpot, GoHighLevel, Zoho CRM, Pipedrive, and Monday CRM. We recommend the right platform based on your team size, budget, and complexity of your sales process." },
    { question: "We already have a CRM but don't use it. Can you fix it?", answer: "Absolutely. This is actually one of the most common projects we take on. We audit your existing setup, clean up the data, rebuild the pipeline stages to match how you actually sell, and train your team." },
    { question: "How long does a CRM implementation take?", answer: "A standard implementation takes 2 to 3 weeks. This includes setup, data migration, automation builds, and team training." },
    { question: "Can you integrate the CRM with our other tools?", answer: "Yes. We connect your CRM to your website contact forms, WhatsApp, email accounts, calendar, and any other tools you use through native integrations or tools like Zapier and Make." }
  ],
  heroImage: "/images/crm-dashboard.jpg"
};

export default service;
