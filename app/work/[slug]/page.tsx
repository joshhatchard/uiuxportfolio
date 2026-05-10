import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/portfolio";
import { getCaseStudyContent } from "@/lib/case-study-content";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";

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

  return <CaseStudyTemplate content={content} />;
}