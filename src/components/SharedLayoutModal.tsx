"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

const images = [
  {
    id: 1,
    url: "/shared-1.jpg",
  },
  {
    id: 2,
    url: "/share-2.jpg",
  },
  {
    id: 3,
    url: "/share-3.jpg",
  },
];

export const SharedLayoutModal = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleOpen = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <LayoutGroup>
      <AnimatePresence>
        <div className="bg-neutral-900 border-neutral-600 rounded-xl p-5 min-h-[20rem] grid place-items-center">
          {/* items */}
          <div className="grid sm:grid-cols-3 grid-cols-2  gap-3 items-center">
            {images.map((img, i) => (
              <motion.div
                layoutId={img.url}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                key={i}
                onClick={() => handleOpen(img.url)}
                className="md:h-[15rem] md:w-[15rem] min-[450px]:size-[12rem] min-[370px]:size-[9rem]  size-[8rem] cursor-pointer"
              >
                <Image
                  alt="shared-modal"
                  src={img.url}
                  width={500}
                  height={300}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}

        {selectedItem && (
          <>
            {" "}
            <motion.div
              onClick={() => {
                setSelectedItem(null);
              }}
              exit={{ opacity: 0 }}
              className={cn(
                "fixed w-full h-screen bg-black/60 z-50 left-0 top-0"
              )}
            ></motion.div>
            <motion.div
              className={cn(
                "fixed  top-1/2 left-1/2 -translate-y-1/2  z-50 -translate-x-1/2"
              )}
            >
              <motion.div
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  ease: "easeOut",
                }}
                layoutId={selectedItem!}
                className="sm:size-[25rem] size-[16rem]"
              >
                <Image
                  alt="modal"
                  src={selectedItem}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};
