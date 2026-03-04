export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  featuredImage: string;
  date: string;
  readTime: string;
  category: string;
  accent: string;
  author: {
    name: string;
    role: string;
  };
};

export async function fetchBlogs(lang: string = "uz"): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `https://admin.innosoft-systems.uz/api/blogs?status=published&page=1&limit=9&lang=${lang}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) throw new Error("Failed to fetch blogs");
    const json = await res.json();
    return json.data.map((item: any) => ({
      id: item._id,
      title: item.title?.[lang] || "",
      excerpt: item.excerpt?.[lang] || "",
      content: item.content?.[lang] || "",
      slug: item.slug?.[lang] || "",
      featuredImage: item.featuredImage
        ? `https://admin.innosoft-systems.uz${item.featuredImage}`
        : "",
      date: new Date(item.publishedAt || new Date()).toLocaleDateString(
        "uz-UZ",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      ),
      readTime: `${item.readingTime || 1} daqiqa`,
      category: item.tags?.[lang]?.[0] || "Maqolalar",
      accent: "#2b68c9",
      author: {
        name: item.author?.name || "Innosoft Team",
        role: "Muallif",
      },
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function fetchBlogBySlug(
  slug: string,
  lang: string = "uz",
): Promise<BlogPost | null> {
  const blogs = await fetchBlogs(lang);
  return blogs.find((b) => b.slug === slug || b.id === slug) || null;
}
