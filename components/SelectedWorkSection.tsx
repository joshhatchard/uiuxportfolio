import Link from "next/link";

type SelectedWorkCard = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
};

const selectedWorkCards: SelectedWorkCard[] = [
  {
    href: "/work/case-study-one",
    imageSrc: "/casethumbnails/granic.jpg",
    imageAlt: "Granic deadline tracker preview",
    title: "GRANIC - DEADLINE TRACKER",
    subtitle: "SAAS | PRODUCT DESIGN",
  },
  {
    href: "/work/case-study-two",
    imageSrc: "/casethumbnails/canvas.jpg",
    imageAlt: "USYD first nations support preview",
    title: "USYD - FIRST NATIONS SUPPORT",
    subtitle: "UI DESIGN | DEVELOPMENT",
  },
];

function SelectedWorkCardView({
  href,
  imageSrc,
  imageAlt,
  title,
  subtitle,
}: SelectedWorkCard) {
  return (
    <Link href={href} className="group block transition-opacity hover:opacity-90">
      <div className="aspect-square overflow-hidden">
        <img src={imageSrc} alt={imageAlt} className="block h-full w-full object-cover object-center" />
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-case-study-title">{title}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="ml-4 h-10 w-10"
            style={{ color: "var(--color-secondary)" }}
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
        <p className="text-nav-item text-white/35">{subtitle}</p>
      </div>
    </Link>
  );
}

export function SelectedWorkSection() {
  return (
    <section id="selected-work" className="page-container mt-12 scroll-mt-8 lg:mt-16">
      <div className="mb-6 sm:mb-8">
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {selectedWorkCards.map((card) => (
          <SelectedWorkCardView key={card.href} {...card} />
        ))}
      </div>
    </section>
  );
}

export default SelectedWorkSection;
