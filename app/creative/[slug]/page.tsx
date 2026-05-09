import { notFound } from "next/navigation";
import { creativeWorks, getCreativeWork } from "@/lib/portfolio";

type CreativePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return creativeWorks.map((item) => ({ slug: item.slug }));
}

export default async function CreativeDetailPage({ params }: CreativePageProps) {
  const { slug } = await params;
  const work = getCreativeWork(slug);

  if (!work) {
    notFound();
  }

  return (
    <article className="max-w-3xl space-y-6">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-600">
          Creative / Detail
        </p>
        <h1 className="text-4xl font-bold tracking-tight">{work.title}</h1>
        <p className="text-base leading-7 text-zinc-700">{work.summary}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-zinc-400 bg-zinc-50 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em]">
            Visual notes
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Placeholder space for images, compositions, or experiments.
          </p>
        </section>
        <section className="border border-zinc-400 bg-zinc-50 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em]">
            Reflection
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Placeholder space for what the creative study explored.
          </p>
        </section>
      </div>
    </article>
  );
}