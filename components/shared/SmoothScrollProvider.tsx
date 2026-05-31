"use client";
import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

type SmoothScrollContextType = {
  lenis?: any;
  scrollTo?: (target: any, opts?: any) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextType>({});

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<any | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = (window as any).__lenis;
    if (existing) {
      lenisRef.current = existing;
      return;
    }

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      // 1. Prevent Lenis from fighting native scroll on non-scrollable elements
      prevent: (node: Element) => node.closest("[data-lenis-prevent]") !== null,
    });

    (window as any).__lenis = lenis;
    lenisRef.current = lenis;

    let rafId = 0;
    const onRaf = (time: number) => {
      lenis.raf(time);
      // 2. Dispatch a tick event so PixelBlast can sync to this loop
      //    instead of running its own competing RAF
      window.dispatchEvent(new CustomEvent("lenis:tick", { detail: { time } }));
      rafId = requestAnimationFrame(onRaf);
    };
    rafId = requestAnimationFrame(onRaf);

    let isScrolling = false;
    let scrollTimeout = 0 as any;
    const onLenisScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        try {
          window.dispatchEvent(new CustomEvent("lenis:scroll-start"));
          document.documentElement.classList.add("is-scrolling");
        } catch (e) {}
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        isScrolling = false;
        try {
          window.dispatchEvent(new CustomEvent("lenis:scroll-end"));
          document.documentElement.classList.remove("is-scrolling");
        } catch (e) {}
      }, 150);
    };

    lenis.on("scroll", onLenisScroll);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off?.("scroll", onLenisScroll);
      try {
        lenis.destroy();
      } catch (e) {}
      if ((window as any).__lenis === lenis) delete (window as any).__lenis;
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: any, opts?: any) => {
    if (!lenisRef.current) return;
    lenisRef.current.scrollTo(target, opts);
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export default SmoothScrollProvider;
