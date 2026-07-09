import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cauã Alves | Desenvolvedor & Técnico de Informática",
    short_name: "Cauã Alves",
    description:
      "Portfólio de Cauã Alves — Desenvolvedor e Técnico de Informática. Dados, BI e automação; manutenção, redes e otimização de PCs e Android.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0f14",
    theme_color: "#0d0f14",
    lang: "pt-BR",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
