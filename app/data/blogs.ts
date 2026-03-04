export const dynamic = "force-dynamic";
export const revalidate = 0;

export type BlogPost = {
  id: string;
  title: string;
  description: string;
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

function getAdminBaseUrl(): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_ADMIN_BASE_URL ||
    process.env.ADMIN_BASE_URL ||
    "https://admin.innosoft-systems.uz";

  return baseUrl.replace(/\/+$/, "");
}

function getFetchBaseUrl(): string {
  const baseUrl =
    process.env.INTERNAL_FETCH_URL ||
    process.env.ADMIN_BASE_URL ||
    "https://admin.innosoft-systems.uz";

  return baseUrl.replace(/\/+$/, "");
}

type AdminBlog = {
  _id: string;
  title?: Record<string, string>;
  description?: Record<string, string>;
  excerpt?: Record<string, string>;
  content?: Record<string, string>;
  slug?: Record<string, string>;
  featuredImage?: string;
  publishedAt?: string;
  readingTime?: number;
  tags?: Record<string, string[]>;
  author?: {
    name?: string;
  };
};

function mapBlog(item: AdminBlog, lang: string, baseUrl: string): BlogPost {
  const description = item.description?.[lang] || item.excerpt?.[lang] || "";
  const featuredImage = item.featuredImage
    ? item.featuredImage.startsWith("http")
      ? item.featuredImage
      : `${baseUrl}${item.featuredImage}`
    : "";

  return {
    id: item._id,
    title: item.title?.[lang] || "",
    description,
    excerpt: description,
    content: item.content?.[lang] || "",
    slug: item.slug?.[lang] || "",
    featuredImage,
    date: new Date(item.publishedAt || new Date()).toLocaleDateString("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    readTime: `${item.readingTime || 1} daqiqa`,
    category: item.tags?.[lang]?.[0] || "Maqolalar",
    accent: "#2b68c9",
    author: {
      name: item.author?.name || "Innosoft Team",
      role: "Muallif",
    },
  };
}

export async function fetchBlogs(lang: string = "uz"): Promise<BlogPost[]> {
  try {
    const adminBaseUrl = getAdminBaseUrl();
    const fetchBaseUrl = getFetchBaseUrl();

    const params = new URLSearchParams({
      status: "published",
      page: "1",
      limit: "9",
      lang,
    });

    const res = await fetch(`${fetchBaseUrl}/api/blogs?${params.toString()}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch blogs");
    const json = await res.json();
    return (json.data as AdminBlog[]).map((item) =>
      mapBlog(item, lang, adminBaseUrl),
    );
  } catch (err) {
    console.error("fetchBlogs API error:", err);
    return [];
  }
}

export async function fetchBlogBySlug(
  slug: string,
  lang: string = "uz",
): Promise<BlogPost | null> {
  try {
    const adminBaseUrl = getAdminBaseUrl();
    const fetchBaseUrl = getFetchBaseUrl();

    const params = new URLSearchParams({
      status: "published",
      slug,
      lang,
    });

    const res = await fetch(`${fetchBaseUrl}/api/blogs?${params.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog by slug");
    }

    const json = await res.json();
    const post = (json.data as AdminBlog[])[0];

    if (post) {
      return mapBlog(post, lang, adminBaseUrl);
    }

    const blogs = await fetchBlogs(lang);
    return blogs.find((b) => b.id === slug) || null;
  } catch (err) {
    console.error("fetchBlogBySlug API error:", err);
    return null;
  }
}
