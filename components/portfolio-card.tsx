import Link from "next/link";

type PortfolioCardProps = {
  href: string;
  title: string;
  subtitle: string;
  summary: string;
};

export function PortfolioCard({
  href,
  title,
  subtitle,
  summary,
}: PortfolioCardProps) {
  return (
    <Link
      href={href}
      className="flex aspect-square h-full w-full flex-col justify-between border border-zinc-400 bg-zinc-50 p-4 transition-transform hover:-translate-y-1 hover:bg-zinc-100"
    >
      <div className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
          {subtitle}
        </div>
        <h2 className="text-2xl font-bold leading-tight text-zinc-900">
          {title}
        </h2>
      </div>
      <p className="text-sm leading-6 text-zinc-700">{summary}</p>
    </Link>
  );
}