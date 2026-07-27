"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  clientSites,
  sortByFeaturedOrder,
  whatsappMessages,
  whatsappUrl,
} from "@/config/data";
import { FaWhatsapp } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ShowMoreButton } from "./ShowMoreButton";

export function ClientSites() {
  const [showAll, setShowAll] = useState(false);
  const { featured, rest } = useMemo(() => sortByFeaturedOrder(clientSites), []);
  const visible = showAll ? [...featured, ...rest] : featured;

  return (
    <section
      id="sites-clientes"
      aria-labelledby="sites-clientes-titulo"
      className="scroll-mt-24"
    >
      <Reveal variant="fade">
        <SectionHeading
          id="sites-clientes-titulo"
          title="Sites que estão no ar"
          intro="Doze sites publicados para clientes. Toque em qualquer um para abrir o site de verdade."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {visible.map((site, index) => (
          <Reveal key={site.liveUrl} variant="lift" delay={(index % 2) * 0.06}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-dev/40">
              <a
                href={site.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/40">
                  <Image
                    src={site.image}
                    alt={`Página inicial do site ${site.name}`}
                    width={1280}
                    height={800}
                    sizes="(min-width: 640px) 40vw, 92vw"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="flex items-start justify-between gap-3 text-base font-bold text-white">
                    {site.name}
                    <FiExternalLink
                      className="mt-0.5 h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-dev"
                      aria-hidden
                    />
                  </h3>
                  <p className="mt-0.5 text-xs text-white/60">
                    {site.segment} · {site.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {site.description}
                  </p>
                </div>
              </a>

              <a
                href={whatsappUrl(whatsappMessages.clientSite(site.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center gap-2 border-t border-white/10 px-5 text-xs font-medium text-tech transition-colors hover:bg-tech/10"
              >
                <FaWhatsapp className="h-4 w-4" />
                Quero um site assim
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <ShowMoreButton
        expanded={showAll}
        onToggle={() => setShowAll((v) => !v)}
        moreCount={rest.length}
        moreLabel={`Ver os outros ${rest.length} sites`}
        anchorId="sites-clientes"
      />
    </section>
  );
}
