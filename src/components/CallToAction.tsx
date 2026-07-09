"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { contact, whatsappUrl } from "@/config/data";
import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="scroll-mt-24 border-t border-white/10 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="contato-titulo"
              className="text-3xl font-extrabold leading-tight text-white sm:text-4xl"
            >
              Precisa de{" "}
              <span className="text-dev">software</span>,{" "}
              <span className="text-dev">site</span> ou de{" "}
              <span className="text-tech">suporte técnico</span>?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Me chama no WhatsApp com o que você precisa. A gente segue o
              processo: alinhar escopo → proposta → execução → entrega. Dashboard,
              automação, site sob medida ou manutenção — se for da minha área, já
              adianto os próximos passos.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-tech px-6 py-3 font-semibold text-black transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <FaWhatsapp className="h-5 w-5" />
                {contact.whatsappLabel}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium text-white/90 transition-colors hover:border-white/35 hover:bg-white/5 sm:w-auto"
              >
                <FiMail className="h-5 w-5" />
                {contact.email}
                <FiArrowUpRight className="h-4 w-4 text-white/50" />
              </a>
            </div>

            <p className="mt-6 font-mono text-xs text-white/40">
              {contact.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
