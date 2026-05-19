import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Halaman Tidak Ditemukan | Pelita Bioenergi Nusantara",
  description:
    "Maaf, halaman yang Anda cari tidak tersedia. Pastikan URL yang dimasukkan sudah benar atau halaman telah dipindahkan.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-heading font-extrabold text-green-900/10 select-none">
          404
        </h1>
        <div className="relative -mt-20">
          <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            Maaf, sepertinya halaman yang Anda cari tidak tersedia. Pastikan URL
            yang dimasukkan sudah benar atau halaman telah dipindahkan.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-900 text-amber-400 px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-green-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <Home className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
