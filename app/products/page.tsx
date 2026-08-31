import ProductCatalog from "@/components/sections/ProductCatalog";
import { Leaf, Sparkles, Wind } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export const metadata = {
  title: "Biomass Product Catalog",
  description:
    "Explore our premium biomass product catalog: Wood Pellets, Wood Chips, Sawdust, and Palm Kernel Shell for industrial needs. Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama.",
  alternates: {
    canonical: `${BASE_URL}/products`,
  },
  openGraph: {
    title: "Biomass Product Catalog | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description:
      "Explore premium biomass products: Wood Pellets, Wood Chips, Palm Kernel Shell & Sawdust for global industrial needs.",
    url: `${BASE_URL}/products`,
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24 relative overflow-hidden">
      {/* Hero Section with Image */}
      <section className="bg-green-900 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/services/pelletformations.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/80 to-transparent" />
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />

        {/* Doodles */}
        <div className="absolute top-32 left-[10%] opacity-20 animate-pulse hidden lg:block pointer-events-none">
          <Sparkles className="w-24 h-24 text-white" />
        </div>
        <div className="absolute top-40 right-[15%] opacity-20 animate-bounce hidden lg:block pointer-events-none" style={{ animationDuration: '5s' }}>
          <Leaf className="w-20 h-20 text-amber-400" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">
              Our Products
            </h2>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-6 uppercase tracking-tight">
              Sustainable <span className="text-amber-400">Energy Catalog</span>
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed">
              We produce wood pellets, wood chips, Sawdust, PKS Screening,
Non Screening, and also PKS Charcoal which are our superior
products as a substitute for fossil energy.
            </p>
          </div>
        </div>
      </section>

      {/* Doodles for bottom section */}
      <div className="absolute bottom-20 left-[-5%] opacity-5 animate-[spin_20s_linear_infinite] hidden lg:block pointer-events-none">
        <Wind className="w-48 h-48 text-green-600" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-16">

        {/* Interactive Catalog Section */}
        <ProductCatalog />
      </div>
    </main>
  );
}
