"use client";
import { Anybody } from "next/font/google";

const anybody = Anybody({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export function CreativeHero() {
  return (
    <section className="page-container pt-4 lg:pt-20">
      <div className={`space-y-2 ${anybody.className}`}>
        <p className="text-hero-caption">
          <span style={{ color: "var(--color-slate)" }}>CREATIVE</span>
        </p>

        <h1 className="text-hero-small">
          <span style={{ color: "var(--color-secondary)" }}>MY </span>
          <span style={{ color: "var(--color-primary)" }}>EXPERIMENTAL</span>
          <span style={{ color: "var(--color-secondary)" }}>
            {" "}
            WORKSPACE FOR ANYTHING{" "}
          </span>
          <span style={{ color: "var(--color-primary)" }}>CREATIVE</span>
          <span style={{ color: "var(--color-secondary)" }}> AND </span>
          <span style={{ color: "var(--color-primary)" }}>DIFFERENT</span>
        </h1>

        {/* Subheading removed */}
      </div>
    </section>
  );
}

export default CreativeHero;
