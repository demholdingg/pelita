import ImpactStats from "@/components/sections/ImpactStats";
import { Leaf, Globe, ShieldCheck, Award } from "lucide-react";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export const metadata: Metadata = {
  title: "Keberlanjutan & Sertifikasi",
  description:
    "Komitmen Pelita Bioenergi Nusantara (bagian dari Duta Energi Muliatama) terhadap manajemen hutan berkelanjutan dan sertifikasi internasional GGL, SVLK, PEFC, dan ISCC.",
  alternates: {
    canonical: `${BASE_URL}/sustainability`,
  },
  openGraph: {
    title: "Keberlanjutan & Sertifikasi | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description:
      "Komitmen kami terhadap manajemen hutan berkelanjutan dan sertifikasi internasional GGL, SVLK, PEFC, dan ISCC untuk masa depan rendah karbon.",
    url: `${BASE_URL}/sustainability`,
    type: "website",
  },
};

export default function SustainabilityPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">
              Our Commitment
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading leading-tight">
              Sustainability at our <span className="text-amber-400">Core</span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              At Pelita Bioenergi Nusantara, sustainability isn't just a
              goal—it's our foundation. We are committed to rigorous forest
              replanting programs in full accordance with FSC regulations to
              ensure long-term ecological health.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Section - Reusing the existing component */}
      <ImpactStats />

      {/* Initiatives Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-green-900 uppercase tracking-wider mb-4">
              Our Streamlined Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Integrating sustainable forest management with advanced bioenergy
              production to drive a low-carbon future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 bg-green-900 text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-heading">
                Sustainable Management
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Implementing rigorous forest management to prevent conversion to
                non-forest uses, ensuring our resources are renewable and
                ecologically sound.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 bg-green-900 text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-heading">
                Fossil Fuel Substitution
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Replacing fossil fuels with high-calorie bioenergy solutions to
                significantly reduce carbon footprints in industrial
                applications worldwide.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 bg-green-900 text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-heading">
                Future Stewardship
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dedicated replanting programs and forest sustainability to
                combat climate change and protect our planet for future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-green-900 uppercase tracking-wider mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              “With globally recognized certifications, we stand for excellence,
              reliability, and a strong commitment to sustainable energy
              solutions.”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="font-bold text-slate-800 mb-3 font-heading">
                Green Gold Label
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A leading international certification for sustainable biomass,
                tracking products from source to end-user.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-green-700 mb-6" />
              <h3 className="font-bold text-slate-800 mb-3 font-heading">
                SVLK (Indonesian Legal Wood)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ensures 100% legality and sustainability of timber products in
                compliance with Indonesian regulations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <Leaf className="w-10 h-10 text-green-600 mb-6" />
              <h3 className="font-bold text-slate-800 mb-3 font-heading">
                PEFC Certification
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                International standard promoting sustainable forest management
                through independent third-party certification.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <Globe className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="font-bold text-slate-800 mb-3 font-heading">
                ISCC Standard
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Global system for sustainability and greenhouse gas savings for
                biomass and bioenergy products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
