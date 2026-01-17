"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { projects } from "../data/projects";

const categories = ["Barchasi", "Veb-sayt", "Telegram bot"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const filteredProjects =
    activeCategory === "Barchasi"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Barcha <span className="gradient-text">Loyihalar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            Bizning barcha muvaffaqiyatli loyihalarimiz bilan tanishing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-target px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary text-black border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                key={project.name} // Using name as key since it's unique enough (or use index if needed, but name is better for animations if unique)
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
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
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
