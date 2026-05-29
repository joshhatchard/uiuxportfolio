import { notFound } from "next/navigation";
import {
  caseStudies,
  getCaseStudy,
  getNextProjectCard,
  workCards,
} from "@/lib/project-cards";
import { getCaseStudyContent } from "@/lib/case-study-content";
import { CaseTemplate } from "@/components/shared/CaseTemplate";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const content = getCaseStudyContent(slug);

  if (!study || !content) {
    notFound();
  }

  return (
    <CaseTemplate
      content={content}
      backHref="/"
      nextCard={getNextProjectCard(workCards, `/work/${slug}`)}
    />
  );
}
