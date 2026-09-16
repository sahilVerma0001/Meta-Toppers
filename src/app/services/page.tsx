import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Three integrated engines that work together to turn your digital presence from a cost center into a revenue machine. Custom websites, local SEO, and paid ads.",
  openGraph: {
    images: [{ url: "/api/og?title=Our+Services", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?title=Our+Services"]
  }
};

export default function ServicesPage() {
  return <PageContent />;
}
