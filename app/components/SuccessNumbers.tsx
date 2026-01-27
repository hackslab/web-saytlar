"use client";

import React from "react";
import { motion } from "motion/react";
import CountUp from "../reactbits/CountUp";
import SpotlightCard from "../reactbits/SpotlightCard";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
  delay: number;
  icon: React.ReactNode;
  tag: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  suffix = "",
  label,
  description,
  delay,
  icon,
  tag,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <SpotlightCard
        className="cursor-target h-full rounded-[10px] border border-border bg-card p-8 transition-all duration-300 hover:border-[#2b68c9]/50"
        spotlightColor="rgba(43, 104, 201, 0.15)"
      >
        {/* Tag number */}
        <span className="text-[#2b68c9] font-mono text-sm tracking-wider mb-6 block">
          {tag}
        </span>

        {/* Icon */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-[8px] border border-[#2b68c9]/30 bg-[#2b68c9]/10 text-[#2b68c9]">
            {icon}
          </div>
        </div>

        {/* Value display */}
        <div className="flex items-baseline gap-1 mb-3">
          <CountUp
            to={value}
            from={0}
            duration={2.5}
            delay={delay + 0.3}
            className="text-5xl md:text-6xl font-bold text-foreground"
            separator=","
          />
          <span className="text-3xl md:text-4xl font-bold text-[#2b68c9]">
            {suffix}
          </span>
        </div>

        {/* Label */}
        <h3 className="text-xl font-bold text-foreground mb-2">{label}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </SpotlightCard>
    </motion.div>
  );
};

const SuccessNumbers: React.FC = () => {
  const stats = [
    {
      value: 5,
      suffix: "+",
      label: "Yillik tajriba",
      description:
        "Bozorda ishonchli va barqaror kompaniya sifatida o'z o'rnimizni mustahkamladik.",
      tag: "01",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      value: 150,
      suffix: "+",
      label: "Tugallangan loyihalar",
      description:
        "Har bir loyiha - bu yangi tajriba va mijozlar ishonchining tasdig'i.",
      tag: "02",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      value: 1000,
      suffix: "+",
      label: "Mamnun foydalanuvchilar",
      description:
        "Mijozlarimiz qoniqishi - bu bizning asosiy maqsadimiz va motivatsiyamiz.",
      tag: "03",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="success-numbers"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header - Same style as Services & Portfolio */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#2b68c9] font-mono mb-4 block tracking-wider"
            >
              YUTUQLAR
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Muvaffaqiyatimiz <span className="gradient-text">raqamlarda</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Yillar davomida to'plagan tajribamiz va mijozlarimizning ishonchi.
            </motion.p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              delay={index * 0.15}
              icon={stat.icon}
              tag={stat.tag}
            />
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-48 h-[2px] mx-auto mt-16 bg-gradient-to-r from-transparent via-[#2b68c9] to-transparent"
          style={{ transformOrigin: "center" }}
        />
      </div>
    </section>
  );
};

export default SuccessNumbers;
