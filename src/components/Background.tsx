import { certifications, workExperience } from "@/config/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Trajetória e formação na mesma seção — eram duas, com a mesma textura de card.
 * Das certificações ficou o que faz trabalho de verdade.
 */
export function Background() {
  return (
    <section id="trajetoria" aria-labelledby="trajetoria-titulo" className="scroll-mt-24">
      <Reveal variant="fade">
        <SectionHeading
          id="trajetoria-titulo"
          title="Trajetória & formação"
          intro="De onde vem cada trilho: os trabalhos que já entreguei e a formação que sustenta o serviço."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {workExperience.map((job, index) => {
          const isDev = index === 0;
          return (
            <Reveal
              key={job.company}
              variant="lift"
              delay={index * 0.06}
              className="h-full"
            >
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="flex items-center gap-2 text-base font-bold text-white">
                      <span
                        className={[
                          "h-2 w-2 shrink-0 rounded-full",
                          isDev ? "bg-dev" : "bg-tech",
                        ].join(" ")}
                        aria-hidden
                      />
                      {job.company}
                    </h3>
                    <p
                      className={[
                        "mt-1 text-sm font-medium",
                        isDev ? "text-dev" : "text-tech",
                      ].join(" ")}
                    >
                      {job.position}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-white/60">
                    {job.period}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {job.shortDesc}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {job.bulletPoints.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-white/70"
                    >
                      <span
                        className={[
                          "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                          isDev ? "bg-dev/70" : "bg-tech/70",
                        ].join(" ")}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal variant="fade" delay={0.06}>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
          <h3 className="text-sm font-bold text-white">Formação</h3>
          <div className="mt-4 grid gap-5 sm:grid-cols-3">
            {certifications.map((group) => (
              <div key={group.group}>
                <p
                  className={[
                    "flex items-center gap-2 text-xs font-semibold",
                    group.track === "tech" ? "text-tech" : "text-dev",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full",
                      group.track === "tech" ? "bg-tech" : "bg-dev",
                    ].join(" ")}
                    aria-hidden
                  />
                  {group.group}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item.name} className="text-sm leading-snug text-white/70">
                      {item.name}
                      <span className="block text-xs text-white/60">
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
