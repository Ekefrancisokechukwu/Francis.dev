"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { springValuesTransition } from "@/lib/utils";

const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.5]);

  return (
    <div className="mt-[5rem]">
      <motion.div
        style={{ scale, transformOrigin: "left" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...springValuesTransition }}
        className="size-[4rem] rounded-md relative"
      >
        <Image
          src={"/profile.jpeg"}
          alt="profile"
          fill
          sizes="200px"
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.2, ...springValuesTransition }}
        className="mt-5 text-base  "
      >
        I&apos;m{" "}
        <span className="font-semibold  text-neutral-300">Francis</span>, a
        frontend-focused fullstack developer and{" "}
        <Link
          target="_blank"
          href={"https://contra.com/francis_okechukwu_gm1f4lhz"}
          title="Contra Profile"
          className="font-semibold  text-neutral-300"
        >
          Freelancer
        </Link>
        . I build fast, responsive web apps using React, Next.js, and Tailwind
        clean UI, scalable architecture, and smooth user experiences. I handle
        both frontend and backend.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.3, ...springValuesTransition }}
        className="mt-6"
      >
        <div className="flex items-center gap-x-3">
          <Link
            href={"https://x.com/EkeTechSpecter"}
            target="_blank"
            className="h-7 overflow-hidden relative border z-10 border-neutral-700 font-medium text-xs bg-neutral-800 rounded-3xl flex items-center gap-x-2 w-max px-2 text-gray-300"
          >
            <motion.div
              animate={{ x: 100 }}
              transition={{
                repeat: Infinity,
                repeatDelay: 2,
                restSpeed: 5,
                duration: 0.6,
              }}
              style={{ rotate: 30 }}
              className="bg-gray-500/60  blur-sm  h-[120%] absolute left-0 -top-2 -z-10 w-1"
            />
            Twitter
            <div>
              <span>
                <ArrowUpRight size={13} />
              </span>
            </div>
          </Link>
          <Link
            href={"https://github.com/Ekefrancisokechukwu"}
            target="_blank"
            className="h-7 overflow-hidden relative border z-10 border-neutral-700 font-medium text-xs bg-neutral-800 rounded-3xl flex items-center gap-x-2 w-max px-2 text-gray-300"
          >
            Github
            <div>
              <span>
                <ArrowUpRight size={13} />
              </span>
            </div>
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/francis-okechukwu-954632261/"}
            className="h-7 overflow-hidden relative border z-10 border-neutral-700 font-medium text-xs bg-neutral-800 rounded-3xl flex items-center gap-x-2 w-max px-2 text-gray-300"
          >
            Linkedin
            <div>
              <span>
                <ArrowUpRight size={13} />
              </span>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
export default Hero;
