import "./globals.css";
import { inter, jetbrainsMono } from "@/config/fonts";
import { metaData } from "@/config/metadata";
import { personalInfo, socialLinks } from "@/config/data";
import { Header, ThemeProvider } from "@/components";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = metaData;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  email: `mailto:${personalInfo.email}`,
  jobTitle: personalInfo.title,
  description: personalInfo.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressCountry: "BR",
  },
  url: process.env.NEXT_PUBLIC_CURRENT_SITE_URL || "https://portifolio-caua.vercel.app",
  sameAs: socialLinks.map((link) => link.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          {children}
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID as string} />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
