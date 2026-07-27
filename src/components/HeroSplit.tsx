"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaBriefcase } from "react-icons/fa";
import { FiMapPin, FiChevronDown, FiCode, FiTool } from "react-icons/fi";
import { heroSection, whatsappMessages, whatsappUrl } from "@/config/data";

const { dev, tech, socialLinks, name, location, pitch, ctaLabel, ctaHint } =
  heroSection;

type Side = "dev" | "tech" | null;

function SocialIcon({ title }: { title: string }) {
  const base = "w-5 h-5";
  switch (title) {
    case "GitHub":
      return <FaGithub className={base} />;
    case "WhatsApp":
      return <FaWhatsapp className={base} />;
    case "Freelancer":
      return <FaBriefcase className={base} />;
    default:
      return <FaLinkedinIn className={base} />;
  }
}

/** Alvo de toque de 44px mantendo o ícone em 20px. */
function SocialRow({ tone }: { tone: "light" | "dim" }) {
  return (
    <div className="flex items-center gap-1">
      {socialLinks.map(({ title, url }) => (
        <a
          key={title}
          href={url}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-white/10 hover:text-white",
            tone === "light" ? "text-white/80" : "text-white/70",
          ].join(" ")}
        >
          <SocialIcon title={title} />
          <span className="sr-only">{title}</span>
        </a>
      ))}
    </div>
  );
}

function Terminal({
  lines,
  accent,
  compact = false,
}: {
  lines: string[];
  accent: "dev" | "tech";
  compact?: boolean;
}) {
  const dotColor =
    accent === "dev"
      ? ["bg-dev/70", "bg-dev/40", "bg-dev/20"]
      : ["bg-tech/70", "bg-tech/40", "bg-tech/20"];
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className={`h-2.5 w-2.5 rounded-full ${dotColor[0]}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dotColor[1]}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dotColor[2]}`} />
      </div>
      <div
        className={[
          "space-y-1 font-mono leading-relaxed",
          compact ? "px-3 py-2 text-left text-[11px]" : "px-4 py-3 text-[13px]",
        ].join(" ")}
      >
        {lines.map((line, i) => (
          <p
            key={i}
            className={
              line.startsWith("$")
                ? accent === "dev"
                  ? "text-dev"
                  : "text-tech"
                : line.startsWith("✓")
                  ? "text-emerald-300"
                  : "text-white/60"
            }
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

/** Um terminal só no celular, alternando entre os dois trilhos. */
function MobileTerminal() {
  const [accent, setAccent] = useState<"dev" | "tech">("dev");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setAccent((a) => (a === "dev" ? "tech" : "dev")),
      4500
    );
    return () => clearInterval(id);
  }, []);

  const track = accent === "dev" ? dev : tech;
  const lines = [track.code[0], track.code[track.code.length - 1]];

  return (
    <div className="mt-4 w-full max-w-xs lg:hidden" aria-hidden>
      <Terminal lines={lines} accent={accent} compact />
    </div>
  );
}

function HeroCta({ full = false }: { full?: boolean }) {
  return (
    <a
      href={whatsappUrl(whatsappMessages.hero)}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-tech px-6 font-semibold text-black transition-transform hover:scale-[1.02]",
        full ? "w-full" : "",
      ].join(" ")}
    >
      <FaWhatsapp className="h-5 w-5" />
      {ctaLabel}
    </a>
  );
}

