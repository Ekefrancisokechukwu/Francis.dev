import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    company: "Dropdefi",
    role: "front developer",
    type: "Part Time",
    startYear: "2024",
    endDate: "Dec 2024",
    image: "/dropdefi_logo.jpeg",
  },
  {
    company: "THCO",
    role: "front developer",
    type: "Full Time",
    startYear: "2024",
    endDate: "present",
    image: "/thcologo.jpeg",
  },
  {
    company: "Pickriders",
    role: "Front developer",
    type: "Part Time",
    startYear: "2024",
    endDate: "Aug 2024",
    image: "/pickriders-logo.jpeg",
  },
  {
    company: "Lampnet",
    role: "Front developer",
    type: "Internship",
    startYear: "2023",
    endDate: "2024",
    image: "/lampnet-logo.jpeg",
  },
];

const WorkExperince = () => {
  return (
    <div className="border dark:border-zinc-50/10 rounded-xl p-5">
      <div className="flex items-center gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-briefcase-business text-zinc-400"
        >
          <path d="M12 12h.01" />
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
        <h1 className="text-base font-medium text-zinc-700 dark:text-zinc-100">
          Work Experince
        </h1>
      </div>
      <div className="mt-6 space-y-8">
        {experiences.map((expenrience, i) => {
          return (
            <div key={i} className="flex items-center gap-x-3">
              <div className="size-[2.5rem] flex-shrink-0 border inline-block rounded-full p-1">
                <Image
                  src={expenrience.image}
                  alt="dropdefi logo"
                  width={1000}
                  height={1000}
                  className="rounded-full w-full h-full"
                />
              </div>
              <div>
                <h2 className="font-medium sm:text-base text-sm text-zinc-700 dark:text-zinc-100">
                  {expenrience.company}
                </h2>
                <p className="text-xs text-zinc-500 capitalize truncate sm:w-auto w-28">
                  {expenrience.role} ({expenrience.type})
                </p>
              </div>
              <div className="sm:text-sm text-xs text-zinc-400 ms-auto self-end">
                {expenrience.startYear} — {expenrience.endDate}
              </div>
            </div>
          );
        })}
      </div>
      <Link
        href={
          "https://docs.google.com/document/d/132RihgHkk7xMxOxMPYvPFJ48-Un69CK_rZkgPRQJ3f8/edit?usp=sharing"
        }
        target="_blank"
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full relative"
      >
        Download Resume
        <div className="relative overflow-hidden w-[15px] h-[15px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-down text-zinc-500 absolute top-0 group-hover:translate-y-[100%] transition-transform duration-300"
          >
            <path d="M8 18L12 22L16 18" />
            <path d="M12 2V22" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-down text-zinc-500 absolute top-[-100%] group-hover:translate-y-[100%] transition-transform duration-300"
          >
            <path d="M8 18L12 22L16 18" />
            <path d="M12 2V22" />
          </svg>
        </div>
      </Link>
    </div>
  );
};
export default WorkExperince;
