import PixelBlast from "@/components/shared/PixelBlast";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { FooterSection } from "@/components/shared/FooterSection";

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden pb-8 md:pb-12 lg:pb-16">
        <div className="absolute inset-x-0 top-0 bottom-8 z-0 pointer-events-none md:bottom-12 lg:bottom-16">
          <PixelBlast
            className="opacity-30"
            variant="square"
            pixelSize={8}
            color="#1e1e24"
            patternScale={3.5}
            patternDensity={0.5}
            pixelSizeJitter={0}
            enableRipples
            liquid={false}
            speed={0.6}
            edgeFade={0}
            noiseAmount={0.08}
            interactionMode="window"
            transparent
          />
        </div>
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>
      <TrustSection />
      <SelectedWorkSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
