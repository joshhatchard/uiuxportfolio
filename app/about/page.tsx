import { AboutHero } from "@/components/AboutHero";
import { AboutStorySection } from "@/components/AboutStorySection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

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