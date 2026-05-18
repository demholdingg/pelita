"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "@/components/ui/Button";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container, dependencies: [] },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[90vh] flex items-center bg-green-900 text-white overflow-hidden"
    >
      {/* Background Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="hero-content text-5xl md:text-7xl font-bold leading-tight mb-6">
            Fueling the Future with{" "}
            <span className="text-amber-400">Bioenergy</span>
          </h1>
          <p className="hero-content text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
            Pelita Bioenergi Nusantara provides sustainable energy solutions
            through high-quality biomass products, driving global environmental
            growth.
          </p>
          <div className="hero-content flex gap-4">
            <Button variant="primary">Explore Products</Button>
            <Button variant="outline">Learn Our Vision</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
