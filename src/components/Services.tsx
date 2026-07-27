import {
  featuredTools,
  services,
  toolsByName,
  whatsappMessages,
  whatsappUrl,
} from "@/config/data";
import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const columns = [
  { ...services.dev, tone: "dev" as const, tools: toolsByName(featuredTools.dev) },
  { ...services.tech, tone: "tech" as const, tools: toolsByName(featuredTools.tech) },
];

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="scroll-mt-24">
      <Reveal variant="fade">
        <SectionHeading
          id="servicos-titulo"
          title="O que eu resolvo"
          intro="Duas frentes. Escolha uma ou combine as duas — e toque no que você precisa para já começar a conversa no assunto certo."
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-2">
        {columns.map((col, i) => {
          const Icon = col.icon;
          const isDev = col.tone === "dev";
          return (
            <Reveal key={col.label} delay={i * 0.08}>
              <div className="h-full">
                <div className="mb-4 flex items-center gap-3">
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

                <p className="mb-5 text-sm leading-relaxed text-white/60">
                  {col.summary}
                </p>

                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={whatsappUrl(whatsappMessages.service(item.title))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={[
                          "group block rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors",
                          isDev ? "hover:border-dev/40" : "hover:border-tech/40",
                        ].join(" ")}
                      >
                        <h4 className="flex items-start justify-between gap-3 font-semibold text-white">
                          {item.title}
                          <FiArrowUpRight
                            className={[
                              "mt-0.5 h-4 w-4 shrink-0 text-white/40 transition-colors",
                              isDev
                                ? "group-hover:text-dev"
                                : "group-hover:text-tech",
                            ].join(" ")}
                            aria-hidden
                          />
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                          {item.desc}
                        </p>
                        <span
                          className={[
                            "mt-3 inline-block text-xs font-medium",
                            isDev ? "text-dev" : "text-tech",
                          ].join(" ")}
                        >
                          Falar sobre isso no WhatsApp
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {col.tools.map((tool) => {
                    const ToolIcon = tool.icon;
                    return (
                      <li
                        key={tool.name}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/70"
                      >
                        <ToolIcon className={`h-3.5 w-3.5 ${tool.color}`} />
                        {tool.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
