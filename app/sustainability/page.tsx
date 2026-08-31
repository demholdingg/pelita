import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import {
  Leaf,
  Globe2,
  ShieldCheck,
  Award,
  Recycle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingDown,
  FileCheck,
  TreePine,
  Factory,
} from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export const metadata: Metadata = {
  title: "Sustainability & ESG Commitments – Pelita Bioenergi Nusantara",
  description:
    "Discover Pelita Bioenergi Nusantara's uncompromising commitment to sustainable forest management, circular bioeconomy, zero deforestation, and global certifications (GGL, SVLK, PEFC, ISCC). Part of Duta Energi Muliatama.",
  alternates: {
    canonical: `${BASE_URL}/sustainability`,
  },
  openGraph: {
    title:
      "Sustainability & Certifications | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description:
      "Our commitment to sustainable forestry management, circular bioeconomy, and globally recognized certifications (GGL, SVLK, PEFC, ISCC) for a low-carbon future.",
    url: `${BASE_URL}/sustainability`,
    type: "website",
  },
};

const SUSTAINABILITY_PILLARS = [
  {
    title: "Sustainable Forestry & Biodiversity",
    subtitle: "Ecological Conservation",
    description:
      "We strictly source agricultural waste and managed forest residuals under strict FSC and SVLK protocols, actively preventing natural forest conversion and protecting biodiversity.",
    image: "/images/hero-bg/hero bg 3.jpeg",
    icon: <TreePine className="w-6 h-6 text-emerald-400" />,
    badge: "Zero Deforestation",
  },
  {
    title: "Fossil Fuel Decarbonization",
    subtitle: "Industrial Transition",
    description:
      "By engineering high-calorific biomass pellets and chips as direct coal substitutes, we enable global industrial boilers and utilities to slash greenhouse gas emissions by up to 85%.",
    image: "/images/services/biomas fuel.jpg",
    icon: <Factory className="w-6 h-6 text-amber-400" />,
    badge: "Up to 85% CO2 Reduction",
  },
  {
    title: "Ethical Community Sourcing",
    subtitle: "Social & Economic ESG",
    description:
      "Empowering local agricultural communities and forestry stewards through fair-trade sourcing models, continuous training, and safe circular waste monetization.",
    image: "/images/hero-bg/hero bg 4.jpeg",
    icon: <Globe2 className="w-6 h-6 text-blue-400" />,
    badge: "Fair-Trade Supply",
  },
];

const CERTIFICATIONS = [
  {
    name: "Green Gold Label (GGL)",
    standard: "Global Biomass Chain of Custody",
    description:
      "A premier international accreditation ensuring that biomass origin, processing, and transportation satisfy the strictest sustainability and traceability criteria.",
    icon: <Award className="w-8 h-8 text-amber-500" />,
    tag: "Chain of Custody",
  },
  {
    name: "SVLK (Indonesian Timber Legality)",
    standard: "Legal & Sustainable Forestry",
    description:
      "Government-audited assurance confirming 100% legal timber origin, responsible harvesting, and strict adherence to Indonesian environmental forestry laws.",
    icon: <FileCheck className="w-8 h-8 text-emerald-600" />,
    tag: "100% Legally Audited",
  },
  {
    name: "PEFC Certification",
    standard: "Endorsement of Forest Certification",
    description:
      "World-renowned standard certifying that biomass feedstocks originate from sustainably managed forests subject to rigorous independent third-party oversight.",
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    tag: "Global Standard",
  },
  {
    name: "ISCC (EU Compliance)",
    standard: "International Sustainability & Carbon",
    description:
      "Rigorous global certification tracking greenhouse gas savings, deforestation-free feedstock origin, and full compliance with international renewable mandates.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    tag: "GHG Reduction Verified",
  },
];

