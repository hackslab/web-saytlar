"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#services", label: "Xizmatlar" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#pricing", label: "Narxlar" },
    { href: "/#about", label: "Biz haqimizda" },
    { href: "/#contact", label: "Aloqa" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-black/40 backdrop-blur-xl shadow-lg shadow-black/10"
            : "py-4 bg-transparent"
        }`}
        style={{ borderRadius: "15px" }}
      >
        {/* Logo */}
        <Link href="/" className="cursor-target flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-[#2b68c9] flex items-center justify-center shadow-lg shadow-[#2b68c9]/30 group-hover:shadow-[#2b68c9]/50 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div className="absolute -inset-0.5 bg-[#2b68c9] rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#2b68c9]">
              Web-Saytlar
            </span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest">
              Premium Web Design
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-target nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-[#2b68c9] transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#2b68c9] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="cursor-target hidden lg:flex cta-button relative px-6 py-2.5 text-sm font-semibold text-white rounded-lg bg-[#2b68c9] shadow-lg shadow-[#2b68c9]/30 hover:shadow-[#2b68c9]/50 hover:scale-105 transition-all duration-300 overflow-hidden group"
        >
          <span className="relative z-10">Buyurtma berish</span>
          <div className="absolute inset-0 bg-[#1d4f9e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-target lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 scale-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`pointer-events-auto lg:hidden mt-2 mx-auto max-w-6xl bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-[#2b68c9]/10 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen
            ? "opacity-100 max-h-[500px] visible"
            : "opacity-0 max-h-0 invisible"
        }`}
      >
        <div className="px-4 py-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-target px-4 py-3 text-base font-medium text-black/70 dark:text-white/70 hover:text-[#2b68c9] hover:bg-[#2b68c9]/5 rounded-lg transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-target block py-3 text-center text-base font-semibold text-white rounded-xl bg-[#2b68c9] shadow-lg shadow-[#2b68c9]/30"
              >
                Buyurtma berish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
