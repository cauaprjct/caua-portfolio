"use client";

import {
  availability,
  processSteps,
  processTracks,
  whatsappUrl,
} from "@/config/data";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section aria-labelledby="como-funciona">
      <Reveal>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {availability.open ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {availability.label}
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/50">
              Agenda cheia no momento
            </span>
          )}
        </div>
        <SectionHeading
          id="como-funciona"
          title="Como funciona"
          intro={`${availability.note} Cinco passos — do primeiro WhatsApp à entrega.`}
        />
      </Reveal>

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.05}>
            <li className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <span className="font-mono text-xs font-semibold text-dev">
                {s.step}
              </span>
              <h3 className="mt-2 text-base font-bold text-white">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                {s.desc}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {processTracks.map((t, i) => (
          <Reveal key={t.label} delay={0.1 + i * 0.05}>
            <div
              className={[
                "rounded-xl border p-4",
                t.tone === "tech"
                  ? "border-tech/25 bg-tech/5"
                  : "border-dev/25 bg-dev/5",
              ].join(" ")}
            >
              <p
                className={[
                  "font-mono text-[11px] font-semibold uppercase tracking-wider",
                  t.tone === "tech" ? "text-tech" : "text-dev",
                ].join(" ")}
              >
                {t.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                {t.blurb}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-8 flex justify-center sm:justify-start">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-tech px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            <FaWhatsapp className="h-4 w-4" />
            Começar pelo WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
