"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  { href: "/", label: "WORK" },
  { href: "/creative", label: "CREATIVE" },
  { href: "/about", label: "ABOUT" },
];

const externalLinks = [
  { href: "https://www.linkedin.com/in/joshhatchard", label: "LINKEDIN" },
  { href: "mailto:joshualhatchard@gmailcom", label: "CONTACT" },
];

// ─── Shared external link ────────────────────────────────────────────────────

interface ExternalLinkProps {
  href: string;
  label: string;
  showArrow?: boolean;
  onClick?: () => void;
}

function ExternalLink({ href, label, showArrow = false, onClick }: ExternalLinkProps) {
  const isMailto = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noreferrer"}
      onClick={onClick}
      className="text-nav-item flex items-center gap-1 px-6 py-4 transition-opacity hover:opacity-80"
      style={{ color: "var(--color-grey)" }}
    >
      {label}
      {showArrow && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      )}
    </a>
  );
}

// ─── NavBar ──────────────────────────────────────────────────────────────────

export function NavBar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDropdownOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <header className={`site-header ${inter.className}`}>
      {/* 
        Breakpoints:
          mobile  — default (<640px): nav in flow, small pill items, @ button
          tablet  — sm (640–1023px):  nav absolutely centred, @ button
          desktop — lg (1024px+):     nav absolutely centred, text links
      */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:gap-8 sm:px-8 lg:px-12">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 px-3 py-2 transition-opacity hover:opacity-80">
          <img src="/logo.svg" alt="" aria-hidden className="h-6 w-auto" />
        </Link>

        {/* Nav pill — in flow on mobile, absolute centre on tablet + desktop */}
        <nav
          aria-label="Primary"
          className="flex items-center sm:absolute sm:left-1/2 sm:-translate-x-1/2"
        >
          <div
            className="inline-flex items-center rounded-full px-1 py-1"
            style={{ background: "var(--nav-item-bg)", border: "1px solid #303030" }}
          >
            {navItems.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                pathname.startsWith(`${href}/`) ||
                (href === "/" && pathname.startsWith("/work/"));

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-nav-item relative flex w-24 items-center justify-center rounded-full py-3 text-center transition-opacity ${!isActive && "hover:opacity-80"}`}
                  style={{ color: isActive ? "var(--color-secondary)" : "var(--color-grey)" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--nav-highlight-bg)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right side — desktop text links / tablet+mobile @ dropdown */}
        <div className="flex h-12 items-center">

          {/* Desktop: plain text links */}
          <div className="hidden lg:flex items-center gap-0">
            {externalLinks.map((link) => (
              <ExternalLink key={link.href} {...link} showArrow />
            ))}
          </div>

          {/* Mobile + tablet: @ button with dropdown */}
          <div className="relative lg:hidden" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-label="Contact links"
              aria-expanded={isDropdownOpen}
              className="flex h-12 w-12 items-center justify-center rounded-full text-[20px] font-bold transition-opacity hover:opacity-80"
              style={{
                background: "var(--nav-item-bg)",
                border: "1px solid #303030",
                color: "var(--color-secondary)",
              }}
            >
              @
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 top-full mt-4 min-w-max overflow-hidden rounded-2xl"
                style={{ background: "var(--nav-item-bg)", border: "1px solid #303030" }}
              >
                {externalLinks.map((link) => (
                  <ExternalLink
                    key={link.href}
                    {...link}
                    showArrow
                    onClick={() => setIsDropdownOpen(false)}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}

export default NavBar;