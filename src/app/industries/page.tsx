import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "We build specialized growth engines for Real Estate, Healthcare, Cafes, and B2B services. Predictable pipelines designed for your specific industry.",
};

export default function IndustriesPage() {
  return <PageContent />;
}
