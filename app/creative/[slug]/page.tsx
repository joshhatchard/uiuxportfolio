import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  creativeWorks,
  getCreativeWork,
  getNextProjectCard,
  creativeCards,
} from "../../../lib/project-cards";
import { CaseTemplate } from "../../../components/shared/CaseTemplate";
import { getCreativeContent } from "../../../lib/creative-content";
import { JsonLd } from "../../../components/shared/JsonLd";

type CreativePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return creativeWorks.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CreativePageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getCreativeWork(slug);

  if (!work) {
    return {
      title: "Creative Work Not Found",
      description: "The creative work you are looking for does not exist.",
    };
  }

  return {
    title: `${work.title} - ${work.subtitle} | Josh Hatchard`,
    description: work.summary,
    openGraph: {
      type: "article",
      url: `https://joshhatchard.com/creative/${slug}`,
      title: `${work.title} - ${work.subtitle}`,
      description: work.summary,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: work.title,
        },
      ],
    },
  };
}

export default async function CreativeDetailPage({
  params,
}: CreativePageProps) {
  const { slug } = await params;
  const work = getCreativeWork(slug);
  const content = getCreativeContent(slug);

  if (!work || !content) {
    notFound();
  }

  const creativeSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: work.title,
    description: work.summary,
    author: {
      "@type": "Person",
      name: "Josh Hatchard",
    },
    url: `https://joshhatchard.com/creative/${slug}`,
  };

  return (
    <>
      <JsonLd data={creativeSchema} />
      <CaseTemplate
        content={content}
        backHref="/creative"
        nextCard={getNextProjectCard(creativeCards, `/creative/${slug}`)}
      />
    </>
  );
}
