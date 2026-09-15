import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team behind Meta Toppers. We are a small, elite group of strategists, designers, and developers dedicated to generating real revenue for our clients.",
};

export default function AboutPage() {
  return <PageContent />;
}
