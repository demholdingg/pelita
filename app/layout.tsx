import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"], // Memilih beberapa bobot yang umum digunakan untuk heading
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama | Solusi Bioenergi Berkelanjutan",
    template: "%s | Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
  },
  description:
    "Pelita Bioenergi Nusantara, bagian dari Duta Energi Muliatama, adalah penyedia terkemuka produk biomassa dan bioenergi premium untuk kebutuhan industri. Wood Pellets, Wood Chips, Sawdust, Palm Kernel Shell.",
  keywords: [
    "Pelita Bioenergi Nusantara",
    "Duta Energi Muliatama",
    "bioenergi Indonesia",
    "biomassa Indonesia",
    "wood pellets Indonesia",
    "wood chips",
    "palm kernel shell",
    "sawdust biomass",
    "energi terbarukan",
    "bioenergy supplier",
    "B2B energy Indonesia",
    "sustainable energy",
    "pellet kayu",
    "biomassa industri",
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
    locale: "id_ID",
    alternateLocale: "en_US",
    url: BASE_URL,
    siteName: "Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    title: "Pelita Bioenergi Nusantara – Part of Duta Energi Muliatama",
    description:
      "Penyedia biomassa dan bioenergi premium untuk industri. Wood Pellets, Wood Chips, Palm Kernel Shell & lebih banyak lagi. Bagian dari Duta Energi Muliatama.",
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
      "Penyedia biomassa dan bioenergi premium untuk industri. Bagian dari Duta Energi Muliatama.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Tambahkan kode verifikasi Google/Bing setelah mendapat akses Search Console
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
      </body>
    </html>
  );
}
