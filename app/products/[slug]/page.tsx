import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { products } from "@/lib/products"; // Corrected import path

// Generate static paths for all products at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for each product page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Pelita Bioenergi Nusantara",
    };
  }

  return {
    title: `${product.name} | Pelita Bioenergi Nusantara`,
    description: product.description,
    openGraph: {
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound(); // Render 404 page if product not found
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* Product Image Section */}
          <div className="relative w-full lg:w-2/5 h-80 lg:h-auto">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details Section */}
          <div className="flex-1 p-8 md:p-12 space-y-10">
            <div>
              <span className="text-green-900 text-xs font-bold uppercase tracking-[0.2em]">
                {product.category}
              </span>
              <h1 className="text-4xl font-heading font-extrabold text-slate-800 mt-2">
                {product.name}
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mt-4">
                {product.description}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.specs?.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                        {spec.label}
                      </p>
                      <p className="text-slate-800 font-bold">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full bg-green-900 text-amber-400 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-green-800 transition-colors">
                Request Quotation (B2B)
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
