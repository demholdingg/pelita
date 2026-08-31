import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  FileText,
  ShieldCheck,
  Flame,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Building2,
  Layers,
  FlaskConical,
  Award,
} from "lucide-react";
import { products } from "@/lib/products";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

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
      robots: { index: false, follow: true },
    };
  }

  return {
    title: `${product.name} – Premium Industrial Biomass Specifications`,
    description: product.description,
    alternates: {
      canonical: `${BASE_URL}/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama`,
      description: product.description,
      url: `${BASE_URL}/products/${product.slug}`,
      type: "website",
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
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-24">
      <div className="container mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8">
          <Link
            href="/"
            className="hover:text-green-900 transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/products"
            className="hover:text-green-900 transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">{product.name}</span>
        </div>

        {/* Product Overview Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden flex flex-col lg:flex-row mb-16">
          {/* Product Image Section */}
          <div className="relative w-full lg:w-5/12 min-h-[380px] lg:min-h-[500px] overflow-hidden bg-slate-900 group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-6 left-6 bg-amber-400 text-green-950 text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full shadow-md tracking-wider">
              {product.category}
            </div>

            {/* Bottom Photo Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Certified Quality & 100% Traceable</span>
              </div>
              <p className="text-xs text-slate-300">
                Manufactured & supplied under rigorous international laboratory compliance.
              </p>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-green-900 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Industrial Solid Biofuel</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
                  {product.name}
                </h1>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4">
                  {product.description}
                </p>
              </div>

              {/* Quick Technical Highlights Grid */}
              <div>
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-500" />
                  <span>Key Technical Highlights</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.specs?.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 bg-slate-50 hover:bg-amber-50/40 rounded-2xl border border-slate-200/80 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-tight">
                          {spec.label}
                        </p>
                        <p className="text-slate-900 font-bold text-sm sm:text-base">
                          {spec.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex-1 min-w-[220px] py-4 px-6 rounded-2xl bg-green-950 hover:bg-green-900 text-amber-400 text-center font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <span>Request B2B Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="py-4 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-slate-200"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Request COA / Lab Sample</span>
              </Link>
            </div>
          </div>
        </div>

        {/* DETAILED SPECIFICATIONS SECTION (Rendered if detailedSpecs exists) */}
        {product.detailedSpecs && product.detailedSpecs.length > 0 && (
          <section className="mb-16 space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
                <FlaskConical className="w-4 h-4 text-amber-600" />
                <span>Laboratory Standard Specifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
                Chemical, Physical & Thermodynamic Analytical Data
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tested and verified according to international standards (ISO / ASTM / SGS / Sucofindo Lab) across relevant analytical bases: 
                <strong> As Received (AR / ar)</strong>, <strong>Air Dried Basis (ADB / ad)</strong>, <strong>Dry Basis (DB / db)</strong>, and <strong>Dry Ash-Free (DAF / daf)</strong>.
              </p>
            </div>

            {/* Tables Container */}
            <div className="space-y-10">
              {product.detailedSpecs.map((section, sIdx) => {
                const prevSection = sIdx > 0 ? product.detailedSpecs![sIdx - 1] : null;
                const isNewGroup = section.group && (!prevSection || prevSection.group !== section.group);

                return (
                  <div key={sIdx} className="space-y-4">
                    {/* Group Demarcation Header if applicable */}
                    {isNewGroup && (
                      <div className="pt-4 pb-1">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-950 text-amber-400 text-xs md:text-sm font-bold tracking-wide shadow-sm border border-emerald-700/50">
                          <Award className="w-4 h-4 text-amber-400" />
                          <span>{section.group}</span>
                        </div>
                      </div>
                    )}

                    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
                      {/* Section Title Header */}
                      <div className="bg-gradient-to-r from-green-950 to-slate-900 text-white p-6 md:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold font-heading text-amber-300">
                            {section.title}
                          </h3>
                          {section.subtitle && (
                            <p className="text-xs text-slate-300 mt-0.5">
                              {section.subtitle}
                            </p>
                          )}
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-200 self-start sm:self-auto border border-white/15">
                          Laboratory Verified
                        </span>
                      </div>

                      {/* 1. Multi-Basis Table */}
                      {section.type === "multi-basis" && (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs md:text-sm">
                            <thead className="bg-slate-100/80 text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                              <tr>
                                <th className="py-4 px-6 min-w-[220px]">Main Parameter</th>
                                <th className="py-4 px-4 min-w-[130px] text-center bg-amber-50/60 text-amber-900 border-x border-slate-200">
                                  As Received <br />
                                  <span className="text-[10px] font-normal text-amber-700">(ar / AR)</span>
                                </th>
                                <th className="py-4 px-4 min-w-[130px] text-center">
                                  Air Dried Basis <br />
                                  <span className="text-[10px] font-normal text-slate-500">(adb / ad)</span>
                                </th>
                                <th className="py-4 px-4 min-w-[140px] text-center bg-slate-50 border-x border-slate-200">
                                  Dry Basis <br />
                                  <span className="text-[10px] font-normal text-slate-500">(db / DB)</span>
                                </th>
                                <th className="py-4 px-4 min-w-[130px] text-center">
                                  Dry Ash-Free <br />
                                  <span className="text-[10px] font-normal text-slate-500">(daf / DAF)</span>
                                </th>
                                <th className="py-4 px-6 min-w-[180px] text-right">Standard Test Method</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                              {section.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className={`hover:bg-amber-50/30 transition-colors ${
                                    rIdx % 2 === 1 ? "bg-slate-50/40" : "bg-white"
                                  }`}
                                >
                                  <td className="py-3.5 px-6 font-semibold text-slate-900">
                                    {row.parameter}
                                  </td>
                                  <td className="py-3.5 px-4 text-center font-bold text-green-950 bg-amber-50/30 border-x border-slate-100">
                                    {row.ar || "-"}
                                  </td>
                                  <td className="py-3.5 px-4 text-center text-slate-700">
                                    {row.ad || "-"}
                                  </td>
                                  <td className="py-3.5 px-4 text-center font-semibold text-slate-900 bg-slate-50/30 border-x border-slate-100">
                                    {row.db || "-"}
                                  </td>
                                  <td className="py-3.5 px-4 text-center text-slate-700">
                                    {row.daf || "-"}
                                  </td>
                                  <td className="py-3.5 px-6 text-right font-mono text-[11px] md:text-xs text-slate-500 font-normal">
                                    {row.method && (
                                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80">
                                        {row.method}
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* 2. Simple Key-Value Table */}
                      {section.type === "simple" && (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs md:text-sm">
                            <thead className="bg-slate-100/80 text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                              <tr>
                                <th className="py-4 px-6 min-w-[250px]">Main Parameter</th>
                                <th className="py-4 px-6 min-w-[180px] text-center bg-amber-50/60 text-amber-900 border-x border-slate-200">
                                  Test Value / Result
                                </th>
                                <th className="py-4 px-6 min-w-[120px] text-center">Unit</th>
                                <th className="py-4 px-6 min-w-[160px] text-right">Standard Test Method</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                              {section.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className={`hover:bg-amber-50/30 transition-colors ${
                                    rIdx % 2 === 1 ? "bg-slate-50/40" : "bg-white"
                                  }`}
                                >
                                  <td className="py-3.5 px-6 font-semibold text-slate-900">
                                    {row.parameter}
                                  </td>
                                  <td className="py-3.5 px-6 text-center font-bold text-green-950 bg-amber-50/30 border-x border-slate-100">
                                    {row.value}
                                  </td>
                                  <td className="py-3.5 px-6 text-center text-slate-600 font-mono">
                                    {row.unit || "-"}
                                  </td>
                                  <td className="py-3.5 px-6 text-right font-mono text-[11px] md:text-xs text-slate-500 font-normal">
                                    {row.method && (
                                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80">
                                        {row.method}
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* 3. Elements Grid */}
                      {section.type === "elements-grid" && (
                        <div className="p-6 md:p-8 bg-slate-50/50">
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {section.rows.map((row, rIdx) => (
                              <div
                                key={rIdx}
                                className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-300 hover:shadow-md transition-all flex items-center justify-between"
                              >
                                <span className="font-semibold text-xs md:text-sm text-slate-800">
                                  {row.parameter}
                                </span>
                                <div className="text-right">
                                  <span className="font-bold text-sm md:text-base text-green-950">
                                    {row.value}
                                  </span>
                                  {row.unit && (
                                    <span className="text-[11px] text-slate-500 ml-1 font-mono">
                                      {row.unit}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Laboratory Testing Report Note */}
            {product.labNote && (
              <div className="p-6 rounded-3xl bg-emerald-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-emerald-800/80 shadow-md">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-amber-400 text-green-950 rounded-xl flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                      Independent Laboratory Testing Assurance
                    </h4>
                    <p className="text-sm text-slate-200 mt-0.5">
                      {product.labNote}
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white hover:text-green-950 text-white text-xs font-semibold border border-white/20 transition-all whitespace-nowrap self-stretch sm:self-auto text-center"
                >
                  Request Official COA Document
                </Link>
              </div>
            )}
          </section>
        )}

        {/* INDUSTRIAL APPLICATIONS SECTION */}
        {product.applications && product.applications.length > 0 && (
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-sm mb-16">
            <div className="max-w-3xl mb-8">
              <h3 className="text-xs font-bold text-green-800 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-green-700" />
                <span>Sector Applications</span>
              </h3>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                Primary Industrial Use Cases
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.applications.map((app, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-400 hover:bg-amber-50/20 transition-all duration-300 flex items-start gap-3"
                >
                  <Flame className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800 leading-snug">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NAVIGATION & RETURN LINK */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-200">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-green-900 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>

          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-xl bg-amber-400 text-green-950 font-bold text-xs md:text-sm hover:bg-amber-300 transition-all shadow-sm"
          >
            Contact Sales Team
          </Link>
        </div>
      </div>
    </main>
  );
}
