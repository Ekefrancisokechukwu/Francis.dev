import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h5
      className={cn(
        "font-semibold flex items-center gap-x-2  text-gray-300",
        className
      )}
    >
      {children}
    </h5>
  );
};
