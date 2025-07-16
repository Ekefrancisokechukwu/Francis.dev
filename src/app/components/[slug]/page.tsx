import { Undo2 } from "lucide-react";
import Link from "next/link";

const ComponentPage = () => {
  return (
    <div className="max-w-[50rem] mx-auto py-10">
      <div className="flex items-center justify-between">
        <Link
          href={"/"}
          className="bg-stone-800 p-2 active:scale-110 transition-all  rounded-lg"
        >
          <Undo2 size={18} />
        </Link>
      </div>

      <div className="mt-10">
        <div className="bg-neutral-900 border-neutral-600 rounded-xl p-5 min-h-[20rem] grid place-items-center"></div>
      </div>
    </div>
  );
};
export default ComponentPage;
