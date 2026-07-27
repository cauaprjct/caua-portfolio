"use client";

import { useEffect, useState } from "react";
import { availability, availabilityIsCurrent } from "@/config/data";

/**
 * Selo de disponibilidade que expira sozinho.
 *
 * O servidor renderiza pela data do build; no navegador o componente confere
 * a data de verdade e se apaga quando `checkedAt` fica velho. Um "Disponível"
 * desatualizado é pior que selo nenhum.
 */
export function AvailabilityBadge({ className }: { className?: string }) {
  const [stale, setStale] = useState(false);

  useEffect(() => {
    if (!availabilityIsCurrent()) setStale(true);
  }, []);

  if (stale || !availability.open) return null;

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300",
        className ?? "",
      ].join(" ")}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      {availability.label}
    </span>
  );
}
