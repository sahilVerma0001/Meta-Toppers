"use client";

import { GrowthLayout } from "@/components/service-layouts/growth-layout";
import { TechnicalLayout } from "@/components/service-layouts/technical-layout";
import { CreativeLayout } from "@/components/service-layouts/creative-layout";
import { servicesData } from "@/data/services/index";

export default function ServicePageContent({ slug }: { slug: string }) {
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return null;

  switch (service.variant) {
    case "growth":
      return <GrowthLayout service={service} />;
    case "technical":
      return <TechnicalLayout service={service} />;
    case "creative":
      return <CreativeLayout service={service} />;
    default:
      return <TechnicalLayout service={service} />;
  }
}
