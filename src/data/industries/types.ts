import type { LucideIcon } from "lucide-react";

export type IndustryData = {
  slug: string;
  title: string;
  layout: "real-estate" | "healthcare" | "saas" | "finance";
  icon: LucideIcon;
  heroHeadline: string;
  heroDescription: string;
  marketImpact: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
  };
  solutionsHeadline: string;
  services: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  caseStudiesHeadline: string;
  caseStudies: {
    metric: string;
    label: string;
    description: string;
  }[];
  benefitsHeadline: string;
  benefits: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};
