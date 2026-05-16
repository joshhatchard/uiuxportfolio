"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const barlowCondensed = Barlow_Condensed({ weight: ["400", "700", "900"], subsets: ["latin"] });

const captions = ["A DESIGNER AND <DEVELOPER>", "A CREATIVE AND <TECHNICAL>"];

export function HeroSection() {

  return (
    <section className="page-container pt-8 md:pt-16 lg:pt-24">
      <div className="space-y-0">
        {/* Caption */}
          <p className={`text-hero-caption ${inter.className}`}>
            <span style={{ color: "var(--color-grey)" }}>HI, I'M JOSH HATCHARD</span>
          </p>

        {/* Main Heading */}
        <h1 className={`text-hero-main ${barlowCondensed.className}`}>
          <span style={{ color: "var(--color-secondary)" }}>I'M A </span>
          <span style={{ color: "var(--color-primary)" }}>UI/UX DESIGNER</span>
        </h1>

        {/* Sub Heading */}
        <h2 className={`pt-4 text-hero-sub ${barlowCondensed.className}`}>
          <span style={{ color: "var(--color-grey)" }}>// I ALSO CODE PRODUCTS FROM END TO END</span>
        </h2>

        {/* CTA and Location */}
        <div className={`flex flex-col-reverse gap-6 pt-20 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-0 ${inter.className}`}>
          <Link
            href="#selected-work"
            className="text-nav-item inline-flex h-12 items-center gap-1 rounded-full px-8 transition-opacity hover:opacity-80"
            style={{ background: "var(--color-secondary)", color: "var(--color-bg-black)" }}
          >
            EXPLORE WORK
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
          <p className="text-nav-item flex flex-row pl-2 min-[480px]:pl-0 min-[480px]:flex-row items-center gap-2" style={{ color: "var(--color-grey)" }}>
            <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: "#00852C" }}></span>
            DESIGNER BASED IN SYDNEY
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
