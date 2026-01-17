"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";
import PixelTransition from "../reactbits/PixelTransition";

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
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative rounded-[10px] bg-card border border-border h-full cursor-target"
            >
              <PixelTransition
                firstContent={
                  <div className="w-full h-full relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                }
                secondContent={
                  <div className="w-full h-full bg-[#111] p-6 flex flex-col justify-between items-start text-white">
                    <div className="w-full">
                      <span className="text-[#2b68c9] text-sm font-mono mb-2 block">
                        {project.category} — {project.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {project.name}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target mt-4 px-6 py-2 rounded-[8px] bg-[#2b68c9] text-white font-medium hover:bg-white hover:text-[#2b68c9] transition-colors w-full text-center"
                    >
                      Loyihani ko'rish
                    </Link>
                  </div>
                }
                gridSize={12}
                pixelColor="#111"
                aspectRatio="75%"
                className="w-full h-full rounded-[10px] overflow-hidden z-10"
              />
            </motion.div>
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
