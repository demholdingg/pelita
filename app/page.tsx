import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ProcessFlow from "@/components/sections/ProcessFlow";
import LogisticsPartners from "@/components/sections/LogisticsPartners";
import ImpactStats from "@/components/sections/ImpactStats";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
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
