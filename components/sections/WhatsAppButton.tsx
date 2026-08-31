"use client"; // Wajib karena menggunakan efek hover/interaksi

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+6283809999927"; // Ganti dengan nomor WhatsApp perusahaan (format: 62...)
  const message =
    "Hello Duta Energi, I would like to inquire about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Contact us on WhatsApp"
    >
      {/* Label Tooltip (Muncul saat hover) */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap bg-white text-slate-900 text-sm font-bold px-0 py-2 rounded-full shadow-xl transition-all duration-500 group-hover:max-w-xs group-hover:px-5 border border-slate-100">
        Chat with us
      </span>

      {/* Button Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
        <MessageCircle size={30} fill="currentColor" />

        {/* Efek Ping (Animasi Berdenyut agar menarik perhatian) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping z-[-1]"></span>
      </div>
    </a>
  );
}
