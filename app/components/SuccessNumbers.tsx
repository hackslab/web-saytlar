"use client";

import React from "react";
import { motion } from "motion/react";
import CountUp from "../reactbits/CountUp";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  suffix = "",
  label,
  delay,
  icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="stat-card cursor-target group"
    >
      {/* Animated border glow */}
      <div className="stat-card-glow" />

      {/* Icon container */}
      <div className="stat-icon-container">
        <div className="stat-icon">{icon}</div>
      </div>

      {/* Value display */}
      <div className="stat-value-container">
        <CountUp
          to={value}
          from={0}
          duration={2.5}
          delay={delay + 0.3}
          className="stat-value"
          separator=","
        />
        <span className="stat-suffix">{suffix}</span>
      </div>

      {/* Label */}
      <p className="stat-label">{label}</p>

      {/* Decorative corner elements */}
      <div className="stat-corner stat-corner-tl" />
      <div className="stat-corner stat-corner-br" />
    </motion.div>
  );
};

const SuccessNumbers: React.FC = () => {
  const stats = [
    {
      value: 5,
      suffix: "+",
      label: "Yillik tajriba",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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
    <section className="success-numbers-section">
      {/* Background decorative elements */}
      <div className="success-bg-grid" />
      <div className="success-bg-gradient-left" />
      <div className="success-bg-gradient-right" />

      {/* Floating particles */}
      <div className="floating-particle particle-1" />
      <div className="floating-particle particle-2" />
      <div className="floating-particle particle-3" />
      <div className="floating-particle particle-4" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-[#2b68c9]/10 border border-[#2b68c9]/30 rounded-[8px] text-[#2b68c9] text-sm font-medium mb-6"
          >
            Bizning yutuqlarimiz
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Muvaffaqiyatimiz{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b68c9] to-white">
              raqamlarda
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Yillar davomida to'plagan tajribamiz va mijozlarimizning ishonchi
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="decorative-line"
        />
      </div>
    </section>
  );
};

export default SuccessNumbers;
