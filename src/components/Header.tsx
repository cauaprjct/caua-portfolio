"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, whatsappUrl } from "@/config/data";

export function Header() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <motion.header
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-md"
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3"
        aria-label="Principal"
      >
        <a
          href="#top"
          className="shrink-0 font-mono text-sm font-bold tracking-tight text-white"
          onClick={close}
        >
          Cauã<span className="text-dev">.</span>Alves
        </a>

        {/* Desktop links — a partir de lg (evita barra apertada no tablet) */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-lg px-2 py-1.5 text-[13px] text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-tech/40 bg-tech/10 px-3 py-1.5 text-sm font-medium text-tech transition-colors hover:bg-tech/20"
          >
            <FaWhatsapp className="h-4 w-4" />
            <span className="hidden sm:inline">Fale comigo</span>
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/80 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile / tablet panel */}
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-background/95 backdrop-blur-md lg:hidden"
        >
          <ul className="mx-auto flex max-w-5xl flex-col px-4 py-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-base text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-1 border-t border-white/10 pt-2">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-tech"
              >
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </motion.header>
  );
}
