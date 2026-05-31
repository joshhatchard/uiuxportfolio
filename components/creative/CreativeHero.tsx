"use client";
import { Anybody } from "next/font/google";
import PixelBlast from "@/components/animations/PixelBlast";
import { TiltText } from "@/components/animations/TiltText";

const anybody = Anybody({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export function CreativeHero() {
  return (
    <section className="page-container relative overflow-hidden -top-8 min-[420px]:top-0 py-32 md:pb-48 md:pt-32">
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
          className="opacity-50"
          variant="square"
          pixelSize={8}
          color="#36363f"
          patternScale={3.5}
          patternDensity={0.5}
          pixelSizeJitter={0}
          enableRipples
          liquid={false}
          speed={0.6}
          edgeFade={0}
          noiseAmount={0}
          interactionMode="window"
          transparent
        />
      </div>

      <div
        className={`relative z-10 space-y-0 text-center ${anybody.className}`}
      >
        <p className="text-hero-caption">
          <span style={{ color: "var(--color-slate)" }}>CREATIVE WORKS</span>
        </p>

        <TiltText
          className={`text-hero-small mt-4 md:mt-8 ${anybody.className}`}
        >
          <span style={{ color: "var(--color-secondary)" }}>WHERE I </span>
          <span style={{ color: "var(--color-primary)" }}>EXPLORE</span>
          <span style={{ color: "var(--color-secondary)" }}> NEW IDEAS </span>
        </TiltText>

        {/* Subheading removed */}
      </div>
    </section>
  );
}

export default CreativeHero;
