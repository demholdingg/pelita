import ProductCatalog from "@/components/sections/ProductCatalog";

export const metadata = {
  title: "Our Products | Pelita Bioenergi Nusantara",
  description:
    "Explore our premium selection of biomass and bioenergy products for industrial needs.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-green-900 mb-6 uppercase tracking-tight">
            Sustainable <span className="text-amber-500">Energy Catalog</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Discover our range of high-efficiency biomass products designed to
            meet the rigorous demands of global industrial sectors while
            maintaining environmental integrity.
          </p>
        </div>

        {/* Interactive Catalog Section */}
        <ProductCatalog />
      </div>
    </main>
  );
}
