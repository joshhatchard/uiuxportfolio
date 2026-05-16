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
      { type: "hero", src: "/works/granic/hero.png", alt: "Granic deadline tracker hero image" },
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
        body: "Students track deadlines across LMS, emails, and calendars, making it easy to lose visibility.",
        image: "/works/granic/problem.png",
        imageAlt: "Fragmented deadline tracking across platforms",
      },
      {
        type: "feature",
        id: "feature-2",
        label: "Validation",
        subEyebrow: "What we wanted to learn",
        heading: "Testing if the idea had demand",
        body: "Would students understand the idea and care enough to sign up?",
        image: "/works/granic/validation.png",
        imageAlt: "Validation approach and findings",
      },
      {
        type: "feature",
        id: "feature-3",
        label: "Approach",
        subEyebrow: "Core principle",
        heading: "Product first, conversion focused",
        body: "The landing page was designed for instant clarity and fast conversion to waitlist signups.",
        image: "/works/granic/approach.png",
        imageAlt: "Landing page approach and structure",
      },
      {
        type: "feature",
        id: "feature-4",
        label: "Design Decisons",
        subEyebrow: "Visual Direction",
        heading: "Minimal and distraction free",
        body: "A black-and-white system kept attention on the idea rather than the interface.",
        image: "/works/granic/decisions.png",
        imageAlt: "Design decisions and visual direction",
      },
      {
        type: "feature",
        id: "feature-5",
        label: "Execution",
        subEyebrow: "Visual Direction",
        heading: "Designed and built end to end",
        body: "I designed and developed the landing page and connected the waitlist to a database for validation.",
        image: "/works/granic/execution.png",
        imageAlt: "Final built landing page",
      },
      {
        type: "feature",
        id: "feature-6",
        label: "Outcome",
        subEyebrow: "What we measured",
        heading: "Early validation in progress",
        body: "Waitlist signups as an early signal of interest in the product.",
        image: "/works/granic/outcome1.png",
        imageAlt: "Outcome result one",
        image2: "/works/granic/outcome2.png",
        imageAlt2: "Outcome result two",
      },
      {
        type: "feature",
        id: "feature-7",
        label: "Reflection",
        subEyebrow: "Key takeaway",
        heading: "What I learnt",
        body: "The landing page helped confirm early interest and shaped how we approach the MVP and positioning.",
      },
    ],
  },
  canvas: {
    title: "First Nations Support",
    subtitle: "University of Sydney - NOV 2025",
    sections: [
      { type: "hero", src: "/works/canvas/hero.png", alt: "University of Sydney first nations support hero image" },
      {
        type: "info",
        id: "overview",
        label: "Overview",
        cards: [
          { label: "Role", body: "UI/UX Designer & Developer" },
          { label: "Team", body: "Solo designer, working closely with a supervising project lead" },
          { label: "Timeline", body: "3 Weeks - Nov 2025" },
          {
            label: "Overview",
            body: "As part of the University of Sydney's One Sydney, Many People initiative, I designed and developed a Canvas landing page centralising study resources for First Nations allied health students. || Working solo under a supervisor, I handled everything from information architecture and visual design to front-end development and academic handoff, delivered in three weeks.",
          },
        ],
      },
      {
        type: "feature",
        id: "context",
        label: "Context",
        subEyebrow: "One Sydney, Many People",
        heading: "A resource hub built from the ground up, for students who deserved better.",
        body: "First Nations students in the Faculty of Medicine and Health had face-to-face support through Gadigal and faculty liaisons, but no central digital space for the resources they needed day to day. This project set out to build one.",
        image: "/works/canvas/contextv2.png",
        imageAlt: "Project context and background",
      },
      {
        type: "feature",
        id: "challenge",
        label: "Challenge",
        subEyebrow: "Platform & Culture",
        heading: "Two constraints, one solution.",
        body: "Canvas is built for course delivery, not considered UX. It actively reformats custom code, collapses layouts and strips styling on save making intentional design an uphill battle. The brief also demanded genuine cultural sensitivity, not aesthetic tokenism. Both had to be solved together.",
        image: "/works/canvas/challenge.png",
        imageAlt: "Canvas platform and cultural constraints",
      },
      {
        type: "feature",
        id: "discovery",
        label: "Discovery",
        subEyebrow: "Student Yarning Sessions",
        heading: "The brief came from the students themselves.",
        body: "Before this project began, yarning sessions were held with First Nations students to understand what they actually needed. The feedback was clear, resources were scattered and the platform didn't feel relevant to them. That feedback became the foundation of every decision that followed.",
        image: "/works/canvas/discovery.png",
        imageAlt: "Discovery and yarning session insights",
      },
      {
        type: "feature",
        id: "design",
        label: "Decisions",
        subEyebrow: "Community-Led Design",
        heading: "Structure shaped by community, not assumption.",
        body: "The yarning session surfaced distinct categories of need, academic admin, study support, wellbeing, placements, and professionalism, each becoming its own module. A commissioned artwork was incorporated to ground the design in cultural identity and ensure the space felt like it genuinely belonged to the students using it.",
        image: "/works/canvas/decisions.png",
        imageAlt: "Design decisions and module structure",
      },
      {
        type: "feature",
        id: "build",
        label: "Constraint",
        subEyebrow: "Canvas LMS",
        heading: "Designed and built inside a platform that fights back.",
        body: "Canvas routinely reformatted and broke custom code on save, requiring constant workarounds to preserve layout and hierarchy. Regular check-ins with my supervisor helped navigate both the technical and cultural decisions throughout. Alongside the page, I produced a handoff document so the coordinating academics could maintain it long after my involvement ended.",
        image: "/works/canvas/constraint.png",
        imageAlt: "Canvas LMS build constraints and workarounds",
      },
      {
        type: "feature",
        id: "handoff",
        label: "Handoff",
        subEyebrow: "Code Documentation",
        heading: "Built to outlast my involvement",
        body: "Canvas components don't maintain themselves. Alongside the page, I produced a handoff document walking staff and academics through every custom module, how it was built, how to edit it safely, and how to reuse components without breaking the layout. The goal was a resource that could be maintained confidently by people who had never written a line of HTML.",
        image: "/works/canvas/handoff.png",
        imageAlt: "Handoff documentation",
      },
      {
        type: "feature",
        id: "outcome",
        label: "Outcome",
        subEyebrow: "Faculty of Medicine and Health",
        heading: "A single, trusted place for First Nations allied health students to find what they need.",
        body: "The completed page consolidated everything students asked for, from academic calendars, wellbeing resources, placement support to culturally specific contacts. All merged into one accessible, considered space.",
        image: "/works/canvas/outcome1.png",
        imageAlt: "Outcome result one",
        image2: "/works/canvas/outcome2.png",
        imageAlt2: "Outcome result two",
      },
      {
        type: "feature",
        id: "reflection",
        label: "Reflection",
        subEyebrow: "Lessons Learned",
        heading: "What the project taught me.",
        body: "Real-world projects surface challenges no brief can anticipate. Working closely with a supervisor throughout grounded the process and sharpened my ability to communicate and justify design decisions. Following a structured design process also proved its value, beyond workflow it gave me a clear language to present ideas to stakeholders and build confidence at every stage.",
      },
    ],
  },
};

export function getCaseStudyContent(slug: string) {
  return caseStudyContent[slug];
}