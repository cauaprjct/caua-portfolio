"use client";

import { cases } from "@/config/data";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Cases() {
  return (
    <section aria-labelledby="cases">
      <Reveal>
        <SectionHeading
          id="cases"
          title="Cases"
          intro="Três entregas contadas de ponta a ponta: o problema do cliente, o que foi feito e o resultado obtido."
        />
      </Reveal>

      <div className="space-y-6">
        {cases.map((c, index) => (
          <Reveal key={c.id} delay={(index % 3) * 0.06}>
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dev/90">
                    {c.sector}
                  </p>
                  <h3 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/45">{c.context}</p>
                </div>
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-dev/40 hover:text-white"
                  >
                    {c.linkLabel ?? "Ver mais"}
                    <FiArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    Problema
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {c.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    Solução
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {c.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Resultado
                </h4>
                <ul className="mt-3 space-y-2">
                  {c.results.map((r) => (
                    <li
                      key={r}
                      className="flex gap-2.5 text-sm leading-relaxed text-white/75"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dev/15 text-dev">
                        <FiCheck className="h-3 w-3" />
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {c.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-white/60"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
