"use client";

import LogoLoop from "@/components/animations/LogoLoop";
import { useEffect, useState } from "react";

const trustLogos = [
  {
    src: "/orgs/usydv3.svg",
    alt: "University of Sydney",
    href: "https://www.sydney.edu.au",
  },
  {
    src: "/orgs/suedev3.svg",
    alt: "SUEDE",
    href: "https://www.suede.org.au",
  },
  {
    src: "/orgs/sudatav3.svg",
    alt: "SUDATA",
    href: "https://www.sudata.com.au",
  },
  {
    src: "/orgs/sulv3.svg",
    alt: "StartupLink USYD",
    href: "https://www.instagram.com/startuplinkusyd/",
  },
];

export function TrustSection() {
  const [gap, setGap] = useState(64);
  const [logoHeight, setLogoHeight] = useState(28);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setGap(isMobile ? 40 : 96);
      setLogoHeight(isMobile ? 20 : 28);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="partners"
      className="page-container border-y border-white/10 lg:px-6 py-6 md:py-8 mt-0 md:mt-8"
    >
      <h2 className="sr-only">Partner Organizations</h2>
      <div className="h-5 md:h-8 w-full">
        <LogoLoop
          logos={trustLogos}
          speed={30}
          direction="left"
          logoHeight={logoHeight}
          gap={gap}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#0d0d0d"
          ariaLabel="Partner organizations"
        />
      </div>
    </section>
  );
}

export default TrustSection;
