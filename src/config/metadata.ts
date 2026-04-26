import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL || "https://cauadev-portfolio.vercel.app"),
    openGraph: {
        type: "website",
        locale: "pt_BR",
        siteName: "Cauã Alves - Desenvolvedor Full-Stack",
        title:
            "Cauã Alves | Desenvolvedor Full-Stack | Python, React, Next.js & Flutter",
        description:
            "Desenvolvedor Full-Stack focado em soluções práticas. Python para backend e automação, React/Next.js para web, Flutter para mobile. Avaliação 5.0⭐ em plataformas freelance. Entrego MVPs rápidos e soluções com IA.",
        images: [
            {
                url: "/og-image.webp",
                alt: "Cauã Alves | Desenvolvedor Full-Stack | Python, React, Next.js & Flutter",
                height: 630,
                width: 1200,
            },
        ],
    },
    title:
        "Cauã Alves | Desenvolvedor Full-Stack | Python, React, Next.js & Flutter",
    description:
        "Desenvolvedor Full-Stack focado em soluções práticas. Python para backend e automação, React/Next.js para web, Flutter para mobile. Avaliação 5.0⭐ em plataformas freelance. Entrego MVPs rápidos e soluções com IA.",
    keywords:
        "Cauã Alves, Desenvolvedor Full-Stack, Flutter Developer, React Developer, Next.js Developer, Python Developer, TypeScript Developer, Mobile Development, Web Development, AI Automation, Freelancer, Brasil, Rio de Janeiro, Dart, JavaScript, TailwindCSS, PostgreSQL, MongoDB, Firebase, Vercel, Git, OpenAI",
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
