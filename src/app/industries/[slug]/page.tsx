import { notFound } from "next/navigation";
import { industriesData } from "@/data/industries";
import { RealEstateLayout } from "@/components/industry-layouts/real-estate-layout";
import { HealthcareLayout } from "@/components/industry-layouts/healthcare-layout";
import { SaaSLayout } from "@/components/industry-layouts/saas-layout";
import { FinanceLayout } from "@/components/industry-layouts/finance-layout";

export function generateStaticParams() {
  return industriesData.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industriesData.find((i) => i.slug === resolvedParams.slug);
  if (!industry) return {};

  return {
    title: `${industry.title} Marketing & Web Design | Meta Toppers`,
    description: industry.heroDescription,
  };
}

const layouts = {
  "real-estate": RealEstateLayout,
  healthcare: HealthcareLayout,
  saas: SaaSLayout,
  finance: FinanceLayout,
};

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industriesData.find((i) => i.slug === resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  const LayoutComponent = layouts[industry.layout] || RealEstateLayout;

  return <LayoutComponent industry={industry} />;
}
