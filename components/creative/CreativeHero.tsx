"use client";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export function CreativeHero() {
  return (
    <section className="page-container pt-16 lg:pt-20">
      <div className="space-y-6">
        <p className="text-hero-caption">
          <span style={{ color: "var(--color-grey)" }}>CREATIVE</span>
        </p>

        <h1 className={`text-heading-small ${barlowCondensed.className}`}>
            <span style={{ color: "var(--color-secondary)" }}>MY </span>
            <span style={{ color: "var(--color-primary)" }}>EXPERIMENTAL</span>
            <span style={{ color: "var(--color-secondary)" }}> WORKSPACE FOR ANYTHING </span>
            <span style={{ color: "var(--color-primary)" }}>CREATIVE</span>
            <span style={{ color: "var(--color-secondary)" }}> AND </span>
            <span style={{ color: "var(--color-primary)" }}>DIFFERENT</span>
        </h1>

        <h2 className={`text-hero-sub ${barlowCondensed.className}`}>
          <span style={{ color: "var(--color-grey)" }}>// ALONGSIDE MY WORK FOR ORGANISATIONS</span>
        </h2>
      </div>
    </section>
  );
}

export default CreativeHero;
