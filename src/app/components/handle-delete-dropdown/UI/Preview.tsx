"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Ellipsis, Trash2 } from "lucide-react";
import useClickOutside from "@/hooks/useClickOutside";

const App = () => {
  const [openDelete, setDelete] = useState(false);
  const [isDeleted, setIsDeleted] = useState("idel");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setTimeout(() => {
      setIsDeleted("idel");
      setDelete(false);
    }, 400);
  };

  const { element } = useClickOutside(closeDropdown);

  const handleDelete = () => {
    setIsDeleted("success");
  };

  return (
    <div className="h-[28rem] ">
      <div ref={element} className="relative mt-24">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="p-2 border transition-colors duration-500 hover:bg-neutral-100 bg-neutral-50 text-neutral-600 rounded-lg"
        >
          <Ellipsis size={20} />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className={`p-2 absolute  origin-top overflow-hidden  shadow-lg top-[120%] space-y-1 right-0 bg-gray-50 rounded-xl w-[18rem] border`}
            >
              <div>
                <CopyButton />
              </div>
              <motion.div layout transition={{ duration: 0.2 }}>
                {isDeleted === "success" ? (
                  <div className="flex items-center gap-3 p-2 font-semibold text-sm rounded-lg bg-green-100 text-green-500">
                    <Check size={18} />
                    Deleted successful
                  </div>
                ) : (
                  <>
                    {!openDelete ? (
                      <button
                        onClick={() => setDelete(true)}
                        className="flex transition-colors duration-500 items-center gap-x-3 w-full  text-red-500 p-2 hover:bg-white rounded-lg"
                      >
                        <Trash2 size={17} />
                        <span className="font-semibold text-sm">Delete</span>
                      </button>
                    ) : (
                      <div className="p-2 bg-white rounded-lg">
                        <p className="font-semibold text-neutral-500 text-lg">
                          Are you sure you want to delete this Item
                        </p>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => setDelete(false)}
                            className="w-full p-2 mt-2 text-sm  transition-colors duration-500 rounded-lg  hover:bg-neutral-50 border text-neutral-500 font-semibold"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleDelete}
                            className="w-full p-2 mt-2 text-sm  transition-colors duration-500 rounded-lg bg-red-100 hover:bg-red-200 text-red-500 font-semibold"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const CopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    console.log("Link copied to clipboard");
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-x-3 transition-colors duration-500 w-full text-neutral-500 p-2 hover:bg-white rounded-lg"
    >
      <AnimatePresence mode="wait">
        {isCopied ? (
          <motion.div
            key="check"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Check size={17} className="text-green-500" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Copy size={17} />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="font-semibold text-sm">
        {isCopied ? "Copied!" : "Copy Share Link"}
      </span>
    </button>
  );
};

export default App;
