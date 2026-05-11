import type { DetailTemplateContent } from "@/components/shared/DetailTemplate";

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

export type CaseStudyTemplateContent = DetailTemplateContent;

export const caseStudyContent: Record<string, CaseStudyTemplateContent> = {
  "case-study-one": {
    title: "Deadline Tracker",
    subtitle: "Granic - DEC 2025",
    contents: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "outcomes", label: "Outcomes" },
      { id: "takeaways", label: "Takeaways" },
    ],
    infoCards: [
      { label: "Role", body: "Insert the role summary here." },
      { label: "Team", body: "Insert the team members or team summary here." },
      { label: "Timeline", body: "Insert the project timeline here." },
      {
        label: "Overview",
        body: "Insert a short overview of the case study here. Keep it brief and direct.",
      },
    ],
    featureHeading: "This is a main heading that can span",
    featureEyebrow: "Subheading",
    featureBody:
      "Insert the supporting paragraph here. This section is ideal for explaining the key concept, approach, or project story in a preformatted layout.",
    blocks: [
      {
        id: "problem",
        eyebrow: "Problem",
        heading: "Frame the problem clearly",
        body:
          "Use this block for the problem statement, user pain points, or the context that led to the redesign.",
        imageAlt: "Case study image placeholder",
      },
      {
        id: "solution",
        eyebrow: "Solution",
        heading: "Show the designed response",
        body:
          "Use this block to describe the solution, structure, and the decisions that shaped the final outcome.",
        imageAlt: "Case study image placeholder",
        reverse: true,
      },
      {
        id: "outcomes",
        eyebrow: "Outcomes",
        heading: "Summarize impact and results",
        body:
          "Use this block for metrics, launch notes, or the practical results of the work.",
        imageAlt: "Case study image placeholder",
      },
      {
        id: "takeaways",
        eyebrow: "Takeaways",
        heading: "Wrap with learnings",
        body:
          "Use this block for reflection, what you would improve, or the final takeaways from the project.",
        imageAlt: "Case study image placeholder",
        reverse: true,
      },
    ],
  },
  "case-study-two": {
    title: "First Nations Support",
    subtitle: "University of Sydney - NOV 2025",
    contents: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "outcomes", label: "Outcomes" },
      { id: "takeaways", label: "Takeaways" },
    ],
    infoCards: [
      { label: "Role", body: "Insert the role summary here." },
      { label: "Team", body: "Insert the team members or team summary here." },
      { label: "Timeline", body: "Insert the project timeline here." },
      {
        label: "Overview",
        body: "Insert a short overview of the case study here. Keep it brief and direct.",
      },
    ],
    featureHeading: "This is a main heading that can span",
    featureEyebrow: "Subheading",
    featureBody:
      "Insert the supporting paragraph here. This section is ideal for explaining the key concept, approach, or project story in a preformatted layout.",
    blocks: [
      {
        id: "problem",
        eyebrow: "Problem",
        heading: "Frame the problem clearly",
        body:
          "Use this block for the problem statement, user pain points, or the context that led to the redesign.",
        imageAlt: "Case study image placeholder",
      },
      {
        id: "solution",
        eyebrow: "Solution",
        heading: "Show the designed response",
        body:
          "Use this block to describe the solution, structure, and the decisions that shaped the final outcome.",
        imageAlt: "Case study image placeholder",
        reverse: true,
      },
      {
        id: "outcomes",
        eyebrow: "Outcomes",
        heading: "Summarize impact and results",
        body:
          "Use this block for metrics, launch notes, or the practical results of the work.",
        imageAlt: "Case study image placeholder",
      },
      {
        id: "takeaways",
        eyebrow: "Takeaways",
        heading: "Wrap with learnings",
        body:
          "Use this block for reflection, what you would improve, or the final takeaways from the project.",
        imageAlt: "Case study image placeholder",
        reverse: true,
      },
    ],
  },
  "case-study-three": {
    title: "Dashboard Design",
    subtitle: "Analytics - MAY 2026",
    contents: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "outcomes", label: "Outcomes" },
      { id: "takeaways", label: "Takeaways" },
    ],
    infoCards: [
      { label: "Role", body: "Insert the role summary here." },
      { label: "Team", body: "Insert the team members or team summary here." },
      { label: "Timeline", body: "Insert the project timeline here." },
      {
        label: "Overview",
        body: "Insert a short overview of the case study here. Keep it brief and direct.",
      },
    ],
    featureHeading: "This is a main heading that can span",
    featureEyebrow: "Subheading",
    featureBody:
      "Insert the supporting paragraph here. This section is ideal for explaining the key concept, approach, or project story in a preformatted layout.",
    blocks: [
      {
        id: "problem",
        eyebrow: "Problem",
        heading: "Frame the problem clearly",
        body:
          "Use this block for the problem statement, user pain points, or the context that led to the redesign.",
        imageAlt: "Case study image placeholder",
      },
      {
        id: "solution",
        eyebrow: "Solution",
        heading: "Show the designed response",
        body:
          "Use this block to describe the solution, structure, and the decisions that shaped the final outcome.",
        imageAlt: "Case study image placeholder",
        reverse: true,
      },
      {
        id: "outcomes",
        eyebrow: "Outcomes",
        heading: "Summarize impact and results",
        body:
          "Use this block for metrics, launch notes, or the practical results of the work.",
        imageAlt: "Case study image placeholder",
      },
      {
        id: "takeaways",
        eyebrow: "Takeaways",
        heading: "Wrap with learnings",
        body:
          "Use this block for reflection, what you would improve, or the final takeaways from the project.",
        imageAlt: "Case study image placeholder",
        reverse: true,
      },
    ],
  },
};

export function getCaseStudyContent(slug: string) {
  return caseStudyContent[slug];
}