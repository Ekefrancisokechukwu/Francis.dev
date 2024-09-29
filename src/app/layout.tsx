import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./Context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <ThemeProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 md:px-12 dark:bg-black`}
        >
          <main className="min-h-screen w-full lg:max-w-6xl   flex flex-col justify-between dark:bg-zinc-900   border-x dark:border-zinc-50/20 mx-auto bg-white pt-5">
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}
