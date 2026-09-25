import { Zap } from "lucide-react";
import type { ServiceData } from "./types";

const service: ServiceData = {
  slug: "api-automation",
  variant: "technical",
  icon: Zap,
  label: "Engine 08",
  title: "API & Business Automation",
  shortDescription: "WhatsApp automation, API integrations, and custom workflow systems that eliminate repetitive manual tasks and scale your operations.",
  problem: "Your team is wasting hours every day on repetitive tasks — manually sending WhatsApp updates to clients, copying data between platforms, or sending the same follow-up messages over and over again.",
  agitation: "Every hour your team spends on a repetitive, automatable task is an hour they are not spending on high-value work that actually grows your business. You are paying human salaries to do work a machine could do in milliseconds.",
  solution: [
    "WhatsApp Business API automation for instant client communication",
    "Custom API integrations connecting all your business tools",
    "Automated workflow triggers that eliminate manual data entry",
  ],
  stat: "20hrs",
  statLabel: "saved per team member per week (avg.)",
  accent: "from-green-500 to-emerald-600",
  benefits: [
    { title: "WhatsApp Automation", desc: "Send order confirmations, appointment reminders, and follow-ups automatically via WhatsApp." },
    { title: "Zero Manual Data Entry", desc: "Data flows automatically between your tools — no copy-pasting, no errors, no delays." },
    { title: "24/7 Operations", desc: "Your automated systems work around the clock, even when your team is offline." }
  ],
  caseStudies: [
    { name: "CargoShip Logistics", result: "Automated 800+ WhatsApp delivery notifications daily, saving 4 hours of manual work." },
    { name: "PrimeCare Clinic", result: "Reduced appointment no-shows by 60% through automated WhatsApp reminders." }
  ],
  heroHeadline: "Automate the repetitive. Amplify the human.",
  heroSubheadline: "We build custom automation systems that handle your most time-consuming workflows—from WhatsApp customer communication to seamless API integrations between your business tools.",
  deliverables: [
    { title: "WhatsApp Business API Setup", description: "We onboard you to the official WhatsApp Business API and build automated message flows for order updates, appointment reminders, payment confirmations, and client onboarding." },
    { title: "Cross-Platform API Integrations", description: "We connect your CRM, payment gateway, e-commerce store, and any other tools so data flows automatically between them without any manual intervention." },
    { title: "Custom Workflow Automation", description: "Using Make (Integromat), Zapier, or custom-coded solutions, we map and automate your most repetitive internal processes end-to-end." },
    { title: "Chatbot Development", description: "We build intelligent WhatsApp and web chatbots that qualify leads, answer FAQs, and book appointments automatically—24 hours a day, 7 days a week." }
  ],
  processSteps: [
    { num: "01", title: "Workflow Audit", description: "We spend time with your team to identify which manual tasks are consuming the most time and have the highest potential for automation." },
    { num: "02", title: "Architecture Design", description: "We map the entire automation flow on a whiteboard—triggers, conditions, actions, and error handling—before writing a single line of code." },
    { num: "03", title: "Build & Integration", description: "We build the automation and connect all required APIs. We test every edge case rigorously before going live." },
    { num: "04", title: "Monitoring & Support", description: "We monitor the system post-launch and provide documentation so your team understands how it works and what to do if something needs updating." }
  ],
  founderNote: {
    name: "The Engineering Team",
    role: "Meta Toppers",
    quote: "Automation is not about replacing your team. It's about removing the soul-crushing, repetitive work that kills morale and wastes talent. When we automate your workflows, your team gets to focus on the creative, strategic, high-impact work that only humans can do."
  },
  faqs: [
    { question: "Is WhatsApp Business API legal and compliant?", answer: "Yes, absolutely. We onboard you through Meta's official WhatsApp Business API. It is 100% compliant and gives you access to features the standard WhatsApp Business app does not have, including broadcast messaging and full automation." },
    { question: "We use many different tools. Can you connect all of them?", answer: "Almost certainly, yes. We have experience integrating hundreds of platforms including Shopify, WooCommerce, Razorpay, Stripe, Google Sheets, Airtable, Calendly, and virtually any platform with an API." },
    { question: "What if our process changes after the automation is built?", answer: "No problem. We build systems that are modular and easy to update. We also offer monthly retainers to maintain and evolve your automations as your business grows." },
    { question: "Do we need a developer on our team to use these systems?", answer: "No. We build automations that run silently in the background. Your team just uses their normal tools and the automation handles everything behind the scenes." }
  ],
  heroImage: "/images/api-dashboard.jpg"
};

export default service;
