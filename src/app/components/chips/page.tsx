"use client";

import Image from "next/image";
import Showcase from "../Showcase";
import { LoaderIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

const sampleCode = {
  code1: ` const Chip = () => {
  return <div className="shadow-md rounded-lg text-zinc-500 gap-x-2  w-[8.5rem] bg-white inline-flex items-center  px-3 py-1">
          <Image
            alt="avater"
            src={"/avater.avif"}
            width={25}
            height={25}
            className="rounded-full size-[2rem] object-cover"
          />
          <span className="truncate font-medium capitalize text-sm">
            Patick
          </span>
          <button className="grid place-items-center ms-auto">
            <X size={20} />
          </button>
        </div>
  }`,
  code2: `const Chip = () => {
  return <div className="shadow-md rounded-full text-zinc-500 gap-x-2  w-[8.5rem] bg-white inline-flex items-center  px-3 py-1">
          <Image
            alt="avater"
            src={"/avater.avif"}
            width={25}
            height={25}
            className="rounded-full size-[2rem] object-cover"
          />
          <span className="truncate font-medium capitalize text-sm">
            Patick
          </span>
          <button className="grid place-items-center ms-auto">
            <X size={20} />
          </button>
        </div>
  }`,
};

const Chips = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const Chip = () => {
    return (
      <div className="w-full flex items-center gap-x-2">
        <div className="shadow-md rounded-lg text-zinc-500 gap-x-2  w-[8.5rem] bg-white inline-flex items-center  px-3 py-1">
          <Image
            alt="avater"
            src={"/avater.avif"}
            width={25}
            height={25}
            className="rounded-full size-[2rem] object-cover"
          />
          <span className="truncate font-medium capitalize text-sm">
            Patick
          </span>
          <button className="grid place-items-center ms-auto">
            <X size={20} />
          </button>
        </div>
        <div className="shadow-md rounded-lg w-[8.5rem] text-zinc-500 gap-x-2 bg-white inline-flex items-center  px-3 py-1">
          <Image
            alt="avater"
            src={"/avater-1.jpg"}
            width={25}
            height={25}
            className="rounded-full size-[2rem] object-cover"
          />
          <span className="truncate font-medium capitalize text-sm">John</span>
          <button className="grid place-items-center ms-auto">
            <X size={20} />
          </button>
        </div>
      </div>
    );
  };
  const ChipRoundedFull = () => {
    return (
      <div className="w-full flex items-center gap-x-2">
        <div className="shadow-md rounded-full text-zinc-500 gap-x-2  w-[8.5rem] bg-white inline-flex items-center  px-3 py-1">
          <Image
            alt="avater"
            src={"/avater.avif"}
            width={25}
            height={25}
            className="rounded-full size-[2rem] object-cover"
          />
          <span className="truncate font-medium capitalize text-sm">
            Patick
          </span>
          <button className="grid place-items-center ms-auto">
            <X size={20} />
          </button>
        </div>
        <div className="shadow-md rounded-full w-[8.5rem] text-zinc-500 gap-x-2 bg-white inline-flex items-center  px-3 py-1">
          <Image
            alt="avater"
            src={"/avater-1.jpg"}
            width={25}
            height={25}
            className="rounded-full size-[2rem] object-cover"
          />
          <span className="truncate font-medium capitalize text-sm">John</span>
          <button className="grid place-items-center ms-auto">
            <X size={20} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {isMounted ? (
        <div className="space-y-9">
          <Showcase
            tabIndex="chip-1"
            preview={<Chip />}
            title="Simple chip"
            sampleCode={sampleCode.code1}
          />
          <Showcase
            tabIndex="chip-2"
            preview={<ChipRoundedFull />}
            title="Rounded chip"
            sampleCode={sampleCode.code2}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-[40vh]">
          <LoaderIcon className="w-6 h-6 animate-spin" />
        </div>
      )}
    </div>
  );
};

export default Chips;
