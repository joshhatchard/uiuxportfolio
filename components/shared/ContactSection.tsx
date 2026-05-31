"use client";
import { useCallback, useState } from "react";
import { Anybody } from "next/font/google";
import { ExternalArrow } from "@/lib/icons/ExternalArrow";
import ShinyText from "@/components/animations/ShinyText";

const anybody = Anybody({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const emailAddress = "joshualhatchard@gmail.com";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    await navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section
      id="contact"
      className="page-container mt-8 md:mt-12 lg:mt-16 border-t border-white/10 pt-14 lg:pt-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className={`text-hero-small ${anybody.className}`}>
          <span style={{ color: "var(--color-secondary)" }}>
            LET&apos;S WORK{" "}
          </span>
          <span style={{ color: "var(--color-primary)" }} className="block">
            TOGETHER!
          </span>
        </h2>
        <address
          className={`mt-16 max-w-full break-all text-email ${anybody.className} not-italic`}
        >
          <ShinyText
            text={emailAddress}
            speed={2.5}
            color="#8a8a96"
            shineColor="#f5e8da"
            spread={120}
            direction="left"
          />
        </address>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`text-nav-item inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 min-w-45 transition-all cursor-pointer ${!copied && "hover:opacity-80"}`}
            style={{
              background: copied
                ? "var(--color-primary)"
                : "var(--color-secondary)",
              color: copied
                ? "var(--color-secondary)"
                : "var(--color-bg-black)",
            }}
          >
            {copied ? "COPIED!" : "COPY EMAIL"}
            {copied ? (
              // Checkmark icon
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  d="M4 10l4.5 4.5L16 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            ) : (
              // Copy icon
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  d="M18.332 16.667V8.334C18.332 7.417 17.582 6.667 16.665 6.667H8.332C7.415 6.667 6.665 7.417 6.665 8.334V16.667C6.665 17.584 7.415 18.333 8.332 18.333H16.665C17.582 18.333 18.332 17.584 18.332 16.667ZM8.332 16.667V8.334H16.665V16.667H8.332Z"
                  fill="currentColor"
                />
                <path
                  d="M3.332 11.667V3.334H11.665V5H13.332V3.334C13.332 2.417 12.582 1.667 11.665 1.667H3.332C2.415 1.667 1.665 2.417 1.665 3.334V11.667C1.665 12.584 2.415 13.333 3.332 13.333H4.999V11.667H3.332Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email copied to clipboard" : ""}
          </span>
        </div>

        <div className="mt-20 space-y-4">
          <div className="flex justify-center gap-12">
            <a
              href="https://www.linkedin.com/in/joshhatchard"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect on LinkedIn (opens in new window)"
              className="flex flex-col items-center gap-4 transition-opacity hover:opacity-80"
            >
              <img
                src="/platforms/linkedin.svg"
                alt="LinkedIn"
                className="h-14 w-auto"
              />
              <p
                className="text-nav-item inline-flex items-center gap-1"
                style={{ color: "var(--color-slate)" }}
              >
                LINKEDIN
                <ExternalArrow className="shrink-0" />
              </p>
            </a>

            <a
              href="https://github.com/joshhatchard"
              target="_blank"
              rel="noreferrer"
              aria-label="View on GitHub (opens in new window)"
              className="flex flex-col items-center gap-4 transition-opacity hover:opacity-80"
            >
              <img
                src="/platforms/github.svg"
                alt="GitHub"
                className="h-14 w-auto"
              />
              <p
                className="text-nav-item inline-flex items-center gap-1"
                style={{ color: "var(--color-slate)" }}
              >
                GITHUB
                <ExternalArrow className="shrink-0" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
