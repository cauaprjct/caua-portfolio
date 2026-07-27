import {
  availability,
  processSteps,
  processTracks,
  whatsappMessages,
  whatsappUrl,
} from "@/config/data";
import { FaWhatsapp } from "react-icons/fa";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      className="scroll-mt-24"
    >
      <Reveal variant="fade">
        <AvailabilityBadge className="mb-5" />
        <SectionHeading
          id="como-funciona-titulo"
          title="Como funciona"
          intro={`${availability.note} Cinco passos — do primeiro WhatsApp à entrega.`}
        />
      </Reveal>

      <ol className="grid gap-3 lg:grid-cols-5 lg:gap-4">
        {processSteps.map((s, i) => (
          <Reveal
            key={s.step}
            as="li"
            variant="lift"
            delay={i * 0.05}
            className="flex h-full gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 lg:flex-col lg:p-5"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-dev/30 bg-dev/10 font-mono text-[11px] font-semibold text-dev">
              {s.step}
            </span>
            <div>
              <h3 className="text-base font-bold text-white">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/60">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {processTracks.map((t, i) => (
          <Reveal key={t.label} variant="lift" delay={0.08 + i * 0.05}>
            <div
              className={[
                "h-full rounded-xl border p-4",
                t.tone === "tech"
                  ? "border-tech/25 bg-tech/5"
                  : "border-dev/25 bg-dev/5",
              ].join(" ")}
            >
              <p
                className={[
                  "text-sm font-semibold",
                  t.tone === "tech" ? "text-tech" : "text-dev",
                ].join(" ")}
              >
                {t.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/65">
                {t.blurb}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-7 flex justify-center sm:justify-start">
          <a
            href={whatsappUrl(whatsappMessages.process)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-tech px-5 font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            <FaWhatsapp className="h-4 w-4" />
            Começar pelo WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
