import type { ReactNode } from "react";

/**
 * Entrada ao aparecer na tela.
 *
 * Server component de propósito: o HTML sai do servidor **visível**. Quem liga
 * a animação é o script em `layout.tsx`, que adiciona `.js` no <html> e observa
 * `[data-reveal]`. Sem JS (ou se a hidratação quebrar), o conteúdo fica lá —
 * nada de página em branco abaixo do hero.
 *
 * `variant` existe para o movimento não ser o mesmo em toda a página:
 * - `up`      bloco de conteúdo subindo (padrão)
 * - `fade`    título de seção, só opacidade
 * - `lift`    item de lista/card, sobe menos e ganha escala
 * - `left`/`right` para os lados
 *
 * `as` mantém o HTML válido dentro de listas (`as="li"`).
 */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "up" | "fade" | "lift" | "left" | "right";
  className?: string;
  as?: "div" | "li" | "article" | "section";
}) {
  const Tag = as as "div";
  return (
    <Tag
      data-reveal={variant}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
