import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team behind Meta Toppers. We are a small, elite group of strategists, designers, and developers dedicated to generating real revenue for our clients.",
  openGraph: {
    images: [{ url: "/api/og?title=About+Us", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?title=About+Us"]
  }
};

export default function AboutPage() {
  return <PageContent />;
}
