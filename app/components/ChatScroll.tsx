"use client";

import { useEffect, useRef } from "react";

// Skeleton line with shimmer animation
const SkeletonLine = ({ width = "100%", height = "12px" }: { width?: string; height?: string }) => (
  <div 
    className="bg-white/20 rounded animate-pulse" 
    style={{ width, height, borderRadius: "6px" }} 
  />
);

// Chat message component with skeleton loading
const ChatMessage = ({ isBot, lines = 2 }: { isBot: boolean; lines?: number }) => (
  <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-3`}>
    <div 
      className={`p-3 ${isBot ? "bg-white/10 rounded-tl-none" : "bg-primary/30 rounded-tr-none"}`}
      style={{ 
        width: "85%",
        borderRadius: "8px",
        ...(isBot ? { borderTopLeftRadius: 0 } : { borderTopRightRadius: 0 })
      }}
    >
      <div className="space-y-2">
        {Array.from({ length: lines }, (_, i) => (
          <SkeletonLine 
            key={i} 
            width={i === lines - 1 ? "60%" : "100%"} 
            height="10px" 
          />
        ))}
      </div>
    </div>
  </div>
);

// Chat messages for Telegram Bot
const chatMessages = [
  { isBot: true, lines: 2 },
  { isBot: false, lines: 1 },
  { isBot: true, lines: 3 },
  { isBot: false, lines: 1 },
  { isBot: true, lines: 2 },
  { isBot: true, lines: 1 },
  { isBot: false, lines: 2 },
  { isBot: true, lines: 2 },
  { isBot: false, lines: 1 },
  { isBot: true, lines: 3 },
  { isBot: false, lines: 1 },
  { isBot: true, lines: 2 },
];

export default function ChatScroll() {
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

  const allMessages = [...chatMessages, ...chatMessages, ...chatMessages];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Telegram-style header */}
      <div className="bg-primary/20 p-3 border-b border-white/10 flex items-center gap-3" style={{ borderRadius: "8px 8px 0 0" }}>
        <div className="w-10 h-10 rounded-full bg-primary/40 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="opacity-60">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </div>
        <div className="flex-1 space-y-1">
          <SkeletonLine width="100px" height="14px" />
          <SkeletonLine width="50px" height="10px" />
        </div>
      </div>
      
      {/* Messages */}
      <div 
        ref={scrollRef}
        className="p-4"
        style={{ willChange: "transform" }}
      >
        {allMessages.map((msg, index) => (
          <ChatMessage key={index} isBot={msg.isBot} lines={msg.lines} />
        ))}
      </div>
    </div>
  );
}
