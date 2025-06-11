import Hero from "./components/hero/Hero";

import { Metadata } from "next";
import { Projects } from "./Projects";
import { Spotlight } from "./components/ui/Spotlight";

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
    <div className="min-h-screen w-full  max-w-[40rem]  mx-auto pb-5">
      <Hero />
      <Projects />
      <Spotlight />

      {/* <div className="absolute top-0 left-0  h-[30rem] w-[15rem] blur-sm -rotate-45" /> */}

      {/* old */}
      {/* <div className="mt-16 flex lg:flex-row flex-col gap-y-8  gap-x-8 pb-20">
        <div className="flex-grow-[3]">
          <TechStacks />
        </div>
        <div className="flex-grow-[2] shrink-0 lg:w-[25rem] w-full">
          <WorkExperince />
        </div>
      </div> */}
    </div>
  );
}
