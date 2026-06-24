import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL || "https://portifolio-caua.vercel.app"),
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "/",
        siteName: "Cauã Alves - Dados, BI & Automação",
        title:
            "Cauã Alves | Dados, BI & Automação | Power BI · Azure · Python",
        description:
            "Especialista em Dados, Business Intelligence e Automação. Power BI e DAX, pipelines e automações serverless no Azure e Python, automação web com Playwright. Clientes no Brasil, Reino Unido e Portugal com 100% de avaliação 5⭐.",
        images: [
            {
                url: "/og-image.webp",
                alt: "Cauã Alves | Dados, BI & Automação | Power BI · Azure · Python",
                height: 630,
                width: 1200,
            },
        ],
    },
    title: {
        default:
            "Cauã Alves | Dados, BI & Automação | Power BI · Azure · Python",
        template: "%s | Cauã Alves",
    },
    description:
        "Especialista em Dados, Business Intelligence e Automação. Power BI e DAX, pipelines e automações serverless no Azure e Python, automação web com Playwright. Clientes no Brasil, Reino Unido e Portugal com 100% de avaliação 5⭐.",
    alternates: {
        canonical: "/",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Cauã Alves | Dados, BI & Automação | Power BI · Azure · Python",
        description:
            "Especialista em Dados, Business Intelligence e Automação. Power BI e DAX, pipelines serverless no Azure e Python, automação web com Playwright.",
        images: ["/og-image.webp"],
    },
    keywords:
        "Cauã Alves, Dados, Business Intelligence, BI, Power BI, DAX, Azure, Python, Engenharia de Dados, Automação, Automação Web, Playwright, SQL, PostgreSQL, FastAPI, Data Pipeline, ETL, Dashboards, Kotlin, Jetpack Compose, LLM, OpenAI, Anthropic, Gemini, Freelancer, Brasil, Rio de Janeiro",
    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    icons: {
        icon: "/icon.jpg",
        apple: "/icon.jpg",
    },
    authors: {
        name: "Cauã Alves",
        url: "https://github.com/cauaprjct",
    },
};
