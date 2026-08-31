import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Leaf,
  Zap,
  Factory,
  BookOpen,
  Wrench,
  Sprout,
  Recycle,
  Scissors,
  Package,
  Lightbulb,
  Globe,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export const metadata: Metadata = {
  title: "Our Services – Comprehensive Biomass & Renewable Energy Solutions",
  description:
    "Explore our complete range of clean energy services, from high-calorific biomass manufacturing and technology integration to sustainable energy consulting. Part of Duta Energi Muliatama.",
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title:
      "Our Services | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description:
      "Comprehensive renewable energy services from premium biomass manufacturing and supply chain logistics to sustainable energy consulting.",
    url: `${BASE_URL}/services`,
    type: "website",
  },
};

const SERVICES = [
  {
    title: "High-Calorie Biomass Supply",
    category: "Supply & Manufacturing",
    description:
      "Reliable bulk delivery of premium wood pellets, wood chips, sawdust, and palm kernel shell (PKS) engineered for industrial boiler replacement and coal co-firing.",
    image: "/images/services/biomas fuel.jpg",
    icon: <Factory className="w-6 h-6 text-amber-500" />,
    features: [
      "Consistent high calorific value",
      "Low moisture & low ash content",
      "Bulk vessel & container logistics",
    ],
  },
  {
    title: "Advanced Carbonization Technology",
    category: "Engineering & Innovation",
    description:
      "Cutting-edge hardware and engineering solutions for biomass densification, low-emission carbonization, and continuous high-yield processing systems.",
    image: "/images/services/technology.jpg",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    features: [
      "High-efficiency pelletizing lines",
      "Automated quality telemetry",
      "Low-emission thermal designs",
    ],
  },
  {
    title: "Sustainable Energy & ESG Consulting",
    category: "Advisory & Strategy",
    description:
      "Strategic energy audits, decarbonization roadmaps, and regulatory advisory helping enterprises optimize fuel efficiency and satisfy global carbon reduction targets.",
    image: "/images/services/consulting.png",
    icon: <Leaf className="w-6 h-6 text-amber-500" />,
    features: [
      "Scope 1 & 2 carbon reduction strategies",
      "Fossil fuel substitution auditing",
      "ESG reporting & certification support",
    ],
  },
  {
    title: "Research & Caloric Development",
    category: "Laboratory & R&D",
    description:
      "Continuous material testing and formulation analysis to optimize biomass combustion profiles, ash behavior, and thermal performance for industrial applications.",
    image: "/images/services/research.png",
    icon: <Sprout className="w-6 h-6 text-amber-500" />,
    features: [
      "Proximate & ultimate lab testing",
      "Combustion efficiency modeling",
      "Next-generation feedstock exploration",
    ],
  },
  {
    title: "Boiler Retrofitting & Maintenance",
    category: "Technical Services",
    description:
      "Full lifecycle support for industrial boilers and biomass feeding equipment to ensure continuous uptime, safety, and peak thermal efficiency.",
    image: "/images/services/maintenance.png",
    icon: <Wrench className="w-6 h-6 text-amber-500" />,
    features: [
      "Burner & feeder retrofitting",
      "Scheduled preventive maintenance",
      "24/7 technical engineering support",
    ],
  },
  {
    title: "Workforce Training & Certification",
    category: "Knowledge Transfer",
    description:
      "Professional development programs covering safe biomass handling, combustion control, and sustainability standards for plant operators and engineers.",
    image: "/images/services/training.png",
    icon: <BookOpen className="w-6 h-6 text-amber-500" />,
    features: [
      "Operational safety protocols",
      "Biomass storage & handling standards",
      "Industry compliance certification",
    ],
  },
];

const SOLUTIONS_STEPS = [
  {
    step: "01",
    title: "Sustainable Residue Sourcing",
    description:
      "We collect managed agricultural residues and ethically sourced timber waste, ensuring 100% traceability and zero deforestation.",
    image: "/images/services/waste_collection.png",
    icon: <Recycle className="w-6 h-6" />,
  },
  {
    step: "02",
    title: "Precision Crushing & Drying",
    description:
      "Raw biomass is crushed and dried under monitored thermal conditions to achieve uniform granule size and optimal moisture levels.",
    image: "/images/services/woodcrusher.webp",
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    step: "03",
    title: "High-Density Pelletizing",
    description:
      "Under high pressure and precise thermal conditions, biomass is compressed into dense, uniform pellets engineered for clean combustion.",
    image: "/images/services/pelletformations.jpg",
    icon: <Package className="w-6 h-6" />,
  },
];

