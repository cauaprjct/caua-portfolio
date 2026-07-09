"use client";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export function ShowMoreButton({
  expanded,
  onToggle,
  moreCount,
  moreLabel,
  lessLabel = "Mostrar menos",
}: {
  expanded: boolean;
  onToggle: () => void;
  moreCount: number;
  moreLabel: string;
  lessLabel?: string;
}) {
  if (moreCount <= 0) return null;

  return (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-dev/40 hover:text-white"
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
