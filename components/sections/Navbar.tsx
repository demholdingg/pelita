"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Animasi perubahan background saat scroll
      gsap.to(navRef.current, {
        backgroundColor: "#064e3b", // Forest Green (green-900)
        backdropFilter: "blur(12px)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        scrollTrigger: {
          start: "top -20", // Memicu animasi setelah scroll 20px
          toggleActions: "play none none reverse", // Kembali transparan saat di posisi paling atas
        },
      });
    },
    { scope: navRef, dependencies: [] },
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300 text-white bg-transparent"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <Image
            src="/images/logo.png"
            alt="Pelita Bioenergi Logo"
            width={40}
            height={40}
            className="group-hover:rotate-12 transition-transform object-contain"
          />
          <span className="font-heading font-bold text-xl tracking-tight uppercase">
            Pelita <span className="text-amber-400">Bioenergi</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-xs uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-white hover:text-amber-400 transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-green-900/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden z-40 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-heading font-bold uppercase tracking-widest hover:text-amber-400 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
