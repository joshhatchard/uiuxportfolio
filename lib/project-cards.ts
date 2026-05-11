export type PortfolioItem = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
};

export type ProjectCardData = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
};

export const caseStudies: PortfolioItem[] = [
  {
    slug: "case-study-one",
    title: "Case Study One",
    subtitle: "Product onboarding",
    summary: "A low-fidelity placeholder for a UX case study about onboarding.",
  },
  {
    slug: "case-study-two",
    title: "Case Study Two",
    subtitle: "Checkout flow",
    summary: "A low-fidelity placeholder for a UX case study about checkout.",
  },
  {
    slug: "case-study-three",
    title: "Case Study Three",
    subtitle: "Dashboard design",
    summary: "A low-fidelity placeholder for a UX case study about dashboards.",
  },
];

export const creativeWorks: PortfolioItem[] = [
  {
    slug: "sudata-merchandise",
    title: "SUDATA MERCHANDISE",
    subtitle: "GRAPHIC DESIGN | PRODUCT DESIGN",
    summary: "A low-fidelity placeholder for a creative exploration page.",
  },
  {
    slug: "sudata-logo-redesign",
    title: "SUDATA LOGO REDESIGN",
    subtitle: "BRANDING | MARKETING",
    summary: "A low-fidelity placeholder for another creative exploration page.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function getCreativeWork(slug: string) {
  return creativeWorks.find((item) => item.slug === slug);
}

export const workCards: ProjectCardData[] = [
  {
    href: "/work/case-study-one",
    imageSrc: "/casethumbnails/granic.jpg",
    imageAlt: "Granic deadline tracker preview",
    title: "GRANIC - COMPACTING DEADLINES",
    subtitle: "SAAS | PRODUCT DESIGN",
  },
  {
    href: "/work/case-study-two",
    imageSrc: "/casethumbnails/canvas.jpg",
    imageAlt: "USYD first nations support preview",
    title: "USYD - FIRST NATIONS SUPPORT",
    subtitle: "UI DESIGN | DEVELOPMENT",
  },
];

export const creativeCards: ProjectCardData[] = [
  {
    href: "/creative/sudata-merchandise",
    imageSrc: "/casethumbnails/hoodiev2.jpg",
    imageAlt: "Creative work one preview",
    title: "SUDATA MERCHANDISE",
    subtitle: "GRAPHIC DESIGN | PRODUCT DESIGN",
  },
  {
    href: "/creative/sudata-logo-redesign",
    imageSrc: "/casethumbnails/logo.jpg",
    imageAlt: "Creative work two preview",
    title: "SUDATA LOGO REDESIGN",
    subtitle: "BRANDING | MARKETING",
  },
];
