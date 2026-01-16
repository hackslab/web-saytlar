"use client";

import { useEffect, useRef } from "react";

// Website skeleton components - wireframe style UI elements
const WebsiteSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/5 border border-white/10 rounded-lg p-4 ${className}`} style={{ borderRadius: "8px" }}>
    {children}
  </div>
);

const SkeletonLine = ({ width = "100%", height = "12px" }: { width?: string; height?: string }) => (
  <div 
    className="bg-white/20 rounded" 
    style={{ width, height, borderRadius: "6px" }}
  />
);

const SkeletonButton = ({ width = "100px" }: { width?: string }) => (
  <div 
    className="bg-primary/40 rounded" 
    style={{ width, height: "32px", borderRadius: "6px" }}
  />
);

const SkeletonImage = ({ size = "60px" }: { size?: string }) => (
  <div 
    className="bg-white/10 rounded flex items-center justify-center"
    style={{ width: size, height: size, borderRadius: "8px" }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-30">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5"/>
      <circle cx="8.5" cy="8.5" r="1.5" fill="white"/>
      <path d="M21 15L16 10L11 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 18L14 11L9 16L3 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </div>
);

// Different website section wireframes
const websiteComponents = [
  // Navbar
  () => (
    <WebsiteSection>
      <div className="flex items-center justify-between">
        <SkeletonLine width="80px" height="20px" />
        <div className="flex gap-3">
          <SkeletonLine width="50px" />
          <SkeletonLine width="50px" />
          <SkeletonLine width="50px" />
        </div>
        <SkeletonButton width="80px" />
      </div>
    </WebsiteSection>
  ),
  
  // Hero Section
  () => (
    <WebsiteSection className="py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <SkeletonLine width="70%" height="24px" />
        <SkeletonLine width="50%" height="16px" />
        <SkeletonLine width="60%" />
        <div className="flex gap-3 mt-4">
          <SkeletonButton width="100px" />
          <div className="bg-white/10 rounded" style={{ width: "100px", height: "32px", borderRadius: "6px" }} />
        </div>
      </div>
    </WebsiteSection>
  ),
  
  // Features Grid
  () => (
    <WebsiteSection>
      <SkeletonLine width="40%" height="18px" />
      <div className="grid grid-cols-3 gap-3 mt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/5 p-3 rounded" style={{ borderRadius: "6px" }}>
            <SkeletonImage size="40px" />
            <SkeletonLine width="80%" height="14px" />
            <SkeletonLine width="100%" />
          </div>
        ))}
      </div>
    </WebsiteSection>
  ),
  
  // Cards Row
  () => (
    <WebsiteSection>
      <div className="flex gap-3">
        {[1, 2].map((i) => (
          <div key={i} className="flex-1 bg-white/5 p-3 rounded" style={{ borderRadius: "6px" }}>
            <div className="bg-white/10 h-16 rounded mb-3" style={{ borderRadius: "6px" }} />
            <SkeletonLine width="70%" height="14px" />
            <SkeletonLine width="100%" />
            <SkeletonLine width="50%" />
          </div>
        ))}
      </div>
    </WebsiteSection>
  ),
  
  // Testimonial
  () => (
    <WebsiteSection>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-white/10" />
        <div className="flex-1 space-y-2">
          <SkeletonLine width="100%" />
          <SkeletonLine width="90%" />
          <SkeletonLine width="40%" height="10px" />
        </div>
      </div>
    </WebsiteSection>
  ),
  
  // Stats Section
  () => (
    <WebsiteSection>
      <div className="flex justify-around text-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-1">
            <SkeletonLine width="50px" height="24px" />
            <SkeletonLine width="40px" height="10px" />
          </div>
        ))}
      </div>
    </WebsiteSection>
  ),
  
  // Form Section
  () => (
    <WebsiteSection>
      <SkeletonLine width="50%" height="16px" />
      <div className="space-y-3 mt-4">
        <div className="flex gap-3">
          <div className="flex-1 h-10 bg-white/5 rounded border border-white/10" style={{ borderRadius: "6px" }} />
          <div className="flex-1 h-10 bg-white/5 rounded border border-white/10" style={{ borderRadius: "6px" }} />
        </div>
        <div className="h-10 bg-white/5 rounded border border-white/10" style={{ borderRadius: "6px" }} />
        <div className="h-24 bg-white/5 rounded border border-white/10" style={{ borderRadius: "6px" }} />
        <SkeletonButton width="120px" />
      </div>
    </WebsiteSection>
  ),
  
  // Pricing Cards
  () => (
    <WebsiteSection>
      <div className="text-center mb-4">
        <SkeletonLine width="40%" height="18px" />
      </div>
      <div className="flex gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`flex-1 p-3 rounded border ${i === 2 ? 'border-primary/50 bg-primary/5' : 'border-white/10 bg-white/5'}`} style={{ borderRadius: "8px" }}>
            <SkeletonLine width="60%" height="14px" />
            <SkeletonLine width="50%" height="20px" />
            <div className="space-y-2 my-3">
              <SkeletonLine width="90%" />
              <SkeletonLine width="80%" />
              <SkeletonLine width="85%" />
            </div>
            <SkeletonButton width="100%" />
          </div>
        ))}
      </div>
    </WebsiteSection>
  ),
  
  // Footer
  () => (
    <WebsiteSection>
      <div className="flex justify-between">
        <div className="space-y-2">
          <SkeletonLine width="80px" height="20px" />
          <SkeletonLine width="120px" height="10px" />
        </div>
        <div className="flex gap-8">
          <div className="space-y-2">
            <SkeletonLine width="60px" height="12px" />
            <SkeletonLine width="50px" />
            <SkeletonLine width="45px" />
          </div>
          <div className="space-y-2">
            <SkeletonLine width="60px" height="12px" />
            <SkeletonLine width="55px" />
            <SkeletonLine width="40px" />
          </div>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-8 h-8 rounded bg-white/10" style={{ borderRadius: "6px" }} />
          ))}
        </div>
      </div>
    </WebsiteSection>
  ),
];

export default function WebsiteScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      
      // Reset when scrolled past half (to create infinite loop)
      if (scrollPos >= scrollContainer.scrollHeight / 2) {
        scrollPos = 0;
      }
      
      scrollContainer.style.transform = `translateY(-${scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate components for seamless loop
  const allComponents = [...websiteComponents, ...websiteComponents, ...websiteComponents];

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
