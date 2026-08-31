import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TechnologyDiagram from "@/components/sections/TechnologyDiagram";
import ProcessFlow from "@/components/sections/ProcessFlow";
import Certificates from "@/components/sections/Certificates";
import {
  Target,
  Lightbulb,
  Zap,
  Users,
  BookOpen,
  Leaf,
  Link as LinkIcon,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Factory,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export const metadata: Metadata = {
  title: "About Us – Vision, Mission & Sustainable Energy Commitments",
  description:
    "Pelita Bioenergi Nusantara, part of Duta Energi Muliatama, is a premier renewable energy and biomass pioneer in Indonesia. Discover our vision, mission, and ESG commitments.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title:
      "About Us | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description:
      "Pelita Bioenergi Nusantara, part of Duta Energi Muliatama, is a premier renewable energy pioneer in Indonesia. Discover our vision, mission, and ESG commitments.",
    url: `${BASE_URL}/about`,
    type: "website",
  },
};

const PILLARS = [
  {
    title: "Environmental Stewardship (ESG)",
    subtitle: "Conservation & Sustainability",
    desc: "Harnessing managed agricultural and forestry residues without compromising natural forest ecosystems, actively accelerating global industrial decarbonization.",
    image: "/images/hero-bg/hero bg 3.jpeg",
    icon: <Leaf className="w-5 h-5 text-emerald-400" />,
    badge: "100% Traceable",
  },
  {
    title: "Advanced Clean Technology",
    subtitle: "Innovation & Precision Carbonization",
    desc: "Applying state-of-the-art pelletizing and carbonization technology to deliver high-calorific, low-emission renewable fuels with optimized combustion efficiency.",
    image: "/images/services/technology.jpg",
    icon: <Factory className="w-5 h-5 text-amber-400" />,
    badge: "High Efficiency",
  },
  {
    title: "Global Supply Reliability",
    subtitle: "Integrated B2B Logistics",
    desc: "Seamless domestic supply infrastructure and world-class maritime freight networks delivering timely bulk shipments to international industrial partners.",
    image: "/images/hero-bg/hero bg 4.jpeg",
    icon: <Globe2 className="w-5 h-5 text-blue-400" />,
    badge: "Tier-1 Logistics",
  },
];

