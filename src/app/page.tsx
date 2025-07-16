import Hero from "./components/hero/Hero";

import { Metadata } from "next";
import { Projects } from "./Projects";
// import { Spotlight } from "./components/ui/Spotlight";
import BlogPosts from "./BlogPosts";
import InteractionsList from "./InteractionsList";

export const metadata: Metadata = {
  title: "Eke Francis okechukwu - Portfolio",
  description:
    "I'm a software developer who loves crafting beautiful website UIs",
  openGraph: {
    type: "website",
    url: "https://ekefrancisokechukwu.vercel.app",
    title: "Eke Francis okechukwu - Portfolio",
    description:
      "I'm a software developer who loves crafting beautiful website UIs",
    images: [
      {
        url: "https://ekefrancisokechukwu.vercel.app/about-me.png",
        width: 1200,
        height: 630,
        alt: "Eke Francis Okechukwu - Software Developer / Frontend developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@EkeTechSpecter",
    creator: "@EkeTechSpecter",
    title: "Eke Francis okechukwu - Portfolio",
    description:
      "I'm a software developer who loves crafting beautiful website UIs",
    images: [
      {
        url: "https://ekefrancisokechukwu.vercel.app/about-me.png",
        alt: "Eke Francis Okechukwu - Software Developer",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full  max-w-[50rem]  mx-auto pb-20">
      {/* <Spotlight /> */}

      <Hero />
      <Projects />
      <InteractionsList />
      <BlogPosts />

      {/* <div className="absolute top-0 left-0  h-[30rem] w-[15rem] blur-sm -rotate-45" /> */}
    </div>
  );
}
