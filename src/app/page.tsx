import Hero from "./components/hero/Hero";
import TechStacks from "./components/TechStacks";
import WorkExperince from "./components/WorkExperince";
import { Metadata } from "next";

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
        alt: "Eke Francis Okechukwu - Software Developer",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full xl:max-w-[63rem] lg:max-w-[55rem] md:max-w-[40rem] md:px-0 sm:px-12  px-6  mx-auto">
      <Hero />
      <div className="mt-16 flex lg:flex-row flex-col gap-y-8  gap-x-8 pb-20">
        <div className="flex-grow-[3]">
          <TechStacks />
        </div>
        <div className="flex-grow-[2] shrink-0 lg:w-[25rem] w-full">
          <WorkExperince />
        </div>
      </div>
    </div>
  );
}
