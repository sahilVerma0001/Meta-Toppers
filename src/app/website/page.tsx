import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Our Work & Case Studies",
  description: "Real businesses. Real revenue. Read the case studies of how we partnered with founders to engineer predictable growth and take back control of lead generation.",
};

export default function PortfolioPage() {
  return <PageContent />;
}
