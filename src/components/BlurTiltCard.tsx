"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export const BlurTiltCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-neutral-900 border-neutral-600 rounded-xl sm:p-5 p-2 min-h-[20rem] grid place-items-center">
      <div className="rounded-xl">
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          onTapStart={() => setHovered(true)}
          onTapCancel={() => setHovered(false)}
          onTap={() => setHovered(false)}
          className="min-[380px]:w-[20rem] w-[18rem] h-[25rem] group rounded-xl overflow-hidden  relative"
        >
          <Image
            priority
            alt="blur-card"
            src={"/blur-card-img.avif"}
            fill
            sizes="500px"
            className="w-full h-full group-hover:scale-125  ease-[0.77,_0,_0.175,_1]  duration-500  rounded-xl  object-cover"
          />
          <motion.div className="absolute bottom-0 px-2 pb-[1rem] pt-2 w-full backdrop-blur-sm">
            <div className="absolute flex flex-col top-0 left-0 w-full h-6 bg-gradient-to-t from-transparent to-transparent rounded-t-xl pointer-events-none" />
            <motion.div layout className="flex-1">
              <span className="font-medium text-white text-lg">
                Nike Dri-FIT Rise
              </span>
              <p className="text-neutral-300 text-sm ">
                Structured Snapback Cap
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, marginBottom: "-5.5rem" }}
              animate={
                hovered
                  ? { opacity: 1, marginBottom: "0" }
                  : { opacity: 0, marginBottom: "-5.5rem" }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
              }}
              className="mt-4"
            >
              <button className="w-full  flex-auto mt-6 rounded-full py-3 font-semibold bg-white text-black">
                Shop Now
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
