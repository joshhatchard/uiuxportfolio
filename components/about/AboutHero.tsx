"use client";
import { Anybody } from "next/font/google";
import { motion } from "framer-motion";
import PixelBlast from "@/components/animations/PixelBlast";
import { TiltText } from "@/components/animations/TiltText";
import HoverLiftText from "@/components/animations/HoverLiftText";
import {
  heroContainer,
  slideDown,
  heroScale,
  accentPop,
} from "@/components/animations/loadAnimations";

const anybody = Anybody({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export function AboutHero() {
  return (
    <section className="page-container relative overflow-hidden -top-8 min-[420px]:top-0 py-32 md:pb-32 md:pt-24">
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

      <motion.div
        className={`relative z-10 space-y-0 text-center ${anybody.className}`}
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <div style={{ overflow: "hidden" }}>
          <motion.p variants={slideDown} className="text-hero-caption">
            <span style={{ color: "var(--color-slate)" }}>
              <HoverLiftText text="ABOUT ME" />
            </span>
          </motion.p>
        </div>

        <div style={{ overflow: "hidden" }}>
          <motion.div variants={heroScale}>
            <TiltText
              className={`text-hero-small mt-4 md:mt-8 ${anybody.className}`}
            >
              <span style={{ color: "var(--color-secondary)" }}>I </span>
              <motion.span
                variants={accentPop}
                style={{
                  color: "var(--color-primary)",
                  display: "inline-block",
                }}
              >
                CREATE
              </motion.span>
              <span style={{ color: "var(--color-secondary)" }}> AND </span>
              <motion.span
                variants={accentPop}
                style={{
                  color: "var(--color-primary)",
                  display: "inline-block",
                }}
              >
                BUILD
              </motion.span>
              <span style={{ color: "var(--color-secondary)" }}> PRODUCTS</span>
            </TiltText>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutHero;
