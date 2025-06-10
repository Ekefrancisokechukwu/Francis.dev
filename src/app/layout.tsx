import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { MenuProvider } from "./context/MenuContext";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Inter } from "next/font/google";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eke Francis Okechukwu",
  description: "Eke Francis solfware developer porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistMono.variable} antialiased overflow-x-hidden bg-gray-100 md:px-12 dark:bg-[#0f0f0f] `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MenuProvider>{children}</MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
