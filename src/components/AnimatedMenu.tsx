"use client";

import { ChevronDown, FigmaIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const navs = [" Design resources", "Websites", "plugins"];

export const AnimatedMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div>
      <header className="bg-neutral-900 w-full py-1 gap-x-20 rounded-3xl px-4 flex items-center">
        <FigmaIcon color="#fff" />

        <nav
          onMouseLeave={handleMouseLeave}
          className="flex items-center gap-x-10"
        >
          {navs.map((nav, index) => {
            return (
              <div key={index} className="relative z-10">
                <motion.button
                  onMouseOver={() => handleMouseHover(index)}
                  className="text-sm group inline-flex py-2 px-4 rounded-lg gap-x-1"
                >
                  {nav}
                  <ChevronDown
                    size={18}
                    className="group-hover:-rotate-180 transition-transform duration-300 ease-out"
                  />
                </motion.button>
                {activeIndex === index ? (
                  <motion.div
                    layoutId="menu-indicator"
                    className="absolute inset-0 rounded-lg bg-neutral-800/80 -z-10"
                  />
                ) : null}
              </div>
            );
          })}
        </nav>
      </header>
    </div>
  );
};
