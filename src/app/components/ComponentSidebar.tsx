"use client";

import Link from "next/link";
import { componentLinks } from "./ComponentsNav";
import { X } from "lucide-react";
import { useMenu } from "../context/MenuContext";
import { cn } from "@/lib/utils";

const ComponentSidebar = () => {
  const { isSideComponentOpen, closeSideComponent } = useMenu();

  return (
    <>
      <div
        onClick={closeSideComponent}
        className={cn(
          "bg-black/35 fixed w-full h-screen z-50 top-0 left-0 backdrop-blur-sm",
          isSideComponentOpen
            ? "opacity-100 visible transition-all duration-200"
            : "opacity-0 invisible"
        )}
      ></div>

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 transition-all duration-300 dark:bg-black/90 bg-white/90 h-screen w-full max-w-[13rem]",
          isSideComponentOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          onClick={closeSideComponent}
          className="border dark:border-zinc-800 p-1 rounded ml-2 mt-3"
        >
          <X size={16} className="text-zinc-700" />
        </button>

        <div className={cn("flex flex-col space-y-2 mt-8 w-full")}>
          {componentLinks.map((component, index) => (
            <div key={index} className="text-white w-full">
              <Link
                onClick={closeSideComponent}
                className="text-sm font-medium w-full inline-block  py-1 px-2 text-zinc-900 capitalize  dark:text-zinc-400 hover:text-sky-500"
                href={component.href}
              >
                {component.label}
              </Link>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};
export default ComponentSidebar;
