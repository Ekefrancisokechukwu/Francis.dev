"use client";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MouseEvent, useEffect, useRef } from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { springValuesTransition } from "@/lib/utils";
import { Heading } from "@/components/ui/Heading";
import { projects } from "@/constants";

interface IProject {
  desc: string;
  name: string;
  link: string;
  github: string;
  icon: string;
  techStacks: string[];
}

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, delay: 0.4, ...springValuesTransition }}
      className="mt-[5rem]"
    >
      <Heading>Projects</Heading>
      <div className="mt-5 grid  sm-[505px]:grid-cols-2 grid-cols-1 gap-5">
        {projects.map((project, i) => {
          return <SingleProject project={project as IProject} key={i} />;
        })}
      </div>
    </motion.div>
  );
};

interface ISingleproject {
  project: IProject;
}

const SingleProject = ({ project }: ISingleproject) => {
  const glowBorderRef = useRef<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const maskImage = useMotionTemplate`radial-gradient(100px 50px at ${rawX}px ${rawY}px, black, transparent`;
  const spotlightPosition = useMotionTemplate`radial-gradient(circle at ${spotlightX}px  ${spotlightY}px,  rgba(255, 255, 255, 0.063), transparent 80%)`;

  useEffect(() => {
    const glowElement = glowBorderRef.current as HTMLDivElement;

    if (!glowBorderRef) return;

    const updateMousePosition = (e: globalThis.MouseEvent) => {
      const { y, x } = e;

      const rect = glowElement.getBoundingClientRect();

      rawX.set(x - rect.x);
      rawY.set(y - rect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spotlightX.set(x);
    spotlightY.set(y);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      ref={divRef}
      className="rounded-md flex flex-col z-10 h-[13rem] bg-neutral-900/80 relative p-2 group border overflow-hidden border-neutral-800"
    >
      <motion.div
        style={{
          background: spotlightPosition,
        }}
        className="absolute -z-10 left-0 top-0  w-full h-full opacity-0 group-hover:opacity-70"
      />

      <motion.div
        ref={glowBorderRef}
        style={{
          maskImage,
        }}
        className="absolute -z-10 border border-neutral-400 inset-0 w-full  rounded-md "
      />
      <div className="flex items-center justify-between">
        <Link
          target="_blank"
          href={project.link}
          className="flex items-center gap-x-2 group"
        >
          <div className="size-[1.5rem] bg-neutral-800/50  rounded-md p-1">
            <Image
              alt="clay-ai"
              width={100}
              height={100}
              src={project.icon}
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-neutral-200 font-medium inline-block group-hover:underline underline-offset-4 ">
            {project.name}
          </span>
          <ArrowUpRight size={12} className="text-neutral-600" />
        </Link>
        <Link
          href={project.github}
          target="_blank"
          className="text-neutral-500 hover:text-neutral-400 duration-300 ease-in-out transition-colors"
        >
          <FaGithub />
        </Link>
      </div>

      <p className="mt-2 text-sm text-neutral-400">{project.desc}</p>

      <div className=" mt-auto flex items-center gap-x-2">
        {project.techStacks.map((stack, i) => (
          <div key={i} className="rounded-md p-1 text-xs bg-neutral-800/60  ">
            {stack}
          </div>
        ))}
      </div>
    </div>
  );
};
