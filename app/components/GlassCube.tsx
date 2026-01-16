"use client";

export default function GlassCube() {
  const size = 200; // cube size in pixels
  const half = size / 2;

  const faceStyle = {
    position: "absolute" as const,
    width: `${size}px`,
    height: `${size}px`,
    background: "rgba(43, 104, 201, 0.08)",
    border: "2px solid rgba(43, 104, 201, 0.6)",
    boxShadow: "inset 0 0 30px rgba(43, 104, 201, 0.1), 0 0 15px rgba(43, 104, 201, 0.3)",
  };

  return (
    <div 
      className="relative"
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        perspective: "800px",
        perspectiveOrigin: "center center",
      }}
    >
      <div
        className="animate-float"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transform: "rotateX(-15deg) rotateY(-25deg)",
        }}
      >
        {/* Front */}
        <div
          style={{
            ...faceStyle,
            transform: `translateZ(${half}px)`,
          }}
        />

        {/* Back */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateY(180deg) translateZ(${half}px)`,
          }}
        />

        {/* Right */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateY(90deg) translateZ(${half}px)`,
          }}
        />

        {/* Left */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateY(-90deg) translateZ(${half}px)`,
          }}
        />

        {/* Top */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateX(90deg) translateZ(${half}px)`,
          }}
        />

        {/* Bottom */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateX(-90deg) translateZ(${half}px)`,
          }}
        />
      </div>
    </div>
  );
}
