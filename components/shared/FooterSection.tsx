"use client";
import { ExternalArrow } from "@/lib/icons/ExternalArrow";

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="page-container mt-24 lg:mt-28 border-t border-white/10 pt-12 pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between sm:justify-start sm:gap-16">
          <nav>
            <h2 className="text-nav-item text-(--color-slate) uppercase sr-only">
              Main
            </h2>
            <ul className="mt-6 flex flex-col gap-4 list-none">
              <li>
                <a
                  href="#selected-work"
                  className="text-nav-item py-2 -my-2 hover:opacity-80"
                  style={{ color: "var(--color-secondary)" }}
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="/creative"
                  className="text-nav-item py-2 -my-2 hover:opacity-80"
                  style={{ color: "var(--color-secondary)" }}
                >
                  CREATIVE
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-nav-item py-2 -my-2 hover:opacity-80"
                  style={{ color: "var(--color-secondary)" }}
                >
                  ABOUT
                </a>
              </li>
            </ul>
          </nav>
          <nav className="text-right sm:text-left">
            <h2 className="text-nav-item text-(--color-slate) uppercase sr-only">
              Connect
            </h2>
            <ul className="mt-6 flex flex-col items-end sm:items-start gap-4 list-none">
              <li>
                <a
                  href="mailto:joshualhatchard@gmail.com"
                  aria-label="Send email"
                  className="text-nav-item py-2 -my-2 inline-flex items-center gap-1 hover:opacity-80"
                  style={{ color: "var(--color-secondary)" }}
                >
                  CONTACT
                  <ExternalArrow className="shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/joshhatchard"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Connect on LinkedIn (opens in new window)"
                  className="text-nav-item py-2 -my-2 inline-flex items-center gap-1 hover:opacity-80"
                  style={{ color: "var(--color-secondary)" }}
                >
                  LINKEDIN
                  <ExternalArrow className="shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/joshhatchard"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View GitHub (opens in new window)"
                  className="text-nav-item py-2 -my-2 inline-flex items-center gap-1 hover:opacity-80"
                  style={{ color: "var(--color-secondary)" }}
                >
                  GITHUB
                  <ExternalArrow className="shrink-0" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-10">
          <p
            className="text-footer-link"
            style={{ color: "var(--color-secondary)", fontWeight: 600 }}
          >
            © 2026 Josh Hatchard. All Rights Reserved.
          </p>
          <p
            className="mt-3 text-nav-item text-(--color-slate)"
            style={{ fontWeight: 600 }}
          >
            Designed and coded with heart and soul &lt;3
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
