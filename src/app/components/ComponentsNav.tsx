"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const componentLinks = [
  {
    href: "/components/checkbox",
    label: "checkbox",
  },
  {
    href: "/components/multi-select",
    label: "multi Combobox",
  },
  {
    href: "/components/need-help",
    label: "Need help UI",
  },
  // {
  //   href: "/components/buttons",
  //   label: "Buttons",
  // },
  {
    href: "/components/chips",
    label: "chips",
  },
  // {
  //   href: "/components/sliders",
  //   label: "Sliders",
  // },
  // {
  //   href: "/components/file-uploader",
  //   label: "file uploader",
  // },
];

const ComponentsNav = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[10rem]  h-[80vh]">
      <span className="font-medium "> Components</span>

      <ul className="mt-3 space-y-1">
        {componentLinks
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((com, i) => {
            const active = pathname === com.href;

            return (
              <li key={i}>
                <Link
                  href={com.href}
                  className={`text-sm group z-10  relative inline-block w-full p-2 capitalize   transition-colors duration-200  rounded-lg
                 ${active ? " text-sky-500" : "dark:text-zinc-400"}
                 `}
                >
                  <span className="-z-10  inset-0 transition-all duration-500 scale-95 group-hover:scale-100  group-hover:bg-zinc-50  rounded-lg group-hover:dark:bg-zinc-50/5 absolute size-full" />
                  {com.label}
                </Link>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};
export default ComponentsNav;
