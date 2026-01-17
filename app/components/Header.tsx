"use client";

import Particles from "../reactbits/Particles";

import RotatingText from "../reactbits/Rotating Text";
import CardSwap, { Card } from "../reactbits/Card Swap";

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

        {/* Right Side - Card Swap */}
        <div className="flex items-center justify-center lg:w-1/2 w-full h-[400px] sm:h-[500px] relative pointer-events-auto">
          <CardSwap
            width="100%"
            height="100%"
            cardDistance={50}
            verticalDistance={50}
            skewAmount={10}
            pauseOnHover={false}
          >
            <Card customClass="bg-[#2b68c9] flex items-center justify-center shadow-2xl">
              <div className="text-center p-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Web Development
                </h3>
                <p className="text-white/80">Modern & Fast Websites</p>
              </div>
            </Card>
            <Card customClass="bg-[#2b68c9] flex items-center justify-center shadow-2xl">
              <div className="text-center p-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Mobile Apps
                </h3>
                <p className="text-white/80">iOS & Android Solutions</p>
              </div>
            </Card>
            <Card customClass="bg-[#2b68c9] border border-[#2b68c9] flex items-center justify-center shadow-2xl">
              <div className="text-center p-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  UI/UX Design
                </h3>
                <p className="text-white/80">User-Centered Design</p>
              </div>
            </Card>
            <Card customClass="bg-gradient-to-br from-[#2b68c9] to-[#2b68c9] flex items-center justify-center shadow-2xl">
              <div className="text-center p-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  SEO & Marketing
                </h3>
                <p className="text-white/80">Grow Your Audience</p>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Header;
