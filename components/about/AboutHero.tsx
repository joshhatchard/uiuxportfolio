"use client";
import { Anybody } from "next/font/google";
import PixelBlast from "@/components/animations/PixelBlast";

const anybody = Anybody({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export function AboutHero() {
  return (
    <section className="page-container relative overflow-hidden -top-8 min-[420px]:top-0 py-32 lg:py-48">
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
          className="opacity-100"
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

      <div className={`relative z-10 space-y-2 ${anybody.className}`}>
        <p className="text-hero-caption">
          <span style={{ color: "var(--color-slate)" }}>ABOUT ME</span>
        </p>

        <h1 className="text-hero-small">
          <span style={{ color: "var(--color-secondary)" }}>I </span>
          <span style={{ color: "var(--color-primary)" }}>CREATE</span>
          <span style={{ color: "var(--color-secondary)" }}> AND </span>
          <span style={{ color: "var(--color-primary)" }}>BUILD</span>
          <span style={{ color: "var(--color-secondary)" }}> PRODUCTS</span>
        </h1>
      </div>
    </section>
  );
}

export default AboutHero;
