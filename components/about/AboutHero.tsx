"use client";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export function AboutHero() {
  return (
    <section className="page-container pt-16 lg:pt-20">
      <div className="space-y-6">
        <p className="text-hero-caption">
          <span style={{ color: "var(--color-grey)" }}>ABOUT ME</span>
        </p>

        <h1 className={`text-heading-small ${barlowCondensed.className}`}>
          <span style={{ color: "var(--color-secondary)" }}>I'M PASSIONATE ABOUT CREATING </span>
          <span style={{ color: "var(--color-primary)" }}>BEAUTIFUL PRODUCTS</span>{" "}
          <span style={{ color: "var(--color-secondary)" }}>THAT TELL A STORY</span>
        </h1>

        <h2 className={`text-hero-sub ${barlowCondensed.className}`}>
          <span style={{ color: "var(--color-grey)" }}>// AND I LOVE THE BEACH</span>
        </h2>
      </div>
    </section>
  );
}

export default AboutHero;
