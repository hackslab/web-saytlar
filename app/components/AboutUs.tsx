"use client";

import React from "react";
import { motion } from "motion/react";

const AboutUs: React.FC = () => {
  return (
    <section className="relative w-full py-20 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 space-y-8 z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Biz <span className="text-[#2b68c9]">haqimizda</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
            >
              <p>
                Bizning jamoamiz zamonaviy va sifatli veb-saytlar, mobil
                ilovalar va telegram botlarni yaratishga ixtisoslashgan. Har bir
                loyiha uchun individual yondashuv va kreativ yechimlarni taklif
                etamiz.
              </p>
              <p>
                Maqsadimiz - biznesingizni raqamli dunyoda yangi bosqichga olib
                chiqish va mijozlaringizga qulaylik yaratishdir. Texnologiya va
                dizayn uyg'unligi orqali biz sizning g'oyalaringizni haqiqatga
                aylantiramiz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="cursor-target px-8 py-3 bg-[#2b68c9] text-white font-semibold text-lg rounded-[8px] hover:bg-[#1a4b9e] transition-colors duration-300">
                Batafsil ma'lumot
              </button>
            </motion.div>
          </div>

          {/* Right Side: Visual/Image Placeholder */}
          <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
            {/* Abstract decorative elements using the allowed colors/shapes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="absolute w-64 h-64 border-2 border-[#2b68c9] rounded-[10px] transform rotate-12 opacity-30" />
              <div className="absolute w-64 h-64 border-2 border-white rounded-[10px] transform -rotate-12 opacity-30" />
              <div className="relative w-72 h-72 bg-[#111] rounded-[10px] border border-gray-800 flex items-center justify-center overflow-hidden cursor-target group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2b68c9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#2b68c9]">
                  24/7
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
