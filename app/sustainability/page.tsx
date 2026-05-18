import ImpactStats from "@/components/sections/ImpactStats";
import { Leaf, Globe, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Pelita Bioenergi Nusantara",
  description:
    "Pelajari komitmen kami terhadap tanggung jawab lingkungan dan dampak kami terhadap transisi energi bersih global.",
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
              Di Pelita Bioenergi Nusantara, keberlanjutan bukan sekadar tujuan;
              itu adalah fondasi dari semua yang kami lakukan. Kami berkomitmen
              untuk mentransformasi limbah pertanian menjadi energi bersih,
              mengurangi jejak karbon, dan memberdayakan komunitas lokal.
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
              Pilar Strategis Kami
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Kami fokus pada tiga pilar utama keberlanjutan untuk memastikan
              dampak positif jangka panjang bagi lingkungan dan masyarakat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 bg-green-900 text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-heading">
                Circular Economy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Memanfaatkan kembali produk sampingan pertanian menjadi bahan
                bakar biomassa bernilai tinggi, menutup siklus limbah dan
                mengoptimalkan konsumsi sumber daya.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 bg-green-900 text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-heading">
                Reduksi Karbon
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bekerja aktif menuju pengurangan emisi CO2 yang signifikan dalam
                proses industri dengan menyediakan alternatif energi terbarukan
                yang rendah emisi.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 bg-green-900 text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-heading">
                Sourcing Etis
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Menjamin transparansi penuh dan menjaga kemitraan etis dengan
                petani lokal untuk mendukung pertumbuhan ekonomi regional dan
                keanekaragaman hayati.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
