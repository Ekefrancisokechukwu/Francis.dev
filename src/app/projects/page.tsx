import Image from "next/image";
import Heading from "../components/Heading";
import Link from "next/link";

const projects = [
  {
    title: "synchub",
    des: "A customizable portfolio platform similar to Linktree, allowing users to create a personalized page showcasing their information and important links.",
    img: "/sy.png",
    link: {
      href: "",
      label: "synchub",
    },
  },
  {
    title: "Metrix Dashboard",
    des: "A beautiful UI analytics dashboard that is highly responsive and well-optimized, providing a seamless user experience across various devices.",
    img: "/default.avif",
    link: {
      href: "",
      label: "Metrix",
    },
  },
  {
    title: "Specter Store",
    des: "An e-commerce website offering a seamless shopping experience with a wide range of products, secure checkout, and user-friendly interface.",
    img: "/default.avif",
    link: {
      href: "",
      label: "Specter",
    },
  },
];

const ProjectsPage = () => {
  return (
    <div className="mx-auto w-full max-w-[63rem] mt-20 pb-20">
      <div className="max-w-[38rem]">
        <Heading
          className="!leading-tight"
          text="Some projects that showcase my skills and passion."
        />
        <p className="mt-8 text-base text-zinc-600 dark:text-zinc-400">
          Over the years, I&apos;ve developed numerous projects, but these are
          the ones I&apos;m most proud of.
        </p>
      </div>

      <div className="grid grid-cols-3 mt-12 gap-5">
        {projects.map((project, i) => {
          return (
            <Link
              href={project.link.href}
              key={i}
              className="p-5 relative z-10 group  rounded-xl"
            >
              <div className="bg-zinc-50 dark:bg-zinc-800/10 scale-95 invisible group-hover:visible group-hover:scale-100 group-hover:transition-all group-hover:duration-200 absolute inset-0 w-full h-full rounded-xl -z-10 "></div>
              <div className="size-[3rem] rounded-full border p-2 grid place-items-center">
                <Image
                  src={project.img}
                  alt=""
                  width={800}
                  height={800}
                  className="object-cover rounded-full"
                />
              </div>
              <h1 className="mt-6 text-zinc-800  dark:text-zinc-100 capitalize font-semibold text-base">
                {project.title}
              </h1>

              <p className="text-sm mt-2 text-zinc-600 dark:text-zinc-400">
                {project.des}
              </p>

              <div className="flex items-center gap-x-3 mt-4  *:group-hover:text-sky-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-link-2 text-zinc-400 transition-colors duration-300"
                >
                  <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                  <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                  <line x1="8" x2="16" y1="12" y2="12" />
                </svg>
                <p className="text-zinc-400 font-medium text-sm transition-colors duration-300">
                  {project.link.label}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectsPage;
