import AboutPreview from "@/components/sections/AboutPreview";
import ProcessFlow from "@/components/sections/ProcessFlow";
import TechnologyDiagram from "@/components/sections/TechnologyDiagram";
import Certificates from "@/components/sections/Certificates";
import type { Metadata } from "next";
import GlobalReachMap from "@/components/sections/GlobalReachMap";
import { Target, Lightbulb, Zap, Users, BookOpen, Leaf, Link, Star, Sparkles, Wind, Sun, Sprout } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export const metadata: Metadata = {
  title: "Tentang Kami – Visi & Misi",
  description:
    "Pelita Bioenergi Nusantara, bagian dari Duta Energi Muliatama, adalah pionir energi terbarukan di Indonesia. Pelajari visi, misi, dan komitmen kami terhadap lingkungan.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "Tentang Kami | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description:
      "Pelita Bioenergi Nusantara, bagian dari Duta Energi Muliatama, adalah pionir energi terbarukan di Indonesia. Pelajari visi, misi, dan komitmen ESG kami.",
    url: `${BASE_URL}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
        
        {/* Doodles */}
        <div className="absolute top-10 right-[15%] opacity-20 animate-[spin_10s_linear_infinite] hidden md:block pointer-events-none">
          <Sun className="w-24 h-24 text-amber-400" />
        </div>
        <div className="absolute bottom-10 left-[10%] opacity-20 animate-bounce hidden md:block pointer-events-none" style={{ animationDuration: '3s' }}>
          <Leaf className="w-16 h-16 text-amber-400" />
        </div>
        <div className="absolute top-20 left-[5%] opacity-10 animate-pulse hidden md:block pointer-events-none">
          <Sparkles className="w-20 h-20 text-white" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">
              Our Story
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading leading-tight">
              Creating Energy,
              <br />
              <span className="text-amber-400">Inspiring the Future</span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg text-slate-200 leading-relaxed">
                We are an innovative renewable energy company in Indonesia, persistently building a strong foundation in biomass technology. Founded with the vision of becoming a leader in the environmentally friendly utilization of natural resources, we pursue sustainable energy solutions to create a greener future. With a focus on efficiency and sustainability, we are determined to provide efficient energy solutions that have a positive impact on the environment and create long-term value for all our stakeholders.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed">
                Join us on our journey towards a clean energy era! PT. Pelita Bioenergi Nusantara builds a bridge between biomass technology innovation and the energy needs of the community. Through active collaboration with stakeholders and continuous interaction with the community, we believe we can achieve a positive transformation in the energy sector. We are committed to being a reliable partner in realizing a clean, responsible, and sustainable energy future. PT. Pelita Bioenergi Nusantara - Creating Energy, Inspiring the Future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GlobalReachMap />

      {/* Detailed Content */}
      <AboutPreview />

      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Doodles */}
        <div className="absolute top-40 right-[-5%] opacity-5 hidden lg:block animate-bounce pointer-events-none" style={{ animationDuration: '4s' }}>
          <Sprout className="w-40 h-40 text-green-600" />
        </div>
        <div className="absolute bottom-40 left-[-5%] opacity-5 hidden lg:block animate-pulse pointer-events-none">
          <Star className="w-32 h-32 text-amber-500" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-green-900 mb-8">
                Our Vision & Mission
              </h2>
              <div className="space-y-8 text-slate-600">
                {/* Vision */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 bg-green-100 p-3 rounded-xl text-green-700">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Vision</h3>
                    <p className="leading-relaxed">
                      To be the main pioneer in the provision of renewable energy in Indonesia, PT. Pelita Bioenergi Nusantara is committed to achieving global energy sustainability. Our vision is to become a center of innovation in biomass technology and lead the change towards a greener and more sustainable world.
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-green-900 mb-5">
                    Mission
                  </h3>
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 bg-amber-100 p-2 rounded-lg text-amber-600">
                        <Lightbulb className="w-5 h-5" />
                      </div>
                      <p className="leading-relaxed"><strong className="text-slate-800">Leading Biomass Technology Development:</strong> Produce and implement the latest biomass technology to generate efficient and environmentally friendly energy.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 bg-amber-100 p-2 rounded-lg text-amber-600">
                        <Zap className="w-5 h-5" />
                      </div>
                      <p className="leading-relaxed"><strong className="text-slate-800">Fulfilling Sustainable Energy Needs:</strong> Provide sustainable energy solutions to meet the needs of the community, industry, and the energy sector with a focus on sustainability.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 bg-amber-100 p-2 rounded-lg text-amber-600">
                        <Users className="w-5 h-5" />
                      </div>
                      <p className="leading-relaxed"><strong className="text-slate-800">Active Collaboration with Stakeholders:</strong> Collaborate with government, industry, and the community in building joint solutions for global energy challenges.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 bg-amber-100 p-2 rounded-lg text-amber-600">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <p className="leading-relaxed"><strong className="text-slate-800">Public Education and Awareness:</strong> Provide education and raise public awareness about the importance of renewable energy to create positive changes in energy consumption behavior.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 bg-amber-100 p-2 rounded-lg text-amber-600">
                        <Leaf className="w-5 h-5" />
                      </div>
                      <p className="leading-relaxed"><strong className="text-slate-800">Positive Impact on the Environment:</strong> Conduct operations with environmental care, reducing the carbon footprint, and supporting the conservation of natural resources.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 bg-amber-100 p-2 rounded-lg text-amber-600">
                        <Link className="w-5 h-5" />
                      </div>
                      <p className="leading-relaxed"><strong className="text-slate-800">Building Long-Term Partnerships:</strong> Build mutually beneficial partnerships with customers, business partners, and related parties to achieve sustainable growth and shared goals.</p>
                    </div>
                  </div>
                </div>
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
