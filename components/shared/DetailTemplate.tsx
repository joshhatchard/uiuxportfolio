"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GallerySection, type GalleryImage } from "@/components/shared/GallerySection";

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

export type DetailTemplateContent = {
  title: string;
  subtitle: string;
  contents: ContentsLink[];
  heroImage?: string;
  heroImageAlt?: string;
  infoCards?: InfoCard[];
  featureHeading?: string;
  featureEyebrow?: string;
  featureBody?: string;
  blocks?: TextBlock[];
  galleryImages?: GalleryImage[];
};

type DetailTemplateProps = {
  content: DetailTemplateContent;
};

function ImageSlot({ alt }: { alt?: string }) {
  return (
    <div className="flex min-h-72 items-center justify-center rounded-[40px] bg-[#2b2b2b] p-8 text-center text-nav-item text-white/20 sm:min-h-96 lg:min-h-128">
      {alt ?? "Image slot"}
    </div>
  );
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-72 overflow-hidden rounded-[40px] bg-[#2b2b2b] sm:min-h-96 lg:min-h-128">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 100vw, 100vw" />
    </div>
  );
}

export function DetailTemplate({ content }: DetailTemplateProps) {
  const [activeId, setActiveId] = useState<string>("");

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

    content.contents.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [content.contents]);

  return (
    <article className="pb-16 pt-6 lg:pb-24 lg:pt-32">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_minmax(0,1fr)_140px] lg:gap-10">
        {/* Back button */}
        <div className="sticky top-16 self-start lg:pt-2">
          <Link
            href="/"
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

          {/* Hero image */}
          {content.heroImage && (
            <div className="overflow-hidden rounded-[40px]">
              <HeroImage src={content.heroImage} alt={content.heroImageAlt ?? content.title} />
            </div>
          )}

          {/* Info cards section (case studies) */}
          {content.infoCards && content.infoCards.length > 0 && (
            <section id="overview" className="scroll-mt-24">
              <div className="grid gap-8 md:grid-cols-2 items-start">
                <div className="space-y-6">
                  {(["Role", "Team", "Timeline"] as const).map((label) => {
                    const card = content.infoCards!.find((c) => c.label === label);
                    return (
                      card && (
                        <div key={label} className="space-y-1">
                          <h3 className="text-nav-item text-(--color-secondary)">{card.label}</h3>
                          <p className="text-about-body">{card.body}</p>
                        </div>
                      )
                    );
                  })}
                </div>

                <div>
                  {(() => {
                    const overview = content.infoCards!.find((c) => c.label === "Overview");
                    if (!overview) return null;
                    return (
                      <>
                        <h3 className="text-nav-item text-(--color-secondary)">{overview.label}</h3>
                        <p className="text-about-body max-w-2xl">{overview.body}</p>
                      </>
                    );
                  })()}
                </div>
              </div>
            </section>
          )}

          {/* Feature section (case studies) */}
          {content.featureHeading && content.featureBody && (
            <>
              <hr className="border-white/15" />
              <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
                <h2 className="text-heading-small text-(--color-secondary)">{content.featureHeading}</h2>
                <div className="space-y-4 pt-2">
                  {content.featureEyebrow && (
                    <p className="text-footer-link uppercase text-white/80">{content.featureEyebrow}</p>
                  )}
                  <p className="text-about-body max-w-xl">{content.featureBody}</p>
                </div>
              </section>
            </>
          )}

          {/* Text blocks section (case studies) */}
          {content.blocks && content.blocks.length > 0 && (
            <div className="space-y-14 sm:space-y-18">
              {content.blocks.map((block) => (
                <section key={block.id} id={block.id} className="scroll-mt-24">
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
              ))}
            </div>
          )}

          {/* Gallery section (creative) */}
          {content.galleryImages && content.galleryImages.length > 0 && <GallerySection images={content.galleryImages} />}
        </div>

        {/* Contents nav */}
        <aside className="hidden lg:block lg:pt-4">
          <div className="sticky top-16 space-y-4">
            <p className="text-nav-item text-white/35">CONTENTS</p>
            <nav className="flex flex-col gap-6">
              {content.contents.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-contents-link transition-opacity hover:opacity-80"
                    aria-current={isActive ? "true" : undefined}
                    style={{ color: isActive ? "white" : "rgba(255,255,255,0.35)" }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>
    </article>
  );
}

export default DetailTemplate;