const MISSIONS = [
  {
    icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
    title: "Pioneering Biomass Technology Development",
    desc: "Engineered and implement cutting-edge biomass innovations to generate clean, highly efficient, and environmentally sustainable energy.",
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-600" />,
    title: "Fulfilling Sustainable Energy Demands",
    desc: "Deliver reliable, green biomass fuel solutions designed to meet the rigorous energy requirements of global utilities and industrial manufacturers.",
  },
  {
    icon: <Users className="w-5 h-5 text-amber-600" />,
    title: "Collaborating with Global Stakeholders",
    desc: "Actively engage with governments, industry leaders, and local communities to forge collaborative solutions for worldwide climate challenges.",
  },
  {
    icon: <BookOpen className="w-5 h-5 text-amber-600" />,
    title: "Promoting Clean Energy Education",
    desc: "Educate and raise awareness regarding renewable biomass alternatives to foster sustainable, low-carbon industrial energy consumption.",
  },
  {
    icon: <Leaf className="w-5 h-5 text-amber-600" />,
    title: "Generating Positive Environmental Impact",
    desc: "Conduct operations with uncompromised ecological care, reducing carbon footprints while safeguarding biodiversity and natural resources.",
  },
  {
    icon: <LinkIcon className="w-5 h-5 text-amber-600" />,
    title: "Cultivating Long-Term Strategic Partnerships",
    desc: "Build dependable, transparent relationships with international clients and partners to achieve shared green economic growth.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-slate-50 overflow-hidden text-slate-800">
      {/* 1. HERO SECTION WITH RICH BACKGROUND & BADGE */}
      <section className="relative w-full flex items-center justify-center text-white overflow-hidden pt-28 pb-20">
        {/* Background Image */}
        <Image
          src="/images/about/about 1.JPG"
          alt="Pelita Bioenergi Advanced Technology & Facility"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Gradient Scrims for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 z-10" />
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat z-10" />
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" /> */}

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            {/* DEM Holding Identity Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/30 backdrop-blur-md text-amber-300 text-xs md:text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Part of PT Duta Energi Muliatama / DEM Holding</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-[1.15] mb-6 tracking-tight">
              Creating Green Energy, <br />
              <span className="text-amber-400">Inspiring The Future</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8">
              A pioneering renewable energy enterprise in Indonesia dedicated to
              sustainable biomass utilization, advanced carbonization
              technology, and clean fossil fuel substitution for a low-carbon
              world.
            </p>

            {/* Quick Metrics Bar */}
          </div>
        </div>
      </section>

      {/* 2. COMPANY STORY & ASYMMETRIC IMAGE SHOWCASE */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-green-900 font-bold text-xs uppercase tracking-widest bg-green-100/80 px-3.5 py-1.5 rounded-full">
                <Leaf className="w-3.5 h-3.5 text-green-700" />
                <span>Our Heritage & Vision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
                Bridging Biomass Innovation with Industrial Energy Demands
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                <strong>PT Pelita Bioenergi Nusantara</strong> We are an
                Indonesian producer of sustainable wood pellets. As a green
                energy company, we realize that renewable energy source is very
                important for our low-carbon future, as well as we are aware
                that sustainable forest management is the main point to prevent
                the convertion of forest to non forest users. We need bioenergy
                to substitute fossil fuel and keep forest intact
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Through comprehensive end-to-end integration—from ethically
                sourced agricultural and wood residues to cutting-edge
                manufacturing facilities—we ensure optimal thermal efficiency
                while significantly reducing lifecycle greenhouse gas emissions.
              </p>

              {/* Highlights List */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Sustainable Forest & Residue Management",
                  "High-Density Pelletizing Technology",
                  "Stringent Laboratory Quality Assurance",
                  "Reliable Multimodal Logistics Network",
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
                    alt="Pelita Bioenergi Main Processing Facility"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
                    Biomass Processing & Storage Facility
                  </div>
                </div>

                {/* Stacked Secondary Images */}
                <div className="col-span-4 space-y-4">
                  <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                    <Image
                      src="/images/hero-bg/hero bg 3.jpeg"
                      alt="Sustainable Forestry Management"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-36 sm:h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                    <Image
                      src="/images/services/pelletformations.jpg"
                      alt="Biomass Pellet Formations"
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
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-amber-300 uppercase font-bold tracking-wider">
                    Zero-Waste
                  </div>
                  <div className="text-sm font-semibold">
                    Circular Bioeconomy Ecosystem
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE CORE PILLARS WITH IMAGE CARDS */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200/80 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-xs font-bold text-green-800 uppercase tracking-widest mb-3">
              Strategic Focus
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
              Our Pillars of Operational Excellence
            </h2>
            <p className="text-slate-600 text-base">
              Upholding the highest benchmarks in ecological stewardship,
              precision manufacturing efficiency, and dependable international
              logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col"
              >
                {/* Card Image Header */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Floating Pillar Badge */}
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

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-green-900 group-hover:text-amber-600 transition-colors">
                    <span>Learn More About Our Standards</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION WITH VISUAL SHOWCASE */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Vision & Mission Points */}
            <div className="lg:col-span-7 space-y-10">
              {/* Vision Box */}
              <div className="p-8 rounded-3xl bg-green-950 text-white relative overflow-hidden shadow-xl border border-green-900">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
                    <Target className="w-4 h-4 text-amber-400" />
                    <span>Our Vision</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4 text-white leading-snug">
                    To Be The Premier Global Leader in Sustainable Bioenergy
                    Solutions
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed">
                    To serve as an international center of excellence in biomass
                    technology and sustainable forestry, spearheading the
                    industrial transition toward low-emission energy while
                    delivering profound environmental value and enduring
                    prosperity for future generations.
                  </p>
                </div>
              </div>

              {/* Mission Points */}
              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  Our Mission & Core Commitments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {MISSIONS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-300/80 hover:bg-amber-50/20 transition-all duration-300 flex flex-col"
                    >
                      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-3">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Visual Showcase with Photo and Quote */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              {/* Photo Showcase */}
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
                <Image
                  src="/images/hero-bg/hero bg 2.jpeg"
                  alt="Pelita Bioenergi Wood Pellet Processing Facility"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block bg-amber-400 text-green-950 font-bold text-xs px-3 py-1 rounded-full mb-2">
                    Quality Certified
                  </div>
                  <h4 className="text-xl font-bold font-heading">
                    Wood Pellet & Biomass Manufacturing
                  </h4>
                  <p className="text-slate-300 text-xs mt-1">
                    High-calorific density engineered for seamless coal
                    co-firing and industrial boiler replacement.
                  </p>
                </div>
              </div>

              {/* Leadership Commitment Quote */}
              <div className="p-8 rounded-3xl bg-slate-50 border-2 border-emerald-900/10 relative">
                <div className="text-4xl text-amber-500 font-serif leading-none mb-3">
                  &ldquo;
                </div>
                <blockquote className="text-slate-700 italic text-sm md:text-base leading-relaxed mb-4">
                  We firmly believe that bioenergy is the defining catalyst for
                  global industrial decarbonization, ensuring that the power
                  driving economic growth actively safeguards our forests and
                  planetary climate.
                </blockquote>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-green-900 text-amber-400 font-bold flex items-center justify-center text-sm shadow-md">
                    PB
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Pelita Bioenergi Nusantara
                    </div>
                    <div className="text-xs text-slate-500">
                      Board of Directors & Management
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE TECHNOLOGY DIAGRAM */}
      <TechnologyDiagram />

      {/* 6. OPERATIONAL PROCESS FLOW */}
      <ProcessFlow />

      {/* 7. GLOBAL STANDARDS & CERTIFICATES */}
      <Certificates />

      {/* 8. HIGH-IMPACT PARTNERSHIP CTA BANNER */}
      <section className="relative py-20 bg-green-950 text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-bg/hero bg 6.jpeg"
          alt="Pelita Bioenergi International Partnership"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-green-950/70 z-10" />

        <div className="container mx-auto px-6 relative z-20 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold mb-6 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Trusted Industrial Bioenergy Partner</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
            Ready to Accelerate Your Clean Energy Transition?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            Connect with our technical energy consultants to discuss custom
            biomass specifications, bulk volume deliveries, and trial shipments
            tailored to your operational needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-3.5 rounded-xl bg-amber-400 text-green-950 hover:bg-amber-300 font-bold transition-all duration-300 shadow-lg text-sm md:text-base flex items-center gap-2"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white hover:text-green-950 text-white border border-white/20 font-semibold transition-all duration-300 backdrop-blur-md text-sm md:text-base"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
