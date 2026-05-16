"use client";

import { usePathname } from "next/navigation";
import { NavBar } from "@/components/shared/nav-bar";

type ShowNavProps = {
  children: React.ReactNode;
};

export function ShowNav({ children }: ShowNavProps) {
  const pathname = usePathname();
  
  // Show nav only on: /, /creative, /about (not on case study routes)
  const showNav = 
    pathname === "/" || 
    pathname === "/creative" || 
    pathname === "/about";

  return (
    <>
      {showNav ? <NavBar /> : null}
      {children}
    </>
  );
}
