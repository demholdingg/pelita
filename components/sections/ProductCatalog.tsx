"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/products";

const categories = ["All", "Biomass", "Charcoal", "Biofuel"];

export default function ProductCatalog() {
  // Default export for the catalog component
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProducts = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  );

  useGSAP(
    () => {
      // Animasi kartu saat filter berubah
      gsap.fromTo(
        ".product-card",
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          overwrite: "auto",
        },
      );
    },
    { scope: gridRef, dependencies: [activeCategory] },
  );

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-green-900 text-amber-400 border-green-900"
                : "bg-white text-slate-600 border-slate-200 hover:border-green-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-amber-400 text-green-900 text-[10px] font-black uppercase px-3 py-1 rounded-md shadow-sm">
                {product.category}
              </div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-heading font-bold text-xl text-slate-800">
                {product.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {product.description}
              </p>
              <Link
                href={`/products/${product.slug}`}
                className="flex items-center gap-2 text-green-900 font-bold text-sm hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                View Specifications <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
