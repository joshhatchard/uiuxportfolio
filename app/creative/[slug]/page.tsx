import { notFound } from "next/navigation";
import { creativeWorks, getCreativeWork } from "../../../lib/portfolio";
import { CreativeTemplate } from "../../../components/CreativeTemplate";
import { getCreativeContent } from "../../../lib/creative-content";

type CreativePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return creativeWorks.map((item) => ({ slug: item.slug }));
}

export default async function CreativeDetailPage({ params }: CreativePageProps) {
  const { slug } = await params;
  const work = getCreativeWork(slug);
  const content = getCreativeContent(slug);

  if (!work || !content) {
    notFound();
  }

  return <CreativeTemplate content={content} />;
}