import { PortfolioCard } from "@/components/portfolio-card";
import { caseStudies } from "@/lib/portfolio";

type WorkIndexSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function WorkIndexSection({
  eyebrow,
  title,
  description,
}: WorkIndexSectionProps) {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-600">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="text-base leading-7 text-zinc-700">{description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {caseStudies.map((study) => (
          <PortfolioCard
            key={study.slug}
            href={`/work/${study.slug}`}
            title={study.title}
            subtitle={study.subtitle}
            summary={study.summary}
          />
        ))}
      </div>
    </section>
  );
}