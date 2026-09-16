import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "We build specialized growth engines for Real Estate, Healthcare, Cafes, and B2B services. Predictable pipelines designed for your specific industry.",
  openGraph: {
    images: [{ url: "/api/og?title=Industries+We+Serve", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?title=Industries+We+Serve"]
  }
};

export default function IndustriesPage() {
  return <PageContent />;
}
