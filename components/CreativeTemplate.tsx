import Image from "next/image";
import Link from "next/link";
import type { CreativeTemplateContent } from "@/lib/creative-content";

type CreativeTemplateProps = {
  content: CreativeTemplateContent;
};

function MediaFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-72 overflow-hidden rounded-[40px] bg-[#2b2b2b] sm:min-h-96 lg:min-h-128">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 80vw, 100vw"
      />
    </div>
  );
}

export function CreativeTemplate({ content }: CreativeTemplateProps) {
  return (
    <article className="pb-16 pt-6 lg:pb-24 lg:pt-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_minmax(0,1fr)_140px] lg:gap-10">
        <div className="sticky top-10 self-start lg:pt-2">
          <Link
            href="/"
            className="text-nav-item inline-flex items-center gap-2 rounded-full px-4 py-2 transition-opacity hover:opacity-80"
            style={{ background: "var(--nav-item-bg)", color: "var(--color-secondary)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            BACK
          </Link>
        </div>

        <div className="space-y-12 sm:space-y-16">
          <header className="space-y-4 text-center">
            <p className="text-hero-caption text-white/25">CREATIVE / DETAIL</p>
            <h1 className="text-heading-small text-(--color-secondary)">{content.title}</h1>
            <p className="text-nav-item text-white/25">{content.subtitle}</p>
          </header>

          <section id="overview" className="scroll-mt-24">
            <MediaFrame src={content.heroImage} alt={content.heroImageAlt} />
          </section>

          <div className="space-y-14 sm:space-y-18">
            {content.blocks.map((block) => (
              <section key={block.id} id={block.id} className="scroll-mt-24">
                <MediaFrame src={block.image} alt={block.alt} />
              </section>
            ))}
          </div>
        </div>

        <aside className="hidden lg:block lg:pt-4">
          <div className="sticky top-10 space-y-4">
            <p className="text-nav-item text-white/35">CONTENTS</p>
            <nav className="flex flex-col gap-3">
              {content.contents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-nav-item transition-opacity hover:opacity-80"
                  style={{ color: "var(--color-grey)" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </article>
  );
}

export default CreativeTemplate;