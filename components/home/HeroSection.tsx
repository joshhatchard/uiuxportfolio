"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { Inter } from "next/font/google";
import { Anybody } from "next/font/google";
import { TiltText } from "@/components/animations/TiltText";
import HoverLiftText from "@/components/animations/HoverLiftText";
import { motion } from "framer-motion";
import {
  heroContainer,
  slideDown,
  fadeUp,
  heroScale,
  accentPop,
} from "@/components/animations/loadAnimations";

const inter = Inter({ subsets: ["latin"] });
const anybody = Anybody({ weight: ["400", "700", "900"], subsets: ["latin"] });

export function HeroSection() {
  const handleExploreWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    posthog.capture("hero_explore_work_clicked");
    document.getElementById("selected-work")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="page-container relative mt-20 min-[420px]:mt-20 md:mt-0 pt-8 md:pt-16 lg:pt-20 pb-0 min-[420px]:pb-8 md:pb-4 lg:pb-6">
      <motion.div
        className="relative z-10 space-y-0"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        {/* Caption */}
        <div style={{ overflow: "hidden" }}>
          <motion.p
            variants={slideDown}
            className={`text-hero-caption text-center ${anybody.className}`}
          >
            <span style={{ color: "var(--color-slate)" }}>
              <HoverLiftText text="HI, I'M JOSH HATCHARD" />
            </span>
          </motion.p>
        </div>

        {/* Main heading */}
        <div style={{ overflow: "hidden" }}>
          <motion.div variants={heroScale}>
            <TiltText
              className={`text-hero-main text-center mt-4 md:mt-8 ${anybody.className}`}
            >
              <span style={{ color: "var(--color-secondary)" }}>I'M A </span>
              <motion.span
                variants={accentPop}
                style={{
                  color: "var(--color-primary)",
                  display: "inline-block",
                }}
              >
                UI/UX
              </motion.span>{" "}
              <span style={{ color: "var(--color-secondary)" }}>DESIGNER</span>
            </TiltText>
          </motion.div>
        </div>

        {/* CTA + location */}
        <motion.div
          variants={fadeUp}
          className={`flex flex-col-reverse gap-6 pt-28 min-[480px]:pt-28 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-0 ${inter.className}`}
        >
          <Link
            href="#selected-work"
            onClick={handleExploreWorkClick}
            className="text-nav-item inline-flex items-center gap-1 rounded-full px-8 py-4 transition-[background-color,border-color,color,opacity,transform] duration-100 ease-out hover:opacity-80 active:translate-y-px active:scale-[0.98]"
            style={{
              background: "var(--color-bg-black)",
              color: "var(--color-secondary)",
              border: "1px solid var(--color-cool-border)",
            }}
          >
            EXPLORE WORK
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>

          <p
            className="text-nav-item flex flex-row pl-2 min-[480px]:pl-0 items-center gap-2"
            style={{ color: "var(--color-slate)" }}
          >
            <span
              className="inline-block h-3 w-3 rounded-full"
              aria-hidden="true"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span>BASED IN SYDNEY</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
