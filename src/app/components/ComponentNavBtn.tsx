"use client";

import { Menu } from "lucide-react";
import { useMenu } from "../context/MenuContext";

const ComponentNavBtn = () => {
  const { openSideComponent } = useMenu();

  return (
    <button
      onClick={openSideComponent}
      className="lg:hidden grid place-items-center p-1 border dark:border-zinc-800  rounded-xl"
    >
      <Menu className="text-zinc-600" />
    </button>
  );
};
export default ComponentNavBtn;
