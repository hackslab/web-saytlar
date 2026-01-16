"use client";

import { useEffect, useRef } from "react";

// Shared skeleton components
const SkeletonLine = ({ width = "100%", height = "12px" }: { width?: string; height?: string }) => (
  <div className="bg-white/20 rounded" style={{ width, height, borderRadius: "6px" }} />
);

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/5 border border-white/10 p-4 ${className}`} style={{ borderRadius: "8px" }}>
    {children}
  </div>
);

// CRM Dashboard components
const crmComponents = [
  // Top Stats Bar
  () => (
    <Section>
      <div className="flex justify-between">
        {[
          { label: "Mijozlar", color: "bg-primary/40" },
          { label: "Buyurtmalar", color: "bg-green-500/40" },
          { label: "Daromad", color: "bg-yellow-500/40" },
          { label: "Xodimlar", color: "bg-purple-500/40" },
        ].map((stat, i) => (
          <div key={i} className="text-center space-y-1">
            <div className={`w-10 h-10 ${stat.color} rounded-lg mx-auto flex items-center justify-center`}>
              <SkeletonLine width="20px" height="20px" />
            </div>
            <SkeletonLine width="50px" height="18px" />
            <SkeletonLine width="40px" height="8px" />
          </div>
        ))}
      </div>
    </Section>
  ),
  
  // Data Table
  () => (
    <Section>
      <div className="flex items-center justify-between mb-4">
        <SkeletonLine width="100px" height="16px" />
        <div className="flex gap-2">
          <div className="w-24 h-8 bg-white/5 border border-white/10 rounded-md" />
          <div className="w-8 h-8 bg-primary/40 rounded-md" />
        </div>
      </div>
      {/* Table Header */}
      <div className="grid grid-cols-5 gap-2 p-2 bg-white/5 rounded-t-md">
        {[1, 2, 3, 4, 5].map((i) => (
          <SkeletonLine key={i} width="80%" height="10px" />
        ))}
      </div>
      {/* Table Rows */}
      {[1, 2, 3, 4, 5].map((row) => (
        <div key={row} className="grid grid-cols-5 gap-2 p-2 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/10" />
            <SkeletonLine width="60%" height="10px" />
          </div>
          <SkeletonLine width="70%" height="10px" />
          <SkeletonLine width="50%" height="10px" />
          <div className={`h-5 w-16 rounded-full ${row % 2 === 0 ? 'bg-green-500/30' : 'bg-yellow-500/30'}`} />
          <div className="flex gap-1">
            <div className="w-6 h-6 rounded bg-white/10" />
            <div className="w-6 h-6 rounded bg-white/10" />
          </div>
        </div>
      ))}
    </Section>
  ),
  
  // Charts Section
  () => (
    <Section>
      <div className="flex gap-4">
        {/* Bar Chart */}
        <div className="flex-1 space-y-2">
          <SkeletonLine width="80px" height="14px" />
          <div className="flex items-end gap-2 h-32 mt-4">
            {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-primary/40 rounded-t"
                style={{ height: `${h}%`, borderRadius: "4px 4px 0 0" }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"].map((day, i) => (
              <span key={i} className="text-[8px] text-white/40">{day}</span>
            ))}
          </div>
        </div>
        {/* Pie Chart */}
        <div className="w-32 space-y-2">
          <SkeletonLine width="60px" height="14px" />
          <div className="relative w-24 h-24 mx-auto mt-4">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(43,104,201,0.6)" strokeWidth="3" strokeDasharray="60 40" strokeDashoffset="25" />
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(34,197,94,0.5)" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="85" />
            </svg>
          </div>
          <div className="space-y-1 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-primary/60" />
              <SkeletonLine width="50px" height="8px" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-green-500/50" />
              <SkeletonLine width="40px" height="8px" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  ),
  
  // Calendar/Schedule
  () => (
    <Section>
      <div className="flex items-center justify-between mb-4">
        <SkeletonLine width="80px" height="14px" />
        <div className="flex gap-1">
          <div className="w-6 h-6 rounded bg-white/10" />
          <div className="w-6 h-6 rounded bg-white/10" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"].map((day, i) => (
          <div key={i} className="text-center text-[8px] text-white/40 p-1">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 28 }, (_, i) => (
          <div 
            key={i} 
            className={`aspect-square rounded flex items-center justify-center text-[10px] ${
              i === 14 ? 'bg-primary/40' : i === 20 ? 'bg-green-500/30' : 'bg-white/5'
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </Section>
  ),
  
  // Activity Feed
  () => (
    <Section>
      <SkeletonLine width="100px" height="14px" />
      <div className="mt-4 space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full ${i % 2 === 0 ? 'bg-primary/40' : 'bg-green-500/30'} flex items-center justify-center`}>
                <SkeletonLine width="16px" height="16px" />
              </div>
              {i < 4 && <div className="w-0.5 h-8 bg-white/10" />}
            </div>
            <div className="flex-1 pb-4">
              <SkeletonLine width="90%" height="10px" />
              <div className="mt-1">
                <SkeletonLine width="60px" height="8px" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  ),
  
  // Task List
  () => (
    <Section>
      <div className="flex items-center justify-between mb-4">
        <SkeletonLine width="80px" height="14px" />
        <div className="w-6 h-6 rounded bg-primary/40" />
      </div>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-3 p-2 border-b border-white/5">
          <div className={`w-5 h-5 rounded border-2 ${i === 2 ? 'bg-primary/40 border-primary/60' : 'border-white/20'}`} />
          <div className="flex-1">
            <SkeletonLine width={`${70 + i * 5}%`} height="10px" />
          </div>
          <div className={`px-2 py-1 rounded text-[8px] ${
            i === 1 ? 'bg-red-500/30' : i === 2 ? 'bg-green-500/30' : 'bg-yellow-500/30'
          }`}>
            <SkeletonLine width="30px" height="8px" />
          </div>
        </div>
      ))}
    </Section>
  ),
];

export default function CRMScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.4;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= scrollContainer.scrollHeight / 2) {
        scrollPos = 0;
      }
      scrollContainer.style.transform = `translateY(-${scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const allComponents = [...crmComponents, ...crmComponents, ...crmComponents];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        ref={scrollRef}
        className="space-y-4 p-4"
        style={{ willChange: "transform" }}
      >
        {allComponents.map((Component, index) => (
          <div key={index} className="opacity-80">
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
}
