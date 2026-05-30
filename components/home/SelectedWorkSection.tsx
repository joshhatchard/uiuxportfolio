import { ProjectCards } from "@/components/shared/ProjectCards";
import { workCards } from "@/lib/project-cards";

export function SelectedWorkSection() {
  return (
    <ProjectCards
      cards={workCards}
      sectionId="selected-work"
      spacing="mt-8 scroll-mt-8 md:mt-12 lg:mt-16"
    />
  );
}

export default SelectedWorkSection;
