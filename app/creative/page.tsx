import { CreativeHero } from "@/components/creative/CreativeHero";
import { CreativeProjectCards } from "@/components/creative/CreativeProjectCards";
import ContactSection from "@/components/shared/ContactSection";
import FooterSection from "@/components/shared/FooterSection";

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