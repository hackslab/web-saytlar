"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function PortfolioSection() {
  const displayedProjects = projects.slice(0, 6);

  return (
    <section
      id="portfolio"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-mono mb-4 block tracking-wider"
            >
              PORTFOLIO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Bizning <span className="gradient-text">Loyihalar</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Har bir loyiha - bu yangi chaqiruv va innovatsion yechim.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[10px] bg-card border border-border hover:border-primary/50 transition-colors duration-500 cursor-target block"
            >
              <div className="aspect-[4/3] w-full h-full relative overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/80 text-sm font-mono mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.category} — {project.year}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.name}
                  </h3>
                  <p className="text-white/90 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                    {project.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 border border-white/20">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <button className="cursor-target px-8 py-3 rounded-[8px] border border-border text-muted-foreground bg-transparent hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 font-medium">
              Barcha loyihalarni ko'rish
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
