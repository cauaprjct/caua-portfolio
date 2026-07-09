"use client";

import { useMemo, useState } from "react";
import { projects, sortByFeaturedOrder } from "@/config/data";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ShowMoreButton } from "./ShowMoreButton";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { featured, rest } = useMemo(() => sortByFeaturedOrder(projects), []);
  const visible = showAll ? [...featured, ...rest] : featured;

  return (
    <section aria-labelledby="projetos">
      <Reveal>
        <SectionHeading
          id="projetos"
          title="Projetos em destaque"
          intro="Os sistemas que mais pesam no currículo — painéis, automação, Azure e IA. O restante da lista está em “Ver mais”."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.06}>
            <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-dev/40">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <div className="flex items-center gap-3 text-white/40">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} no GitHub`}
                    className="transition-colors hover:text-white"
                  >
                    <FiGithub className="h-4 w-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir demo de ${project.title}`}
                      className="transition-colors hover:text-white"
                    >
                      <FiExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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

      <ShowMoreButton
        expanded={showAll}
        onToggle={() => setShowAll((v) => !v)}
        moreCount={rest.length}
        moreLabel={`Ver mais ${rest.length} projetos`}
      />
    </section>
  );
}
