import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ChipProps {
  name?: string;
  image?: string;
  className?: string;
  closeChip: () => void;
}

const Chip: React.FC<ChipProps> = ({ name, image, className, closeChip }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className={cn(
        "shadow-[0px_2px_5px_0px_rgba(0,0,0,0.2)] rounded-md text-zinc-500 gap-x-2  sm:w-[8.5rem] w-[6rem] bg-white inline-flex items-center  px-3 py-1",
        className
      )}
    >
      <div className="size-[1.5rem] flex-shrink-0">
        <Image
          alt={`Avatar of ${name}`}
          src={image as string}
          width={1000}
          height={1000}
          className="rounded-full size-full object-cover"
        />
      </div>
      <span className="truncate font-medium capitalize text-sm">{name}</span>
      <button onClick={closeChip} className="grid place-items-center ms-auto">
        <X size={15} />
      </button>
    </motion.div>
  );
};
export default Chip;
