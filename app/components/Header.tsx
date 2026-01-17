"use client";

import Particles from "../reactbits/Particles";

import RotatingText from "../reactbits/Rotating Text";
import CardSwap, { Card } from "../reactbits/Card Swap";

// Skeleton components for static service previews
const SkeletonLine = ({
  width = "100%",
  height = "12px",
}: {
  width?: string;
  height?: string;
}) => (
  <div
    className="bg-white/20 rounded"
    style={{ width, height, borderRadius: "6px" }}
  />
);

const SkeletonButton = ({ width = "100px" }: { width?: string }) => (
  <div
    className="bg-[#2b68c9]/60 rounded"
    style={{ width, height: "24px", borderRadius: "6px" }}
  />
);

// Website Carcass - Static preview
const WebsiteCarcass = () => (
  <div className="flex flex-col gap-2 p-3 h-full">
    {/* Navbar skeleton */}
    <div
      className="bg-white/5 border border-white/10 rounded-lg p-2 flex items-center justify-between"
      style={{ borderRadius: "6px" }}
    >
      <SkeletonLine width="50px" height="14px" />
      <div className="flex gap-2">
        <SkeletonLine width="30px" height="10px" />
        <SkeletonLine width="30px" height="10px" />
        <SkeletonLine width="30px" height="10px" />
      </div>
      <SkeletonButton width="50px" />
    </div>
    {/* Hero skeleton */}
    <div
      className="bg-white/5 border border-white/10 rounded-lg p-3 flex-1 flex flex-col items-center justify-center gap-2"
      style={{ borderRadius: "6px" }}
    >
      <SkeletonLine width="70%" height="16px" />
      <SkeletonLine width="50%" height="10px" />
      <div className="flex gap-2 mt-2">
        <SkeletonButton width="60px" />
        <div
          className="bg-white/10 rounded"
          style={{ width: "60px", height: "24px", borderRadius: "6px" }}
        />
      </div>
    </div>
    {/* Features skeleton */}
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-lg p-2"
          style={{ borderRadius: "6px" }}
        >
          <div className="w-6 h-6 bg-white/10 rounded mb-2" />
          <SkeletonLine width="80%" height="8px" />
          <SkeletonLine width="100%" height="6px" />
        </div>
      ))}
    </div>
  </div>
);

// Mobile App Carcass - Static preview
const MobileAppCarcass = () => (
  <div className="flex justify-center items-center h-full p-4">
    <div
      className="bg-white/5 border border-white/10 overflow-hidden"
      style={{
        width: "140px",
        height: "200px",
        borderRadius: "16px",
        padding: "4px",
      }}
    >
      {/* Notch */}
      <div className="flex justify-center mb-1">
        <div className="w-12 h-3 bg-black/50 rounded-full" />
      </div>
      <div
        className="bg-black/30 h-full overflow-hidden p-2"
        style={{ borderRadius: "12px" }}
      >
        {/* App header */}
        <div className="flex items-center justify-between mb-2">
          <SkeletonLine width="50px" height="10px" />
          <div className="w-5 h-5 rounded-full bg-white/10" />
        </div>
        {/* App content */}
        <div className="space-y-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white/5 p-2 rounded-lg border border-white/10"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-white/10" />
                <SkeletonLine width="50px" height="8px" />
              </div>
              <div className="h-10 bg-white/10 rounded-lg mb-1" />
              <div className="flex gap-2">
                <SkeletonLine width="20px" height="10px" />
                <SkeletonLine width="20px" height="10px" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Home indicator */}
      <div className="flex justify-center mt-1">
        <div className="w-10 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  </div>
);

