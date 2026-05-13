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
          { label: "Role", body: "Design + Frontend" },
          { label: "Team", body: "Joshua Hatchard (Co-Founder) | Nathan Townsend (Co-Founder)" },
          { label: "Timeline", body: "Early Validation Phase" },
          {
            label: "Overview",
            body: "Granic is a student-focused productivity platform that consolidates assignment deadlines from LMS platforms into one streamlined workspace. || Before building the full product, we launched a landing page to validate whether students resonated with the problem and were willing to join a waitlist.",
          },
        ],
      },
      {
        type: "feature",
        id: "feature",
        label: "Problem",
        subEyebrow: "Fragmented workflows",
        heading: "Students lack a single source of truth for deadlines",
        body:
          "Students track deadlines across LMS, emails, and calendars, making it easy to lose visibility.",
      },
      {
        type: "feature",
        id: "feature-2",
        label: "Validation",
        subEyebrow: "What we wanted to learn",
        heading: "Testing if the idea had demand",
        body:
          "Would students understand the idea and care enough to sign up?",
      },
      {
        type: "feature",
        id: "feature-3",
        label: "Approach",
        subEyebrow: "Core principle",
        heading: "Product first, conversion focused",
        body:
          "The landing page was designed for instant clarity and fast conversion to waitlist signups.",
      },
      {
        type: "feature",
        id: "feature-4",
        label: "Design Decisons",
        subEyebrow: "Visual Direction",
        heading: "Minimal and distraction free",
        body:
          "A black-and-white system kept attention on the idea rather than the interface.",
      },
      {
        type: "feature",
        id: "feature-5",
        label: "Execution",
        subEyebrow: "Visual Direction",
        heading: "Designed and built end to end",
        body:
          "I designed and developed the landing page and connected the waitlist to a database for validation.",
      },
      {
        type: "feature",
        id: "feature-6",
        label: "Outcome",
        subEyebrow: "What we measured",
        heading: "Early validation in progress",
        body:
          "Waitlist signups as an early signal of interest in the product.",
      },
      {
        type: "feature",
        id: "feature-7",
        label: "Reflection",
        subEyebrow: "Key takeaway",
        heading: "What I learnt",
        body:
          "The landing page helped confirm early interest and shaped how we approach the MVP and positioning.",
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
        label: "USER RESEARCH",
        subEyebrow: "Subheading",
        heading: "Yarning session suggests a tailored Canvas Support Page",
        body:
          "Insert the supporting paragraph here. This section is ideal for explaining the key concept, approach, or project story in a preformatted layout.",
      },
      {
        type: "feature",
        id: "feature-content-hubs",
        label: "Content Hubs",
        subEyebrow: "Resources",
        heading: "Centralise culturally relevant resources and support",
        body:
          "Content hubs collect culturally specific resources, contact points and contextual guidance alongside support content. Hubs make it easier for students and staff to find culturally appropriate help, link to services, and surface summaries and local contacts for each topic.",
      },
    ],
  },
};

export function getCaseStudyContent(slug: string) {
  return caseStudyContent[slug];
}