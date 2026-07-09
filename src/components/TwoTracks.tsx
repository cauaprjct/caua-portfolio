"use client";

import { FiCode, FiTool, FiPlus } from "react-icons/fi";
import { twoTracks, heroSection } from "@/config/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const { dev, tech } = heroSection;

export function TwoTracks() {
  return (
    <section aria-labelledby="proposta">
      <Reveal>
        <SectionHeading id="proposta" title={twoTracks.title} intro={twoTracks.description} />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-dev/25 bg-dev/[0.06] p-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-dev">
              <FiCode className="h-4 w-4" /> {dev.label}
            </div>
            <p className="mt-3 text-lg font-semibold text-white">{dev.kicker}</p>
            <p className="mt-1 text-sm text-white/60">{dev.role}</p>
          </div>

          <div className="flex items-center justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70">
              <FiPlus className="h-5 w-5" />
            </span>
          </div>

          <div className="rounded-2xl border border-tech/25 bg-tech/[0.06] p-6 text-right">
            <div className="flex items-center justify-end gap-2 font-mono text-xs uppercase tracking-[0.18em] text-tech">
              {tech.label} <FiTool className="h-4 w-4" />
            </div>
            <p className="mt-3 text-lg font-semibold text-white">{tech.kicker}</p>
            <p className="mt-1 text-sm text-white/60">{tech.role}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
