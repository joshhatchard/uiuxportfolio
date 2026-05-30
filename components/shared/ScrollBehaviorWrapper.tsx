"use client";

import { useSmoothScroll } from "@/lib/use-smooth-scroll";

export function ScrollBehaviorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();
  return <>{children}</>;
}