export function HeroSplit() {
  const [side, setSide] = useState<Side>(null);

  return (
    <section
      aria-label="Apresentação"
      className="relative flex min-h-[100svh] flex-col overflow-hidden lg:block"
    >
      {/* ---------- LADO DEV ---------- */}
      <div
        onMouseEnter={() => setSide("dev")}
        onMouseLeave={() => setSide(null)}
        className={[
          "anim-left group relative flex flex-1 items-start justify-start",
          "bg-grid transition-[filter,opacity] duration-500",
          "lg:absolute lg:inset-0 lg:min-h-0",
          "lg:[clip-path:polygon(0_0,57%_0,43%_100%,0_100%)]",
          side === "tech" ? "opacity-55 lg:brightness-[0.6]" : "opacity-100",
        ].join(" ")}
        style={{
          background:
            "radial-gradient(120% 90% at 15% 15%, oklch(0.28 0.06 240 / 0.55), transparent 60%), radial-gradient(90% 80% at 0% 100%, oklch(0.22 0.05 250 / 0.7), transparent 55%), oklch(0.15 0.01 255)",
        }}
      >
        <div className="relative z-10 w-full px-6 pb-8 pt-24 sm:px-10 lg:w-[44%] lg:pb-10 lg:pl-14 lg:pt-28">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-dev">
            <FiCode className="h-4 w-4" />
            {dev.label}
          </div>
          <p className="mt-3 text-2xl font-extrabold leading-[1.1] text-white sm:text-3xl lg:text-4xl">
            {dev.kicker}
          </p>
          <p className="mt-1.5 font-mono text-sm text-dev/90">{dev.role}</p>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/70">
            {dev.blurb}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {dev.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-dev/30 bg-dev/10 px-3 py-1 text-xs font-medium text-dev"
              >
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-6 hidden lg:block">
            <Terminal lines={dev.code} accent="dev" />
          </div>
        </div>
      </div>

      {/* ---------- NOME + CTA (mobile): no fluxo, entre os painéis ---------- */}
      <div className="relative z-20 flex shrink-0 flex-col items-center border-y border-white/10 bg-black/70 px-4 py-5 text-center backdrop-blur-md lg:hidden">
        <span className="mb-2 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
          <FiMapPin className="h-3 w-3" /> {location}
        </span>
        <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">
          {name}
        </h1>
        <p
          className="mt-2 font-mono text-xs text-white/80"
          aria-label="Desenvolvedor e Técnico de Informática"
        >
          <span className="text-dev">Desenvolvedor</span>
          <span className="mx-1.5 text-white/60" aria-hidden>
            {" "}
            &{" "}
          </span>
          <span className="text-tech">Técnico de Informática</span>
        </p>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
          {pitch}
        </p>

        <div className="mt-4 w-full max-w-xs">
          <HeroCta full />
          <p className="mt-2 text-[11px] text-white/60">{ctaHint}</p>
        </div>

        <div className="mt-2">
          <SocialRow tone="light" />
        </div>

        <MobileTerminal />
      </div>

      {/* ---------- LADO TÉCNICO ---------- */}
      <div
        onMouseEnter={() => setSide("tech")}
        onMouseLeave={() => setSide(null)}
        className={[
          "anim-right group relative flex flex-1 items-start justify-start lg:items-end lg:justify-end",
          "bg-grid transition-[filter,opacity] duration-500",
          "lg:absolute lg:inset-0 lg:min-h-0",
          "lg:[clip-path:polygon(57%_0,100%_0,100%_100%,43%_100%)]",
          side === "dev" ? "opacity-55 lg:brightness-[0.6]" : "opacity-100",
        ].join(" ")}
        style={{
          background:
            "radial-gradient(120% 90% at 85% 85%, oklch(0.3 0.08 55 / 0.5), transparent 60%), radial-gradient(90% 80% at 100% 0%, oklch(0.24 0.06 45 / 0.65), transparent 55%), oklch(0.15 0.012 60)",
        }}
      >
        <div className="relative z-10 w-full px-6 pb-12 pt-8 sm:px-10 lg:ml-auto lg:w-[44%] lg:pb-28 lg:pr-14 lg:pt-10 lg:text-right">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-tech lg:justify-end">
            <FiTool className="h-4 w-4 lg:order-2" />
            {tech.label}
          </div>
          <p className="mt-3 text-2xl font-extrabold leading-[1.1] text-white sm:text-3xl lg:text-4xl">
            {tech.kicker}
          </p>
          <p className="mt-1.5 font-mono text-sm text-tech/90">{tech.role}</p>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/70 lg:ml-auto">
            {tech.blurb}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 lg:justify-end">
            {tech.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-tech/30 bg-tech/10 px-3 py-1 text-xs font-medium text-tech"
              >
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-6 hidden justify-end lg:flex">
            <Terminal lines={tech.code} accent="tech" />
          </div>
        </div>
      </div>

      {/* ---------- COSTURA DIAGONAL (desktop) ---------- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
      >
        <div
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 rotate-[8.13deg] scale-y-150"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--seam), transparent)",
            boxShadow: "0 0 24px 2px oklch(0.98 0.015 90 / 0.35)",
          }}
        />
      </div>

      {/* ---------- NOME + CTA NA COSTURA (desktop) ---------- */}
      <div className="anim-pop pointer-events-none absolute inset-x-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center px-4 text-center lg:flex">
        <span className="mb-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-xs text-white/70 backdrop-blur-md">
          <FiMapPin className="h-3.5 w-3.5" /> {location}
        </span>
        <h1 className="text-6xl font-black tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] xl:text-7xl">
          {name}
        </h1>
        <p
          className="mt-3 font-mono text-sm text-white/80"
          aria-label="Desenvolvedor e Técnico de Informática"
        >
          <span className="text-dev">Desenvolvedor</span>
          <span className="mx-2 text-white/60" aria-hidden>
            {" "}
            &{" "}
          </span>
          <span className="text-tech">Técnico de Informática</span>
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
          {pitch}
        </p>
        <div className="pointer-events-auto mt-6 flex flex-col items-center gap-1">
          <HeroCta />
          <SocialRow tone="dim" />
        </div>
      </div>

      {/* ---------- Scroll indicator ---------- */}
      <div className="absolute inset-x-0 bottom-5 z-30 hidden justify-center lg:flex">
        <div className="anim-nudge text-white/60">
          <FiChevronDown className="h-6 w-6" aria-hidden />
        </div>
      </div>
    </section>
  );
}
