import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us | Pelita Bioenergi Nusantara",
  description:
    "Contact Pelita Bioenergi Nusantara for premium biomass solutions and sustainable energy partnerships. We are ready to power your low-carbon future.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
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
        <div className="container mx-auto px-6">
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
                        Our Office
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Jakarta, Indonesia
                        <br />
                        (Full address details)
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
                        +62 (21) XXXX-XXXX
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

              {/* Google Maps Integration */}
              <div className="w-full h-80 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24131557997!2d106.759478!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e8022bb341%3A0x3ec89704e673072b!2sJakarta!5e0!3m2!1sen!2sid!4v1715844400000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pelita Bioenergi Nusantara Office Location"
                />
              </div>
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
        </div>
      </section>
    </main>
  );
}
