import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { ContactSection } from "@/components/shared/ContactSection";
import { FooterSection } from "@/components/shared/FooterSection";

export const metadata: Metadata = {
  title: "About Josh Hatchard | UI/UX Designer & Developer",
  description:
    "Learn about Josh Hatchard's design philosophy, background, and approach to creating user-centred digital products. Based in Sydney.",
  openGraph: {
    type: "website",
    url: "https://joshhatchard.com/about",
    title: "About Josh Hatchard",
    description:
      "Learn about Josh Hatchard's design philosophy and approach to user-centred product design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Josh Hatchard",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStorySection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
