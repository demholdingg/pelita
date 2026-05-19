import AboutPreview from "@/components/sections/AboutPreview";
import ProcessFlow from "@/components/sections/ProcessFlow";
import TechnologyDiagram from "@/components/sections/TechnologyDiagram";
import Certificates from "@/components/sections/Certificates";
import type { Metadata } from "next";
import GlobalReachMap from "@/components/sections/GlobalReachMap";

export const metadata: Metadata = {
  title: "About Our Vision | Pelita Bioenergi Nusantara",
  description:
    "Pioneering a low-carbon future through sustainable bioenergy. Learn about our mission to substitute fossil fuels and protect global forests.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">
              Our Story
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading leading-tight">
              Pioneering Low-Carbon
              <span className="text-amber-400">Sustainable</span> Future
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              As a green energy company, we recognize that renewable energy
              sources are vital for a low-carbon future. We are committed to
              sustainable forest management as a core strategy to prevent forest
              conversion. By substituting fossil fuels with bioenergy, we
              protect our planet and maintain forest sustainability to combat
              climate change for future generations.
            </p>
          </div>
        </div>
      </section>

      <GlobalReachMap />

      {/* Detailed Content */}
      <AboutPreview />

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-green-900 mb-6">
                Our Vision & Mission
              </h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  <strong>Vision:</strong> To be a global leader in sustainable
                  bioenergy, ensuring the best outcomes for forests,
                  communities, and the environment through integrity and
                  continuous innovation in renewable energy.
                </p>
                <p>
                  <strong>Mission:</strong> To provide a positive impact on
                  society and nature through sustainable forest replanting and
                  biomass innovation. We are dedicated to maintaining ecological
                  balance and preventing climate change by providing
                  high-quality alternatives to fossil fuels.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 italic text-green-900 font-medium">
              We believe that bioenergy is the key to substituting fossil fuels,
              ensuring that the energy powering the world also protects our
              forests and climate.
            </div>
          </div>
        </div>
      </section>

      <TechnologyDiagram />
      <ProcessFlow />
      <Certificates />
    </main>
  );
}
