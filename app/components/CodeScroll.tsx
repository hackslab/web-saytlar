"use client";

import { useEffect, useRef } from "react";

const codeSnippets = [
  `import React from 'react';`,
  `import { useState } from 'react';`,
  ``,
  `function App() {`,
  `  const [count, setCount] = useState(0);`,
  `  `,
  `  const handleClick = () => {`,
  `    setCount(prev => prev + 1);`,
  `  };`,
  ``,
  `  return (`,
  `    <div className="app">`,
  `      <h1>Welcome</h1>`,
  `      <button onClick={handleClick}>`,
  `        Count: {count}`,
  `      </button>`,
  `    </div>`,
  `  );`,
  `}`,
  ``,
  `export default App;`,
  ``,
  `// API Service`,
  `async function fetchData(url) {`,
  `  const response = await fetch(url);`,
  `  const data = await response.json();`,
  `  return data;`,
  `}`,
  ``,
  `// Custom Hook`,
  `function useLocalStorage(key) {`,
  `  const [value, setValue] = useState(() => {`,
  `    return localStorage.getItem(key);`,
  `  });`,
  ``,
  `  useEffect(() => {`,
  `    localStorage.setItem(key, value);`,
  `  }, [key, value]);`,
  ``,
  `  return [value, setValue];`,
  `}`,
  ``,
  `// Server Component`,
  `export async function getServerData() {`,
  `  const res = await fetch('/api/data');`,
  `  return res.json();`,
  `}`,
  ``,
  `const styles = {`,
  `  container: {`,
  `    display: 'flex',`,
  `    alignItems: 'center',`,
  `    justifyContent: 'center',`,
  `  },`,
  `  button: {`,
  `    padding: '12px 24px',`,
  `    borderRadius: '8px',`,
  `    background: '#2b68c9',`,
  `  }`,
  `};`,
];

export default function CodeScroll() {
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

  // Duplicate code for seamless loop
  const allCode = [...codeSnippets, ...codeSnippets];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <div 
        ref={scrollRef}
        className="font-mono text-sm leading-relaxed whitespace-pre"
        style={{ willChange: "transform" }}
      >
        {allCode.map((line, index) => (
          <div key={index} className="flex">
            <span className="w-8 text-right mr-4 text-muted-foreground/50 select-none">
              {(index % codeSnippets.length) + 1}
            </span>
            <span className="text-primary/60">
              {line.includes("import") || line.includes("export") || line.includes("function") || line.includes("const") || line.includes("return") 
                ? <span><span className="text-[#2b68c9]">{line.split(" ")[0]}</span> {line.slice(line.indexOf(" ") + 1)}</span>
                : line
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
