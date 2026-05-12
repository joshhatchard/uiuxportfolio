export function TrustSection() {
  return (
    <section className="page-container mt-10 border-y border-white/10 lg:px-6 py-8 lg:mt-14 lg:py-8">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
        <p className="text-nav-item text-left text-white/35">
          CRAFTING THOUGHTFUL DESIGNS
        </p>

        <div className="flex items-center gap-10 lg:justify-end lg:gap-12">
          {[
            { src: "/orgs/usydv2.svg", alt: "University of Sydney", href: "https://www.sydney.edu.au", className: "h-5 md:h-7" },
            { src: "/orgs/suedev2.svg", alt: "SUEDE", href: "https://www.suede.org.au", className: "h-4 md:h-6" },
            { src: "/orgs/sudatav2.svg", alt: "SUDATA", href: "https://www.sudata.com.au", className: "h-4 md:h-6" },
            { src: "/orgs/sulv2.svg", alt: "StartupLink USYD", href: "https://www.instagram.com/startuplinkusyd/", className: "h-5 md:h-7" },
          ].map((logo) => (
            <a
              key={logo.src}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center transition-opacity hover:opacity-80"
              aria-label={logo.alt}
              style={{ color: "var(--color-primary)" }}
            >
              <img src={logo.src} alt={logo.alt} className={`${logo.className} w-auto`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
