"use client";

import { Heading } from "@/components/ui/Heading";
import { motion } from "framer-motion";
import Link from "next/link";
import { Timer } from "lucide-react";

const InteractionsList = () => {
  return (
    <motion.div className="mt-[4rem]">
      <Heading>
        Interactions{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-neutral-700"
        >
          <path
            d="M13 12H12C12 12.5523 12.4477 13 13 13V12ZM10 13.5L9.55279 14.3944C9.86278 14.5494 10.2309 14.5329 10.5257 14.3506C10.8205 14.1684 11 13.8466 11 13.5H10ZM9.94413 13.4721L9.49691 14.3665L9.49692 14.3665L9.94413 13.4721ZM7.19275 14.5181L6.26427 14.1467H6.26427L7.19275 14.5181ZM7 15L6.07152 14.6286C5.94923 14.9344 5.98529 15.2807 6.16795 15.5547L7 15ZM9.81253 19.2188L10.6446 18.6641L9.81253 19.2188ZM16.4308 8.16546C16.5222 8.71013 17.0378 9.0776 17.5825 8.98622C18.1272 8.89484 18.4946 8.37922 18.4033 7.83454L16.4308 8.16546ZM4.59674 10.1655C4.68812 10.7101 5.20374 11.0776 5.74841 10.9862C6.29309 10.8948 6.66055 10.3792 6.56918 9.83454L4.59674 10.1655ZM14 12V9H12V12H14ZM9 9V13.5H11V9H9ZM10.4472 12.6056L10.3913 12.5776L9.49692 14.3665L9.55279 14.3944L10.4472 12.6056ZM6.26427 14.1467L6.07152 14.6286L7.92848 15.3714L8.12122 14.8895L6.26427 14.1467ZM6.16795 15.5547L8.98048 19.7735L10.6446 18.6641L7.83205 14.4453L6.16795 15.5547ZM13.1407 22H14V20H13.1407V22ZM20 16V15H18V16H20ZM16 11H13V13H16V11ZM20 15C20 12.7909 18.2091 11 16 11V13C17.1046 13 18 13.8954 18 15H20ZM10.3913 12.5776C8.82151 11.7927 6.9161 12.5172 6.26427 14.1467L8.12122 14.8895C8.3385 14.3463 8.97364 14.1049 9.49691 14.3665L10.3913 12.5776ZM14 22C17.3137 22 20 19.3137 20 16H18C18 18.2091 16.2091 20 14 20V22ZM11.5 6.5C10.1193 6.5 9 7.61929 9 9H11C11 8.72386 11.2239 8.5 11.5 8.5V6.5ZM8.98048 19.7735C9.90781 21.1645 11.469 22 13.1407 22V20C12.1377 20 11.201 19.4987 10.6446 18.6641L8.98048 19.7735ZM14 9C14 7.61929 12.8807 6.5 11.5 6.5V8.5C11.7761 8.5 12 8.72386 12 9H14ZM6.5 9C6.5 6.23858 8.73858 4 11.5 4V2C7.63401 2 4.5 5.13401 4.5 9H6.5ZM11.5 4C13.9765 4 16.0342 5.80145 16.4308 8.16546L18.4033 7.83454C17.8477 4.52312 14.9695 2 11.5 2V4ZM6.56918 9.83454C6.52375 9.56379 6.5 9.28505 6.5 9H4.5C4.5 9.39638 4.53305 9.78579 4.59674 10.1655L6.56918 9.83454Z"
            fill="currentColor"
          ></path>
        </svg>
      </Heading>

      <div className="mt-5 space-y-3">
        <Link
          // key={index}
          href={`/components/dnjd`}
          className=" p-2.5 group flex min-[535px]:flex-row flex-col gap-y-1 min-[535px]:items-center items-start justify-between transition-colors duration-500 bg-neutral-900 rounded-lg"
        >
          {" "}
          <span className="group:underline text-base font-medium underline-offset-4">
            Speedometer
          </span>
          <div className="flex items-center gap-x-2">
            <Timer size={15} />
            <span className="text-sm font-medium">Jun 12, 2025</span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};
export default InteractionsList;
