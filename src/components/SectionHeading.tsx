import type { ReactNode } from "react";

/**
 * Título de seção. Fica menor que o h1 do hero de propósito: o nome tem que
 * dominar a primeira tela, e os rótulos de seção vêm um degrau abaixo.
 */
export function SectionHeading({
  title,
  intro,
  id,
}: {
  title: ReactNode;
  intro?: string;
  /** Id do <h2>. A âncora fica na <section>; aqui é só o alvo do aria-labelledby. */
  id?: string;
}) {
  return (
    <header className="mb-8 sm:mb-10">
      <h2
        id={id}
        className="text-2xl font-bold leading-[1.15] text-white sm:text-3xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/60">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
