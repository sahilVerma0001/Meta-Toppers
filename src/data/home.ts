import { Orbit, PanelsTopLeft, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Websites That Convert",
    copy: "We build fast, stunning websites engineered to turn your visitors into paying clients — not just impress them.",
    icon: PanelsTopLeft,
  },
  {
    title: "SEO & Paid Ads That Drive Revenue",
    copy: "Data-driven campaigns and search optimization that put your brand in front of buyers who are ready to act.",
    icon: Orbit,
  },
  {
    title: "Lead Generation Systems",
    copy: "From social ads to automated funnels, we build tailored systems that deliver qualified leads on autopilot.",
    icon: Sparkles,
  },
];

export const steps = [
  {
    title: "01. Research & Strategy",
    copy: "We audit your current digital presence, study your competitors, and map a clear plan to outperform them.",
  },
  {
    title: "02. Design & Build",
    copy: "Our team designs and develops a premium website and marketing assets — built to convert from day one.",
  },
  {
    title: "03. Launch & Scale",
    copy: "We launch targeted campaigns, track every metric, and continuously optimize to compound your results month over month.",
  },
];

export const metrics = [
  { label: "average increase in qualified leads", value: "+146%" },
  { label: "from kickoff to live website", value: "21 days" },
  { label: "of clients stay beyond year one", value: "96%" },
];

export const heroTags = ['SaaS', 'Professional services', 'Fintech', 'Consumer brands'];

export const features = [
  { title: "No Templates, Ever", copy: "Every website is custom-designed for your specific audience, goals, and brand — because cookie-cutter doesn\u2019t convert." },
  { title: "Every Dollar Tracked", copy: "We connect every campaign to real revenue. You\u2019ll always know exactly what\u2019s working and what your ROI is." },
  { title: "Look Like the Market Leader", copy: "We design digital experiences that make your brand look like the most trusted, established player in your space." },
  { title: "One Team, Zero Handoffs", copy: "Strategy, design, development, and marketing — all handled by one team. No freelancer roulette, no communication gaps." },
];

export const topics = [
  { title: "Services", copy: "Web design, SEO, paid ads, and lead generation — everything you need to grow online, under one roof." },
  { title: "Industries", copy: "We tailor our approach for Real Estate, SaaS, Fintech, Professional Services, and Consumer Brands." },
  { title: "Case Studies", copy: "Real results from real clients — see exactly how we helped businesses like yours grow revenue and leads." },
  { title: "Portfolio", copy: "Browse our best work: high-converting websites, brand systems, and digital experiences we\u2019ve launched." },
  { title: "Blogs", copy: "Practical insights on web design, marketing, SEO, and growing a business in the digital age." },
  { title: "About", copy: "Meet the team behind Meta Toppers — who we are, how we work, and why clients trust us." },
  { title: "Careers", copy: "Join a team that values craft, clear thinking, and building things that actually move the needle." },
  { title: "Contact", copy: "Ready to talk? Book a free growth audit and let\u2019s figure out how to get you more clients." },
  { title: "Growth Consulting", copy: "Not sure where to start? We\u2019ll audit your digital presence and give you a clear roadmap — free." },
];

export const caseStudies = [
  { name: "Elevate Luxury Realty", result: "Built a custom property portal that increased high-net-worth lead volume by 60% in 8 weeks." },
  { name: "Chen & Associates", result: "Redesigned their website and local SEO strategy — doubled organic seller leads within 90 days." },
  { name: "Paramount Developments", result: "Designed a high-converting landing page ecosystem that sold out Phase 1 of a $50M development." },
];
