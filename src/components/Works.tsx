"use client";

import { useMemo, useState } from "react";
import {
  cases,
  projects,
  sortByFeaturedOrder,
  whatsappMessages,
  whatsappUrl,
} from "@/config/data";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiCheck,
  FiChevronDown,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ShowMoreButton } from "./ShowMoreButton";

/**
 * Cases e projetos na mesma seção.
 *
 * Antes eram três seções quase idênticas (cases, sites, projetos) e o visitante
 * tinha que segurar a diferença entre elas. Os sites viraram a grade de
 * screenshots; aqui fica o que precisa de explicação: o problema, o que eu fiz
 * e um número. O resto do resultado só abre se a pessoa pedir.
 */
export function Works() {
  const [showAll, setShowAll] = useState(false);
  const { featured, rest } = useMemo(() => sortByFeaturedOrder(projects), []);
  const visibleProjects = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="trabalhos" aria-labelledby="trabalhos-titulo" className="scroll-mt-24">
      <Reveal variant="fade">
        <SectionHeading
          id="trabalhos-titulo"
          title="Cases e projetos"
          intro="Quatro entregas contadas por inteiro: a dor do cliente, o que eu construí e o resultado."
        />
      </Reveal>

      <div className="space-y-5">
        {cases.map((c, index) => (
          <Reveal key={c.id} delay={(index % 2) * 0.06}>
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-dev">{c.sector}</p>
                  <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{c.context}</p>
                </div>
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-lg border border-white/10 px-3 text-xs font-medium text-white/80 transition-colors hover:border-dev/40 hover:text-white"
                  >
                    {c.linkLabel ?? "Ver mais"}
                    <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ) : null}
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    O problema
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {c.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    O que eu fiz
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {c.solution}
                  </p>
                </div>
              </div>

              <p className="mt-5 flex gap-2.5 rounded-xl border border-dev/20 bg-dev/[0.07] p-4 text-sm font-medium leading-relaxed text-white">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dev/20 text-dev">
                  <FiCheck className="h-3 w-3" aria-hidden />
                </span>
                {c.highlight}
              </p>

              <details className="group mt-3">
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                  Ver o resto do resultado
                  <FiChevronDown
                    className="h-4 w-4 transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <ul className="mt-1 space-y-2 pb-1">
                  {c.details.map((d) => (
                    <li
                      key={d}
                      className="flex gap-2.5 text-sm leading-relaxed text-white/70"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dev/70"
                        aria-hidden
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </details>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <ul className="flex flex-wrap gap-2">
                  {c.stack.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-white/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(whatsappMessages.caseStudy(c.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-tech transition-colors hover:text-white"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Tenho um caso parecido
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* ---------- Projetos próprios ---------- */}
      <Reveal variant="fade">
        <h3 className="mb-4 mt-14 text-lg font-bold text-white">
          Projetos próprios
        </h3>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/60">
          O que eu construo fora de cliente — onde testo stack nova antes de
          colocar em produção pra alguém.
        </p>
      </Reveal>

      <ul className="grid gap-3 sm:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <Reveal
            key={project.title}
            as="li"
            variant="lift"
            delay={(index % 2) * 0.05}
            className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-dev/40"
          >
            <h4 className="text-base font-bold text-white">{project.title}</h4>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/60">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-white/60"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-1">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <FiGithub className="h-4 w-4" aria-hidden />
                  <span className="sr-only">{project.title} — código / projeto</span>
                </a>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <FiExternalLink className="h-4 w-4" aria-hidden />
                    <span className="sr-only">{project.title} — abrir demo</span>
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      <ShowMoreButton
        expanded={showAll}
        onToggle={() => setShowAll((v) => !v)}
        moreCount={rest.length}
        moreLabel={`Ver mais ${rest.length} projetos`}
        anchorId="trabalhos"
      />
    </section>
  );
}
