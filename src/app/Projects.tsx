"use client";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { springValuesTransition } from "@/lib/utils";

const projects = [
  {
    desc: "A animated Ai Landing page",
    name: "Clay.ai",
    link: "https://clay-ai.vercel.app/",
    github: "https://github.com/Ekefrancisokechukwu/clay.ai",
    icon: "/clay-ai.ico",
    techStacks: ["React", "Motion", "Tailwind"],
  },
  {
    desc: "Full-stack e-commerce website",
    name: "storefront",
    link: "https://francis-storefront-demo.vercel.app/",
    github: "https://github.com/Ekefrancisokechukwu/francis-storefront-demo",
    icon: "/pickriders-logo.jpeg",
    techStacks: ["Next", "Motion", "Tailwind"],
  },
];

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
      <h5 className="font-semibold  text-gray-300">Projects</h5>
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
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const maskImage = useMotionTemplate`radial-gradient(100px 50px at ${rawX}px ${rawY}px, black, transparent`;

  useEffect(() => {
    const glowElement = glowBorderRef.current as HTMLDivElement;

    if (!glowBorderRef) return;

    const updateMousePosition = (e: MouseEvent) => {
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

  return (
    <div className="rounded-md z-10 relative p-2 border border-neutral-700">
      <motion.div
        ref={glowBorderRef}
        style={{
          maskImage,
        }}
        className="absolute -z-10 border border-neutral-400 inset-0 w-full  rounded-md "
      />
      <div className="flex items-center justify-between">
        <Link href={project.link} className="flex items-center gap-x-2 group">
          <div className="size-[1.5rem] bg-neutral-800/50  rounded-md p-1">
            <Image
              alt="clay-ai"
              width={100}
              height={100}
              src={project.icon}
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-xs font-medium inline-block group-hover:underline underline-offset-4 ">
            {project.name}
          </span>
          <ArrowUpRight size={12} className="text-neutral-600" />
        </Link>
        <Link
          href={"#"}
          className="text-neutral-600 hover:text-neutral-500 duration-300 ease-in-out transition-colors"
        >
          <FaGithub />
        </Link>
      </div>
      <p className="mt-2 text-sm text-neutral-400">{project.desc}</p>
      <div className="mt-5 flex items-center gap-x-2">
        {project.techStacks.map((stack, i) => (
          <div
            key={i}
            className="rounded-md p-1 text-xs bg-neutral-800/60  text-gray-500"
          >
            {stack}
          </div>
        ))}
      </div>
    </div>
  );
};
