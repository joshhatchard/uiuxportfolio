"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Anybody } from "next/font/google";
import { TiltText } from "@/components/animations/TiltText";

const inter = Inter({ subsets: ["latin"] });
const anybody = Anybody({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export function HeroSection() {
  const handleExploreWorkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    const target = document.getElementById("selected-work");
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="page-container relative overflow-hidden mt-20 min-[420px]:mt-20 md:mt-0 pt-8 md:pt-16 lg:pt-20 pb-0 min-[420px]:pb-8 md:pb-4 lg:pb-6">
      <div className="relative z-10 space-y-0">
        {/** Caption */}
        <p className={`text-hero-caption text-center ${anybody.className}`}>
          <span style={{ color: "var(--color-slate)" }}>
            HI, I&apos;M JOSH HATCHARD
          </span>
        </p>

        {/** Main Heading */}
        <TiltText
          className={`text-hero-main text-center mt-4 md:mt-8 ${anybody.className}`}
        >
          <span style={{ color: "var(--color-secondary)" }}>I&apos;M A </span>
          <span style={{ color: "var(--color-primary)" }}>UI/UX</span>
          <span style={{ color: "var(--color-secondary)" }}> DESIGNER</span>
        </TiltText>

        {/** CTA and Location */}
        <div
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
            className="text-nav-item flex flex-row pl-2 min-[480px]:pl-0 min-[480px]:flex-row items-center gap-2"
            style={{ color: "var(--color-slate)" }}
          >
            <span
              className="inline-block h-3 w-3 rounded-full"
              aria-hidden="true"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></span>
            <span>DESIGNER BASED IN SYDNEY</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
