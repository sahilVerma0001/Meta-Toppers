export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readingTime: string;
  featuredImage: string;
  tags: string[];
  relatedServices: string[];
};

export const BLOG_CATEGORIES = [
  "All",
  "SEO",
  "Web Design",
  "Marketing",
  "CRM",
  "Case Studies",
] as const;
