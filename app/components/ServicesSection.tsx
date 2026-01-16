"use client";

import GlassCube from "./GlassCube";
import CodeScroll from "./CodeScroll";

const services = [
  {
    title: "Veb-saytlar ishlab chiqish",
    description: "Premium dizayn va yuqori tezlikka ega zamonaviy veb-saytlar. Biz landing sahifalar, korporativ saytlar va murakkab web-ilovalarni yaratamiz.",
    tag: "01"
  },
  {
    title: "Mobil Ilovalar",
    description: "iOS va Android platformalari uchun qulay va funksional mobil ilovalar. React Native texnologiyasi orqali cross-platform yechimlar.",
    tag: "02"
  },
  {
    title: "Telegram Botlar",
    description: "Biznesingizni avtomatlashtirish uchun mukammal telegram botlar. Savdo, mijozlar bilan aloqa va boshqa jarayonlarni osonlashtiring.",
    tag: "03"
  },
  {
    title: "CRM Tizimlar",
    description: "Biznes jarayonlarini boshqarish uchun individual CRM tizimlar. Xodimlar, mijozlar va savdolarni bir joyda nazorat qiling.",
    tag: "04"
  },
  {
    title: "Brand & Design",
    description: "Brendingiz uchun unikal logotip va brandbook yaratish. Mijozlar xotirasida qoladigan vizual obrazni shakllantiramiz.",
    tag: "05"
  }
];

export default function ServicesSection() {
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

             <div className="space-y-48">
                {services.map((service, index) => (
                  <div key={index} className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-500 cursor-target">
                     <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     <span className="text-sm font-mono text-primary mb-3 block tracking-wider">{service.tag}</span>
                     <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                     <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                     
                     <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
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

          {/* Right Side - Sticky Cube */}
          <div className="hidden lg:flex lg:w-1/2 sticky top-0 h-screen items-center justify-center self-start">
             <div className="relative w-[550px] h-[550px]">
                {/* Scrolling code behind the cube */}
                <CodeScroll />
                {/* Glass cube on top */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                   <GlassCube />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
