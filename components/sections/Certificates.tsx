"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ShieldCheck, FileText } from "lucide-react";

export default function Certificates() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".cert-item", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  const certs = [
    {
      name: "ISO 9001:2015",
      icon: <ShieldCheck />,
      desc: "Quality Management",
    },
    { name: "FSC Certified", icon: <Award />, desc: "Responsible Forestry" },
    { name: "SVLK Export", icon: <FileText />, desc: "Legal Timber Assurance" },
  ];

  return (
    <section ref={container} className="py-24 bg-green-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {certs.map((cert, i) => (
            <div key={i} className="cert-item space-y-4">
              <div className="mx-auto w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-green-900">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold font-heading">{cert.name}</h3>
              <p className="text-green-200 text-sm">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
