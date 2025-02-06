"use client";

import { Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJest } from "react-icons/si";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";

interface IFilter {
  Icon: IconType;
  text: string;
}

const allFilters: IFilter[] = [
  { Icon: RiJavascriptFill, text: "Javascript" },
  { Icon: IoLogoCss3, text: "CSS" },
  { Icon: TbBrandReactNative, text: "React" },
  { Icon: RiTailwindCssFill, text: "Tailwind" },
  { Icon: BiLogoTypescript, text: "Typescript" },
  { Icon: BiLogoPostgresql, text: "SQL" },
  { Icon: SiJest, text: "Jest" },
];

const Preview = () => {
  const [appliedFilters, setAppliedFilters] = useState(allFilters.slice(0, 3));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  const removeFilter = (filter: IFilter) => {
    setAppliedFilters((prev) => prev.filter((f) => f.text !== filter.text));
  };

  const addFilter = (filter: IFilter) => {
    setAppliedFilters((prev) => [...prev, filter]);
    setIsDropdownOpen(false);
  };

  const availableFilters = allFilters.filter(
    (filter) => !appliedFilters.some((f) => f.text === filter.text)
  );

  return (
    <div className="h-[35rem] grid place-items-center">
      <div className="border w-[22rem] p-5 rounded-xl shadow-md bg-white ">
        <h1 className="font-bold text-sm text-neutral-500">Applied Filters</h1>
        <div className="mt-4">
          <motion.div
            layout
            className="relative w-fit flex flex-wrap items-center gap-2 "
          >
            <AnimatePresence>
              {appliedFilters.map((filter, i) => {
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    key={i}
                    className="inline-flex items-center gap-x-1.5 h-[2rem] border shadow-md rounded-lg px-1.5 "
                  >
                    <filter.Icon size={13} className="text-neutral-600" />
                    <span className="text-sm text-neutral-500 font-semibold">
                      {filter.text}
                    </span>

                    <button onClick={() => removeFilter(filter)}>
                      <X size={10} className="text-neutral-500" />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {availableFilters.length > 0 && (
              <motion.div ref={containerRef} layout className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="size-[2rem] rounded-lg grid group hover:bg-blue-50 hover:border-blue-200 bg-neutral-100 transition-all duration-500 place-items-center border"
                >
                  <Plus className=" transition-colors duration-500 size-4 group-hover:text-blue-300 text-neutral-500" />
                </button>

                <div
                  className={cn(
                    "w-[10rem] z-50 shadow-xl rounded-lg border origin-top flex flex-col p-1 top-[115%] bg-white absolute  right-0",
                    isDropdownOpen
                      ? "transition-all duration-75 visible  opacity-100  scale-100 "
                      : "invisible scale-95  opacity-0"
                  )}
                >
                  {availableFilters.map((f, index) => {
                    return (
                      <button
                        onClick={() => addFilter(f)}
                        key={index}
                        className="inline-flex items-center gap-x-1.5 h-[2.5rem] px-1.5 hover:bg-neutral-50 rounded-lg hover:outline outline-2 "
                      >
                        {<f.Icon className="text-neutral-600" />}
                        <span className="text-sm text-neutral-500 font-semibold">
                          {f.text}
                        </span>
                        <span className="ms-auto">
                          <Plus size={15} className="text-neutral-600" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Preview;
