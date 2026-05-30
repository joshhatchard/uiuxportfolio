import { readFile } from "node:fs/promises";
import { join } from "node:path";

const trustLogos = [
  {
    src: "/orgs/usydv3.svg",
    alt: "University of Sydney",
    href: "https://www.sydney.edu.au",
    className: "h-7 md:h-7",
  },
  {
    src: "/orgs/suedev3.svg",
    alt: "SUEDE",
    href: "https://www.suede.org.au",
    className: "h-6 md:h-6",
  },
  {
    src: "/orgs/sudatav3.svg",
    alt: "SUDATA",
    href: "https://www.sudata.com.au",
    className: "h-6 md:h-6",
  },
  {
    src: "/orgs/sulv3.svg",
    alt: "StartupLink USYD",
    href: "https://www.instagram.com/startuplinkusyd/",
    className: "h-7 md:h-7",
  },
] as const;

async function getInlineSvg(src: string, className: string) {
  const filePath = join(process.cwd(), "public", src);
  const svg = await readFile(filePath, "utf8");
  return svg.replace("<svg ", `<svg class="${className} w-auto" `);
}

export async function TrustSection() {
  const logos = await Promise.all(
    trustLogos.map(async (logo) => ({
      ...logo,
      svg: await getInlineSvg(logo.src, logo.className),
    })),
  );

  return (
    <section className="page-container mt-0 border-y border-white/10 lg:px-6 py-8 lg:py-8">
      <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
        <p
          className="text-nav-item text-left"
          style={{ color: "var(--color-slate)" }}
        >
          CRAFTING THOUGHTFUL DESIGNS
        </p>

        <div className="flex items-center justify-between gap-8 md:justify-start md:gap-10 lg:justify-end lg:gap-12">
          {logos.map((logo) => (
            <a
              key={logo.src}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center transition-opacity hover:opacity-80"
              aria-label={logo.alt}
              style={{ color: "var(--color-primary)" }}
            >
              <span
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: logo.svg }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
