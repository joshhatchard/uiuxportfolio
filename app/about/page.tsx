import { AboutHero } from "@/components/about/AboutHero";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { ContactSection } from "@/components/shared/ContactSection";
import { FooterSection } from "@/components/shared/FooterSection";

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