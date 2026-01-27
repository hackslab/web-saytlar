"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SpotlightCard from "../reactbits/SpotlightCard";
import { blogs } from "../data/blogs";

const BlogSection = () => {
  const latestBlogs = blogs.slice(0, 3);

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
