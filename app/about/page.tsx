import AboutPreview from "@/components/sections/AboutPreview";
import ProcessFlow from "@/components/sections/ProcessFlow";
import TechnologyDiagram from "@/components/sections/TechnologyDiagram";
import Certificates from "@/components/sections/Certificates";
import type { Metadata } from "next";
import GlobalReachMap from "@/components/sections/GlobalReachMap";

export const metadata: Metadata = {
  title: "About Us | Pelita Bioenergi Nusantara",
  description:
    "Pelajari visi, misi, dan teknologi di balik solusi bioenergi berkelanjutan kami.",
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
              Pioneering <span className="text-amber-400">Sustainable</span>{" "}
              Energy
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Pelita Bioenergi Nusantara hadir sebagai solusi inovatif dalam
              menghadapi tantangan energi global. Kami menjembatani kebutuhan
              industri dengan tanggung jawab lingkungan melalui pemanfaatan
              biomassa yang berkelanjutan.
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
                  <strong>Visi:</strong> Menjadi pemimpin global dalam
                  penyediaan solusi bioenergi modern yang mempercepat transisi
                  dunia menuju masa depan rendah karbon.
                </p>
                <p>
                  <strong>Misi:</strong> Menghasilkan produk biomassa
                  berkualitas tinggi dengan standar internasional, memberdayakan
                  komunitas lokal, dan menjaga kelestarian ekosistem.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 italic text-green-900 font-medium">
              Kami percaya bahwa energi masa depan adalah energi yang tidak
              hanya menggerakkan mesin, tetapi juga menjaga kehidupan.
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
