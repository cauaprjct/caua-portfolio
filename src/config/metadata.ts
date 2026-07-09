import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

const title = "Cauã Alves | Desenvolvedor & Técnico de Informática";
const description =
  "Desenvolvedor de dados, BI, automação e web e técnico de informática no Rio de Janeiro. Crio dashboards, automações, integrações com IA e sites sob medida (Next.js, Vite) — e faço manutenção, formatação, redes e otimização de PCs e celulares.";

export const metaData: Metadata = {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords:
        "Cauã Alves, Desenvolvedor, Técnico de Informática, Rio de Janeiro, Realengo, Power BI, Python, Azure, Next.js, Vite, React, sites, landing page, automação, RPA, IA, dashboards, manutenção de computadores, formatação, redes, otimização Android, suporte técnico, Academia do Hardware, freelancer",
    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        siteName: "Cauã Alves — Dev & Técnico de Informática",
        title,
        description,
    },
    icons: {
        icon: "/icon.jpg",
        apple: "/icon.jpg",
    },
    authors: {
        name: "Cauã Alves",
        url: "https://github.com/cauaprjct",
    },
};
