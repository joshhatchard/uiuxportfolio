import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/portfolio";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="max-w-3xl space-y-6">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-600">
          Work / Case Study
        </p>
        <h1 className="text-4xl font-bold tracking-tight">{study.title}</h1>
        <p className="text-base leading-7 text-zinc-700">{study.summary}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <section className="border border-zinc-400 bg-zinc-50 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em]">
            Problem
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Placeholder notes for the problem statement and constraints.
          </p>
        </section>
        <section className="border border-zinc-400 bg-zinc-50 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em]">
            Process
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Placeholder notes for research, sketches, and iteration.
          </p>
        </section>
        <section className="border border-zinc-400 bg-zinc-50 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em]">
            Outcome
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            Placeholder notes for what changed and what you learned.
          </p>
        </section>
      </div>
    </article>
  );
}