import { Orbit, PanelsTopLeft, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Web Design & Development",
    copy: "We build fast, secure, and immersive websites engineered to convert your visitors into high-value clients.",
    icon: PanelsTopLeft,
  },
  {
    title: "Digital Marketing & SEO",
    copy: "Data-driven campaigns and search optimization that put your brand in front of the right audience at the right time.",
    icon: Orbit,
  },
  {
    title: "Lead Generation",
    copy: "From social ads to lifecycle funnels, we design tailored systems that create predictable pipeline momentum.",
    icon: Sparkles,
  },
];

export const steps = [
  {
    title: "01. Strategy & UX Planning",
    copy: "We map out user journeys, identify conversion bottlenecks, and build a digital strategy designed to hit your goals.",
  },
  {
    title: "02. Design & Development",
    copy: "Our team crafts premium, high-performing websites and digital assets that elevate your brand's market authority.",
  },
  {
    title: "03. Marketing & Scaling",
    copy: "We launch targeted campaigns and continuously optimize for SEO and performance to drive compounding growth.",
  },
];

export const metrics = [
  { label: "average lift in qualified pipeline", value: "+37%" },
  { label: "time to launch high-conviction campaigns", value: "3 weeks" },
  { label: "client retention across flagship engagements", value: "94%" },
];

export const heroTags = ['SaaS', 'Professional services', 'Fintech', 'Consumer brands'];

export const features = [
  { title: "Custom Web Solutions", copy: "We don't use templates. Every website is custom-engineered for your specific audience and goals." },
  { title: "Measurable ROI", copy: "We connect digital decisions to commercial outcomes. Every campaign is built to drive actual revenue." },
  { title: "Brand Authority", copy: "We design premium digital experiences that immediately establish trust and credibility in your market." },
  { title: "End-to-End Execution", copy: "From the first line of code to the final marketing campaign, we handle the entire growth process." },
];

export const topics = [
  { title: "Services", copy: "Growth strategy, digital positioning, and conversion-focused execution for ambitious companies." },
  { title: "Industries", copy: "Tailored thinking for companies that need relevance, trust, and sharper market positioning." },
  { title: "Case Studies", copy: "Proof-led stories that show how growth systems turn strategy into measurable commercial results." },
  { title: "Portfolio", copy: "A premium showcase of digital experiences, brand systems, and high-performance launches." },
  { title: "Blogs", copy: "Thoughtful insights into growth, positioning, marketing, and the realities of scaling intelligently." },
  { title: "About", copy: "A clear view of the team, the philosophy, and the way Meta Toppers approaches growth." },
  { title: "Careers", copy: "A place for exceptional talent to join a studio focused on ideas, execution, and craft." },
  { title: "Contact", copy: "Direct access to start a conversation around positioning, demand, or your next growth chapter." },
  { title: "Growth Consulting", copy: "A strategic starting point for business owners who want sharper thinking and a stronger path forward." },
];

export const caseStudies = [
  { name: "Aurelia Health", result: "Repositioned the brand and doubled demo conversion in 6 weeks." },
  { name: "Northfield Capital", result: "Built a trust-centered web experience that accelerated qualified inbound meetings." },
  { name: "LumenOS", result: "Launched a premium demand engine that elevated both brand value and pipeline quality." },
];
