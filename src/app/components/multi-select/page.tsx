"use client";

import { ChevronDown, LoaderIcon, Search } from "lucide-react";
import Showcase from "../Showcase";
import Chip from "../ui/Chip";
import useClickOutside from "@/hooks/useClickOutside";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Checkbox } from "../ui/Checkbox";
import { motion } from "framer-motion";

interface IMember {
  name: string;
  image: string;
}

const members = [
  {
    image: "/avater.avif",
    name: "Michael Foster",
  },
  {
    image: "/avater-1.jpg",
    name: "Lindsay Walton",
  },
  {
    image: "/avater-2.avif",
    name: "Brenna Goyette",
  },
  {
    image: "/avater-3.avif",
    name: "Dries Vincent",
  },
  {
    image: "/avater-4.avif",
    name: "Floyd Miles",
  },
  {
    image: "/avater-5.jpg",
    name: "Justin Jackson",
  },
];

const MultiSelect = () => {
  const code = `
   const members = [
   {
     image: "/avater-1.jpg",
     name: "",
   },
   {
     image: "/avater-2.avif",
     name: "",
   },
   {
     image: "/avater-3.avif",
     name: "",
   },
   {
     image: "/avater-4.avif",
     name: "",
   },
   {
     image: "/avater-5.jpg",
     name: "Justin Jackson
 ",
   },
 ];



  const ComboBox = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [search, setSearch] = useState("");
    const [selectedMembers, setSelectedMembers] = useState<IMember[]>([]);

    const filteredMembers = members.filter((member) =>
      member.name.toLowerCase().includes(search.toLowerCase())
    );

    const { element } = useClickOutside(() => setIsOpen(false));

    const toggleMember = (member: IMember) => {
      setSelectedMembers((prev) => {
        if (prev.includes(member)) {
          return prev.filter(
            (selectedMember) => selectedMember.name !== member.name
          );
        } else {
          return [...prev, member];
        }
      });
    };

    return  ( <div className="w-full h-[20rem] flex justify-center mt-6">
        <div ref={element} className="w-[70%]">
          <div className="shadow-md h-12 px-2 py-1 relative rounded-md bg-white flex items-center gap-x-2">
            {selectedMembers.slice(0, 3).map((member) => (
              <Chip
                {...member}
                key={member.name}
                closeChip={() => toggleMember(member)}
              />
            ))}
            {selectedMembers.length > 3 && (
              <div className="shadow-[0px_2px_5px_0px_rgba(0,0,0,0.2)] rounded-md text-zinc-500 gap-x-2  w-[6rem] bg-white inline-flex justify-center items-center font-medium  px-3 py-1">
                +{selectedMembers.length - 3}
              </div>
            )}

            <button onClick={() => setIsOpen(!isOpen)} className="ms-auto">
              <ChevronDown className="text-gray-500" />
            </button>
            <div
              className={cn(
                "absolute w-full bg-white h-[15rem]  pt-1.5 origin-top rounded-md left-0 top-[107%] shadow-2xl transform",
                isOpen
                  ? "translate-y-0 rotate-x-0 transition-all ease-linear duration-200 visible opacity-100"
                  : "-translate-y-3  opacity-0 invisible"
              )}
            >
              <div className="px-2 ">
                <div className="flex items-center border px-2 rounded-md">
                  <Search size={14} className="text-zinc-500" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search here"
                    className="text-sm w-full py-1.5 ml-2 text-zinc-500"
                  />
                </div>
              </div>
              <motion.div
                layout="position"
                className="overflow-y-auto mt-2 space-y-2 overflow-x-hidden  max-h-[80%]"
              >
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => {
                    return (
                      <motion.div
                        key={member.name}
                        layoutId={\`/\members-\`/\${member.name}\`}
                        className="p-3 flex items-center justify-between hover:bg-zinc-50 "
                      >
                        <div className="flex items-center gap-x-2">
                          <div className="size-[2rem]">
                            <Image
                              alt=""
                              src={member.image}
                              width={30}
                              height={30}
                              className="rounded-full w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-medium text-sm text-zinc-600">
                            {member.name}
                          </span>
                        </div>

                        <Checkbox
                          checked={selectedMembers.includes(member)}
                          onChange={() => toggleMember(member)}
                        />
                      </motion.div>
                    );
                  })
                ) : (
                  <p className="text-center font-medium mt-5 text-neutral-700">
                    No members found
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );

}
   `;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ComboBox = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [search, setSearch] = useState("");
    const [selectedMembers, setSelectedMembers] = useState<IMember[]>([]);

    const filteredMembers = members.filter((member) =>
      member.name.toLowerCase().includes(search.toLowerCase())
    );

    const { element } = useClickOutside(() => setIsOpen(false));

    const toggleMember = (member: IMember) => {
      setSelectedMembers((prev) => {
        if (prev.includes(member)) {
          return prev.filter(
            (selectedMember) => selectedMember.name !== member.name
          );
        } else {
          return [...prev, member];
        }
      });
    };

    return (
      <div className="w-full h-[20rem] flex justify-center mt-6">
        <div ref={element} className="lg:w-[70%] w-[90%]">
          <div className="shadow-md h-12 px-2 py-1 relative rounded-md bg-white flex items-center gap-x-2">
            {/* <div className="flex items-center gap-x-2 overflow-x-hidden"> */}
            {selectedMembers.slice(0, 3).map((member) => (
              <Chip
                {...member}
                key={member.name}
                closeChip={() => toggleMember(member)}
              />
            ))}
            {/* </div> */}

            <div className="ms-auto flex items-center">
              {selectedMembers.length > 3 && (
                <div className="shadow-[0px_2px_5px_0px_rgba(0,0,0,0.2)] mr-2 rounded-md text-zinc-500 gap-x-2  sm:w-[4rem] w-[2rem] bg-white inline-flex justify-center items-center font-medium  px-3 py-1">
                  +{selectedMembers.length - 3}
                </div>
              )}
              <button onClick={() => setIsOpen(!isOpen)}>
                <ChevronDown className="text-gray-500" />
              </button>
            </div>

            <div
              className={cn(
                "absolute w-full bg-white h-[15rem]  pt-1.5 origin-top rounded-md left-0 top-[107%] shadow-2xl transform",
                isOpen
                  ? "translate-y-0 rotate-x-0 transition-all ease-linear duration-200 visible opacity-100"
                  : "-translate-y-3  opacity-0 invisible"
              )}
            >
              <div className="px-2 ">
                <div className="flex items-center border px-2 rounded-md">
                  <Search size={14} className="text-zinc-500" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search here"
                    className="text-sm w-full py-1.5 ml-2 text-zinc-500"
                  />
                </div>
              </div>
              <motion.div
                layout="position"
                className="overflow-y-auto mt-2 space-y-2 overflow-x-hidden  max-h-[80%]"
              >
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => {
                    return (
                      <motion.div
                        key={member.name}
                        layoutId={`members-${member.name}`}
                        className="p-3 flex items-center justify-between hover:bg-zinc-50 "
                      >
                        <div className="flex items-center gap-x-2">
                          <div className="size-[2rem]">
                            <Image
                              alt=""
                              src={member.image}
                              width={30}
                              height={30}
                              className="rounded-full w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-medium text-sm text-zinc-600">
                            {member.name}
                          </span>
                        </div>

                        <Checkbox
                          checked={selectedMembers.includes(member)}
                          onChange={() => toggleMember(member)}
                        />
                      </motion.div>
                    );
                  })
                ) : (
                  <p className="text-center font-medium mt-5 text-neutral-700">
                    No members found
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {isMounted ? (
        <Showcase
          tabIndex="MultiSelect-1"
          preview={<ComboBox />}
          title="Multi Select"
          sampleCode={code}
        />
      ) : (
        <div className="flex items-center justify-center h-[40vh]">
          <LoaderIcon className="w-6 h-6 animate-spin" />
        </div>
      )}
    </div>
  );
};
export default MultiSelect;
