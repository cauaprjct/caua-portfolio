"use client";

import { useState } from "react";
import { faqItems } from "@/config/data";
import { FiChevronDown } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq">
      <Reveal>
        <SectionHeading
          id="faq"
          title="Perguntas frequentes"
          intro="Respostas diretas antes do primeiro contato — WordPress, região, prazo e como contratar."
        />
      </Reveal>

      <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
        {faqItems.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={(i % 3) * 0.04}>
              <div>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] sm:px-6"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {item.q}
                  </span>
                  <FiChevronDown
                    className={[
                      "h-5 w-5 shrink-0 text-white/40 transition-transform",
                      isOpen ? "rotate-180 text-dev" : "",
                    ].join(" ")}
                  />
                </button>
                {isOpen ? (
                  <div className="px-5 pb-5 sm:px-6">
                    <p className="max-w-3xl text-sm leading-relaxed text-white/60">
                      {item.a}
                    </p>
                  </div>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
