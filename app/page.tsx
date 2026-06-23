import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ProcessFlow from "@/components/sections/ProcessFlow";
import LogisticsPartners from "@/components/sections/LogisticsPartners";
import ImpactStats from "@/components/sections/ImpactStats";
import { Leaf, Sparkles, Wind, Sun } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative overflow-hidden">
      {/* Global Doodles */}
      <div className="absolute top-[20%] left-[-5%] opacity-5 animate-[spin_20s_linear_infinite] hidden lg:block pointer-events-none">
        <Sun className="w-48 h-48 text-green-600" />
      </div>
      <div className="absolute top-[40%] right-[-2%] opacity-5 animate-pulse hidden lg:block pointer-events-none">
        <Sparkles className="w-32 h-32 text-green-600" />
      </div>
      <div className="absolute top-[60%] left-[-2%] opacity-5 animate-bounce hidden lg:block pointer-events-none" style={{ animationDuration: '5s' }}>
        <Leaf className="w-24 h-24 text-green-600" />
      </div>
      <div className="absolute top-[80%] right-[-5%] opacity-5 animate-pulse hidden lg:block pointer-events-none">
        <Wind className="w-40 h-40 text-green-600" />
      </div>
      {/* Hero Section with GSAP Animation */}
      <Hero />

      {/* Logistics Partners Section */}
      <LogisticsPartners />

      {/* Impact Metrics Section */}
      <ImpactStats />

      {/* Value Proposition & About Brief */}
      <AboutPreview />

      {/* Operational Transparency Section */}
      <ProcessFlow />
    </main>
  );
}
