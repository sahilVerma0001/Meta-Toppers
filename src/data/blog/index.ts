import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "./types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        category: data.category || "Marketing",
        author: data.author || "Meta Toppers Team",
        authorRole: data.authorRole || "Content Team",
        publishedAt: data.publishedAt || "",
        readingTime: data.readingTime || "5 min read",
        featuredImage: data.featuredImage || "/images/blog-default.jpg",
        tags: data.tags || [],
        relatedServices: data.relatedServices || [],
      } as BlogPost;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return posts;
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      category: data.category || "Marketing",
      author: data.author || "Meta Toppers Team",
      authorRole: data.authorRole || "Content Team",
      publishedAt: data.publishedAt || "",
      readingTime: data.readingTime || "5 min read",
      featuredImage: data.featuredImage || "/images/blog-default.jpg",
      tags: data.tags || [],
      relatedServices: data.relatedServices || [],
    } as BlogPost,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}
