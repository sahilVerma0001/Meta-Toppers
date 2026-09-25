import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { getAllPosts } from "@/data/blog";
import { BlogListContent } from "@/components/blog/blog-list-content";

export const metadata: Metadata = {
  title: "Blog | Meta Toppers — Growth Strategies & Digital Marketing Insights",
  description:
    "Actionable growth strategies, SEO guides, web design tips, and expert marketing insights from the Meta Toppers team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <BlogListContent posts={posts} />
      </main>
    </SiteShell>
  );
}
