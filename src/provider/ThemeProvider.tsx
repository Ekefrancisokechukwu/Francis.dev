"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import Lenis from "lenis";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // React.useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
