"use client";
import React from "react";

export function FooterSection() {
  return (
    <footer className="page-container mt-24 border-t border-white/10 pt-12 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between sm:justify-start sm:gap-16">
          <div>
            <p className="text-nav-item text-(--color-grey) uppercase">MAIN</p>
            <nav className="mt-6 flex flex-col gap-4">
              <a href="#selected-work" className="text-footer-link hover:opacity-80">WORK</a>
              <a href="/creative" className="text-footer-link hover:opacity-80">CREATIVE</a>
              <a href="/about" className="text-footer-link hover:opacity-80">ABOUT</a>
            </nav>
          </div>
            <div className="text-right sm:text-left">
            <p className="text-nav-item text-(--color-grey) uppercase">CONNECT</p>
            <nav className="mt-6 flex flex-col items-end sm:items-start gap-4">
                <a href="mailto:joshualhatchard@gmail.com" className="text-footer-link hover:opacity-80">CONTACT</a>
                <a href="https://www.linkedin.com/in/joshhatchard" target="_blank" rel="noreferrer" className="text-footer-link hover:opacity-80">LINKEDIN</a>
                <a href="https://github.com/joshhatchard" target="_blank" rel="noreferrer" className="text-footer-link hover:opacity-80">GITHUB</a>
            </nav>
            </div>
        </div>
        <div className="mt-10">
          <p className="text-footer-link">© 2026 Josh Hatchard. All Rights Reserved.</p>
          <p className="mt-3 text-nav-item text-(--color-grey)">Made with heart and soul &lt;3</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
