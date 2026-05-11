export function TrustSection() {
  return (
    <section className="page-container mt-10 border-y border-white/10 lg:px-6 py-8 lg:mt-14 lg:py-8">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
        <p className="text-nav-item text-left text-white/35">
          CRAFTING THOUGHTFUL DESIGNS
        </p>

        <div className="flex items-center gap-10 opacity-40 lg:justify-end lg:gap-12">
          <img src="/orgs/usyd.png" alt="University of Sydney" className="h-5 md:h-7 w-auto" />
          <img src="/orgs/suede.png" alt="SUEDE" className="h-4 md:h-6 w-auto" />
          <img src="/orgs/sudata.png" alt="SUDATA" className="h-4 md:h-6 w-auto" />
          <img src="/orgs/sul.png" alt="StartupLink USYD" className="h-6 md:h-9 w-auto mt-[-4]" />
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
