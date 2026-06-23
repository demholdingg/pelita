"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline();

      // Sequence: Logo Reveal -> Loading bar -> Screen slide up -> Content Reveal
      tl.from(".loading-logo", {
        opacity: 0,
        y: 10,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          ".loading-bar",
          {
            scaleX: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "-=0.4", // Overlap dengan akhir animasi logo
        )
        .to(".loading-screen", {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
        })
        .from(
          ".hero-content",
          {
            y: 20,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.5", // Mulai sedikit lebih awal agar transisi mulus
        )
        .set(".loading-screen", { display: "none" });

      // Animasi pulsing glow lembut pada logo saat loading
      gsap.to(".loading-logo", {
        filter: "drop-shadow(0 0 25px rgba(251, 191, 36, 0.5))",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });

      // Animasi roda scroll pada ikon mouse
      gsap.to(".scroll-dot", {
        y: 12,
        opacity: 0,
        repeat: -1,
        duration: 1.5,
        ease: "power2.inOut",
      });

      // Memudarkan indikator scroll saat mulai scroll ke bawah
      gsap.to(".scroll-indicator", {
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "100px top",
          scrub: true,
        },
      });

      // Efek parallax zoom pada gambar background
      gsap.to(".hero-bg-image", {
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container, dependencies: [] },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[100vh] flex items-center bg-green-950 text-white overflow-hidden"
    >
      {/* Loading Screen Overlay */}
      <div className="loading-screen fixed inset-0 z-[100] bg-green-950 flex flex-col items-center justify-center gap-8">
        <div className="loading-logo flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Pelita Bioenergi Logo"
            width={56}
            height={56}
            className="object-contain"
          />
          <span className="font-heading font-bold text-2xl tracking-tight uppercase text-white">
            Pelita <span className="text-amber-400">Bioenergi</span>
          </span>
        </div>
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="loading-bar absolute inset-0 bg-amber-400 origin-left" />
        </div>
      </div>

      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Sustainable Bioenergy Background"
        fill
        priority
        className="hero-bg-image object-cover z-0 opacity-40"
      />

      {/* Background Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat z-10" />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-green-950 to-transparent z-10" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="hero-content text-5xl md:text-7xl font-bold leading-tight mb-6">
            Sustainable Green <span className="text-amber-400">Bioenergy</span>
          </h1>
          <p className="hero-content text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
            Part Of PT Duta Energi Muliatama / DEM Holding Leading the transition to renewable energy through sustainable
            forest management. We provide premium biomass solutions to
            substitute fossil fuels and drive a low-carbon growth.
          </p>
          <div className="hero-content flex gap-4">
            <Button
              onClick={() => (window.location.href = "/products")}
              variant="primary"
            >
              Explore Products
            </Button>
            <Button
              onClick={() => (window.location.href = "/about")}
              variant="outline"
            >
              Learn Our Vision
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Mouse Icon Animation) */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-amber-400 rounded-full scroll-dot" />
        </div>
      </div>
    </section>
  );
}
