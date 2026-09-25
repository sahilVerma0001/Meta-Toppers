import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services/index";
import PageContent from "./page-content";

type Props = {
  params: any;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Meta Toppers Services`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Meta Toppers`,
      description: service.shortDescription,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(service.title)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Meta Toppers`,
      description: service.shortDescription,
      images: [`/api/og?title=${encodeURIComponent(service.title)}`],
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceSlugPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <PageContent slug={slug} />;
}
