import Link from "next/link";
import { Leaf, Mail, Phone, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-20 pb-10 border-t border-green-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Leaf className="w-8 h-8 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="font-heading font-bold text-xl tracking-tight uppercase">
                Pelita <span className="text-amber-400">Bioenergi</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading provider of high-quality biomass and modern bioenergy
              solutions. Driving the world towards a cleaner and more
              sustainable energy future.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-green-800 rounded-full hover:bg-amber-400 hover:text-green-900 transition-all"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-green-800 rounded-full hover:bg-amber-400 hover:text-green-900 transition-all"
              >
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-amber-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-slate-300 uppercase tracking-widest">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="hover:text-white transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/esg-report.pdf"
                  className="hover:text-white transition-colors text-amber-400/80 font-semibold"
                >
                  ESG Report 2024
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-amber-400 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>info@pelitaenergi.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>+62 272 3354 919</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <p>
            © {new Date().getFullYear()} PT Pelita Bioenergi Nusantara. All
            rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
