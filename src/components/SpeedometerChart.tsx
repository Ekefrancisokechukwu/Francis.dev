"use client";

import { useMemo, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

export const SpeedometerChart = () => {
  const { tickCount, ticks } = useMemo(() => {
    const count = 50;
    const ticks = Array.from({ length: count });
    return { tickCount: count, ticks };
  }, []);
  const [displayProgress, setDisplayProgress] = useState(2);
  const progress = useMotionValue(2);

  progress.on("change", (value) => {
    setDisplayProgress(Math.round(value));
  });

  const angle = 199;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = useTransform(
    progress,
    [0, angle],
    [circumference, 0]
  );

  const startAnimation = () => {
    const controls = animate(progress, angle, {
      ease: "easeOut",
      type: "spring",
      stiffness: 10,
      bounce: 0,
    });
    return controls;
  };

  const mouseLeave = () => {
    const controls = animate(progress, 2, {
      ease: "easeOut",
      type: "spring",
      stiffness: 10,
      bounce: 0,
    });
    return controls;
  };

  return (
    <div
      onMouseOver={() => startAnimation()}
      onMouseOut={() => mouseLeave()}
      className="bg-neutral-900 border-neutral-600 rounded-xl p-5 min-h-[20rem] grid place-items-center"
    >
      <div className="size-[16rem] z-10 relative rounded-full  ">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <motion.circle
            className={"relative"}
            cx="100"
            cy="100"
            r={radius}
            stroke="#FD3C1D"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        <div className="text-white text-center absolute-center">
          <div className="font-bold  text-5xl">{displayProgress}</div>{" "}
          <span className="block text-center font-semibold text-xl">km/h</span>
        </div>

        {/* Ticks */}
        {ticks.map((_, i) => {
          const angle = (360 / tickCount) * i + 90;

          return (
            <div
              key={i}
              className="absolute -z-10 left-1/2 top-1/2 origin-top w-[2px] h-[10px] bg-neutral-500/30"
              style={{
                transform: `rotate(${angle}deg) translateY(-7.5rem)`,
              }}
            />
          );
        })}

        <svg
          className="absolute bottom-[0] left-1/2 -translate-x-1/2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#24292E" />
          <circle cx="12" cy="12" r="5.5" stroke="white" />
          <path
            d="M7 10L9.05826 10.4117C11.0002 10.8 12.9998 10.8 14.9417 10.4117L17 10"
            stroke="white"
          />
          <path
            d="M8 16L9.17157 14.8284C10.7337 13.2663 13.2663 13.2663 14.8284 14.8284L16 16"
            stroke="white"
          />
          <path d="M10 10.5V14" stroke="white" />
          <path d="M14 10.5V14" stroke="white" />
        </svg>
      </div>
    </div>
  );
};
