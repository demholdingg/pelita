"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const partners = [
  { name: "Maersk", logo: "/images/logos/maersk.png" },
  { name: "CMA CGM", logo: "/images/logos/cma-cgm.png" },
  { name: "Evergreen Line", logo: "/images/logos/evergreen.png" },
  { name: "COSCO Shipping", logo: "/images/logos/cosco.png" },
  { name: "Hapag-Lloyd", logo: "/images/logos/hapag-lloyd.png" },
  { name: "ONE (Ocean Network Express)", logo: "/images/logos/one.png" },
  // Duplicate partners to ensure continuous scroll effect
  { name: "Maersk", logo: "/images/logos/maersk.png" },
  { name: "CMA CGM", logo: "/images/logos/cma-cgm.png" },
  { name: "Evergreen Line", logo: "/images/logos/evergreen.png" },
  { name: "COSCO Shipping", logo: "/images/logos/cosco.png" },
  { name: "Hapag-Lloyd", logo: "/images/logos/hapag-lloyd.png" },
  { name: "ONE (Ocean Network Express)", logo: "/images/logos/one.png" },
];

export default function LogisticsPartners() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create a continuous marquee effect for the logos
      gsap.to(marqueeRef.current, {
        x: "-50%", // Scroll half of the content (since we duplicated it)
        duration: 30, // Adjust speed as needed
        ease: "none",
        repeat: -1, // Infinite repeat
      });
    },
    { scope: marqueeRef, dependencies: [] },
  );

  return (
    <section className="py-16 bg-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-10">
        <h2 className="text-2xl font-heading font-bold text-green-900 uppercase">
          Our Global Logistics Partners
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          Ensuring reliable and timely delivery across continents.
        </p>
      </div>

      <div className="relative w-full">
        <div ref={marqueeRef} className="flex items-center space-x-12 px-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-16 relative">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
