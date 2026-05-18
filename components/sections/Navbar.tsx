"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

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
        <Link href="/" className="flex items-center gap-2 group">
          <Leaf className="w-8 h-8 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span className="font-heading font-bold text-xl tracking-tight uppercase">
            Pelita <span className="text-amber-400">Bioenergi</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-xs uppercase tracking-widest">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-amber-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/products"
            className="hover:text-amber-400 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/sustainability"
            className="hover:text-amber-400 transition-colors"
          >
            Sustainability
          </Link>
          <Link
            href="/contact"
            className="hover:text-amber-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle Placeholder */}
        <div className="md:hidden flex flex-col gap-1.5">
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
        </div>
      </div>
    </nav>
  );
}
