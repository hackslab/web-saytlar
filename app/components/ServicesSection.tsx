"use client";

import { useEffect, useRef, useState } from "react";
import WebsiteScroll from "./WebsiteScroll";
import MobileAppScroll from "./MobileAppScroll";
import ChatScroll from "./ChatScroll";
import CRMScroll from "./CRMScroll";
import BrandScroll from "./BrandScroll";

const services = [
  {
    id: "website",
    title: "Veb-saytlar ishlab chiqish",
    description: "Premium dizayn va yuqori tezlikka ega zamonaviy veb-saytlar. Biz landing sahifalar, korporativ saytlar va murakkab web-ilovalarni yaratamiz.",
    price: "300$ dan",
    tag: "01"
  },
  {
    id: "mobile",
    title: "Mobil Ilovalar",
    description: "iOS va Android platformalari uchun qulay va funksional mobil ilovalar. React Native texnologiyasi orqali cross-platform yechimlar.",
    price: "500$ dan",
    tag: "02"
  },
  {
    id: "telegram",
    title: "Telegram Botlar",
    description: "Biznesingizni avtomatlashtirish uchun mukammal telegram botlar. Savdo, mijozlar bilan aloqa va boshqa jarayonlarni osonlashtiring.",
    price: "150$ dan",
    tag: "03"
  },
  {
    id: "crm",
    title: "CRM Tizimlar",
    description: "Biznes jarayonlarini boshqarish uchun individual CRM tizimlar. Xodimlar, mijozlar va savdolarni bir joyda nazorat qiling.",
    price: "400$ dan",
    tag: "04"
  },
  {
    id: "brand",
    title: "Brand & Design",
    description: "Brendingiz uchun unikal logotip va brandbook yaratish. Mijozlar xotirasida qoladigan vizual obrazni shakllantiramiz.",
    price: "100$ dan",
    tag: "05"
  }
];

// Map service IDs to their scroll components
const scrollComponents: Record<string, React.ComponentType> = {
  website: WebsiteScroll,
  mobile: MobileAppScroll,
  telegram: ChatScroll,
  crm: CRMScroll,
  brand: BrandScroll,
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("website");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveService(services[index].id);
            }
          });
        },
        {
          threshold: [0.5],
          rootMargin: "-20% 0px -20% 0px"
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const ActiveScrollComponent = scrollComponents[activeService];

  return (
    <section className="relative w-full bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Scrollable Content */}
          <div className="w-full lg:w-1/2 py-20 lg:py-40">
             <div className="mb-32">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground inline-block">
                  Bizning <span className="gradient-text">Xizmatlar</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-md">
                   Bizning professional jamoamiz sizning g'oyalaringizni raqamli reallikka aylantiradi.
                </p>
             </div>

             <div className="flex flex-col gap-48">
                {services.map((service, index) => (
                  <div 
                    key={service.id} 
                    ref={(el) => { sectionRefs.current[index] = el; }}
                    className={`group relative pl-8 border-l-2 transition-colors duration-500 snap-center ${
                      activeService === service.id ? 'border-primary' : 'border-border hover:border-primary'
                    }`}
                  >
                     <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary transition-opacity duration-300 ${
                       activeService === service.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                     }`} />
                     <span className="text-sm font-mono text-primary mb-3 block tracking-wider">{service.tag}</span>
                     <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                       activeService === service.id ? 'text-primary' : 'group-hover:text-primary'
                     }`}>{service.title}</h3>
                     <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                     <p className={`text-2xl font-bold mt-4 transition-colors duration-300 ${
                       activeService === service.id ? 'text-primary' : 'text-foreground'
                     }`}>{service.price}</p>
                     
                     <div className={`mt-6 flex items-center text-primary transform transition-all duration-300 ${
                       activeService === service.id 
                         ? 'opacity-100 translate-x-0' 
                         : 'opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0'
                     }`}>
                        <span className="mr-2 text-sm font-medium">Batafsil</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </div>
                  </div>
                ))}
             </div>
             
             {/* Extra space at bottom to allow scrolling last item up */}
             <div className="h-[20vh]" />
          </div>

          {/* Right Side - Dynamic Sticky Scroll */}
          <div className="hidden lg:flex lg:w-1/2 sticky top-0 h-screen items-center justify-center self-start">
             <div className="relative w-[550px] h-[550px] overflow-hidden" style={{ borderRadius: "8px" }}>
                {/* Fade transition between scroll components */}
                {Object.entries(scrollComponents).map(([id, Component]) => (
                  <div 
                    key={id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeService === id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <Component />
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
