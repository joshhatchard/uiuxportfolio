"use client";
import { ExternalArrow } from "@/lib/icons/ExternalArrow";

export function FooterSection() {
  return (
    <footer className="page-container mt-24 border-t border-white/10 pt-12 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between sm:justify-start sm:gap-16">
          <div>
            <p className="text-nav-item text-(--color-grey) uppercase">MAIN</p>
            <nav className="mt-6 flex flex-col gap-4">
              <a href="#selected-work" className="text-footer-link py-2 -my-2 hover:opacity-80" style={{ color: "var(--color-secondary)" }}>WORK</a>
              <a href="/creative" className="text-footer-link py-2 -my-2 hover:opacity-80" style={{ color: "var(--color-secondary)" }}>CREATIVE</a>
              <a href="/about" className="text-footer-link py-2 -my-2 hover:opacity-80" style={{ color: "var(--color-secondary)" }}>ABOUT</a>
            </nav>
          </div>
            <div className="text-right sm:text-left">
            <p className="text-nav-item text-(--color-grey) uppercase">CONNECT</p>
            <nav className="mt-6 flex flex-col items-end sm:items-start gap-4">
                <a href="mailto:joshualhatchard@gmail.com" className="text-footer-link py-2 -my-2 inline-flex items-center gap-1 hover:opacity-80" style={{ color: "var(--color-secondary)" }}>
                  CONTACT
                  <ExternalArrow className="shrink-0" />
                </a>
                <a href="https://www.linkedin.com/in/joshhatchard" target="_blank" rel="noreferrer" className="text-footer-link py-2 -my-2 inline-flex items-center gap-1 hover:opacity-80" style={{ color: "var(--color-secondary)" }}>
                  LINKEDIN
                  <ExternalArrow className="shrink-0" />
                </a>
                <a href="https://github.com/joshhatchard" target="_blank" rel="noreferrer" className="text-footer-link py-2 -my-2 inline-flex items-center gap-1 hover:opacity-80" style={{ color: "var(--color-secondary)" }}>
                  GITHUB
                  <ExternalArrow className="shrink-0" />
                </a>
            </nav>
            </div>
        </div>
        <div className="mt-10">
          <p className="text-footer-link" style={{ color: "var(--color-secondary)" }}>© 2026 Josh Hatchard. All Rights Reserved.</p>
          <p className="mt-3 text-nav-item text-(--color-grey)">Made with heart and soul &lt;3</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
