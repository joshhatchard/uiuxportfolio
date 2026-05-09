export type PortfolioItem = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
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
    slug: "creative-one",
    title: "Creative Work One",
    subtitle: "Experimental layout",
    summary: "A low-fidelity placeholder for a creative exploration page.",
  },
  {
    slug: "creative-two",
    title: "Creative Work Two",
    subtitle: "Visual study",
    summary: "A low-fidelity placeholder for another creative exploration page.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function getCreativeWork(slug: string) {
  return creativeWorks.find((item) => item.slug === slug);
}