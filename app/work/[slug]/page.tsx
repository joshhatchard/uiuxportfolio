import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  caseStudies,
  getCaseStudy,
  getNextProjectCard,
  workCards,
} from "@/lib/project-cards";
import { getCaseStudyContent } from "@/lib/case-study-content";
import { CaseTemplate } from "@/components/shared/CaseTemplate";
import { JsonLd } from "@/components/shared/JsonLd";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "The case study you are looking for does not exist.",
    };
  }

  return {
    title: `${study.title} - ${study.subtitle} | Josh Hatchard`,
    description: study.summary,
    openGraph: {
      type: "article",
      url: `https://joshhatchard.com/work/${slug}`,
      title: `${study.title} - ${study.subtitle}`,
      description: study.summary,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const content = getCaseStudyContent(slug);

  if (!study || !content) {
    notFound();
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    author: {
      "@type": "Person",
      name: "Josh Hatchard",
    },
    url: `https://joshhatchard.com/work/${slug}`,
  };

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <CaseTemplate
        content={content}
        backHref="/"
        nextCard={getNextProjectCard(workCards, `/work/${slug}`)}
      />
    </>
  );
}
