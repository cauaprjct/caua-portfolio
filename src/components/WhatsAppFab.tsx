"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappMessages, whatsappUrl } from "@/config/data";

/**
 * Botão flutuante de WhatsApp — só no celular (o header já tem CTA no desktop).
 *
 * Só aparece depois do hero: lá o CTA já é um botão com rótulo, e o FAB
 * ficava cobrindo conteúdo no load. A classe `js-fab` é o gancho do CSS que
 * o esconde com o menu aberto, para não pintar na frente da navegação.
 */
export function WhatsAppFab() {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setPast(window.scrollY > window.innerHeight * 0.7);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!past) return null;

  return (
    <a
      href={whatsappUrl(whatsappMessages.fab)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="js-fab fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-tech text-black shadow-lg shadow-black/40 transition-transform hover:scale-105 md:hidden"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
