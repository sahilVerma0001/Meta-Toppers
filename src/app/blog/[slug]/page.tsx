import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiteShell } from "@/components/site-shell";
import { CTASection } from "@/components/home/cta-section";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/data/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return {};

  return {
    title: `${post.meta.title} | Meta Toppers Blog`,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: "article",
      publishedTime: post.meta.publishedAt,
      authors: [post.meta.author],
      images: [{ url: post.meta.featuredImage }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.meta.slug)
    .slice(0, 3);

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta.title,
    description: post.meta.excerpt,
    image: [post.meta.featuredImage],
    author: {
      "@type": "Organization",
      name: post.meta.author,
    },
    datePublished: post.meta.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "Meta Toppers",
      url: "https://metatoppers.com",
    },
  };

  return (
    <SiteShell>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0b6fa8] hover:underline mb-8"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <span className="inline-block rounded-full bg-[#e0f2fe] px-3 py-1 text-xs font-semibold text-[#0b6fa8] mb-4">
              {post.meta.category}
            </span>
            <h1 className="text-3xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl leading-tight">
              {post.meta.title}
            </h1>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              {post.meta.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-zinc-500 border-t border-zinc-100 pt-6">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.meta.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.meta.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.meta.readingTime}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full aspect-[2/1] mb-12 rounded-2xl overflow-hidden bg-zinc-100 ring-1 ring-zinc-200">
            <Image
              src={post.meta.featuredImage}
              alt={post.meta.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body */}
          <article className="prose prose-zinc prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-zinc-600 prose-strong:text-zinc-900 prose-a:text-[#0b6fa8] prose-a:no-underline hover:prose-a:underline prose-li:text-zinc-600 prose-table:text-sm">
            <MDXRemote source={post.content} />
          </article>

          {/* Tags */}
          {post.meta.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-zinc-100 pt-8">
              <Tag size={14} className="text-zinc-400 mt-1" />
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 border-t border-zinc-100 pt-16">
            <h2 className="text-2xl font-semibold text-zinc-950 mb-8">
              More articles you might like
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-xs font-medium text-[#0b6fa8]">
                    {related.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-950 group-hover:text-[#0b6fa8] transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <CTASection />
    </SiteShell>
  );
}
