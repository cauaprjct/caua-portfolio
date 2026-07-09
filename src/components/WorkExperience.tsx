"use client";

import { workExperience } from "@/config/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WorkExperience() {
  return (
    <section aria-labelledby="experiencia">
      <Reveal>
        <SectionHeading id="experiencia" title="Trajetória" />
      </Reveal>

      <div className="space-y-10">
        {workExperience.map((job, index) => {
          const isDev = index === 0;
          return (
            <Reveal key={job.company} delay={index * 0.1}>
              <article className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
                <span
                  className={[
                    "absolute left-0 top-6 h-8 w-1 rounded-r",
                    isDev ? "bg-dev" : "bg-tech",
                  ].join(" ")}
                  aria-hidden
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.company}</h3>
                    <p
                      className={[
                        "font-medium",
                        isDev ? "text-dev" : "text-tech",
                      ].join(" ")}
                    >
                      {job.position}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-white/50">{job.period}</span>
                </div>

                <p className="mt-4 leading-relaxed text-white/70">{job.shortDesc}</p>

                <ul className="mt-4 space-y-2">
                  {job.bulletPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <span
                        className={[
                          "mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full",
                          isDev ? "bg-dev/70" : "bg-tech/70",
                        ].join(" ")}
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
    </section>
  );
}
