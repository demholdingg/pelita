import { Mail, Phone, MapPin, Clock, Send, Star, Zap, Sun } from "lucide-react";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi Pelita Bioenergi Nusantara (bagian dari Duta Energi Muliatama) untuk solusi biomassa premium dan kemitraan energi berkelanjutan. Siap mendukung masa depan rendah karbon Anda.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Hubungi Kami | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description:
      "Hubungi tim kami untuk solusi biomassa premium dan kemitraan energi berkelanjutan.",
    url: `${BASE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
        
        {/* Doodles */}
        <div className="absolute top-10 left-[15%] opacity-20 animate-pulse hidden md:block pointer-events-none">
          <Star className="w-20 h-20 text-amber-400" />
        </div>
        <div className="absolute bottom-10 right-[10%] opacity-20 animate-bounce hidden md:block pointer-events-none" style={{ animationDuration: '4s' }}>
          <Zap className="w-24 h-24 text-amber-400" />
        </div>
        <div className="absolute top-20 right-[5%] opacity-10 animate-[spin_15s_linear_infinite] hidden md:block pointer-events-none">
          <Sun className="w-32 h-32 text-amber-400" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading leading-tight">
              Let's Power a <span className="text-amber-400">Greener</span>{" "}
              Future
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Have questions about our sustainable bioenergy products or
              interested in a partnership? Our team is here to provide the
              solutions you need to transition toward a low-carbon energy
              source.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-green-900 mb-8 uppercase tracking-wide">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 text-green-700 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Headquarters
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Menara Pondok Indah Lt 2<br />
                        Jl. Metro pondok indah Kav.II/BA No. 2 Jakarta
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 text-green-700 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Email Us
                      </h4>
                      <p className="text-sm text-slate-600">
                        info@pelitaenergi.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 text-green-700 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Call Us</h4>
                      <p className="text-sm text-slate-600">
                        +62 272 3354 919
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 text-green-700 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Business Hours
                      </h4>
                      <p className="text-sm text-slate-600">
                        Mon - Fri: 09:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Replaced single map with three maps below */}
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-green-900 mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-700 transition-all text-slate-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-700 transition-all text-slate-800"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Subject
                  </label>
                  <select className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-700 transition-all text-slate-800 bg-white">
                    <option>Product Inquiry</option>
                    <option>Partnership Proposal</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your energy needs..."
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-700 transition-all text-slate-800 resize-none"
                  ></textarea>
                </div>
                <Button
                  variant="primary"
                  className="w-full justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </section>
      {/* Our Locations */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-green-900 mb-4 uppercase tracking-wide">
              Our Locations
            </h2>
            <p className="text-lg text-slate-600">
              Visit our headquarters or production facilities across Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* HQ */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
              <div className="p-8 pb-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-50 text-green-700 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-800">Headquarters</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Menara Pondok Indah Lt 2,<br/>
                  Jl. Metro pondok indah Kav.II/BA No. 2 Jakarta
                </p>
              </div>
              <div className="w-full h-64 relative border-t border-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.059437153671!2d106.78206121528652!3d-6.255829695471415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16c117865c3%3A0xc6eb9c5edbd86f!2sPondok%20Indah%20Office%20Tower%201!5e0!3m2!1sen!2sid!4v1715844400000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Headquarters Map"
                />
              </div>
            </div>

            {/* Factory 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
              <div className="p-8 pb-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-800">Factory 1</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Jl. Penggung - Jatinom No . Km.3, Area Sawah, Beku,<br/>
                  Kec. Karanganom, Kabupaten Klaten, Jawa Tengah 57475
                </p>
              </div>
              <div className="w-full h-64 relative border-t border-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5181710927976!2d110.627764714777!3d-7.620025794680879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a41c19b889397%3A0xb2146914ed09ed62!2sJl.%20Penggung%20-%20Jatinom%2C%20Kabupaten%20Klaten%2C%20Jawa%20Tengah!5e0!3m2!1sen!2sid!4v1715844400000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Factory 1 Map"
                />
              </div>
            </div>

            {/* Factory 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
              <div className="p-8 pb-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-800">Factory 2</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Jl. Raya Krangan - Pringsurat No.16, Tengahan, Nguwet,<br/>
                  Kec. Kranggan, Kabupaten Temanggung, Jawa Tengah 56271
                </p>
              </div>
              <div className="w-full h-64 relative border-t border-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.9922248560183!2d110.2075592147754!3d-7.399580894665476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a81000fbc14f1%3A0xc48c90355f308ab!2sJl.%20Raya%20Kranggan%20-%20Pringsurat%20No.16%2C%20Kabupaten%20Temanggung%2C%20Jawa%20Tengah!5e0!3m2!1sen!2sid!4v1715844400000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Factory 2 Map"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
  }
