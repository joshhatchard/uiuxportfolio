"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GallerySection, type GalleryImage } from "@/components/shared/GallerySection";
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

type CaseTemplateProps = {
  content: CaseTemplateContent;
  backHref?: string;
};

function renderBodyWithLineBreaks(text: string) {
  // Split by || for new paragraphs first
  const paragraphs = text.split("||").map((para) => {
    // Then split by | for line breaks within paragraphs
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
    <div className="flex min-h-72 items-center justify-center rounded-[40px] bg-[#2b2b2b] p-8 text-center text-nav-item text-white/20 sm:min-h-96 lg:min-h-128">
      {alt ?? "Image slot"}
    </div>
  );
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="block h-auto w-full" />;
}

function InfoCardsSection({ cards, id = "overview" }: { cards: InfoCard[]; id?: string }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div className="space-y-6">
          {(["Role", "Team", "Timeline"] as const).map((label) => {
            const card = cards.find((item) => item.label === label);
            return (
              card && (
                <div key={label} className="space-y-1">
                  <h3 className="text-nav-item text-(--color-secondary)">{card.label}</h3>
                  <div className="text-about-body">{renderBodyWithLineBreaks(card.body)}</div>
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
                <h3 className="text-nav-item text-(--color-secondary)">{overview.label}</h3>
                <div className="text-about-body max-w-2xl">{renderBodyWithLineBreaks(overview.body)}</div>
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
}: {
  id?: string;
  label: string;
  subEyebrow?: string;
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <>
      <section id={id} className="scroll-mt-24 space-y-8">
        <div className="space-y-4">
          {label && (
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-(--color-primary)" />
              <p className="text-nav-item uppercase text-(--color-grey)">{label}</p>
            </div>
          )}
          <h2 className="w-full text-case-feature-heading text-(--color-secondary)">{heading}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <p className="text-footer-link uppercase text-white/80">{subEyebrow ?? ""}</p>
          <div className="text-about-body max-w-xl">{renderBodyWithLineBreaks(body)}</div>
        </div>

        {image && (
          <div className="overflow-hidden rounded-[40px]">
            <Image src={image} alt={imageAlt ?? heading} width={1600} height={900} className="h-auto w-full object-cover" />
          </div>
        )}
      </section>
    </>
  );
}

function TextSectionView({ block }: { block: TextBlock }) {
  return (
    <section id={block.id} className="scroll-mt-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <div className={`space-y-4 self-start lg:pt-2 ${block.reverse ? "lg:order-2" : ""}`}>
          <p className="text-nav-item text-white/25">{block.eyebrow}</p>
          <h3 className="text-case-study-title text-(--color-secondary)">{block.heading}</h3>
          <p className="text-about-body max-w-xl">{block.body}</p>
        </div>

        <div className={`overflow-hidden rounded-[40px] ${block.reverse ? "lg:order-1" : ""}`}>
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
      return <HeroImage src={section.src} alt={section.alt ?? "Hero image"} />;
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
        />
      );
    case "heroFeature":
      return (
        <>
          <HeroImage src={section.src} alt={section.alt ?? "Hero image"} />
          <div className="pt-12 sm:pt-16">
            <FeatureSectionView
              id={section.id}
              label={section.label}
              subEyebrow={section.subEyebrow}
              heading={section.heading}
              body={section.body}
              image={section.image}
              imageAlt={section.imageAlt}
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

export function CaseTemplate({ content, backHref = "/" }: CaseTemplateProps) {
  const isNavigableSection = (
    section: CaseTemplateSection
  ): section is
    | HeroSection
    | InfoSection
    | FeatureSection
    | HeroFeatureSection
    | TextSection
    | GalleryContentSection
    | GalleryGridContentSection =>
    section.type !== "divider";

  const navItems = content.sections
    ? content.sections.flatMap((section) => (isNavigableSection(section) && section.id && section.label ? [{ id: section.id, label: section.label }] : []))
    : content.contents ?? [];

  const sidebarLabel = "CONTENT";
  const formatNavLabel = (label: string) => label.slice(0, 1).toUpperCase() + label.slice(1).toLowerCase();
  
  const [activeId, setActiveId] = useState<string>(navItems[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <>
    <article className="relative pb-16 pt-6 lg:pb-24 lg:pt-32">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_minmax(0,1fr)_140px] lg:gap-10">
        {/* Back button */}
        <div className="sticky top-16 self-start lg:pt-2 lg:z-20">
          <Link
            href={backHref}
            className="text-nav-item inline-flex items-center gap-2 rounded-full px-8 py-4 transition-opacity hover:opacity-80"
            style={{ background: "var(--nav-item-bg)", color: "var(--color-secondary)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            BACK
          </Link>
        </div>

        {/* Main content */}
        <div className="space-y-12 sm:space-y-16">
          {/* Header */}
          <header className="space-y-4 text-center">
            <h1 className="text-heading-small text-(--color-secondary) uppercase">{content.title}</h1>
            <p className="text-case-subheading text-(--color-grey)">{content.subtitle}</p>
          </header>

          {(content.sections && content.sections.length > 0) ? (
            <div className="flex flex-col">
              {content.sections!.map((section, index) => {
                const isHero = section.type === "hero";
                const isInfo = section.type === "info";
                const nextSection = index < content.sections!.length - 1 ? content.sections![index + 1] : null;
                const prevSection = index > 0 ? content.sections![index - 1] : null;
                const nextIsInfo = nextSection?.type === "info";
                const nextIsGallery = nextSection?.type === "gallery" || nextSection?.type === "galleryGrid";
                const prevIsHero = prevSection?.type === "hero";
                const shouldHideDivider = (isHero && nextIsInfo) || (isHero && nextIsGallery);
                const paddingClass = isInfo && prevIsHero ? "pb-12 sm:pb-16" : "py-12 sm:py-16";

                return (
                  <div key={`${section.type}-${"id" in section && section.id ? section.id : index}`}>
                    <div className={paddingClass}>
                      {renderSection(section)}
                    </div>
                    {!shouldHideDivider && index < content.sections!.length - 1 && <hr className="border-white/15" />}
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {content.heroImage && <HeroImage src={content.heroImage} alt={content.heroImageAlt ?? content.title} />}

              {content.infoCards && content.infoCards.length > 0 && <InfoCardsSection cards={content.infoCards} />}

              {content.featureHeading && content.featureBody && (
                <FeatureSectionView
                  label={content.featureEyebrow ?? content.featureHeading}
                  subEyebrow={content.featureEyebrow}
                  heading={content.featureHeading}
                  body={content.featureBody}
                  image={content.featureImage}
                  imageAlt={content.featureImageAlt}
                />
              )}

              {content.blocks && content.blocks.length > 0 && (
                <div className="space-y-14 sm:space-y-18">
                  {content.blocks.map((block) => (
                    <TextSectionView key={block.id} block={block} />
                  ))}
                </div>
              )}

              {content.galleryImages && content.galleryImages.length > 0 && <GallerySection images={content.galleryImages} />}
            </>
          )}
        </div>

        {/* Contents nav */}
        <aside className="hidden lg:block lg:relative lg:z-20 lg:pt-4">
          <div className="sticky top-16 space-y-4">
            <p className="text-nav-item text-white/35">{sidebarLabel}</p>
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-contents-link relative z-20 inline-flex cursor-pointer transition-opacity hover:opacity-80"
                    aria-current={isActive ? "true" : undefined}
                    style={{ color: isActive ? "white" : "rgba(255,255,255,0.35)" }}
                  >
                    {formatNavLabel(item.label)}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>
    </article>
    <FooterSection />
    </>
  );
}

export default CaseTemplate;
