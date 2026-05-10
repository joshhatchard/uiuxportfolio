import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

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
