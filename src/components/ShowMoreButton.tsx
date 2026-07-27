"use client";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export function ShowMoreButton({
  expanded,
  onToggle,
  moreCount,
  moreLabel,
  lessLabel = "Mostrar menos",
  /** Id da seção: ao recolher, o scroll volta pra cá em vez de ficar no vazio. */
  anchorId,
}: {
  expanded: boolean;
  onToggle: () => void;
  moreCount: number;
  moreLabel: string;
  lessLabel?: string;
  anchorId?: string;
}) {
  if (moreCount <= 0) return null;

  const handleClick = () => {
    const wasExpanded = expanded;
    onToggle();
    if (!wasExpanded || !anchorId) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      document.getElementById(anchorId)?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={expanded}
        className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-white/80 transition-colors hover:border-dev/40 hover:text-white"
      >
        {expanded ? (
          <>
            {lessLabel}
            <FiChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            {moreLabel}
            <FiChevronDown className="h-4 w-4" />
          </>
        )}
      </button>
    </div>
  );
}
