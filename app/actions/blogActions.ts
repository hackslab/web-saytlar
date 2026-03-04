"use server";

import { fetchBlogs, fetchBlogBySlug } from "../data/blogs";

export async function getBlogsAction(lang: string = "uz") {
  return await fetchBlogs(lang);
}

export async function getBlogBySlugAction(slug: string, lang: string = "uz") {
  return await fetchBlogBySlug(slug, lang);
}