export default function SustainabilityPage() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-800">
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[65vh] flex items-center justify-center text-white overflow-hidden pt-28 pb-20">
        {/* Background Image */}
        <Image
          src="/images/hero-bg/hero bg 3.jpeg"
          alt="Pelita Bioenergi Sustainable Forestry & Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark Neutral Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 z-10" />
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat z-10" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            {/* DEM Holding Identity Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/30 backdrop-blur-md text-amber-300 text-xs md:text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Part of PT Duta Energi Muliatama / DEM Holding</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-[1.15] mb-6 tracking-tight">
              Sustainability at our <span className="text-amber-400">Core</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8">
              At Pelita Bioenergi Nusantara, sustainability is not merely a
              benchmark—it is our fundamental operational foundation. We
              champion responsible forest stewardship, circular bioeconomy
              innovation, and measurable carbon abatement for future
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CIRCULAR BIOECONOMY & ASYMMETRIC VISUAL SHOWCASE */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-green-900 font-bold text-xs uppercase tracking-widest bg-green-100/80 px-3.5 py-1.5 rounded-full">
                <Recycle className="w-3.5 h-3.5 text-green-700" />
                <span>Circular Bioeconomy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
                Transforming Forestry Residues into Clean Renewable Power
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Our operations close the loop on agricultural and forestry
                byproducts. By recovering wood chips, sawdust, and palm kernel
                shells that would otherwise decompose or be open-burned, we
                manufacture high-density green fuel that directly displaces coal
                in power plants and industrial boilers.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Every metric ton of Pelita biomass prevents methane emissions
                from open decomposition while creating a closed-loop carbon
                cycle where combustion emissions are re-absorbed by continuously
                replanted commercial forests.
              </p>

              {/* Highlights List */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "100% Chain-of-Custody Sourcing",
                  "Strict Forest Replanting Compliance",
                  "Methane Avoidance from Agricultural Waste",
                  "Low-Ash & Clean Burning Combustion",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Asymmetric Multi-Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Main Large Image */}
                <div className="col-span-8 relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/hero-bg/hero bg 1.jpeg"
                    alt="Pelita Bioenergi Eco-Friendly Facility"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
                    Eco-Efficient Processing & Storage Plant
                  </div>
                </div>

                {/* Stacked Secondary Images */}
                <div className="col-span-4 space-y-4">
                  <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                    <Image
                      src="/images/services/pelletformations.jpg"
                      alt="Compacted Biomass Pellets"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-36 sm:h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                    <Image
                      src="/images/hero-bg/hero bg 5.jpeg"
                      alt="Clean Energy Facility Operations"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-green-900 text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-green-700/50 backdrop-blur-md">
                <div className="p-2 bg-amber-400 text-green-950 rounded-xl">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-amber-300 uppercase font-bold tracking-wider">
                    Carbon Offset
                  </div>
                  <div className="text-sm font-semibold">
                    Net-Zero Industrial Pathways
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE CORE SUSTAINABILITY PILLARS */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200/80 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-xs font-bold text-green-800 uppercase tracking-widest mb-3">
              Strategic Commitments
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
              Our Core Sustainability Pillars
            </h2>
            <p className="text-slate-600 text-base">
              Balancing commercial industrial vitality with rigorous
              environmental protection and social responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col"
              >
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Pillar Floating Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-amber-300 text-xs px-3 py-1 rounded-full border border-white/20 font-medium flex items-center gap-1.5">
                    {pillar.icon}
                    <span>{pillar.badge}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-amber-400 font-semibold block">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-lg font-bold font-heading leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-green-900 group-hover:text-amber-600 transition-colors">
                    <span>Explore ESG Framework</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBALLY RECOGNIZED CERTIFICATIONS & ACCREDITATIONS */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-widest bg-amber-100/80 px-3.5 py-1.5 rounded-full mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>International Compliance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">
              Certifications & Global Standards
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our biomass products adhere to rigorous third-party audits,
              ensuring unmatched compliance with international forestry and
              greenhouse gas standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="group bg-slate-50 p-8 rounded-3xl border border-slate-200/80 hover:border-amber-400/60 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-50 transition-all duration-300">
                    {cert.icon}
                  </div>
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                    {cert.tag}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-1">
                    {cert.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-4">
                    {cert.standard}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-green-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Audit Compliant</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HIGH-IMPACT PARTNERSHIP CTA BANNER */}
      <section className="relative py-20 bg-green-950 text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-bg/hero bg 6.jpeg"
          alt="Sustainable Partnership"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-green-950/70 z-10" />

        <div className="container mx-auto px-6 relative z-20 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold mb-6 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Certified ESG & Biomass Supplier</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
            Accelerate Your Industrial Decarbonization Targets
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            Partner with Pelita Bioenergi Nusantara to secure reliable,
            certified, high-calorific biomass that satisfies your corporate ESG
            mandates and sustainability goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-amber-400 text-green-950 hover:bg-amber-300 font-bold transition-all duration-300 shadow-lg text-sm md:text-base flex items-center gap-2"
            >
              <span>Request Sustainability Audit & Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white hover:text-green-950 text-white border border-white/20 font-semibold transition-all duration-300 backdrop-blur-md text-sm md:text-base"
            >
              Explore Certified Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
