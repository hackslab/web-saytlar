"use client";

import { useEffect, useRef } from "react";

// Shared skeleton components
const SkeletonLine = ({ width = "100%", height = "12px" }: { width?: string; height?: string }) => (
  <div className="bg-white/20 rounded" style={{ width, height, borderRadius: "6px" }} />
);

// Mobile app screen components
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div 
    className="bg-white/5 border border-white/10 overflow-hidden mx-auto flex flex-col"
    style={{ 
      width: "280px", 
      height: "100%",
      borderRadius: "24px",
      padding: "8px"
    }}
  >
    {/* Notch */}
    <div className="flex justify-center mb-2 flex-shrink-0">
      <div className="w-20 h-5 bg-black/50 rounded-full" />
    </div>
    <div className="bg-black/30 overflow-hidden flex-1 relative" style={{ borderRadius: "16px" }}>
      {children}
    </div>
    {/* Home indicator */}
    <div className="flex justify-center mt-2 flex-shrink-0">
      <div className="w-24 h-1 bg-white/20 rounded-full" />
    </div>
  </div>
);

const AppScreen = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 min-h-[400px]">
    {children}
  </div>
);

// Different app screens
const appScreens = [
  // Login Screen
  () => (
    <AppScreen>
      <div className="flex flex-col items-center pt-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/30 mb-6" />
        <SkeletonLine width="120px" height="20px" />
        <div className="w-full mt-8 space-y-4">
          <div className="h-12 bg-white/5 border border-white/10 rounded-xl" />
          <div className="h-12 bg-white/5 border border-white/10 rounded-xl" />
          <div className="h-12 bg-primary/40 rounded-xl mt-6" />
          <div className="flex justify-center mt-4">
            <SkeletonLine width="150px" height="10px" />
          </div>
        </div>
      </div>
    </AppScreen>
  ),
  
  // Home Feed
  () => (
    <AppScreen>
      <div className="flex items-center justify-between mb-4">
        <SkeletonLine width="100px" height="18px" />
        <div className="w-8 h-8 rounded-full bg-white/10" />
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white/10" />
              <div className="flex-1">
                <SkeletonLine width="80px" height="12px" />
                <div className="mt-1">
                  <SkeletonLine width="50px" height="8px" />
                </div>
              </div>
            </div>
            <div className="h-32 bg-white/10 rounded-lg mb-3" />
            <div className="flex gap-4">
              <SkeletonLine width="40px" height="20px" />
              <SkeletonLine width="40px" height="20px" />
              <SkeletonLine width="40px" height="20px" />
            </div>
          </div>
        ))}
      </div>
    </AppScreen>
  ),
  
  // Profile Screen
  () => (
    <AppScreen>
      <div className="flex flex-col items-center pt-4">
        <div className="w-20 h-20 rounded-full bg-white/10 mb-4" />
        <SkeletonLine width="100px" height="16px" />
        <div className="mt-1">
          <SkeletonLine width="70px" height="10px" />
        </div>
        <div className="flex gap-6 mt-6 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <SkeletonLine width="40px" height="16px" />
              <div className="mt-1">
                <SkeletonLine width="50px" height="10px" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-10 bg-primary/40 rounded-xl mb-4" />
        <div className="grid grid-cols-3 gap-1 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-white/10 rounded-lg" />
          ))}
        </div>
      </div>
    </AppScreen>
  ),
  
  // Settings Screen
  () => (
    <AppScreen>
      <SkeletonLine width="80px" height="18px" />
      <div className="mt-6 space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10" />
              <SkeletonLine width="100px" height="12px" />
            </div>
            <div className="w-5 h-5 rounded bg-white/10" />
          </div>
        ))}
      </div>
    </AppScreen>
  ),
  
  // Bottom Nav Tab
  () => (
    <AppScreen>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded bg-white/10" />
        <SkeletonLine width="120px" height="16px" />
      </div>
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-3 p-3 bg-white/5 rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <SkeletonLine width="80%" height="12px" />
              <SkeletonLine width="60%" height="10px" />
            </div>
          </div>
        ))}
      </div>
      {/* Bottom Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-around px-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className={`w-6 h-6 rounded ${i === 1 ? 'bg-primary/50' : 'bg-white/10'}`} />
            <SkeletonLine width="30px" height="8px" />
          </div>
        ))}
      </div>
    </AppScreen>
  ),
];

export default function MobileAppScroll() {
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

  const allScreens = [...appScreens, ...appScreens, ...appScreens];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center">
      <PhoneFrame>
        <div 
          ref={scrollRef}
          style={{ willChange: "transform" }}
        >
          {allScreens.map((Screen, index) => (
            <div key={index} className="opacity-80">
              <Screen />
            </div>
          ))}
        </div>
      </PhoneFrame>
    </div>
  );
}
