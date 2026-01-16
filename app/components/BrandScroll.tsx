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

// Design/Brand elements
const designComponents = [
  // Logo Variations
  () => (
    <Section>
      <SkeletonLine width="120px" height="14px" />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-square bg-white/5 border border-white/10 rounded-lg flex items-center justify-center p-4">
            <div className={`w-12 h-12 ${i === 1 ? 'bg-primary/50' : i === 2 ? 'bg-white/20' : 'bg-black/50 border border-white/20'} rounded-lg`} />
          </div>
        ))}
      </div>
    </Section>
  ),
  
  // Color Palette
  () => (
    <Section>
      <SkeletonLine width="100px" height="14px" />
      <div className="flex gap-3 mt-4">
        {[
          { bg: "bg-primary", name: "#2b68c9" },
          { bg: "bg-white", name: "#FFFFFF" },
          { bg: "bg-black border border-white/20", name: "#000000" },
          { bg: "bg-gray-700", name: "#374151" },
          { bg: "bg-primary/30", name: "#2b68c940" },
        ].map((color, i) => (
          <div key={i} className="flex-1 text-center">
            <div className={`aspect-square ${color.bg} rounded-lg mb-2`} style={{ borderRadius: "8px" }} />
            <span className="text-[8px] text-white/50">{color.name}</span>
          </div>
        ))}
      </div>
    </Section>
  ),
  
  // Typography
  () => (
    <Section>
      <SkeletonLine width="100px" height="14px" />
      <div className="mt-4 space-y-4">
        <div className="space-y-1">
          <SkeletonLine width="80px" height="8px" />
          <SkeletonLine width="200px" height="32px" />
        </div>
        <div className="space-y-1">
          <SkeletonLine width="80px" height="8px" />
          <SkeletonLine width="180px" height="24px" />
        </div>
        <div className="space-y-1">
          <SkeletonLine width="80px" height="8px" />
          <SkeletonLine width="160px" height="16px" />
        </div>
        <div className="space-y-1">
          <SkeletonLine width="80px" height="8px" />
          <SkeletonLine width="140px" height="12px" />
        </div>
      </div>
    </Section>
  ),
  
  // Business Card Preview
  () => (
    <Section>
      <SkeletonLine width="120px" height="14px" />
      <div className="flex gap-4 mt-4">
        {/* Front */}
        <div className="flex-1 aspect-[1.75] bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg p-4 flex flex-col justify-between" style={{ borderRadius: "8px" }}>
          <div className="w-10 h-10 bg-white/20 rounded-lg" />
          <div className="space-y-1">
            <SkeletonLine width="80px" height="12px" />
            <SkeletonLine width="60px" height="8px" />
          </div>
        </div>
        {/* Back */}
        <div className="flex-1 aspect-[1.75] bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col justify-end" style={{ borderRadius: "8px" }}>
          <div className="space-y-1">
            <SkeletonLine width="100%" height="8px" />
            <SkeletonLine width="80%" height="8px" />
            <SkeletonLine width="90%" height="8px" />
          </div>
        </div>
      </div>
    </Section>
  ),
  
  // Social Media Templates
  () => (
    <Section>
      <SkeletonLine width="140px" height="14px" />
      <div className="flex gap-3 mt-4">
        {/* Instagram Post */}
        <div className="flex-1 aspect-square bg-white/5 border border-white/10 rounded-lg overflow-hidden" style={{ borderRadius: "8px" }}>
          <div className="h-3/4 bg-gradient-to-b from-primary/20 to-transparent flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl" />
          </div>
          <div className="p-2 space-y-1">
            <SkeletonLine width="80%" height="8px" />
            <SkeletonLine width="60%" height="6px" />
          </div>
        </div>
        {/* Story */}
        <div className="w-20 aspect-[9/16] bg-gradient-to-b from-primary/30 to-primary/10 rounded-lg p-2" style={{ borderRadius: "8px" }}>
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-white/30" />
              <SkeletonLine width="30px" height="6px" />
            </div>
            <div className="space-y-1">
              <SkeletonLine width="90%" height="8px" />
              <div className="h-6 bg-white/20 rounded" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  ),
  
  // Icon Set
  () => (
    <Section>
      <SkeletonLine width="80px" height="14px" />
      <div className="grid grid-cols-6 gap-3 mt-4">
        {Array.from({ length: 12 }, (_, i) => (
          <div 
            key={i} 
            className="aspect-square bg-white/5 rounded-lg flex items-center justify-center"
            style={{ borderRadius: "6px" }}
          >
            <div className={`w-5 h-5 rounded ${i % 3 === 0 ? 'bg-primary/50' : 'bg-white/20'}`} style={{ borderRadius: "4px" }} />
          </div>
        ))}
      </div>
    </Section>
  ),
  
  // Letterhead Preview
  () => (
    <Section>
      <SkeletonLine width="100px" height="14px" />
      <div className="mt-4 bg-white/5 border border-white/10 rounded-lg p-4 aspect-[1/1.4]" style={{ borderRadius: "8px" }}>
        <div className="flex justify-between items-start mb-8">
          <div className="w-16 h-8 bg-primary/30 rounded" />
          <div className="text-right space-y-1">
            <SkeletonLine width="60px" height="6px" />
            <SkeletonLine width="80px" height="6px" />
          </div>
        </div>
        <div className="space-y-2 mt-8">
          <SkeletonLine width="100%" height="6px" />
          <SkeletonLine width="100%" height="6px" />
          <SkeletonLine width="100%" height="6px" />
          <SkeletonLine width="80%" height="6px" />
        </div>
        <div className="space-y-2 mt-4">
          <SkeletonLine width="100%" height="6px" />
          <SkeletonLine width="100%" height="6px" />
          <SkeletonLine width="60%" height="6px" />
        </div>
        <div className="mt-8 space-y-1">
          <SkeletonLine width="80px" height="6px" />
          <SkeletonLine width="100px" height="8px" />
        </div>
      </div>
    </Section>
  ),
  
  // Brand Guidelines
  () => (
    <Section>
      <SkeletonLine width="130px" height="14px" />
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="bg-white/5 rounded-lg p-3 flex items-center gap-3" style={{ borderRadius: "6px" }}>
            <div className="w-8 h-8 bg-green-500/30 rounded flex items-center justify-center">✓</div>
            <SkeletonLine width="80%" height="10px" />
          </div>
          <div className="bg-white/5 rounded-lg p-3 flex items-center gap-3" style={{ borderRadius: "6px" }}>
            <div className="w-8 h-8 bg-green-500/30 rounded flex items-center justify-center">✓</div>
            <SkeletonLine width="70%" height="10px" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-white/5 rounded-lg p-3 flex items-center gap-3" style={{ borderRadius: "6px" }}>
            <div className="w-8 h-8 bg-red-500/30 rounded flex items-center justify-center">✗</div>
            <SkeletonLine width="80%" height="10px" />
          </div>
          <div className="bg-white/5 rounded-lg p-3 flex items-center gap-3" style={{ borderRadius: "6px" }}>
            <div className="w-8 h-8 bg-red-500/30 rounded flex items-center justify-center">✗</div>
            <SkeletonLine width="70%" height="10px" />
          </div>
        </div>
      </div>
    </Section>
  ),
];

export default function BrandScroll() {
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

  const allComponents = [...designComponents, ...designComponents, ...designComponents];

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
