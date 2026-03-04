import Link from "next/link";
import { notFound } from "next/navigation";
import SpotlightCard from "../../reactbits/SpotlightCard";
import { fetchBlogs, fetchBlogBySlug } from "../../data/blogs";
import "./blog.css";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  return blogs.map((post) => ({ slug: post.slug || post.id }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await fetchBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog | Web-Saytlar.uz",
    };
  }

  return {
    title: `${post.title} | Web-Saytlar.uz`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await fetchBlogBySlug(slug);
  const allBlogs = await fetchBlogs();

  if (!post) {
    notFound();
  }

  const moreBlogs = allBlogs.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="/#blog"
          className="cursor-target inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#2b68c9] transition-colors"
        >
          <span>Maqolalarga qaytish</span>
        </Link>

        <div className="max-w-3xl mt-6 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#2b68c9] tracking-wider">
            <span>{post.category.toUpperCase()}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">{post.title}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{post.author.name}</span>
            <span className="text-white/30">/</span>
            <span>{post.author.role}</span>
          </div>
        </div>

        <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-[#2b68c9] to-transparent" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          <article className="space-y-6 max-w-none w-full">
            {post.featuredImage && (
              <div className="flex justify-center w-full mb-8">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full max-w-[500px] h-auto rounded-[12px] object-cover"
                />
              </div>
            )}
            <div
              className="blog-content text-base leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <aside className="space-y-6">
            <div className="rounded-[12px] border border-border bg-card p-6">
              <h3 className="text-lg font-bold mb-2">Keyingi qadam</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Sayt yoki bot kerakmi? Biz sizga tez va aniq yechim taklif
                qilamiz.
              </p>
              <Link
                href="/#contact"
                className="cursor-target inline-flex items-center justify-center w-full px-6 py-2 rounded-[8px] bg-[#2b68c9] text-white font-medium hover:bg-white hover:text-[#2b68c9] transition-colors"
              >
                Bepul maslahat olish
              </Link>
            </div>

            {moreBlogs.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Boshqa maqolalar</h3>
                <div className="space-y-4">
                  {moreBlogs.map((b) => (
                    <Link
                      key={b.id}
                      href={`/blog/${b.slug || b.id}`}
                      className="cursor-target group flex items-start gap-4 rounded-[12px] border border-border bg-card p-4 transition-all duration-300 hover:border-[#2b68c9]/50"
                    >
                      {b.featuredImage && (
                        <img
                          src={b.featuredImage}
                          alt={b.title}
                          className="w-20 h-20 rounded-[8px] object-cover shrink-0"
                        />
                      )}
                      <div className="flex-1">
                        <div className="text-xs font-mono text-[#2b68c9] mb-1">
                          {b.category.toUpperCase()}
                        </div>
                        <h4 className="font-bold text-sm mb-1 group-hover:text-[#2b68c9] transition-colors line-clamp-2 leading-tight">
                          {b.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {b.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
