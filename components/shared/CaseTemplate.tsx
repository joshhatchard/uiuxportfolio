"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { Anybody } from "next/font/google";
import { motion } from "framer-motion";
import PixelTransition from "@/components/animations/PixelTransition";

// ── Animation variants ────────────────────────────────────────────────────────
import type { Variants } from "framer-motion";

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const navEnter: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const navStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const navItem: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroScale: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Shared viewport settings for scroll-triggered animations
const viewport = { once: true, margin: "-10% 0px" };

// ── Font ──────────────────────────────────────────────────────────────────────
const anybody = Anybody({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

import {
  GallerySection,
  type GalleryImage,
} from "@/components/shared/GallerySection";
import { GalleryGridSection } from "@/components/shared/GalleryGridSection";
import { FooterSection } from "@/components/shared/FooterSection";

export type ContentsLink = {
  id: string;
  label: string;
};

export type InfoCard = {
  label: string;
  body: string;
};

export type TextBlock = {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
};

export type HeroSection = {
  type: "hero";
  src: string;
  alt?: string;
  id?: string;
  label?: string;
};

export type InfoSection = {
  type: "info";
  id: string;
  label: string;
  cards: InfoCard[];
};

export type FeatureSection = {
  type: "feature";
  id: string;
  label: string;
  heading: string;
  body: string;
  subEyebrow?: string;
  image?: string;
  imageAlt?: string;
  image2?: string;
  imageAlt2?: string;
};

export type HeroFeatureSection = {
  type: "heroFeature";
  id: string;
  label: string;
  src: string;
  alt?: string;
  heading: string;
  body: string;
  subEyebrow?: string;
  image?: string;
  imageAlt?: string;
  image2?: string;
  imageAlt2?: string;
};

export type TextSection = {
  type: "text";
  id: string;
  label: string;
  eyebrow: string;
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
};

export type GalleryContentSection = {
  type: "gallery";
  id: string;
  label: string;
  images: GalleryImage[];
};

export type GalleryGridContentSection = {
  type: "galleryGrid";
  id: string;
  label: string;
  images: GalleryImage[];
};

export type DividerSection = {
  type: "divider";
};

export type CaseTemplateSection =
  | HeroSection
  | InfoSection
  | FeatureSection
  | HeroFeatureSection
  | TextSection
  | GalleryContentSection
  | GalleryGridContentSection
  | DividerSection;

export type CaseTemplateContent = {
  title: string;
  subtitle: string;
  contents?: ContentsLink[];
  sections?: CaseTemplateSection[];
  heroImage?: string;
  heroImageAlt?: string;
  infoCards?: InfoCard[];
  featureHeading?: string;
  featureEyebrow?: string;
  featureBody?: string;
  featureImage?: string;
  featureImageAlt?: string;
  blocks?: TextBlock[];
  galleryImages?: GalleryImage[];
};

export type NextCaseCard = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
};

type CaseTemplateProps = {
  content: CaseTemplateContent;
  backHref?: string;
  nextCard?: NextCaseCard | null;
};

// ── Moved outside component so it's not recreated on every render ─────────────
const isNavigableSection = (
  section: CaseTemplateSection,
): section is
  | HeroSection
  | InfoSection
  | FeatureSection
  | HeroFeatureSection
  | TextSection
  | GalleryContentSection
  | GalleryGridContentSection => section.type !== "divider";

function renderBodyWithLineBreaks(text: string) {
  const paragraphs = text.split("||").map((para) => {
    const lines = para.split("|").map((line) => line.trim());
    return lines;
  });

  return paragraphs.map((lines, pIdx) => (
    <p key={pIdx} className={pIdx > 0 ? "mt-4" : ""}>
      {lines.map((line, lIdx) => (
        <span key={lIdx}>
          {line}
          {lIdx < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  ));
}

function ImageSlot({ alt }: { alt?: string }) {
  return (
    <div
      className="flex min-h-72 items-center justify-center p-8 text-center text-nav-item text-white/20 sm:min-h-96 lg:min-h-128"
      style={{ background: "var(--color-surface)" }}
    >
      {alt ?? "Image slot"}
    </div>
  );
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={900}
      className="block h-auto w-full"
      sizes="100vw"
      priority
    />
  );
}

function NextCaseSection({ card }: { card: NextCaseCard }) {
  const [isHovered, setIsHovered] = useState(false);
  const overlayBackgroundColor = "rgba(20, 20, 24, 0.8)";
  const pixelHoverColor = "rgba(20, 20, 24, 0.8)";

  return (
    <motion.section
      className="mt-6 w-full sm:mt-8"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <Link
        href={card.href}
        className="group block border border-(--color-surface) transform-gpu transition-all duration-100 ease-out hover:-translate-y-1 active:translate-y-px active:scale-[0.99]"
      >
        <article
          className="relative p-0 md:grid md:grid-cols-2 md:items-center md:gap-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="mt-6 px-8 py-4 md:order-2 md:mt-0 md:flex md:h-full md:flex-col md:px-0 md:py-8 md:pr-8">
            <div className="flex items-center gap-2 md:shrink-0">
              <span className="inline-block h-3 w-3 rounded-full bg-(--color-primary)" />
              <p className="text-nav-item uppercase text-(--color-slate)">
                NEXT CASE STUDY
              </p>
            </div>

            <div className="mt-4 flex items-start justify-between gap-4 md:mt-0 md:flex-1 md:items-center">
              <div className="space-y-2 md:flex md:flex-col md:justify-center">
                <h2 className="max-w-full wrap-break-word text-case-study-title uppercase text-(--color-secondary)">
                  {card.title}
                </h2>
                <p className="text-nav-item text-(--color-slate)">
                  {card.subtitle}
                </p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-10 w-10 shrink-0 text-(--color-secondary) transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:hidden"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="hidden h-10 w-10 shrink-0 text-(--color-secondary) transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:block"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </div>

          <figure className="mt-8 aspect-square w-full overflow-hidden rounded-xs m-0 md:order-1 md:mt-0">
            <PixelTransition
              className="h-full w-full"
              isHovered={isHovered}
              firstContent={
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  width={1600}
                  height={900}
                  className="block h-full w-full object-cover object-center"
                  sizes="100vw"
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
        </article>
      </Link>
    </motion.section>
  );
}

function InfoCardsSection({
  cards,
  id = "overview",
}: {
  cards: InfoCard[];
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div className="space-y-6">
          {(["Role", "Team", "Timeline"] as const).map((label) => {
            const card = cards.find((item) => item.label === label);
            return (
              card && (
                <div key={label} className="space-y-1">
                  <h3 className="text-nav-item text-(--color-secondary)">
                    {card.label}
                  </h3>
                  <div className="text-about-body">
                    {renderBodyWithLineBreaks(card.body)}
                  </div>
                </div>
              )
            );
          })}
        </div>

        <div>
          {(() => {
            const overview = cards.find((item) => item.label === "Overview");
            if (!overview) return null;
            return (
              <div className="space-y-1">
                <h3 className="text-nav-item text-(--color-secondary)">
                  {overview.label}
                </h3>
                <div className="text-about-body max-w-2xl">
                  {renderBodyWithLineBreaks(overview.body)}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}

function FeatureSectionView({
  id = "feature",
  label,
  subEyebrow,
  heading,
  body,
  image,
  imageAlt,
  image2,
  imageAlt2,
}: {
  id?: string;
  label: string;
  subEyebrow?: string;
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  image2?: string;
  imageAlt2?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-8">
      <div className="space-y-4">
        {label && (
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-(--color-primary)" />
            <p className="text-nav-item uppercase text-(--color-slate)">
              {label}
            </p>
          </div>
        )}
        <h2 className="w-full max-w-full wrap-break-word text-case-feature-heading text-(--color-secondary)">
          {heading}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-start">
        <p className="text-footer-link uppercase text-white/80">
          {subEyebrow ?? ""}
        </p>
        <div className="text-about-body max-w-xl">
          {renderBodyWithLineBreaks(body)}
        </div>
      </div>

      {image && (
        <div className="flex flex-col gap-4">
          <Image
            src={image}
            alt={imageAlt ?? heading}
            width={1600}
            height={900}
            className="block h-auto w-full"
            sizes="100vw"
          />
          {image2 && (
            <Image
              src={image2}
              alt={imageAlt2 ?? heading}
              width={1600}
              height={900}
              className="block h-auto w-full"
              sizes="100vw"
            />
          )}
        </div>
      )}
    </section>
  );
}

function TextSectionView({ block }: { block: TextBlock }) {
  return (
    <section id={block.id} className="scroll-mt-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <div
          className={`space-y-4 self-start lg:pt-2 ${block.reverse ? "lg:order-2" : ""}`}
        >
          <p className="text-nav-item text-white/25">{block.eyebrow}</p>
          <h3 className="max-w-full wrap-break-word text-case-study-title text-(--color-secondary)">
            {block.heading}
          </h3>
          <p className="text-about-body max-w-xl">{block.body}</p>
        </div>

        <div className={`overflow-hidden ${block.reverse ? "lg:order-1" : ""}`}>
          {block.image ? (
            <div className="relative min-h-72 sm:min-h-96 lg:min-h-128">
              <Image
                src={block.image}
                alt={block.imageAlt ?? block.heading}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          ) : (
            <ImageSlot alt={block.imageAlt} />
          )}
        </div>
      </div>
    </section>
  );
}

function renderSection(section: CaseTemplateSection) {
  switch (section.type) {
    case "hero":
      return (
        <motion.div
          className="py-8 sm:pt-12 sm:pb-4 overflow-hidden"
          variants={heroScale}
          initial="hidden"
          animate="show"
        >
          <HeroImage src={section.src} alt={section.alt ?? "Hero image"} />
        </motion.div>
      );
    case "info":
      return <InfoCardsSection id={section.id} cards={section.cards} />;
    case "feature":
      return (
        <FeatureSectionView
          id={section.id}
          label={section.label}
          subEyebrow={section.subEyebrow}
          heading={section.heading}
          body={section.body}
          image={section.image}
          imageAlt={section.imageAlt}
          image2={section.image2}
          imageAlt2={section.imageAlt2}
        />
      );
    case "heroFeature":
      return (
        <>
          <motion.div
            className="py-8 sm:pt-12 sm:pb-4 overflow-hidden"
            variants={heroScale}
            initial="hidden"
            animate="show"
          >
            <HeroImage src={section.src} alt={section.alt ?? "Hero image"} />
          </motion.div>
          <div className="py-4 sm:py-8">
            <FeatureSectionView
              id={section.id}
              label={section.label}
              subEyebrow={section.subEyebrow}
              heading={section.heading}
              body={section.body}
              image={section.image}
              imageAlt={section.imageAlt}
              image2={section.image2}
              imageAlt2={section.imageAlt2}
            />
          </div>
        </>
      );
    case "text":
      return (
        <TextSectionView
          block={{
            id: section.id,
            eyebrow: section.eyebrow,
            heading: section.heading,
            body: section.body,
            image: section.image,
            imageAlt: section.imageAlt,
            reverse: section.reverse,
          }}
        />
      );
    case "gallery":
      return (
        <section id={section.id} className="scroll-mt-24">
          <GallerySection images={section.images} />
        </section>
      );
    case "galleryGrid":
      return (
        <section id={section.id} className="scroll-mt-24">
          <GalleryGridSection images={section.images} />
        </section>
      );
    case "divider":
      return <hr className="border-white/15" />;
    default:
      return null;
  }
}

export function CaseTemplate({
  content,
  backHref = "/",
  nextCard,
}: CaseTemplateProps) {
  // ── Memoized so the array reference is stable across renders ─────────────────
  const navItems = useMemo(() => {
    return content.sections
      ? content.sections.flatMap((section) =>
          isNavigableSection(section) && section.id && section.label
            ? [{ id: section.id, label: section.label }]
            : [],
        )
      : (content.contents ?? []);
  }, [content.sections, content.contents]);

  const sidebarLabel = "CONTENT";
  const formatNavLabel = (label: string) =>
    label.slice(0, 1).toUpperCase() + label.slice(1).toLowerCase();

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.slice(1);
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b,
          );
          setActiveId(mostVisible.target.id);
        } else {
          setActiveId("");
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <>
      <article className="relative pt-6 lg:pt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_minmax(0,1fr)_120px] lg:gap-10">
          {/* Back button — slides in from top on mount */}
          <motion.div
            className="
    sticky top-8 self-start z-40
    lg:top-16 lg:pt-2
  "
            variants={navEnter}
            initial="hidden"
            animate="show"
          >
            <Link
              href={backHref}
              className="text-nav-item inline-flex items-center gap-2 rounded-full px-8 py-4 transform-gpu hover:opacity-80 active:translate-y-px active:scale-[0.98]"
              style={{
                background: "var(--color-bg-black)",
                color: "var(--color-secondary)",
                border: "1px solid var(--color-cool-border)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              BACK
            </Link>
          </motion.div>

          {/* Main content */}
          <div className="space-y-0">
            {/* Header — staggered fade-up on mount */}
            <motion.header
              className="mt-24 lg:mt-0 space-y-4 text-center"
              variants={heroContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                variants={fadeUp}
                className={`max-w-full wrap-break-word text-hero-small text-(--color-secondary) uppercase ${anybody.className}`}
              >
                {content.title}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-case-subheading text-(--color-slate)"
              >
                {content.subtitle}
              </motion.p>
            </motion.header>

            {content.sections && content.sections.length > 0 ? (
              <div className="flex flex-col">
                {content.sections!.map((section, index) => {
                  const isHero = section.type === "hero";
                  const isInfo = section.type === "info";
                  const nextSection =
                    index < content.sections!.length - 1
                      ? content.sections![index + 1]
                      : null;
                  const prevSection =
                    index > 0 ? content.sections![index - 1] : null;
                  const nextIsInfo = nextSection?.type === "info";
                  const nextIsGallery =
                    nextSection?.type === "gallery" ||
                    nextSection?.type === "galleryGrid";
                  const prevIsHero = prevSection?.type === "hero";
                  const shouldHideDivider =
                    (isHero && nextIsInfo) || (isHero && nextIsGallery);
                  const paddingClass =
                    isInfo && prevIsHero ? "pb-4 sm:pb-4" : "py-4 sm:py-4";

                  const isHeroType =
                    section.type === "hero" || section.type === "heroFeature";

                  return isHeroType ? (
                    <div
                      key={section.type + "-" + index}
                      className={paddingClass}
                    >
                      {renderSection(section)}
                      {!shouldHideDivider &&
                        index < content.sections!.length - 1 && (
                          <div className="py-6 sm:py-8">
                            <hr className="border-white/15" />
                          </div>
                        )}
                    </div>
                  ) : (
                    <motion.div
                      key={section.type + "-" + index}
                      className={paddingClass}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                    >
                      {renderSection(section)}
                      {!shouldHideDivider &&
                        index < content.sections!.length - 1 && (
                          <div className="py-6 sm:py-8">
                            <hr className="border-white/15" />
                          </div>
                        )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <>
                {content.heroImage && (
                  <motion.div
                    className="py-12 sm:py-16 overflow-hidden"
                    variants={heroScale}
                    initial="hidden"
                    animate="show"
                  >
                    <HeroImage
                      src={content.heroImage}
                      alt={content.heroImageAlt ?? content.title}
                    />
                  </motion.div>
                )}

                {content.infoCards && content.infoCards.length > 0 && (
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <InfoCardsSection cards={content.infoCards} />
                  </motion.div>
                )}

                {content.featureHeading && content.featureBody && (
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <FeatureSectionView
                      label={content.featureEyebrow ?? content.featureHeading}
                      subEyebrow={content.featureEyebrow}
                      heading={content.featureHeading}
                      body={content.featureBody}
                      image={content.featureImage}
                      imageAlt={content.featureImageAlt}
                    />
                  </motion.div>
                )}

                {content.blocks && content.blocks.length > 0 && (
                  <div className="space-y-14 sm:space-y-18">
                    {content.blocks.map((block) => (
                      <motion.div
                        key={block.id}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewport}
                      >
                        <TextSectionView block={block} />
                      </motion.div>
                    ))}
                  </div>
                )}

                {content.galleryImages && content.galleryImages.length > 0 && (
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <GallerySection images={content.galleryImages} />
                  </motion.div>
                )}
              </>
            )}

            {nextCard && (
              <div className="py-6 sm:py-8">
                <hr className="border-white/15" />
              </div>
            )}

            {nextCard && <NextCaseSection card={nextCard} />}
          </div>

          {/* Contents nav — slides in from top with a slight delay */}
          <motion.aside
            className="hidden lg:block lg:relative lg:z-20 lg:pt-4"
            variants={navEnter}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
          >
            <div className="sticky top-16 space-y-6">
              <p className="text-nav-item text-(--color-secondary)">
                {sidebarLabel}
              </p>
              <motion.nav className="flex flex-col gap-6" variants={navStagger}>
                {navItems.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={handleNavClick}
                      variants={navItem}
                      className="text-contents-link relative z-20 inline-flex cursor-pointer px-2 py-2 -mx-2 -my-2 hover:opacity-80 active:translate-y-px active:scale-[0.98]"
                      aria-current={isActive ? "true" : undefined}
                      style={{
                        color: isActive
                          ? "var(--color-secondary)"
                          : "var(--color-slate)",
                      }}
                    >
                      {formatNavLabel(item.label)}
                    </motion.a>
                  );
                })}
              </motion.nav>
            </div>
          </motion.aside>
        </div>
      </article>
      <FooterSection />
    </>
  );
}

export default CaseTemplate;
