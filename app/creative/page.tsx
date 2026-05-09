import { PortfolioCard } from "@/components/portfolio-card";
import { creativeWorks } from "@/lib/portfolio";

export default function CreativePage() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-600">
          Creative
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Creative work</h1>
        <p className="text-base leading-7 text-zinc-700">
          Two square cards link into individual creative pages.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {creativeWorks.map((work) => (
          <PortfolioCard
            key={work.slug}
            href={`/creative/${work.slug}`}
            title={work.title}
            subtitle={work.subtitle}
            summary={work.summary}
          />
        ))}
      </div>
    </section>
  );
}