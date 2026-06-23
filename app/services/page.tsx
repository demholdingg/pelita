import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Leaf, Zap, Factory, BookOpen, Wrench, Sprout, Recycle, Scissors, Package, Lightbulb, Globe, Users, Star, Sparkles, Wind, Sun } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export const metadata: Metadata = {
  title: "Layanan Kami – Biomassa & Bioenergi",
  description: "Layanan lengkap energi terbarukan dari bahan bakar biomassa berkualitas tinggi hingga konsultasi energi berkelanjutan. Bagian dari Duta Energi Muliatama.",
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Layanan | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description: "Layanan lengkap energi terbarukan dari bahan bakar biomassa berkualitas hingga konsultasi energi berkelanjutan.",
    url: `${BASE_URL}/services`,
    type: "website",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "High-Quality Biomass Fuel",
      description: "We provide high-quality biomass fuel generated through advanced production processes. This fuel can be used for heating, power generation, and various industrial purposes.",
      image: "/images/services/biomas fuel.jpg",
      icon: <Factory className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Leading Biomass Technology",
      description: "Presenting the latest biomass technology solutions, we focus on software and hardware development to ensure high efficiency and minimal environmental impact in biomass utilization.",
      image: "/images/services/technology.jpg",
      icon: <Zap className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Sustainable Energy Consulting",
      description: "Our team of experts is ready to provide sustainable energy consulting, helping companies and communities implement green energy solutions, increase efficiency, and reduce their carbon footprint.",
      image: "/images/services/consulting.png",
      icon: <Leaf className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Research and Development",
      description: "We are committed to continuous research and development in the field of biomass, ensuring our technology and services remain at the forefront of the renewable energy industry.",
      image: "/images/services/research.png",
      icon: <Sprout className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Biomass System Maintenance & Repair",
      description: "Providing maintenance and repair services for biomass systems to ensure optimal performance and operational continuity of biomass equipment.",
      image: "/images/services/maintenance.png",
      icon: <Wrench className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Training and Certification",
      description: "We offer training and certification programs for professionals in the renewable energy industry, sharing the latest knowledge and skills in the use of biomass technology.",
      image: "/images/services/training.png",
      icon: <BookOpen className="w-6 h-6 text-amber-600" />
    }
  ];

  const solutionsSteps = [
    {
      title: "Waste Collection",
      description: "We start by collecting tree waste from sustainable sources. This includes branches, wood chips, and other forms of wood waste that would normally become waste.",
      image: "/images/services/waste_collection.png",
      icon: <Recycle className="w-8 h-8" />
    },
    {
      title: "Crushing and Cutting",
      description: "The waste material is then crushed and cut into small pieces. This process increases efficiency in the subsequent stages and ensures uniformity in the biomass material.",
      image: "/images/services/woodcrusher.webp",
      icon: <Scissors className="w-8 h-8" />
    },
    {
      title: "Pellet Formation",
      description: "The dried biomass is then compacted and formed into pellets through a continuous pelletization process. The result is uniform, high-density pellets that are easy to handle and transport.",
      image: "/images/services/pelletformations.jpg",
      icon: <Package className="w-8 h-8" />
    }
  ];

  const workPrinciples = [
    {
      title: "Innovation",
      description: "We prioritize innovation in every aspect of our work. By adopting progressive approaches and the latest technology, we strive to develop new, sustainable solutions in our industry.",
      icon: <Lightbulb className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Sustainability",
      description: "Sustainability is a key pillar in our actions. We are committed to reducing our environmental impact, optimizing the use of natural resources, and ensuring that our business contributes to environmental sustainability.",
      icon: <Globe className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Collaborative Excellence",
      description: "We view collaboration as the key to achieving our goals. By working closely with partners, governments, and the community, we strive to create more effective and sustainable solutions.",
      icon: <Users className="w-8 h-8 text-green-500" />
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
        
        {/* Doodles */}
        <div className="absolute top-10 left-[10%] opacity-20 animate-[spin_10s_linear_infinite] hidden md:block pointer-events-none">
          <Sun className="w-24 h-24 text-amber-400" />
        </div>
        <div className="absolute bottom-10 right-[15%] opacity-20 animate-bounce hidden md:block pointer-events-none" style={{ animationDuration: '3s' }}>
          <Leaf className="w-16 h-16 text-amber-400" />
        </div>
        <div className="absolute top-20 right-[5%] opacity-10 animate-pulse hidden md:block pointer-events-none">
          <Sparkles className="w-20 h-20 text-white" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">
            What We Do
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
            Comprehensive <span className="text-amber-400">Services</span>
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            With these comprehensive services, PT. Pelita Bioenergi Nusantara aims to meet sustainable energy needs and make a positive contribution to the environment and society.
          </p>
        </div>
      </section>

     

      {/* Services List Title */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold font-heading text-green-900">Explore Our Services</h2>
      </div>

      {/* Services List */}
      <section className="container mx-auto px-6 relative z-20">
        {/* Doodles */}
        <div className="absolute top-40 left-0 opacity-5 hidden lg:block animate-bounce pointer-events-none" style={{ animationDuration: '5s' }}>
          <Wind className="w-40 h-40 text-green-600" />
        </div>
        <div className="absolute bottom-40 right-0 opacity-5 hidden lg:block animate-pulse pointer-events-none">
          <Star className="w-32 h-32 text-amber-500" />
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-10 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 mb-2 shadow-sm text-amber-600">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-heading font-bold text-green-900">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <button className="flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors group">
                    Learn more about this service
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Solutions Section */}
      <section className="container mx-auto px-6 -mt-10 relative z-20 mb-24">
        {/* Doodles */}
        <div className="absolute -top-10 right-10 opacity-10 animate-[spin_20s_linear_infinite] pointer-events-none hidden md:block">
          <Factory className="w-32 h-32 text-amber-600" />
        </div>
        <div className="absolute top-1/2 -left-10 opacity-10 animate-pulse pointer-events-none hidden md:block">
          <Recycle className="w-24 h-24 text-green-600" />
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">
              Our Solutions
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-green-900 mb-6">
              Leading Biomass Service Solutions
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are here as a reliable partner in providing leading biomass service solutions, from waste collection to pellet formation. With us, build an environmentally friendly clean energy future. 
              <br/><br/>
              <span className="font-semibold text-green-800">PT. Pelita Bioenergi Nusantara - Building the Future of Clean Energy.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {solutionsSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group bg-slate-50/50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 pb-8">
                <div className="w-full relative h-[240px] overflow-hidden">
                  <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="w-20 h-20 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 text-green-600 group-hover:text-white transition-colors duration-300 shadow-sm z-20 -mt-10 relative bg-white">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold font-heading text-green-900 mb-4 px-4">
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed px-6">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="container mx-auto px-6 mb-24 relative z-20">
        <div className="bg-green-900 rounded-3xl p-8 md:p-16 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
          
          {/* Doodles */}
          <div className="absolute top-10 right-[10%] opacity-20 animate-pulse hidden md:block pointer-events-none">
            <Sprout className="w-24 h-24 text-amber-400" />
          </div>
          <div className="absolute bottom-10 left-[10%] opacity-10 animate-bounce hidden md:block pointer-events-none" style={{ animationDuration: '4s' }}>
            <Zap className="w-32 h-32 text-amber-400" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">
              How We Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Our Approach & Principles
            </h3>
            <p className="text-lg text-slate-200 leading-relaxed">
              At PT. Pelita Bioenergi Nusantara, our approach to work is based on a commitment to innovation, sustainability, and collaborative excellence. Here is a brief overview of how we navigate the path to a greener and more sustainable future:
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {workPrinciples.map((principle, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  {principle.icon}
                </div>
                <h4 className="text-xl font-bold font-heading text-white mb-4">
                  {principle.title}
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto pt-8 border-t border-white/20">
            <p className="text-lg text-slate-200 italic">
              "With these principles as our guide, we aim not only to be a leader in our industry but also a positive agent of change in maintaining environmental sustainability and creating a better future."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
