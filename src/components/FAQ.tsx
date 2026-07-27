import { faqItems, whatsappMessages, whatsappUrl } from "@/config/data";
import { FaWhatsapp } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * `<details>` nativo em vez de acordeão controlado: abre e fecha sem JS,
 * e ainda vira um alvo de toque de linha inteira.
 */
export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-titulo" className="scroll-mt-24">
      <Reveal variant="fade">
        <SectionHeading
          id="faq-titulo"
          title="Antes de me chamar"
          intro="Prazo, região, pagamento e o que eu não faço — respondido aqui, para você não precisar perguntar."
        />
      </Reveal>

      <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        {faqItems.map((item, i) => (
          <Reveal key={item.q} variant="fade" delay={(i % 3) * 0.04}>
            <details className="group" open={i === 0}>
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03] sm:px-6 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold text-white sm:text-base">
                  {item.q}
                </span>
                <FiChevronDown
                  className="h-5 w-5 shrink-0 text-white/50 transition-transform group-open:rotate-180 group-open:text-dev"
                  aria-hidden
                />
              </summary>
              <p className="max-w-3xl px-5 pb-5 text-sm leading-relaxed text-white/60 sm:px-6">
                {item.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={whatsappUrl(whatsappMessages.faq)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-tech/40 bg-tech/10 px-5 text-sm font-semibold text-tech transition-colors hover:bg-tech/20"
          >
            <FaWhatsapp className="h-4 w-4" />
            Ficou outra dúvida? Pergunta aí
          </a>
        </div>
      </Reveal>
    </section>
  );
}
