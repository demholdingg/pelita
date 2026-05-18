"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PackageCheck, Truck, Factory, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Sourcing",
    desc: "Selecting premium raw biomass material.",
    icon: <PackageCheck />,
  },
  {
    title: "Processing",
    desc: "High-tech carbonization and pelletizing.",
    icon: <Factory />,
  },
  {
    title: "Quality Control",
    desc: "Rigorous lab testing for purity.",
    icon: <ShieldCheck />,
  },
  {
    title: "Global Export",
    desc: "Sea freight logistics to global ports.",
    icon: <Truck />,
  },
];

export default function ProcessFlow() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".step-item", {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-bold text-green-900 uppercase mb-4">
            Our Streamlined Process
          </h2>
          <p className="text-slate-600">
            From the heart of Indonesia to the global market, we ensure every
            step meets international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-8 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="step-item relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-900 group-hover:bg-amber-400 group-hover:text-green-900 transition-all duration-300 mb-6 border border-green-100">
                {step.icon}
              </div>
              <h4 className="font-heading font-bold text-slate-800 mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
