"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { BlogPost } from "../data/blogs";
import { getBlogsAction } from "../actions/blogActions";

export default function MoreBlogs({
  currentPostId,
}: {
  currentPostId: string;
}) {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    getBlogsAction()
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  const moreBlogs = blogs.filter((b) => b.id !== currentPostId).slice(0, 3);

  if (moreBlogs.length === 0) {
    return null;
  }

  return (
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
  );
}
