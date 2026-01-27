import Link from "next/link";
import { notFound } from "next/navigation";
import SpotlightCard from "../../reactbits/SpotlightCard";
import { blogs } from "../../data/blogs";

type BlogPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.id }));
}

export function generateMetadata({ params }: BlogPageProps) {
  const post = blogs.find((blog) => blog.id === params.slug);

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

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogs.find((blog) => blog.id === params.slug);

  if (!post) {
    notFound();
  }

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
          <article className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-muted-foreground text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="space-y-2 text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2b68c9]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          <aside className="space-y-6">
            <SpotlightCard
              className="rounded-[12px] border border-border bg-card p-6"
              spotlightColor="rgba(43, 104, 201, 0.2)"
            >
              <h3 className="text-lg font-bold mb-4">Qisqa xulosa</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {post.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2b68c9]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>

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
          </aside>
        </div>
      </div>
    </main>
  );
}
