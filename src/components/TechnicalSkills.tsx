"use client";

import { techStack } from "@/config/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const devSkills = techStack.filter((s) => s.track === "dev");
const techSkills = techStack.filter((s) => s.track === "tech");

function SkillTrack({
  label,
  tone,
  skills,
}: {
  label: string;
  tone: "dev" | "tech";
  skills: typeof techStack;
}) {
  const isDev = tone === "dev";
  return (
    <div>
      <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]">
        <span
          className={[
            "h-2 w-2 rounded-full",
            isDev ? "bg-dev" : "bg-tech",
          ].join(" ")}
        />
        <span className={isDev ? "text-dev" : "text-tech"}>{label}</span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <span
              key={skill.name}
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              <Icon className={`h-4 w-4 ${skill.color}`} />
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function TechnicalSkills() {
  return (
    <section aria-labelledby="skills">
      <Reveal>
        <SectionHeading
          id="skills"
          title="Ferramentas de trabalho"
          intro="A stack que uso para construir software e para manter equipamentos funcionando."
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <SkillTrack label="Desenvolvimento & Dados" tone="dev" skills={devSkills} />
        </Reveal>
        <Reveal delay={0.1}>
          <SkillTrack label="Técnico & Hardware" tone="tech" skills={techSkills} />
        </Reveal>
      </div>
    </section>
  );
}
