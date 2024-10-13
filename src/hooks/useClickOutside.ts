import { useEffect, useRef } from "react";

const useClickOutside = (callback: () => void) => {
  const element = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (element.current && !element.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return { element };
};

export default useClickOutside;
