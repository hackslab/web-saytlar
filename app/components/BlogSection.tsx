"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import SpotlightCard from "../reactbits/SpotlightCard";
import { blogs } from "../data/blogs";

const BlogSection = () => {
  const latestBlogs = blogs.slice(0, 6);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector<HTMLElement>("[data-blog-card]");
    const cardWidth = card?.offsetWidth ?? 320;
    const scrollAmount = cardWidth + 24;

    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="blog" className="py-24 bg-background relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#2b68c9] font-mono mb-4 block tracking-wider"
            >
              BLOG
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              So'nggi <span className="gradient-text">maqolalar</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Biznesingizni tezroq o'stirish uchun amaliy tavsiyalar va real
              tajribalar.
            </motion.p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Oldingi maqolalar"
              onClick={() => scrollByAmount("prev")}
              className="cursor-target h-10 w-10 rounded-full border border-border text-muted-foreground transition-colors hover:border-[#2b68c9] hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Keyingi maqolalar"
              onClick={() => scrollByAmount("next")}
              className="cursor-target h-10 w-10 rounded-full border border-border text-muted-foreground transition-colors hover:border-[#2b68c9] hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {latestBlogs.map((post, index) => (
            <motion.div
              key={post.id}
              data-blog-card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-[260px] sm:w-[320px] lg:w-[360px] shrink-0 snap-start"
            >
              <SpotlightCard
                className="cursor-target h-full rounded-[12px] border border-border bg-card p-6 transition-all duration-300 hover:border-[#2b68c9]/50"
                spotlightColor="rgba(43, 104, 201, 0.15)"
              >
                <div className="relative mb-5 h-36 w-full overflow-hidden rounded-[10px] border border-white/10">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${post.accent}55, rgba(0, 0, 0, 0.9))`,
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_60%)]" />
                  <div className="relative z-10 h-full p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs font-mono text-white/70">
                      <span>{post.category.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    <span className="text-white/70">{post.author.name}</span>
                    <span className="mx-2 text-white/30">/</span>
                    <span>{post.author.role}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="cursor-target text-sm font-medium text-[#2b68c9] hover:text-white transition-colors"
                  >
                    Batafsil
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
