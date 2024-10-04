"use client";

import Link from "next/link";
import { links } from "./Nav";
import { useMenu } from "../context/MenuContext";

const Menu = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm bg-black/5  bg-opacity-50 z-50 sm:hidden block transition-opacity duration-300 ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`bg-white max-w-[90%] rounded-xl mx-auto mt-14 dark:bg-zinc-800 p-6 shadow-lg relative transition-transform duration-100 ${
          isMenuOpen ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs text-zinc-400 dark:text-zinc-50">Menu</span>
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-5">
          <ul className="flex flex-col  divide-y  divide-zinc-50/20">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  href={`/${link}`}
                  className="text-sm font-medium transition-colors duration-300 capitalize py-3 dark:text-zinc-50 inline-block w-full hover:text-sky-500 dark:hover:text-sky-400"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
