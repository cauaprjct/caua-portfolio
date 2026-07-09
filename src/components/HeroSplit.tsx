"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaBriefcase } from "react-icons/fa";
import { FiMapPin, FiChevronDown, FiCode, FiTool } from "react-icons/fi";
import { heroSection } from "@/config/data";

const { dev, tech, socialLinks, name, location } = heroSection;

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

function Terminal({
  lines,
  accent,
}: {
  lines: string[];
  accent: "dev" | "tech";
}) {
  const dotColor =
    accent === "dev"
      ? ["bg-dev/70", "bg-dev/40", "bg-dev/20"]
      : ["bg-tech/70", "bg-tech/40", "bg-tech/20"];
  return (
    <div className="w-full max-w-sm rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
        <span className={`w-2.5 h-2.5 rounded-full ${dotColor[0]}`} />
        <span className={`w-2.5 h-2.5 rounded-full ${dotColor[1]}`} />
        <span className={`w-2.5 h-2.5 rounded-full ${dotColor[2]}`} />
      </div>
      <div className="px-4 py-3 font-mono text-[13px] leading-relaxed space-y-1">
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

export function HeroSplit() {
  const reduce = useReducedMotion();
  const [side, setSide] = useState<Side>(null);

  const devEnter = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, x: -32 }, animate: { opacity: 1, x: 0 } };
  const techEnter = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, x: 32 }, animate: { opacity: 1, x: 0 } };

  return (
    <section
      aria-label="Apresentação"
      className="relative flex min-h-[100svh] flex-col overflow-hidden lg:block"
    >
      {/* ---------- LADO DEV ---------- */}
      <motion.div
        {...devEnter}
        transition={{ duration: 0.7, ease: "easeOut" }}
        onMouseEnter={() => setSide("dev")}
        onMouseLeave={() => setSide(null)}
        className={[
          "group relative flex flex-1 items-start justify-start",
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
        <div className="relative z-10 w-full px-6 pt-24 pb-8 sm:px-10 lg:w-[44%] lg:pb-10 lg:pt-28 lg:pl-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-dev">
            <FiCode className="h-4 w-4" />
            {dev.label}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl">
            {dev.kicker}
          </h2>
          <p className="mt-2 font-mono text-sm text-dev/90">{dev.role}</p>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/70">
            {dev.blurb}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
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
      </motion.div>

      {/* ---------- NOME (mobile): no fluxo, entre os painéis — não sobrepõe ---------- */}
      <div className="relative z-20 flex shrink-0 flex-col items-center border-y border-white/10 bg-black/70 px-4 py-5 text-center backdrop-blur-md lg:hidden">
        <span className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
          <FiMapPin className="h-3 w-3" /> {location}
        </span>
        <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
          {name}
        </h1>
        <p
          className="mt-1.5 font-mono text-[11px] text-white/80 sm:text-xs"
          aria-label="Desenvolvedor e Técnico de Informática"
        >
          <span className="text-dev">Desenvolvedor</span>
          <span className="mx-1.5 text-white/40" aria-hidden>
            {" "}
            &{" "}
          </span>
          <span className="text-tech">Técnico de Informática</span>
        </p>
        <div className="mt-3 flex items-center gap-5">
          {socialLinks.map(({ title, url }) => (
            <a
              key={title}
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-colors hover:text-white"
            >
              <SocialIcon title={title} />
            </a>
          ))}
        </div>
      </div>

      {/* ---------- LADO TÉCNICO ---------- */}
      <motion.div
        {...techEnter}
        transition={{ duration: 0.7, ease: "easeOut" }}
        onMouseEnter={() => setSide("tech")}
        onMouseLeave={() => setSide(null)}
        className={[
          "group relative flex flex-1 items-end justify-end",
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
        <div className="relative z-10 w-full px-6 pb-12 pt-8 text-right sm:px-10 lg:ml-auto lg:w-[44%] lg:pb-28 lg:pt-10 lg:pr-14">
          <div className="flex items-center justify-end gap-2 font-mono text-xs uppercase tracking-[0.2em] text-tech">
            {tech.label}
            <FiTool className="h-4 w-4" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl">
            {tech.kicker}
          </h2>
          <p className="mt-2 font-mono text-sm text-tech/90">{tech.role}</p>
          <p className="mt-4 ml-auto max-w-sm text-[15px] leading-relaxed text-white/70">
            {tech.blurb}
          </p>
          <ul className="mt-5 flex flex-wrap justify-end gap-2">
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
      </motion.div>

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

      {/* ---------- NOME NA COSTURA (desktop) ---------- */}
      <motion.div
        initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center px-4 text-center lg:flex"
      >
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
          <span className="mx-2 text-white/40" aria-hidden>
            {" "}
            &{" "}
          </span>
          <span className="text-tech">Técnico de Informática</span>
        </p>
        <div className="pointer-events-auto mt-6 flex items-center gap-5">
          {socialLinks.map(({ title, url }) => (
            <a
              key={title}
              href={url}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              <SocialIcon title={title} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* ---------- Scroll indicator ---------- */}
      <div className="absolute inset-x-0 bottom-5 z-30 hidden justify-center lg:flex">
        <motion.div
          animate={reduce ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/40"
        >
          <FiChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
}
