"use client";

import { ChevronDown, FigmaIcon } from "lucide-react";
// import { motion } from "motion/react";

const navs = [" Design resources", "Websites", "plugins"];

export const AnimatedMenu = () => {
  return (
    <div>
      <header className="bg-neutral-900 w-full py-1 gap-x-20 rounded-3xl px-4 flex items-center">
        <FigmaIcon color="#fff" />

        <nav className="flex items-center gap-x-10">
          {navs.map((nav, i) => {
            return (
              <div key={i}>
                <button className="text-sm group inline-flex py-2 gap-x-1">
                  {nav}
                  <ChevronDown
                    size={18}
                    className="group-hover:-rotate-180 transition-transform duration-300 ease-out"
                  />
                </button>
              </div>
            );
          })}
        </nav>
      </header>
    </div>
  );
};
