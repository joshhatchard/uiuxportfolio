"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalArrow } from "@/lib/icons/ExternalArrow";

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  { href: "/", label: "WORK" },
  { href: "/creative", label: "CREATIVE" },
  { href: "/about", label: "ABOUT" },
];

const externalLinks = [
  { href: "https://www.linkedin.com/in/joshhatchard", label: "LINKEDIN" },
  { href: "mailto:joshualhatchard@gmail.com", label: "CONTACT" },
];

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
      className="text-nav-item flex items-center gap-1 px-4 transition-opacity hover:opacity-80"
      style={{ color: "var(--color-secondary)" }}
    >
      {label}
      {showArrow && <ExternalArrow className="shrink-0" />}
    </a>
  );
}

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
    <header className={`sticky top-0 z-50 site-header${inter.className}`}>
      {/*
       * Layout strategy:
       *
       * <420px   flex-col — @ button (self-end) on top, full-width pill below
       * 420–480  flex-row — pill shrinks naturally, @ button on right
       * 480–lg   flex-row — logo visible, pill absolutely centred
       * lg+      flex-row — logo left, pill centred, text links right
       */}
        <div className="
        flex flex-col gap-3
        min-[420px]:flex-row min-[420px]:gap-0
        min-[420px]:items-center min-[420px]:h-12
        py-6 min-[420px]:py-16 relative
        min-[420px]:justify-end min-[480px]:justify-start
        ">

        {/* Logo — hidden below 480px */}
        <div className="hidden min-[480px]:flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 -mx-3 transition-opacity hover:opacity-80"
          >
            <img src="/logo.svg" alt="logomark" aria-hidden className="h-6 w-auto" />
          </Link>
        </div>

        {/*
         * Nav pill
         *
         * <420px        order-2 → appears BELOW the @ button
         *               full-width, items use flex-1 to fill evenly
         * 420–480px     order-none, static, shrinks to fit
         * 480px+        absolute centre
         */}
        <nav
          aria-label="Primary"
          className="
            order-1 min-[420px]:order-none
            flex justify-center
            min-[420px]:flex-none min-[420px]:static
            min-[480px]:absolute min-[480px]:left-1/2 min-[480px]:-translate-x-1/2
          "
        >
          <div
            className="
              inline-flex items-center rounded-full px-1 py-1
              w-full min-[420px]:w-auto
            "
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
                  className={`
                    text-nav-item relative flex items-center justify-center
                    rounded-full px-2 py-3 text-center transition-opacity
                    flex-1 min-[420px]:flex-none min-[420px]:w-24
                    ${!isActive && "hover:opacity-80"}
                  `}
                  style={{
                    color: isActive ? "var(--color-secondary)" : "var(--color-secondary)",
                  }}
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

        {/*
         * Right side — desktop links / @ dropdown
         *
         * <420px   order-1 → appears ABOVE the pill (top of column)
         *          self-end → pushes button to the right edge
         * 420px+   order-none, ml-auto takes over
         */}
        <div className="
          flex h-12 items-center justify-end shrink-0 order-2 self-end
          min-[420px]:order-none min-[420px]:self-auto
          min-[420px]:ml-3 min-[420px]:ml-auto
          lg:-mr-4
        ">

          {/* lg+: plain text links */}
          <div className="hidden lg:flex items-center h-full">
            {externalLinks.map((link) => (
              <ExternalLink key={link.href} {...link} showArrow />
            ))}
          </div>

          {/* <lg: @ button with dropdown */}
          <div className="relative lg:hidden" ref={dropdownRef}>
            <button
              type="button"
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
                className="absolute right-0 top-full mt-4 px-2 py-4 min-w-max overflow-hidden rounded-2xl flex flex-col gap-4"
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