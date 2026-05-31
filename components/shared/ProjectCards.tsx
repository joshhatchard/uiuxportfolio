"use client";

import Link from "next/link";
import { useState } from "react";
import PixelTransition from "@/components/animations/PixelTransition";

export type ProjectCard = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
};

type ProjectCardsProps = {
  cards: ProjectCard[];
  sectionId: string;
  spacing?: string;
};

function ProjectCardView({
  href,
  imageSrc,
  imageAlt,
  title,
  subtitle,
}: ProjectCard) {
  const overlayBackgroundColor = "rgba(20, 20, 24, 0.8";
  const pixelHoverColor = "rgba(20, 20, 24, 0.8)";
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <article
      className="group transition-all duration-300 hover:-translate-y-1 hover:opacity-100"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <Link href={href} className="block">
        <figure className="aspect-square overflow-hidden rounded-xs m-0">
          <PixelTransition
            className="h-full w-full"
            isHovered={isCardHovered}
            firstContent={
              <img
                src={imageSrc}
                alt={imageAlt}
                className="block h-full w-full object-cover object-center"
              />
            }
            secondContent={
              <div
                className="h-full w-full flex items-end justify-start p-4 md:p-5"
                style={{ backgroundColor: overlayBackgroundColor }}
              >
                <p
                  data-pixel-transition-text="true"
                  className="text-[0.95rem] md:text-[1.05rem] font-extrabold tracking-[-0.03em]"
                  style={{ color: "var(--color-secondary)" }}
                >
                  VIEW PROJECT
                </p>
              </div>
            }
            gridSize={8}
            pixelColor={pixelHoverColor}
            animationStepDuration={0.3}
            aspectRatio="100%"
            once={false}
          />
        </figure>
      </Link>

      <Link href={href} className="mt-6 block">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-case-study-title">{title}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="ml-4 h-10 w-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: "var(--color-secondary)" }}
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-nav-item text-(--color-slate)">{subtitle}</p>
        </div>
      </Link>
    </article>
  );
}

export function ProjectCards({
  cards,
  sectionId,
  spacing = "mt-12 scroll-mt-8 lg:mt-16",
}: ProjectCardsProps) {
  return (
    <section id={sectionId} className={`page-container ${spacing}`}>
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {cards.map((card) => (
          <ProjectCardView key={card.href} {...card} />
        ))}
      </div>
    </section>
  );
}

export default ProjectCards;
