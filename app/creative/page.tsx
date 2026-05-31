import type { Metadata } from "next";
import { CreativeHero } from "@/components/creative/CreativeHero";
import { CreativeProjectCards } from "@/components/creative/CreativeProjectCards";
import ContactSection from "@/components/shared/ContactSection";
import FooterSection from "@/components/shared/FooterSection";

export const metadata: Metadata = {
  title: "Creative Work | Josh Hatchard - Designer",
  description:
    "Explore Josh Hatchard's creative design work including branding, graphic design, and product design projects. SUDATA merchandise and logo redesign.",
  openGraph: {
    type: "website",
    url: "https://joshhatchard.com/creative",
    title: "Creative Work | Josh Hatchard",
    description:
      "Explore creative design projects including branding, graphic design, and product design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Josh Hatchard Creative Work",
      },
    ],
  },
};

export default function CreativePage() {
  return (
    <>
      <CreativeHero />
      <CreativeProjectCards />
      <ContactSection />
      <FooterSection />
    </>
  );
}
