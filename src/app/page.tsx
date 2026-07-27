import {
  HeroSplit,
  Services,
  Process,
  FAQ,
  ClientSites,
  Works,
  Background,
  CallToAction,
} from "@/components";
import { faqItems } from "@/config/data";

/**
 * FAQPage no schema.org — são seis perguntas reais de negócio local
 * (prazo, região, pagamento). Descoberta é o trabalho desta página.
 */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <main id="top" tabIndex={-1} className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <HeroSplit />

      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="space-y-20 sm:space-y-28">
          <Services />
          <Process />
          <FAQ />
          <ClientSites />
          <Works />
          <Background />
        </div>
      </div>

      <CallToAction />
    </main>
  );
}
