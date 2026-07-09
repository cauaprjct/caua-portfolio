import {
  HeroSplit,
  TwoTracks,
  Services,
  Process,
  WorkExperience,
  Cases,
  Projects,
  ClientSites,
  TechnicalSkills,
  Certifications,
  Testimonials,
  FAQ,
  CallToAction,
} from "@/components";

export default function Home() {
  return (
    <main id="top" className="bg-background text-foreground">
      <HeroSplit />

      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="space-y-24 sm:space-y-32">
          <TwoTracks />
          <Services />
          <Process />
          <WorkExperience />
          <Cases />
          <ClientSites />
          <Projects />
          <TechnicalSkills />
          <Certifications />
          <Testimonials />
          <FAQ />
        </div>
      </div>

      <CallToAction />
    </main>
  );
}
