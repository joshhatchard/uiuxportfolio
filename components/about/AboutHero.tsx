"use client";
import { Anybody } from "next/font/google";

const anybody = Anybody({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export function AboutHero() {
  return (
    <section className="page-container pt-4 lg:pt-20">
      <div className={`space-y-2 ${anybody.className}`}>
        <p className="text-hero-caption">
          <span style={{ color: "var(--color-slate)" }}>ABOUT ME</span>
        </p>

        <h1 className="text-hero-small">
          <span style={{ color: "var(--color-secondary)" }}>
            I&apos;M PASSIONATE ABOUT CREATING{" "}
          </span>
          <span style={{ color: "var(--color-primary)" }}>
            BEAUTIFUL PRODUCTS
          </span>{" "}
          <span style={{ color: "var(--color-secondary)" }}>
            THAT TELL A STORY
          </span>
        </h1>

        {/* Subheading removed */}
      </div>
    </section>
  );
}

export default AboutHero;