const WORK_PRINCIPLES = [
  {
    title: "Pioneering Innovation",
    description:
      "We integrate modern automation, precision thermodynamics, and clean technologies to deliver superior fuel performance and minimal emissions.",
    icon: <Lightbulb className="w-7 h-7 text-amber-400" />,
  },
  {
    title: "Uncompromising Sustainability",
    description:
      "Every step of our supply chain upholds strict circular economy standards, maximizing residue value while conserving natural forest ecosystems.",
    icon: <Globe className="w-7 h-7 text-emerald-400" />,
  },
  {
    title: "Collaborative Reliability",
    description:
      "We partner closely with global manufacturers, utilities, and logistics networks to guarantee uninterrupted, on-spec fuel supplies year-round.",
    icon: <Users className="w-7 h-7 text-blue-400" />,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-800">
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[65vh] flex items-center justify-center text-white overflow-hidden pt-28 pb-20">
        {/* Background Image */}
        <Image
          src="/images/hero-bg/hero bg 4.jpeg"
          alt="Pelita Bioenergi Comprehensive Services"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark Neutral Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 z-10" />
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat z-10" />
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" /> */}

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/30 backdrop-blur-md text-amber-300 text-xs md:text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Part of PT Duta Energi Muliatama / DEM Holding</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-[1.15] mb-6 tracking-tight">
              Comprehensive{" "}
              <span className="text-amber-400">Bioenergy Services</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8">
              From continuous bulk biomass manufacturing and state-of-the-art
              carbonization technology to strategic ESG consulting, we empower
              global industries in achieving seamless energy decarbonization.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTION */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-green-900 font-bold text-xs uppercase tracking-widest bg-green-100/80 px-3.5 py-1.5 rounded-full mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-green-700" />
              <span>Tailored Industrial Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">
              Explore Our Core Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Engineered to ensure maximum operational uptime, rigorous emission
              compliance, and cost-effective fossil fuel substitution.
            </p>
          </div>

          {/* 6-Card Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  {/* Image Header with Floating Badges */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-amber-300 text-xs px-3 py-1 rounded-full border border-white/20 font-medium">
                      {service.category}
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-green-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature Bullets */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {service.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 md:px-8 pb-6 pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-green-900 group-hover:text-white text-green-900 text-xs font-bold transition-all duration-300 flex items-center justify-between border border-slate-200/80 group-hover:border-green-900"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. END-TO-END SOLUTIONS LIFECYCLE */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-widest bg-amber-100/80 px-3.5 py-1.5 rounded-full mb-3">
              <Recycle className="w-3.5 h-3.5 text-amber-600" />
              <span>Full Value-Chain Integration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">
              Integrated Biomass Processing Lifecycle
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              From responsible sourcing to precision extrusion, our 3-stage
              lifecycle guarantees consistent high-density fuel for domestic and
              international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {SOLUTIONS_STEPS.map((step, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                {/* Image Box */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Step Counter Badge */}
                  <div className="absolute top-4 left-4 bg-amber-400 text-green-950 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                    Step {step.step}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-green-900 mb-4 group-hover:bg-amber-400 group-hover:text-green-950 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-green-800">
                    <span>Quality-Verified Process</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORK PRINCIPLES & APPROACH */}
      <section className="py-20 md:py-28 bg-green-950 text-white relative overflow-hidden">
        {/* Background Texture & Doodles */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-3">
              Our Operating Philosophy
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Guided by Innovation, Sustainability & Trust
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              At PT Pelita Bioenergi Nusantara, our execution model is rooted in
              unyielding discipline and sustainable excellence to ensure
              long-term environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {WORK_PRINCIPLES.map((principle, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/15 hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-inner">
                    {principle.icon}
                  </div>
                  <h4 className="text-xl font-bold font-heading text-white mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 text-amber-300 text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quotation Highlight */}
          <div className="text-center max-w-4xl mx-auto pt-8 border-t border-white/15">
            <blockquote className="text-slate-200 italic text-base md:text-lg leading-relaxed">
              &ldquo;Through relentless innovation and ethical supply chains, we
              aim not only to lead the industrial bioenergy sector, but to act
              as a decisive catalyst in preserving our planet&apos;s natural
              equilibrium.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
