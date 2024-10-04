import React from "react";
import Heading from "../components/Heading";

const ComponentsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <Heading text="Components" className="mb-8" />
      <div className="text-center">
        <p className="text-3xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">
          Coming Soon
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
          We&apos;re working on something exciting! Our component library will
          be available here soon.
        </p>
      </div>
      <div className="mt-12">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-zinc-300 dark:bg-zinc-700 h-12 w-12"></div>
          <div className="rounded-full bg-zinc-300 dark:bg-zinc-700 h-12 w-12"></div>
          <div className="rounded-full bg-zinc-300 dark:bg-zinc-700 h-12 w-12"></div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
