import blogsData from "./blogs.json";

export type BlogSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readTime: string;
  category: string;
  accent: string;
  author: {
    name: string;
    role: string;
  };
  highlights: string[];
  sections: BlogSection[];
};

export const blogs = blogsData as BlogPost[];
