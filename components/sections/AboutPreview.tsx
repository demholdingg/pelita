"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Leaf, ShieldCheck, Zap } from "lucide-react";

const stats = [
  {
    label: "Carbon Offset",
    value: "50K+",
    unit: "Tons/Year",
    icon: <Leaf className="w-6 h-6 text-amber-500" />,
  },
  {
    label: "Renewable Energy",
    value: "100%",
    unit: "Sustainable",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
  },
  {
    label: "Global Standards",
    value: "ISO",
    unit: "Certified",
    icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
  },
];

export default function AboutPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Register plugin inside the hook to ensure it's client-side
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      // Animasi heading dan paragraf
      gsap.fromTo(
        ".about-text",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        },
      );

      // Animasi kartu statistik
      const statCards = gsap.utils.toArray(".stat-card");
      const statsContainer =
        containerRef.current.querySelector(".stats-container");

      if (statCards.length > 0 && statsContainer) {
        gsap.fromTo(
          ".stat-card",
          { scale: 0.9, opacity: 0 },
          {
            scrollTrigger: {
              trigger: statsContainer,
              start: "top 75%",
            },
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            overwrite: "auto",
          },
        );
      }
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="about-text text-green-900 font-bold text-sm uppercase tracking-widest mb-4">
              Who We Are
            </h2>
            <h3 className="about-text text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-6">
              Driving Global Growth Through Sustainable Bioenergy
            </h3>
            <p className="about-text text-slate-600 text-lg leading-relaxed mb-8">
              Pelita Bioenergi Nusantara is committed to bridging the gap
              between industrial energy needs and environmental responsibility.
              We specialize in high-quality biomass products that empower
              businesses to transition towards a greener, more sustainable
              future.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="lg:w-1/2 w-full stats-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
                >
                  <div className="mb-4 p-3 bg-amber-50 rounded-full">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-bold text-green-900">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-tight">
                    {stat.label}
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    {stat.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
