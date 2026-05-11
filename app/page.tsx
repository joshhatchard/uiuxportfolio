import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { FooterSection } from "@/components/shared/FooterSection";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<TrustSection />
			<SelectedWorkSection />
			<ContactSection />
			<FooterSection />
		</>
	);
}
