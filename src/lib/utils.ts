import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const springValuesTransition = {
  damping: 30,
  stiffness: 130,
  mass: 2,
  type: "spring",
};
