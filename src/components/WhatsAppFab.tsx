"use client";

import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/config/data";

/** Botão flutuante de WhatsApp — só mobile (header já tem CTA no desktop). */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-tech text-black shadow-lg shadow-black/40 transition-transform hover:scale-105 md:hidden"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
