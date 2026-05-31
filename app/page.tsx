import type { Metadata } from "next";
import PixelBlast from "@/components/animations/PixelBlast";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { FooterSection } from "@/components/shared/FooterSection";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: "Josh Hatchard - UI/UX Designer & Developer",
  description:
    "Explore Josh Hatchard's portfolio of UI/UX design work and digital products. Case studies in product design, user experience, and frontend development.",
  openGraph: {
    type: "website",
    url: "https://joshhatchard.com",
    title: "Josh Hatchard - UI/UX Designer & Developer",
    description:
      "Explore Josh Hatchard's portfolio of UI/UX design work and digital products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Josh Hatchard Portfolio",
      },
    ],
  },
};

export default function HomePage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Josh Hatchard Portfolio",
    url: "https://joshhatchard.com",
    description: "Portfolio of UI/UX design work and digital products",
    mainEntity: {
      "@type": "Person",
      name: "Josh Hatchard",
      jobTitle: "UI/UX Designer & Frontend Developer",
    },
  };

  return (
    <>
      <JsonLd data={portfolioSchema} />
      <section
        id="hero"
        className="relative overflow-hidden min-h-88 md:min-h-96 lg:min-h-110 pb-4 lg:pb-6 -top-8 min-[420px]:top-0"
        aria-label="Hero Section"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
            maskComposite: "intersect",
          }}
        >
          <PixelBlast
            className="opacity-40"
            variant="square"
            pixelSize={8}
            color="#1e1e24"
            patternScale={3.5}
            patternDensity={0.5}
            pixelSizeJitter={0}
            enableRipples
            liquid={false}
            speed={0.6}
            edgeFade={0}
            noiseAmount={0.08}
            interactionMode="window"
            transparent
          />
        </div>
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>
      <TrustSection />
      <SelectedWorkSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
