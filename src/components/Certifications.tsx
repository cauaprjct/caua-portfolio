"use client";

import { certifications } from "@/config/data";
import { FiCheck } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section aria-labelledby="certificacoes">
      <Reveal>
        <SectionHeading
          id="certificacoes"
          title="Formação & Certificações"
          intro="Autodidata com formação contínua por certificações — nas duas frentes: desenvolvimento e hardware/suporte técnico."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((group, i) => {
          const Icon = group.icon;
          const isTech = group.track === "tech";
          return (
            <Reveal key={group.group} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <span
                  className={[
                    "mb-4 flex h-9 w-9 items-center justify-center rounded-lg border",
                    isTech
                      ? "border-tech/30 bg-tech/10 text-tech"
                      : "border-dev/30 bg-dev/10 text-dev",
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-white">{group.group}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex gap-2.5">
                      <FiCheck
                        className={[
                          "mt-0.5 h-4 w-4 flex-shrink-0",
                          isTech ? "text-tech" : "text-dev",
                        ].join(" ")}
                      />
                      <span>
                        <span className="block text-sm font-medium text-white/90">
                          {item.name}
                        </span>
                        <span className="block text-xs text-white/50">
                          {item.detail}
                        </span>
                      </span>
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
