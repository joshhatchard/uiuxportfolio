"use client";

import { usePathname } from "next/navigation";

type PageFadeInProps = {
  children: React.ReactNode;
};

export function PageFadeIn({ children }: PageFadeInProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-fade-in">
      {children}
    </div>
  );
}
