export function HeroSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="space-y-6">
        {/* Caption */}
        <p className="text-hero-caption">
          <span style={{ color: "var(--color-secondary)" }}>JOSH HATCHARD</span>
          <span style={{ color: "var(--color-grey)" }}> - DESIGNER AND </span>
          <span style={{ color: "var(--color-secondary)" }}>&lt;DEVELOPER&gt;</span>
        </p>

        {/* Main Heading */}
        <h1 className="text-hero-main">
          <span style={{ color: "var(--color-secondary)" }}>I'M A </span>
          <span style={{ color: "var(--color-primary)" }}>UI/UX DESIGNER</span>
        </h1>

        {/* Sub Heading */}
        <h2 className="text-hero-sub">
          <span style={{ color: "var(--color-grey)" }}>// I ALSO CODE PRODUCTS, END TO END</span>
        </h2>
      </div>
    </section>
  );
}

export default HeroSection;
