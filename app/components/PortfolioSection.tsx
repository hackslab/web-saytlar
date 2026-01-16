"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = ["Barchasi", "Veb-sayt", "Mobil ilova", "CRM", "Brand", "Telegram bot"];

const projects = [
  {
    id: 1,
    title: "Innosoft",
    category: "Veb-sayt",
    description: "IT kompaniya korporativ veb-sayti",
    color: "from-blue-600 to-blue-800",
    year: "2024",
    size: "large"
  },
  {
    id: 2,
    title: "Fast Food App",
    category: "Mobil ilova",
    description: "Yetkazib berish xizmati ilovasi",
    color: "from-orange-500 to-red-600",
    year: "2024",
    size: "small"
  },
  {
    id: 3,
    title: "EduCRM",
    category: "CRM",
    description: "O'quv markazlari uchun CRM tizimi",
    color: "from-violet-600 to-purple-800",
    year: "2023",
    size: "small"
  },
  {
    id: 4,
    title: "Auto Parts",
    category: "Veb-sayt",
    description: "Avto ehtiyot qismlar do'koni",
    color: "from-slate-700 to-slate-900",
    year: "2024",
    size: "medium"
  },
  {
    id: 5,
    title: "Med Clinic",
    category: "Telegram bot",
    description: "Klinika uchun qabulga yozilish boti",
    color: "from-cyan-500 to-blue-600",
    year: "2023",
    size: "medium"
  },
  {
    id: 6,
    title: "Tech Brand",
    category: "Brand",
    description: "Texnologiya kompaniyasi brendingi",
    color: "from-emerald-500 to-teal-700",
    year: "2024",
    size: "large"
  }
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const filteredProjects = activeCategory === "Barchasi" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
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

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-target px-4 py-2 rounded-[8px] text-sm font-medium transition-all duration-300 border ${
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
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-[10px] bg-card border border-border hover:border-primary/50 transition-colors duration-500 cursor-target ${
                  project.size === 'large' ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`aspect-[4/3] w-full h-full overflow-hidden bg-gradient-to-br ${project.color} relative`}>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white/80 text-sm font-mono mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.category} — {project.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 border border-white/20">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                     </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
            <button className="cursor-target px-8 py-3 rounded-[8px] border border-border text-muted-foreground bg-transparent hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 font-medium">
                Barcha loyihalarni ko'rish
            </button>
        </div>
      </div>
    </section>
  );
}
