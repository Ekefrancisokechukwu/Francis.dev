"use client";

import { ReactNode, useState } from "react";
import CodeShowcase from "./CodeShowcase";
import { motion } from "framer-motion";
import { Check, Code, Copy, Eye } from "lucide-react";

type ShowcaseProps = {
  sampleCode: string;
  title: string;
  preview: ReactNode;
  tabIndex: string;
};
const Showcase = ({ sampleCode, title, preview, tabIndex }: ShowcaseProps) => {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [Iscopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-5">
        <div className="text-lg font-semibold mb-2">{title}</div>
        <motion.div
          layout="position"
          layoutRoot
          className="inline-flex items-center text-sm p-[2px] font-medium  rounded-md bg-gray-100 dark:bg-zinc-600/50"
        >
          <motion.button
            onClick={() => setTab("preview")}
            className="inline-flex items-center gap-x-2 rounded-md text-sm z-10 py-1 px-3 relative"
          >
            <Eye
              size={16}
              className={`${tab === "preview" ? "text-sky-500" : ""}`}
            />
            Preview
            {tab === "preview" && (
              <motion.span
                layoutId={`tab-preview-${tabIndex}`}
                className="absolute inset-0 rounded shadow -z-10 dark:bg-zinc-900/50 bg-white"
              />
            )}
          </motion.button>
          <motion.button
            onClick={() => setTab("code")}
            className="inline-flex items-center gap-x-2 rounded-md text-sm py-1 z-10 px-3 relative "
          >
            <Code
              size={16}
              className={`${tab === "code" ? "text-sky-500" : ""}`}
            />
            Code
            {tab === "code" && (
              <motion.span
                layoutId={`tab-preview-${tabIndex}`}
                className="absolute inset-0 rounded -z-10 shadow dark:bg-zinc-900/50 bg-white"
              />
            )}
          </motion.button>
        </motion.div>
      </div>
      {tab === "preview" ? (
        <div className="dark:bg-black min-h-32 z-10 relative overflow-hidden grid place-items-center border dark:border-zinc-50/30 rounded-lg p-3 overflow-x-auto">
          {preview}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -z-10 inset-0 h-full w-full fill-neutral-400/80 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                id=":r4t:"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
                x="0"
                y="0"
              >
                <circle id="pattern-circle" cx="1" cy="1" r="1"></circle>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#:r4t:)"
            ></rect>
          </svg>
        </div>
      ) : (
        <div className="relative group">
          <button
            onClick={handleCopy}
            className="absolute  hover:scale-105 transition-all duration-300 right-8 top-8 invisible group-hover:visible"
          >
            {Iscopied ? (
              <span className="text-xs inline-flex dark:text-zinc-500 text-zinc-400 rounded-md bg-zinc-800 items-center gap-x-1 p-1">
                <Check size={14} className="text-zinc-400" />
                copied
              </span>
            ) : (
              <Copy size={18} className="text-zinc-400" />
            )}
          </button>
          <CodeShowcase code={sampleCode} language="jsx" />
        </div>
      )}
    </div>
  );
};
export default Showcase;
