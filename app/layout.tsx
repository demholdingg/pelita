import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"], // Select common font weights used for headings
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama | Sustainable Bioenergy Solutions",
    template: "%s | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
  },
  description:
    "Pelita Bioenergi Nusantara, part of Duta Energi Muliatama, is a leading provider of premium biomass and bioenergy products for industrial needs. Wood Pellets, Wood Chips, Sawdust, Palm Kernel Shell.",
  keywords: [
    "Pelita Bioenergi Nusantara",
    "Duta Energi Muliatama",
    "bioenergy Indonesia",
    "biomass Indonesia",
    "wood pellets Indonesia",
    "wood chips",
    "palm kernel shell",
    "sawdust biomass",
    "renewable energy",
    "bioenergy supplier",
    "B2B energy Indonesia",
    "sustainable energy",
    "wood pellets",
    "industrial biomass",
    "green energy Indonesia",
  ],
  authors: [{ name: "Pelita Bioenergi Nusantara", url: BASE_URL }],
  creator: "Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
  publisher: "Duta Energi Muliatama",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    title: "Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description:
      "Premium biomass and bioenergy provider for industry. Wood Pellets, Wood Chips, Palm Kernel Shell & more. Part of Duta Energi Muliatama.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Pelita Bioenergi Nusantara – Sustainable Bioenergy Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description:
      "Premium biomass and bioenergy provider for industry. Part of Duta Energi Muliatama.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add Google/Bing verification codes after obtaining Search Console access
    // google: "GOOGLE_SITE_VERIFICATION_CODE",
    // other: { "msvalidate.01": "BING_SITE_VERIFICATION_CODE" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 selection:bg-green-900 selection:text-white">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
