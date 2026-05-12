import type { CaseTemplateContent } from "@/components/shared/CaseTemplate";

export type CaseStudyContentsLink = {
  id: string;
  label: string;
};

export type CaseStudyInfoCard = {
  label: string;
  body: string;
};

export type CaseStudyBlock = {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
};

export type CaseStudyContent = CaseTemplateContent;

export const caseStudyContent: Record<string, CaseStudyContent> = {
  granic: {
    title: "Deadline Tracker",
    subtitle: "Granic - DEC 2025",
    sections: [
      { type: "hero", src: "/casethumbnails/granic.jpg", alt: "Granic deadline tracker hero image" },
      {
        type: "info",
        id: "overview",
        label: "Overview",
        cards: [
          { label: "Role", body: "Insert the role summary here." },
          { label: "Team", body: "Insert the team members or team summary here." },
          { label: "Timeline", body: "Insert the project timeline here." },
          {
            label: "Overview",
            body: "Insert a short overview of the case study here. Keep it brief and direct.",
          },
        ],
      },
      {
        type: "feature",
        id: "feature",
        label: "Smart Detection",
        eyebrow: "Detection",
        heading: "Intelligent deadline parsing from email and documents",
        body:
          "Granic automatically extracts and organizes deadlines from your emails, documents, and calendar invites. The AI-powered system learns your terminology and recognizes implicit deadlines, ensuring nothing slips through the cracks.",
      },
      {
        type: "feature",
        id: "feature-2",
        label: "Visual Timeline",
        eyebrow: "Visualization",
        heading: "See all your deadlines at a glance",
        body:
          "The interactive timeline view shows your upcoming deadlines in a beautiful, at-a-glance format. Color-coded by project and priority level, you can quickly identify what needs attention and plan your week accordingly.",
      },
      {
        type: "feature",
        id: "feature-3",
        label: "Team Sync",
        eyebrow: "Collaboration",
        heading: "Keep your team aligned on shared deadlines",
        body:
          "Collaborate seamlessly with real-time deadline updates and shared project views. Team members receive instant notifications about changes, preventing missed deadlines and keeping everyone on the same page.",
      },
    ],
  },
  canvas: {
    title: "First Nations Support",
    subtitle: "University of Sydney - NOV 2025",
    sections: [
      { type: "hero", src: "/casethumbnails/canvas.jpg", alt: "University of Sydney first nations support hero image" },
      {
        type: "info",
        id: "overview",
        label: "Overview",
        cards: [
          { label: "Role", body: "Insert the role summary here." },
          { label: "Team", body: "Insert the team members or team summary here." },
          { label: "Timeline", body: "Insert the project timeline here." },
          {
            label: "Overview",
            body: "Insert a short overview of the case study here. Keep it brief and direct.",
          },
        ],
      },
      {
        type: "feature",
        id: "feature",
        label: "Feature",
        eyebrow: "Subheading",
        heading: "This is a main heading that can span",
        body:
          "Insert the supporting paragraph here. This section is ideal for explaining the key concept, approach, or project story in a preformatted layout.",
      },
    ],
  },
};

export function getCaseStudyContent(slug: string) {
  return caseStudyContent[slug];
}