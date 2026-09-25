"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/data/blog/types";
import { BLOG_CATEGORIES } from "@/data/blog/types";

import Image from "next/image";

export function BlogListContent({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase mb-4">
          Insights & Strategy
        </p>
        <h1 className="text-4xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-5xl">
          The Meta Toppers Blog
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Actionable growth strategies, industry insights, and expert guides to
          help your business dominate online.
        </p>
      </section>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-[#0b6fa8] text-white shadow-sm"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <p className="text-center text-zinc-500 py-20">
          No posts in this category yet. Check back soon!
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-[24px] border border-zinc-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                <Image 
                  src={post.featuredImage} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-[#0b6fa8] shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h2 className="text-lg font-semibold text-zinc-950 group-hover:text-[#0b6fa8] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readingTime}
                  </span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#0b6fa8] group-hover:gap-2 transition-all">
                  Read article <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
