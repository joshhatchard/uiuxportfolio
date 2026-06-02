import { ProjectCards } from "@/components/shared/ProjectCards";
import { creativeCards } from "@/lib/project-cards";

export function CreativeProjectCards() {
  return (
    <ProjectCards
      cards={creativeCards}
      sectionId="creative-projects"
      spacing="mt-4 scroll-mt-8 lg:mt-16"
    />
  );
}

export default CreativeProjectCards;
