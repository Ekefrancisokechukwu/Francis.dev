"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import { Image as SVGImage, X } from "lucide-react";

const Preview = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setLoading(false);
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 300);

      // Generate preview using FileReader
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setLoading(false);
    setProgress(0);
  };
  return (
    <div className="h-[20rem] grid place-items-center ">
      <motion.div
        layout
        className="bg-white dark:bg-zinc-900  sm:w-[30rem] w-full shadow-xl p-5 rounded-xl"
      >
        <input
          type="file"
          id="browseImg"
          accept="image/*"
          className="sr-only"
          onChange={handleFileChange}
        />
        <label
          htmlFor="browseImg"
          className="w-full h-[10rem]  group  rounded-md border-dashed border-2 dark:border-gray-600/25 cursor-pointer  grid place-items-center"
        >
          <div className="space-y-2 text-center">
            <div className="relative size-[4rem] mx-auto">
              <span className="absolute  opacity-0 ease-in-out  group-hover:opacity-95 group-hover:-left-4 bottom-0 group-hover:-rotate-12 transition-all duration-300 rotate-0 left-1/2 group-hover:translate-x-0 -translate-x-1/2">
                <SVGImage size={40} className="text-gray-300" />
              </span>
              <span className="absolute transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-1 left-1/2 -translate-x-1/2 bottom-0 z-20">
                <SVGImage size={50} className="text-sky-400" />
              </span>
              <span className="absolute transition-all ease-in-out  duration-300  bottom-0 opacity-0 group-hover:opacity-95 group-hover:rotate-12 group-hover:-right-4 group-hover:translate-x-0 left-1/2 -translate-x-1/2 rotate-0">
                <SVGImage size={40} className="text-gray-300" />
              </span>
            </div>
            <p className="font-semibold text-blue-900">
              Drop your image here, or{" "}
              <span className="text-blue-500">Browse</span>
            </p>
            <p className="text-sm text-gray-400">Supports:, JPG,JEPG,PNG</p>
          </div>
        </label>
        <div className="mt-3 overflow-hidden">
          {loading && (
            <motion.div
              initial={{
                translateY: 30,
                opacity: 0,
                filter: "blur(40px)",
                visibility: "hidden",
              }}
              animate={{
                translateY: 0,
                opacity: 1,
                filter: "none",
                visibility: "visible",
              }}
            >
              <Loading progress={progress} />
            </motion.div>
          )}
          {!loading && preview && (
            <motion.div
              initial={{ translateY: 30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "linear", stiffness: 60 }}
              className="border dark:border-gray-600/25 rounded-lg p-3 flex items-center justify-between"
            >
              <div className="size-[3rem] rounded-md">
                <Image
                  src={preview}
                  alt="upload"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <button
                onClick={handleRemoveImage}
                className="p-2 rounded-full hover:scale-110 bg-red-100"
              >
                <X size={15} className="text-red-500" />
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Loading = ({ progress }: { progress: number }) => {
  return (
    <div className="border dark:border-gray-600/25 relative rounded-lg p-3 z-10 flex items-center justify-between">
      <motion.div
        animate={{ width: `${progress}%` }}
        transition={{ ease: "linear", duration: 0.3 }}
        className="absolute bg-blue-50 dark:bg-black/20 -z-10  h-full top-0 left-0"
      />
      <div className="text-xs space-y-1">
        <p className="text-xs font-semibold text-blue-900 ">Uploading...</p>
        <div>
          <span>{progress}%</span>
        </div>
      </div>

      <button className="p-2 rounded-full hover:scale-110 bg-red-100">
        <X size={15} className="text-red-500" />
      </button>
    </div>
  );
};

export default Preview;
