"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe2, Leaf, BarChart3 } from "lucide-react";

const impacts = [
  {
    label: "CO2 Emissions Reduced",
    value: 125000,
    suffix: " Tons",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    label: "Global Clients",
    value: 45,
    suffix: "+ Countries",
    icon: <Globe2 className="w-8 h-8" />,
  },
  {
    label: "Energy Efficiency",
    value: 92,
    suffix: "% Rate",
    icon: <BarChart3 className="w-8 h-8" />,
  },
];

export default function ImpactStats() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      tl.from(".impact-card", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-green-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-amber-400 uppercase tracking-widest mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-green-200/70 max-w-xl mx-auto">
            Measured contributions toward a sustainable global energy ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {impacts.map((item, i) => (
            <div
              key={i}
              className="impact-card flex flex-col items-center text-center p-8 bg-green-900/50 rounded-3xl border border-white/10"
            >
              <div className="text-amber-400 mb-6">{item.icon}</div>
              <div
                className="text-4xl font-heading font-bold mb-2"
                suppressHydrationWarning
              >
                {item.value.toLocaleString()}
                {item.suffix}
              </div>
              <div className="text-sm uppercase tracking-widest text-green-200/60 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
