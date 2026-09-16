import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Our Work & Case Studies",
  description: "Real businesses. Real revenue. Read the case studies of how we partnered with founders to engineer predictable growth and take back control of lead generation.",
  openGraph: {
    images: [{ url: "/api/og?title=Our+Work+%26+Case+Studies", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?title=Our+Work+%26+Case+Studies"]
  }
};

export default function PortfolioPage() {
  return <PageContent />;
}
