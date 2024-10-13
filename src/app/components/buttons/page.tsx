import Showcase from "../Showcase";

const ButtonsPage = () => {
  const reactComponentCode = `
    "use client";
    
    import Link from "next/link";
    import { usePathname } from "next/navigation";
    import React from "react";

    export const links = ["about", "projects", "components"];

    const Nav = () => {
      const pathname = usePathname();

      return (
        <nav className="sm:inline-block hidden">
          <ul className="flex items-center border  backdrop-blur-md dark:border-zinc-50/10 rounded-3xl shadow-sm px-2">
            {links.map((link, i) => {
              const isActive = pathname.includes(\`/\${link}\`);
              return (
                <li key={i} className="relative">
                  <Link
                    className={\`capitalize inline-block leading-normal text-sm font-medium p-[.5rem_.75rem] \${isActive ? "text-sky-500" : ""}\`}
                    href={\`/\${link}\`}
                  >
                    {link}
                  </Link>
                  <span
                    className={\`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-300 to-transparent \${isActive ? "visible" : "invisible"}\`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </nav>
      );
    };

    export default Nav;
  `;

  // const codeTest = `
  // import React from 'react';

  // const Greeting = ({ name }) => {
  //   return <h1>Hello, {name}!</h1>;
  // };

  // export default Greeting;
  // `;
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">Buttons</h1>
      <Showcase
        preview
        tabIndex="btn-1"
        sampleCode={reactComponentCode}
        title="Scale Btn"
      />
    </div>
  );
};

export default ButtonsPage;
