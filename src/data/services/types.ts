import type { LucideIcon } from "lucide-react";

export type ServiceVariant = "growth" | "technical" | "creative";

export type ServiceData = {
  slug: string;
  variant: ServiceVariant;
  icon: LucideIcon;
  label: string;
  title: string;
  shortDescription: string;
  problem: string;
  agitation: string;
  solution: string[];
  stat: string;
  statLabel: string;
  accent: string;
  benefits: { title: string; desc: string }[];
  caseStudies: { name: string; result: string }[];
  heroHeadline: string;
  heroSubheadline: string;
  deliverables: { title: string; description: string }[];
  processSteps: { num: string; title: string; description: string }[];
  founderNote: { name: string; role: string; quote: string };
  faqs: { question: string; answer: string }[];
  heroImage?: string;
};
