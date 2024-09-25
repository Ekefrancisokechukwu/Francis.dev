import Hero from "./components/hero/Hero";
import TechStacks from "./components/TechStacks";
import WorkExperince from "./components/WorkExperince";

export default function Home() {
  return (
    <div className="min-h-screen w-full lg:max-w-[63rem] md:max-w-[40rem] md:px-0 px-12  mx-auto">
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
