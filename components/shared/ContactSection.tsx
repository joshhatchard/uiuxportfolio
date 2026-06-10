"use client";
import { useCallback, useState } from "react";
import posthog from "posthog-js";
import { Anybody } from "next/font/google";
import { motion } from "framer-motion";
import { ExternalArrow } from "@/lib/icons/ExternalArrow";
import ShinyText from "@/components/animations/ShinyText";
import HoverLiftText from "@/components/animations/HoverLiftText";
import { heroContainer, fadeUp } from "@/components/animations/loadAnimations";

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
    posthog.capture("contact_email_copied");
  }, []);

  return (
    <section
      id="contact"
      className="page-container mt-8 md:mt-12 lg:mt-16 border-t border-white/10 pt-24 lg:pt-28"
    >
      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={heroContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={fadeUp}
          className={`text-cta-heading ${anybody.className}`}
        >
          <span style={{ color: "var(--color-secondary)" }} className="block">
            LET&apos;S WORK
          </span>
          <span
            style={{ color: "var(--color-primary)" }}
            className="block"
            aria-label="TOGETHER!"
          >
            <HoverLiftText text="TOGETHER!" />
          </span>
        </motion.h2>

        <motion.address
          variants={fadeUp}
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
        </motion.address>

        <motion.div variants={fadeUp} className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`text-nav-item inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 min-w-45 transition-all cursor-pointer active:translate-y-px active:scale-[0.98] ${!copied && "hover:opacity-80"}`}
            style={{
              background: copied
                ? "var(--color-primary)"
                : "var(--color-secondary)",
              color: copied
                ? "var(--color-secondary)"
                : "var(--color-bg-black)",
              boxShadow: copied
                ? "none"
                : "0 1px 0 rgba(255, 255, 255, 0.08) inset",
            }}
          >
            {copied ? "COPIED!" : "COPY EMAIL"}
            {copied ? (
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
        </motion.div>

        <motion.div variants={fadeUp} className="mt-20 space-y-4">
          <div className="flex justify-center gap-12">
            <a
              href="https://www.linkedin.com/in/joshhatchard"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect on LinkedIn (opens in new window)"
              className="group flex flex-col items-center gap-4"
              onClick={() => posthog.capture("contact_linkedin_clicked")}
            >
              <img
                src="/platforms/linkedin.svg"
                alt="LinkedIn"
                className="h-14 w-auto transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-1"
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
              className="group flex flex-col items-center gap-4"
              onClick={() => posthog.capture("contact_github_clicked")}
            >
              <img
                src="/platforms/github.svg"
                alt="GitHub"
                className="h-14 w-auto transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-1"
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
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
