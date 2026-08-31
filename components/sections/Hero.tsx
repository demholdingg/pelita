"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_SLIDES = [
  {
    src: "/images/hero-bg/hero bg 1.jpeg",
    alt: "Pelita Bioenergi - Green Biomass Processing Facility & Operations",
    label: "Sustainable Bioenergy",
    tagline: "High-Calorie Green Fuel",
  },
  {
    src: "/images/hero-bg/hero bg 2.jpeg",
    alt: "Pelita Bioenergi - Wood Pellet Manufacturing & Processing",
    label: "Premium Biomass",
    tagline: "Industrial Grade Quality",
  },
  {
    src: "/images/hero-bg/hero bg 3.jpeg",
    alt: "Pelita Bioenergi - Sustainable Forest & Wood Waste Management",
    label: "Eco Forestry",
    tagline: "Zero-Waste Sustainable Management",
  },
  {
    src: "/images/hero-bg/hero bg 4.jpeg",
    alt: "Pelita Bioenergi - Global Biomass Supply Chain & Export Logistics",
    label: "Global Supply Chain",
    tagline: "Reliable Domestic & Export Logistics",
  },
  {
    src: "/images/hero-bg/hero bg 5.jpeg",
    alt: "Pelita Bioenergi - Clean Energy & Decarbonization Transition",
    label: "Clean Energy Transition",
    tagline: "Accelerating Global Decarbonization",
  },
  {
    src: "/images/hero-bg/hero bg 6.jpeg",
    alt: "Pelita Bioenergi - International Quality Standards & Certifications",
    label: "Certified Excellence",
    tagline: "Eco-Conscious Energy Innovation",
  },
];

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds per slide

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay Timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

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
          "-=0.4",
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
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-controls",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .set(".loading-screen", { display: "none" });

      // Soft pulsing glow animation on the logo during loading
      gsap.to(".loading-logo", {
        filter: "drop-shadow(0 0 25px rgba(251, 191, 36, 0.5))",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });

      // Scroll wheel animation on the mouse icon
      gsap.to(".scroll-dot", {
        y: 12,
        opacity: 0,
        repeat: -1,
        duration: 1.5,
        ease: "power2.inOut",
      });

      // Fade out the scroll indicator when scrolling down
      gsap.to(".scroll-indicator", {
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "100px top",
          scrub: true,
        },
      });
    },
    { scope: container, dependencies: [] },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[100vh] flex items-center bg-black text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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

      {/* Slide Images Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-80 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover transform transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-108" : "scale-100"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Neutral Dark Contrast Overlays (for perfect readability without green tint) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20 z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />

      {/* Main Content Area */}
      <div className="container mx-auto px-6 relative z-20 pt-20 pb-28 md:py-0">
        <div className="max-w-3xl">
          {/* Active Slide Badge */}
          <div className="hero-content inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-amber-300 text-xs md:text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>{HERO_SLIDES[currentSlide].tagline}</span>
          </div>

          <h1 className="hero-content text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-md">
            Sustainable Green <span className="text-amber-400">Energy</span>
          </h1>

          <p className="hero-content text-base sm:text-lg md:text-xl text-slate-100 mb-8 md:mb-10 leading-relaxed font-normal max-w-2xl drop-shadow">
            Part of PT Duta Energi Muliatama / DEM Holding. Leading the transition to renewable energy through sustainable
            forest management and premium biomass solutions to substitute fossil fuels for a low-carbon future.
          </p>

          <div className="hero-content flex flex-wrap gap-4">
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

      {/* Slider Interactive Controls & Progress Indicators */}
      <div className="hero-controls absolute bottom-8 md:bottom-12 right-6 md:right-12 z-30 flex flex-col items-end gap-3">
        {/* Slide Counter & Label */}
        <div className="hidden sm:flex items-center gap-3 text-xs md:text-sm font-medium text-slate-200 backdrop-blur-md bg-black/60 px-4 py-1.5 rounded-full border border-white/15 shadow-lg">
          <span className="text-amber-400 font-bold tracking-wider">
            0{currentSlide + 1}
          </span>
          <span className="text-white/30">/</span>
          <span className="text-slate-300">0{HERO_SLIDES.length}</span>
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span className="text-white/90">{HERO_SLIDES[currentSlide].label}</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Slide Progress Bars */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-3 py-2 rounded-full border border-white/15 shadow-lg">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.src}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.label}`}
                className={`h-1.5 rounded-full transition-all duration-500 relative overflow-hidden ${
                  idx === currentSlide
                    ? "w-8 sm:w-10 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                    : "w-2.5 sm:w-3 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Action Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-amber-400 hover:text-black text-white border border-white/20 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 active:scale-95 cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-amber-400 hover:text-black text-white border border-white/20 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 active:scale-95 cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Mouse Icon Animation) */}
      <div className="scroll-indicator absolute bottom-8 left-6 md:left-1/2 md:-translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-1">
        <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center p-1.5 backdrop-blur-xs">
          <div className="w-1 h-2 bg-amber-400 rounded-full scroll-dot" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-slate-300 font-medium">
          Scroll
        </span>
      </div>
    </section>
  );
}
