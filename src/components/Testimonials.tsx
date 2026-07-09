"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FiStar } from "react-icons/fi";
import { testimonials } from "@/config/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section aria-labelledby="depoimentos">
      <Reveal>
        <SectionHeading
          id="depoimentos"
          title="O que dizem os clientes"
          intro="Projetos entregues no Brasil, Reino Unido e Portugal — 100% concluídos, avaliação 5★ no Freelancer.com."
        />
      </Reveal>

      <div className="mb-8 flex flex-wrap gap-3">
        {[
          "5.0★ no Freelancer.com",
          "7 avaliações",
          "+US$ 3.7K em projetos",
          "100% de conclusão",
        ].map((stat) => (
          <span
            key={stat}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/70"
          >
            {stat}
          </span>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, index) => (
          <Reveal key={t.name} delay={(index % 2) * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-3 flex gap-0.5 text-tech" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="flex-1 leading-relaxed text-white/80">
                &ldquo;{t.testimonial}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <Avatar className="h-11 w-11">
                  <AvatarFallback className="bg-white/10 text-sm font-semibold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <a
                    href={t.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white transition-colors hover:text-dev"
                  >
                    {t.name}
                  </a>
                  <p className="text-xs text-white/50">
                    {t.position} · {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
