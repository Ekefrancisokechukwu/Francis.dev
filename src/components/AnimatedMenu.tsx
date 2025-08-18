"use client";

import { ChevronDown, FigmaIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const navs = [" Design resources", "Websites", "Presentations"];

export const AnimatedMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dropdownSize, setDropdownSize] = useState({ width: 0, height: 0 });

  const handleMouseHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const contentMap: Record<number, React.ReactNode> = {
    0: <Content1 />,
    1: <Content2 />,
    2: <Content3 />,
  };
  const content = activeIndex !== null ? contentMap[activeIndex] ?? null : null;

  useEffect(() => {
    if (!contentRef.current || activeIndex === null) return;

    const rect = contentRef.current.getBoundingClientRect();
    console.log(rect.width, rect.height);

    setDropdownSize({ width: rect.width, height: rect.height });
  }, [activeIndex]);

  return (
    <div>
      <header className="bg-neutral-900 relative w-full py-1 gap-x-20 rounded-3xl px-4 flex items-center">
        <FigmaIcon color="#fff" />

        <nav
          onMouseLeave={handleMouseLeave}
          className="flex items-center relative gap-x-8"
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
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              layout
              // transition={{
              //   layout: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
              // }}
              className="absolute top-[110%]   bg-neutral-950 shadow-xl rounded-2xl border border-neutral-800 z-50"
            >
              <motion.div
                // layout
                // transition={{
                //   layout: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
                // }}
                ref={contentRef}
                className="p-5"
              >
                {content}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

const Content1 = () => {
  return (
    <div className="flex items-start ">
      <div className="space-y-4">
        <div className="border bg-neutral-800/40  cursor-pointer relative group overflow-hidden w-[18rem] flex  border-neutral-800 p-3 rounded-2xl ">
          <div>
            <span className="text-xs font-semibold">UI kits</span>
            <p className="text-xs text-neutral-500 mt-1">
              Pre-made essentials like button <br /> and toast
            </p>
          </div>
          <div className="absolute origin-bottom-left group-hover:-rotate-6  -right-14 -bottom-5 transition-all duration-300 ease-out  -rotate-3">
            <Image
              alt="ui-kit"
              src={"/nav-1.png"}
              width={120}
              height={50}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="border bg-neutral-800/40   cursor-pointer relative group overflow-hidden w-[18rem] flex  border-neutral-800 p-3 rounded-2xl ">
          <div>
            <span className="text-xs font-semibold">Wireframes</span>
            <p className="text-xs text-neutral-500 mt-1">
              Explore your early ideas with <br /> lo-fi frames
            </p>
          </div>
          <div className="absolute origin-bottom-left group-hover:-rotate-6  -right-12 -bottom-4 transition-all duration-300 ease-out  -rotate-3">
            <Image
              alt="ui-kit"
              src={"/nav-2.png"}
              width={120}
              height={50}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
      <ul className="space-y-5 ml-10">
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Design Templates
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          portfolios Templates
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Mobile apps
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Resume Templates
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Web ads
        </li>
      </ul>
      <ul className="space-y-5 ml-20">
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Assets
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          icons
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          illstrations
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Resume Templates
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Web ads
        </li>
      </ul>
    </div>
  );
};

const Content2 = () => {
  return (
    <div className="flex  ">
      <div className="border cursor-pointer bg-neutral-800/40 relative group overflow-hidden border-neutral-800 p-3 w-[18rem]  rounded-2xl h-[10rem]">
        <span className="text-xs font-semibold ">Landing</span>
        <p className="text-xs text-neutral-500 mt-1">
          Make a splash right from the start
        </p>

        <Image
          alt="websites"
          src={"/web-1.png"}
          width={160}
          height={300}
          className="rounded-2xl absolute  transition-all duration-300 ease-out group-hover:scale-105 z-20  right-8 -bottom-7"
        />
        <Image
          alt="websites"
          src={"/web-2.png"}
          width={160}
          height={300}
          className="rounded-2xl absolute  z-10  right-4 rotate-3 origin-bottom -bottom-4 transition-all duration-300 ease-out group-hover:rotate-[8deg]"
        />
      </div>
      <div className="ml-8 space-y-5">
        <div className="border cursor-pointer relative group overflow-hidden bg-neutral-800/40 border-neutral-800 p-3 w-[18rem]  rounded-2xl h-[4rem]">
          <span className="text-xs font-semibold ">Portfolio</span>
          <p className="text-xs text-neutral-500 mt-1">
            Showcase your best work
          </p>
          <div className="absolute group-hover:-rotate-6  origin-bottom-right -right-12 -bottom-4 transition-all duration-300 ease-out  -rotate-3">
            <Image
              alt="ui-kit"
              src={"/web-3.png"}
              width={120}
              height={50}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="border cursor-pointer relative group overflow-hidden bg-neutral-800/40 border-neutral-800 p-3 w-[18rem]  rounded-2xl h-[4rem]">
          <span className="text-xs font-semibold ">Business</span>
          <p className="text-xs text-neutral-500 mt-1">
            Promote your business online
          </p>
          <div className="absolute group-hover:-rotate-6  origin-bottom-right -right-12 -bottom-4 transition-all duration-300 ease-out  -rotate-3">
            <Image
              alt="ui-kit"
              src={"/web-4.png"}
              width={120}
              height={50}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
      <ul className="space-y-5 ml-10">
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          More websites
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Blog
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Wedding
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Photography
        </li>
        <li className="font-semibold hover:text-neutral-500 text-xs cursor-pointer">
          Interio Designs
        </li>
      </ul>
    </div>
  );
};

const Content3 = () => {
  return (
    <div className="flex  gap-x-5">
      <div className="border flex flex-col justify-between cursor-pointer bg-neutral-800/40 relative group overflow-hidden border-neutral-800 p-3 w-[18rem]   rounded-2xl ">
        <div>
          <span className="text-xs font-semibold ">Startup pitch</span>
          <p className="text-xs text-neutral-500 mt-1">
            Share the story behind your your big ideas
          </p>
        </div>

        <div className="mt-6 relative z-10 w-max ms-auto">
          <Image
            alt="presentation"
            src={"/pre-1.png"}
            width={130}
            height={75}
            className="rounded-lg  group-hover:-rotate-6 group-hover:-translate-x-3 transition-all duration-300 ease-out origin-bottom-left"
          />
          <div className=" transition-all duration-300 ease-out  origin-bottom-left group-hover:-rotate-[5deg] bg-neutral-200 rounded-lg -z-[3] w-[120px] -bottom-1 absolute left-1/2 -translate-x-1/2  h-[50px]"></div>
          <div className="bg-neutral-700 rounded-lg -z-[4] w-[115px] -bottom-1 absolute left-1/2 -translate-x-1/2  h-[50px]"></div>
        </div>
      </div>
      <div className="border cursor-pointer bg-neutral-800/40 relative group overflow-hidden border-neutral-800 p-3 w-[18rem]   rounded-2xl ">
        <span className="text-xs font-semibold ">Product roadmap</span>
        <p className="text-xs text-neutral-500 mt-1">
          Turn customers into belivers with your product vision
        </p>

        <div className="mt-6 relative z-10 w-max ms-auto">
          <Image
            alt="presentation"
            src={"/pre-2.png"}
            width={130}
            height={75}
            className="rounded-lg  group-hover:-rotate-6 group-hover:-translate-x-3 transition-all duration-300 ease-out origin-bottom-left"
          />
          <div className=" transition-all duration-300 ease-out  origin-bottom-left group-hover:-rotate-[5deg] bg-neutral-200 rounded-lg -z-[3] w-[120px] -bottom-1 absolute left-1/2 -translate-x-1/2  h-[50px]"></div>
          <div className="bg-neutral-700 rounded-lg -z-[4] w-[115px] -bottom-1 absolute left-1/2 -translate-x-1/2  h-[50px]"></div>
        </div>
      </div>
      <div className="border cursor-pointer h-[12rem] bg-neutral-800/40 relative group overflow-hidden border-neutral-800 p-3 w-[18rem]   rounded-2xl ">
        <span className="text-xs font-semibold ">Product roadmap</span>
        <p className="text-xs text-neutral-500 mt-1">
          Turn customers into belivers with your product vision
        </p>

        <Image
          alt="presentation"
          src={"/pre-3.png"}
          width={150}
          height={75}
          className="absolute right-6 -bottom-4 z-[3]  group-hover:scale-105  transition-all duration-300 ease-out "
        />
        <Image
          alt="presentation"
          src={"/pre-4.png"}
          width={150}
          height={75}
          className="absolute right-6 -bottom-3 z-[2] group-hover:rotate-6 rotate-3  group-hover:scale-105 transition-all duration-300 ease-out origin-bottom-right"
        />
      </div>
    </div>
  );
};