// Telegram Bot Carcass - Static preview
const TelegramBotCarcass = () => (
  <div className="flex flex-col h-full p-3">
    {/* Chat header */}
    <div
      className="bg-[#2b68c9]/20 p-2 border-b border-white/10 flex items-center gap-2"
      style={{ borderRadius: "6px 6px 0 0" }}
    >
      <div className="w-8 h-8 rounded-full bg-[#2b68c9]/40 flex items-center justify-center">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="white"
          className="opacity-60"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
        </svg>
      </div>
      <div className="flex-1 space-y-1">
        <SkeletonLine width="60px" height="10px" />
        <SkeletonLine width="40px" height="6px" />
      </div>
    </div>
    {/* Chat messages */}
    <div className="flex-1 p-2 space-y-2 overflow-hidden">
      <div className="flex justify-start">
        <div className="bg-white/10 p-2 rounded-lg rounded-tl-none w-3/4">
          <SkeletonLine width="100%" height="8px" />
          <SkeletonLine width="60%" height="8px" />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-[#2b68c9]/30 p-2 rounded-lg rounded-tr-none w-2/3">
          <SkeletonLine width="80%" height="8px" />
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-white/10 p-2 rounded-lg rounded-tl-none w-3/4">
          <SkeletonLine width="100%" height="8px" />
          <SkeletonLine width="80%" height="8px" />
          <SkeletonLine width="50%" height="8px" />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-[#2b68c9]/30 p-2 rounded-lg rounded-tr-none w-1/2">
          <SkeletonLine width="100%" height="8px" />
        </div>
      </div>
    </div>
  </div>
);

// CRM Carcass - Static preview
const CRMCarcass = () => (
  <div className="flex flex-col gap-2 p-3 h-full">
    {/* Stats bar */}
    <div
      className="flex justify-between bg-white/5 border border-white/10 rounded-lg p-2"
      style={{ borderRadius: "6px" }}
    >
      {[
        { color: "bg-[#2b68c9]/40" },
        { color: "bg-green-500/40" },
        { color: "bg-yellow-500/40" },
        { color: "bg-purple-500/40" },
      ].map((stat, i) => (
        <div key={i} className="text-center space-y-1">
          <div className={`w-6 h-6 ${stat.color} rounded mx-auto`} />
          <SkeletonLine width="30px" height="10px" />
        </div>
      ))}
    </div>
    {/* Table */}
    <div
      className="bg-white/5 border border-white/10 rounded-lg p-2 flex-1"
      style={{ borderRadius: "6px" }}
    >
      <div className="grid grid-cols-4 gap-1 p-1 bg-white/5 rounded mb-2">
        {[1, 2, 3, 4].map((i) => (
          <SkeletonLine key={i} width="80%" height="8px" />
        ))}
      </div>
      {[1, 2, 3].map((row) => (
        <div
          key={row}
          className="grid grid-cols-4 gap-1 p-1 border-b border-white/5"
        >
          <SkeletonLine width="70%" height="8px" />
          <SkeletonLine width="60%" height="8px" />
          <SkeletonLine width="50%" height="8px" />
          <div
            className={`h-4 w-12 rounded-full ${row % 2 === 0 ? "bg-green-500/30" : "bg-yellow-500/30"}`}
          />
        </div>
      ))}
    </div>
    {/* Chart */}
    <div
      className="bg-white/5 border border-white/10 rounded-lg p-2"
      style={{ borderRadius: "6px" }}
    >
      <div className="flex items-end gap-1 h-12">
        {[60, 80, 45, 90, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-[#2b68c9]/40"
            style={{ height: `${h}%`, borderRadius: "2px 2px 0 0" }}
          />
        ))}
      </div>
    </div>
  </div>
);

// Brand & Design Carcass - Static preview
const BrandDesignCarcass = () => (
  <div className="flex flex-col gap-2 p-3 h-full">
    {/* Logo variations */}
    <div
      className="bg-white/5 border border-white/10 rounded-lg p-2"
      style={{ borderRadius: "6px" }}
    >
      <SkeletonLine width="60px" height="8px" />
      <div className="flex gap-2 mt-2 justify-center">
        {[
          { bg: "bg-[#2b68c9]/50" },
          { bg: "bg-white/20" },
          { bg: "bg-black/50 border border-white/20" },
        ].map((logo, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg"
            style={{ borderRadius: "6px" }}
          >
            <div
              className={`w-6 h-6 ${logo.bg} rounded`}
              style={{ borderRadius: "4px" }}
            />
          </div>
        ))}
      </div>
    </div>
    {/* Color palette */}
    <div
      className="bg-white/5 border border-white/10 rounded-lg p-2"
      style={{ borderRadius: "6px" }}
    >
      <SkeletonLine width="50px" height="8px" />
      <div className="flex gap-2 mt-2">
        {[
          "bg-[#2b68c9]",
          "bg-white",
          "bg-black border border-white/20",
          "bg-gray-700",
        ].map((color, i) => (
          <div
            key={i}
            className={`flex-1 h-8 ${color} rounded`}
            style={{ borderRadius: "4px" }}
          />
        ))}
      </div>
    </div>
    {/* Typography preview */}
    <div
      className="bg-white/5 border border-white/10 rounded-lg p-2 flex-1"
      style={{ borderRadius: "6px" }}
    >
      <SkeletonLine width="60px" height="8px" />
      <div className="mt-2 space-y-1">
        <SkeletonLine width="100px" height="20px" />
        <SkeletonLine width="80px" height="14px" />
        <SkeletonLine width="60px" height="10px" />
      </div>
    </div>
    {/* Business card preview */}
    <div className="flex gap-2">
      <div
        className="flex-1 aspect-[1.75] bg-gradient-to-br from-[#2b68c9]/30 to-[#2b68c9]/10 rounded-lg p-2 flex flex-col justify-between"
        style={{ borderRadius: "6px" }}
      >
        <div className="w-6 h-6 bg-white/20 rounded" />
        <SkeletonLine width="50px" height="6px" />
      </div>
      <div
        className="flex-1 aspect-[1.75] bg-white/5 border border-white/10 rounded-lg p-2"
        style={{ borderRadius: "6px" }}
      >
        <div className="space-y-1 mt-auto">
          <SkeletonLine width="100%" height="4px" />
          <SkeletonLine width="80%" height="4px" />
        </div>
      </div>
    </div>
  </div>
);

// Service cards data with their carcass components
const serviceCards = [
  { name: "Websayt", CarcassComponent: WebsiteCarcass },
  { name: "Mobil ilova", CarcassComponent: MobileAppCarcass },
  { name: "Telegram bot", CarcassComponent: TelegramBotCarcass },
  { name: "CRM", CarcassComponent: CRMCarcass },
  { name: "Brand & Dizayn", CarcassComponent: BrandDesignCarcass },
];

const Header = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#2b68c9"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Navbar removed as it's in layout */}

      {/* Hero Content - Split into two columns */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-6 lg:px-16 xl:px-24 pt-24">
        {/* Left Side - Text Content */}
        <div className="flex flex-col items-center lg:items-start justify-center lg:w-1/2 text-center lg:text-left pointer-events-none mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Biznesingiz uchun
            <br />
            <span>professional</span>
            <div className="inline-flex ml-2 sm:ml-3">
              <RotatingText
                texts={[
                  "websayt",
                  "mobil ilova",
                  "telegram bot",
                  "crm",
                  "brand",
                ]}
                mainClassName="text-[#2b68c9] inline-flex overflow-hidden"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-8">
            We create stunning, high-performance websites that help your
            business grow.
          </p>
          <a
            href="#contact"
            className="cursor-target pointer-events-auto px-8 py-4 text-lg font-semibold text-white rounded-lg bg-[#2b68c9] shadow-lg shadow-[#2b68c9]/30 hover:shadow-[#2b68c9]/50 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Right Side - Card Swap with Split Content */}
        <div className="flex items-center justify-center lg:w-1/2 w-full h-[400px] sm:h-[500px] relative pointer-events-auto">
          <CardSwap
            width="100%"
            height="100%"
            cardDistance={50}
            verticalDistance={50}
            skewAmount={10}
            pauseOnHover={false}
          >
            {serviceCards.map((service) => (
              <Card
                key={service.name}
                customClass="bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden"
              >
                <div className="flex w-full h-full">
                  {/* Left Side - Service Name */}
                  <div className="w-2/5 flex flex-col items-center justify-center p-6 border-r border-white/10 bg-gradient-to-br from-[#2b68c9]/20 to-transparent">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white text-center leading-tight">
                      {service.name}
                    </h3>
                  </div>
                  {/* Right Side - Service Carcass */}
                  <div className="w-3/5 overflow-hidden">
                    <service.CarcassComponent />
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Header;
