import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to stop losing clients? Apply for a free growth audit with Meta Toppers and find out where you're leaving money on the table.",
};

export default function ContactPage() {
  return <PageContent />;
}
