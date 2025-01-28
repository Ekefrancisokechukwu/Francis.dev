"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCheck } from "lucide-react";

const members = [
  {
    name: "Leslie Alexander",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

type User = { name: string; img: string };

export const Preview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedMember, setSelectedMember] = useState<User | null>(null);

  const handleSelecteMember = (member: User) => {
    setSelectedMember(member);
    setIsSheetOpen(false);
  };

  useEffect(() => {
    if (!selectedMember) return;
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [selectedMember]);

  useEffect(() => {
    if (selectedMember && progress === 100) {
      const timer = setTimeout(() => {
        setSelectedMember(null);
        setProgress(0);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [progress, selectedMember]);

  return (
    <div className="h-[25rem] grid place-items-center">
      {!isSheetOpen ? (
        <motion.button
          onClick={() => setIsSheetOpen(true)}
          disabled={selectedMember ? true : false}
          whileHover={"hover"}
          className="bg-stone-800 size-[3.3rem] relative overflow-hidden  grid place-items-center p-2 rounded-xl"
        >
          <motion.div animate={!selectedMember ? { y: 0 } : { y: "-150%" }}>
            <CloudSVG />
          </motion.div>
          <motion.div
            initial={{ y: "120%" }}
            animate={selectedMember ? { y: "0" } : { y: "120%" }}
            className="size-[2.4rem] absolute  rounded-full"
          >
            {selectedMember && (
              <Image
                src={selectedMember.img}
                alt={selectedMember.name}
                width={300}
                height={300}
                className="object-cover w-full rounded-full h-full"
              />
            )}

            <div className="absolute w-full rounded-full   h-full  left-0 top-0">
              <ProgressLoading percentage={progress} />
            </div>
          </motion.div>
        </motion.button>
      ) : (
        <motion.div
          initial={{ scale: 0, opacity: 0, filter: "blur(24px)" }}
          animate={{ scale: 1, opacity: 1, filter: "none" }}
          transition={{
            type: "spring",
            duration: 0.3,
            stiffness: 110,
            damping: 14,
          }}
          exit={{ scale: 0, opacity: 0, filter: "blur(24px)" }}
          onMouseLeave={() => setHoveredIndex(null)}
          className="w-[18rem] relative z-10 space-y-1  bg-gray-200 p-3.5  rounded-3xl"
        >
          {members.map((member, i) => {
            return (
              <motion.button
                key={i}
                onHoverStart={() => setHoveredIndex(i)}
                whileHover={{ x: -28 }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  stiffness: 70,
                }}
                onClick={() => handleSelecteMember(member)}
                className="w-full z-10 flex items-center px-2 py-1 group  text-black  relative  rounded-xl  gap-x-2 font-semibold text-sm"
              >
                <div className="size-[2.5rem] rounded-full bg-gray-100 border group-hover:rounded-xl transition-all duration-300">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:rounded-xl transition-all duration-300 rounded-full"
                  />
                </div>
                {member.name}
              </motion.button>
            );
          })}
          {hoveredIndex !== null && (
            <motion.div
              layoutId="active-item"
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-[110%] absolute bg-white -z-10 shadow-md rounded-xl"
              style={{
                top: `${hoveredIndex * 3.25 + 0.3}rem`,
                height: "3.5rem",
                left: "-5%",
              }}
            />
          )}
        </motion.div>
      )}
    </div>
  );
};

const CloudSVG = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-cloud-upload"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <motion.path
        d="M12 13v8"
        variants={{
          hover: {
            y: -2,
            scale: 1.1,
            transition: { yoyo: Number.POSITIVE_INFINITY, duration: 0.5 },
          },
        }}
      />
      <motion.path
        d="m8 17 4-4 4 4"
        variants={{
          hover: {
            y: -2,
            scale: 1.1,
            transition: { yoyo: Number.POSITIVE_INFINITY, duration: 0.5 },
          },
        }}
      />
    </motion.svg>
  );
};

const ProgressLoading = ({ percentage = 0 }) => {
  const size = 40;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;
  const completed = percentage === 100;
  return (
    <div className="relative size-[2.4rem]">
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-white  transition-all duration-300 ease-in-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
      </svg>
      <div
        className={`absolute inset-0   flex items-center justify-center text-xs font-medium ${
          completed ? "backdrop-blur-[.7px]" : ""
        }`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={completed ? { scale: 1 } : ""}
        >
          <CheckCheck color="#fff" />
        </motion.div>
      </div>
    </div>
  );
};
