"use client";

import { useEffect } from "react";

const SCROLL_DURATION = 1500; // milliseconds for anchor links
const WHEEL_SCROLL_SPEED = 0.65; // 35% slower scroll speed (65% of normal)
const WHEEL_ANIMATION_DURATION = 700; // How long each wheel scroll takes to animate

export function useSmoothScroll() {
  useEffect(() => {
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (startY: number, endY: number, duration: number) => {
      const startTime = performance.now();
      const distance = endY - startY;

      const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * easeProgress);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();

      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (!element) return;

      const start = window.scrollY;
      const end = element.getBoundingClientRect().top + window.scrollY;

      animateScroll(start, end, SCROLL_DURATION);
    };

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;

      // Don't interfere with form inputs
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT"
      ) {
        return;
      }

      // Check if target element is scrollable (has overflow)
      if (
        target.scrollHeight > target.clientHeight ||
        target.scrollWidth > target.clientWidth
      ) {
        return;
      }

      // Check ancestors for scroll containers
      let parent = target.parentElement;
      while (parent && parent !== document.documentElement) {
        if (
          parent.scrollHeight > parent.clientHeight ||
          parent.scrollWidth > parent.clientWidth
        ) {
          return;
        }
        parent = parent.parentElement;
      }

      e.preventDefault();

      const currentScroll = window.scrollY;
      const scrollAmount = e.deltaY * WHEEL_SCROLL_SPEED;
      const newScroll = currentScroll + scrollAmount;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const clampedScroll = Math.max(0, Math.min(newScroll, maxScroll));

      // Smooth animate the wheel scroll with longer duration
      animateScroll(currentScroll, clampedScroll, WHEEL_ANIMATION_DURATION);
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
}
