"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, whatsappMessages, whatsappUrl } from "@/config/data";

const FOCUSABLE = 'a[href], button:not([disabled])';

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  /* Seção ativa — numa página longa, saber onde você está. */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const current = ids.filter((id) => visible.has(id));
        setActive(current.length ? current[current.length - 1] : null);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* Progresso de leitura — sem re-render, direto no transform. */
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const bar = progressRef.current;
      if (!bar) return;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Menu aberto: trava o scroll, prende o Tab no painel, esconde o FAB. */
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    document.body.style.overflow = "hidden";
    document.documentElement.dataset.navOpen = "true";
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;

      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const activeEl = document.activeElement;

      if (e.shiftKey && (activeEl === first || !panel.contains(activeEl))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (activeEl === last || !panel.contains(activeEl))) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      delete document.documentElement.dataset.navOpen;
    };
  }, [open]);

  return (
    <header className="anim-top fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-2.5"
        aria-label="Principal"
      >
        <a
          href="#top"
          className="shrink-0 font-mono text-sm font-bold tracking-tight text-white"
          onClick={close}
        >
          Cauã<span className="text-dev">.</span>Alves
        </a>

        {/* Links no desktop — a partir de lg (evita barra apertada no tablet) */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map(({ href, label }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? "true" : undefined}
                  className={[
                    "rounded-lg px-2.5 py-2 text-[13px] transition-colors hover:bg-white/5 hover:text-white",
                    isActive ? "bg-white/[0.06] text-white" : "text-white/65",
                  ].join(" ")}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl(whatsappMessages.header)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-lg border border-tech/40 bg-tech/10 px-3 text-sm font-medium text-tech transition-colors hover:bg-tech/20"
          >
            <FaWhatsapp className="h-4 w-4" />
            Fale comigo
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white/80 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Progresso de leitura */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden"
      >
        <div
          ref={progressRef}
          className="h-full origin-left bg-dev/70"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Painel mobile / tablet */}
      {open ? (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="border-t border-white/10 bg-background/95 backdrop-blur-md lg:hidden"
        >
          <ul className="mx-auto flex max-w-5xl flex-col px-4 py-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  aria-current={active === href.slice(1) ? "true" : undefined}
                  className={[
                    "flex min-h-12 items-center rounded-lg px-3 text-base transition-colors hover:bg-white/5 hover:text-white",
                    active === href.slice(1) ? "text-white" : "text-white/80",
                  ].join(" ")}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-1 border-t border-white/10 pt-2">
              <a
                href={whatsappUrl(whatsappMessages.header)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex min-h-12 items-center gap-2 rounded-lg px-3 text-base font-medium text-tech"
              >
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
