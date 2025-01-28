"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderHandler() {
  const pathname = usePathname();

  // Paths where footer should not appear
  const noHeaderPaths = ["/checkout"];

  if (noHeaderPaths.includes(pathname)) {
    return null; // Do not render Footer
  }

  return <Header />;
}