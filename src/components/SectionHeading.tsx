import type { ReactNode } from "react";

export function SectionHeading({
  title,
  intro,
  id,
}: {
  title: ReactNode;
  intro?: string;
  id?: string;
}) {
  return (
    <header className="mb-10 scroll-mt-24 sm:mb-12">
      <h2
        id={id}
        className="scroll-mt-24 text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
