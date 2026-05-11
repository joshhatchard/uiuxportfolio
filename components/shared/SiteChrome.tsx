"use client";

import { usePathname } from "next/navigation";
import { NavBar } from "@/components/shared/nav-bar";

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const hideNav = pathname.startsWith("/work/") || pathname.startsWith("/creative/");

  return (
    <>
      {!hideNav ? <NavBar /> : null}
      {children}
    </>
  );
}

export default SiteChrome;
