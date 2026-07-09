"use client";

import { services } from "@/config/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const columns = [
  { ...services.dev, tone: "dev" as const },
  { ...services.tech, tone: "tech" as const },
];

export function Services() {
  return (
    <section aria-labelledby="servicos">
      <Reveal>
        <SectionHeading
          id="servicos"
          title="O que eu resolvo"
          intro="Duas frentes de trabalho. Escolha uma ou combine as duas — do sistema ou site que automatiza e apresenta o seu negócio à máquina que precisa voltar a funcionar."
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2">
        {columns.map((col, i) => {
          const Icon = col.icon;
          const isDev = col.tone === "dev";
          return (
            <Reveal key={col.label} delay={i * 0.1}>
              <div className="h-full">
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-lg border",
                      isDev
                        ? "border-dev/30 bg-dev/10 text-dev"
                        : "border-tech/30 bg-tech/10 text-tech",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold text-white">{col.label}</h3>
                </div>

                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item.title}
                      className={[
                        "rounded-xl border bg-white/[0.02] p-5 transition-colors",
                        isDev
                          ? "border-white/10 hover:border-dev/40"
                          : "border-white/10 hover:border-tech/40",
                      ].join(" ")}
                    >
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
