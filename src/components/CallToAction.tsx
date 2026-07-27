import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiArrowUpRight, FiStar } from "react-icons/fi";
import {
  contact,
  testimonialStats,
  testimonials,
  whatsappMessages,
  whatsappUrl,
} from "@/config/data";
import { Reveal } from "./Reveal";

/**
 * Contato com a prova social junto — os depoimentos eram uma seção inteira
 * antes, com 8 cards e o valor de cada projeto no rótulo. Aqui ficam três,
 * do lado do botão, que é onde eles servem para algo.
 */
export function CallToAction() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="scroll-mt-24 border-t border-white/10 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="contato-titulo"
              className="text-2xl font-extrabold leading-tight text-white sm:text-3xl"
            >
              Precisa de <span className="text-dev">site</span>,{" "}
              <span className="text-dev">software</span> ou de{" "}
              <span className="text-tech">suporte técnico</span>?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">
              Me chama no WhatsApp com o que você precisa. Se for da minha área,
              já adianto escopo, prazo e próximos passos. Se não for, falo na boa.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl(whatsappMessages.contact)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-tech px-6 font-semibold text-black transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <FaWhatsapp className="h-5 w-5" />
                {contact.whatsappLabel}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-6 font-medium text-white/90 transition-colors hover:border-white/35 hover:bg-white/5 sm:w-auto"
              >
                <FiMail className="h-5 w-5" />
                {contact.email}
                <FiArrowUpRight className="h-4 w-4 text-white/60" aria-hidden />
              </a>
            </div>
          </div>
        </Reveal>

        {/* ---------- Prova social ---------- */}
        <Reveal variant="fade" delay={0.08}>
          <div className="mt-14 border-t border-white/10 pt-10">
            <h3 className="text-center text-sm font-bold text-white">
              O que dizem os clientes
            </h3>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {testimonialStats.map((stat) => (
                <li
                  key={stat}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/70"
                >
                  {stat}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Reveal
              key={t.name + t.position}
              as="li"
              variant="lift"
              delay={index * 0.06}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="mb-2.5 flex gap-0.5 text-tech" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} className="h-3.5 w-3.5 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-white/80">
                &ldquo;{t.testimonial}&rdquo;
              </blockquote>
              <div className="mt-4 text-xs">
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white transition-colors hover:text-dev"
                >
                  {t.name}
                </a>
                <p className="mt-0.5 text-white/60">
                  {t.position} · {t.company}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-center font-mono text-xs text-white/60">
          {contact.location}
        </p>
      </div>
    </section>
  );
}
