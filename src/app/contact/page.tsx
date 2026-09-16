import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to stop losing clients? Apply for a free growth audit with Meta Toppers and find out where you're leaving money on the table.",
  openGraph: {
    images: [{ url: "/api/og?title=Contact+Us", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?title=Contact+Us"]
  }
};

export default function ContactPage() {
  return <PageContent />;
}
