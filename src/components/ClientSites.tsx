"use client";

import { useMemo, useState } from "react";
import { clientSites, sortByFeaturedOrder } from "@/config/data";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ShowMoreButton } from "./ShowMoreButton";

export function ClientSites() {
  const [showAll, setShowAll] = useState(false);
  const { featured, rest } = useMemo(
    () => sortByFeaturedOrder(clientSites),
    []
  );
  const visible = showAll ? [...featured, ...rest] : featured;

  return (
    <section aria-labelledby="sites-clientes">
      <Reveal>
        <SectionHeading
          id="sites-clientes"
          title="Sites publicados para clientes"
          intro="Seis destaques de sites sob medida no ar — cada um com a cara e o objetivo do negócio. Os demais ficam um clique abaixo."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((site, index) => (
          <Reveal key={site.liveUrl} delay={(index % 2) * 0.06}>
            <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-dev/40">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dev/90">
                    {site.segment}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-white">
                    {site.name}
                  </h3>
                </div>
                <a
                  href={site.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir site de ${site.name}`}
                  className="shrink-0 rounded-lg border border-white/10 p-2 text-white/40 transition-colors hover:border-dev/40 hover:text-white"
                >
                  <FiExternalLink className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-2 flex items-center gap-1.5 text-xs text-white/45">
                <FiMapPin className="h-3.5 w-3.5 shrink-0" />
                <span>
                  {site.client}
                  <span className="text-white/25"> · </span>
                  {site.location}
                </span>
              </p>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                {site.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <ul className="flex flex-wrap gap-2">
                  {site.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-white/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={site.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-dev transition-colors hover:text-white"
                >
                  Ver site
                  <FiExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ShowMoreButton
        expanded={showAll}
        onToggle={() => setShowAll((v) => !v)}
        moreCount={rest.length}
        moreLabel={`Ver mais ${rest.length} sites`}
      />
    </section>
  );
}
