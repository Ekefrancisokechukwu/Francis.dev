"use client";

import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
import Menu from "./Menu";
import { useMenu } from "../context/MenuContext";
import { ChevronIcon } from "../svg";
import { useTheme } from "next-themes";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const { toggleMenu } = useMenu();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="flex items-center z-50  top-7  justify-between w-full xl:max-w-[63rem] lg:max-w-[55rem] md:max-w-[40rem] md:px-0 sm:px-12  px-6 mx-auto">
      <Link href={"/"}>
        <Image
          src={"/profile.jpeg"}
          alt="Eke francis profile"
          width={1000}
          height={1000}
          style={{ width: "2.25rem", height: "2.25rem" }}
          className="object-cover rounded-full"
        />
      </Link>

      <Nav />

      <div className="flex items-center gap-x-4">
        <button
          onClick={toggleMenu}
          className=" items-center sm:hidden flex p-[.5rem_.75rem] border dark:border-zinc-50/10 rounded-full shadow-sm transition-transform duration-200 ease-spring hover:scale-105 active:scale-95"
        >
          <span className="mr-2 text-sm">Menu</span>
          <ChevronIcon />
        </button>

        <div className="">
          <button
            onClick={toggleTheme}
            className="p-[.5rem_.75rem] grid place-items-center border dark:border-zinc-50/10 rounded-full shadow-sm transition-transform duration-200 ease-spring hover:scale-105 active:scale-95"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cloud-moon"
              >
                <path d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" />
                <path d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Menu />
    </header>
  );
};
export default Header;
