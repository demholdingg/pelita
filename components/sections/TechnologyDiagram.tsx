"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Factory, Zap } from "lucide-react";

export default function TechnologyDiagram() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // Animasi alur garis SVG (flow effect)
      tl.fromTo(
        ".flow-path",
        { strokeDashoffset: 100, strokeDasharray: 100 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          stagger: 0.5,
          ease: "power2.inOut",
        },
      );

      // Animasi icon nodes
      tl.from(
        ".tech-node",
        {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.3,
          ease: "back.out(1.7)",
        },
        "-=1",
      );

      // Efek pulsing terus-menerus pada Zap icon
      gsap.to(".zap-pulse", {
        scale: 1.2,
        opacity: 1,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-heading font-bold text-green-900 uppercase mb-4">
            Our <span className="text-amber-500">Core Technology</span>
          </h2>
          <p className="text-slate-600">
            Integrating advanced carbonization and pelletizing technology to
            convert agricultural waste into high-density renewable energy.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Diagram (SVG) */}
          <svg viewBox="0 0 800 200" className="w-full h-auto hidden md:block">
            {/* Connection Lines */}
            <path
              d="M150 100 H350"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="4"
            />
            <path
              d="M450 100 H650"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="4"
            />

            {/* Animated Flow Lines */}
            <path
              d="M150 100 H350"
              className="flow-path"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="4"
            />
            <path
              d="M450 100 H650"
              className="flow-path"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="4"
            />
          </svg>

          {/* Node Icons */}
          <div className="md:absolute inset-0 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
            {/* Node 1 */}
            <div className="tech-node flex flex-col items-center group">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg group-hover:bg-green-900 group-hover:text-white transition-colors duration-500">
                <Leaf className="w-10 h-10" />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-bold text-green-900 uppercase text-sm">
                  Ethical Sourcing
                </h4>
                <p className="text-[10px] text-slate-400 mt-1 max-w-[150px]">
                  100% Traceable Biomass Waste
                </p>
              </div>
            </div>

            {/* Node 2 */}
            <div className="tech-node flex flex-col items-center group">
              <div className="w-32 h-32 bg-green-900 text-amber-400 rounded-full flex items-center justify-center border-8 border-slate-50 shadow-2xl">
                <Factory className="w-12 h-12" />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-bold text-green-900 uppercase text-sm">
                  Smart Conversion
                </h4>
                <p className="text-[10px] text-slate-400 mt-1 max-w-[150px]">
                  Low-Emission Carbonization
                </p>
              </div>
            </div>

            {/* Node 3 */}
            <div className="tech-node flex flex-col items-center group">
              <div className="w-24 h-24 bg-amber-400 text-green-900 rounded-full flex items-center justify-center border-4 border-white shadow-lg zap-pulse">
                <Zap className="w-10 h-10 fill-current" />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-bold text-green-900 uppercase text-sm">
                  High-Calorie Output
                </h4>
                <p className="text-[10px] text-slate-400 mt-1 max-w-[150px]">
                  Global Standard Bioenergy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Label for Mobile */}
        <p className="md:hidden text-center text-xs text-amber-600 font-bold mt-8 animate-pulse">
          SCROLL TO SEE FLOW →
        </p>
      </div>
    </section>
  );
}
