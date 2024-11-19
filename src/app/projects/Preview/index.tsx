import { cn } from "@/lib/utils";
import { Github, Link as LinkIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "../page";

interface ProjectPreviewProps {
  isPreviewOpen: boolean;
  selectedProject: ProjectProps;
  closePreview: () => void;
}

const ProjectPreview = ({
  isPreviewOpen,
  selectedProject,
  closePreview,
}: ProjectPreviewProps) => {
  console.log(selectedProject);

  return (
    <div>
      <div
        className={cn(
          "fixed top-0 left-0 transition-all duration-300 bg-black/80 w-full h-screen z-50",
          isPreviewOpen ? "opacity-100 visible " : "opacity-0 invisible "
        )}
      ></div>
      <div
        className={cn(
          "sm:w-[80vw] w-[95vw] transition-all duration-500  grid grid-cols-[auto_1fr] p-1 bg-white dark:bg-zinc-900 h-[90vh] fixed top-1/2 left-1/2 z-50 rounded-lg -translate-y-1/2 -translate-x-1/2",
          isPreviewOpen
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-95"
        )}
      >
        <button
          onClick={closePreview}
          className="bg-white/85 size-[2rem] grid place-items-center rounded-full absolute -right-10 top-0"
        >
          <X />
        </button>
        {selectedProject && (
          <>
            <div className="w-[20rem] px-3  py-3 overflow-y-auto">
              <h1 className="font-semibold text-2xl capitalize">
                {selectedProject?.title}
              </h1>

              <div className="flex items-center gap-x-5 mt-6">
                <Link
                  href={selectedProject.link.href as string}
                  target="_blank"
                  className="flex items-center gap-x-2 shadow border rounded-3xl py-1 px-2 text-sm "
                >
                  <LinkIcon size={15} /> Visit
                </Link>
                <Link
                  href={selectedProject?.githubLink as string}
                  target="_blank"
                  className="flex items-center gap-x-2 shadow border rounded-3xl py-1 px-2 text-sm "
                >
                  <Github size={15} /> Code Base
                </Link>
              </div>

              <p className="mt-6 text-lg text-zinc-600 ">
                {selectedProject?.des}
              </p>

              <div className="mt-16">
                <h1 className="font-semibold text-lg">Skills and Tool</h1>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3">
                  {selectedProject?.tools.map((skill, i) => (
                    <span
                      key={i}
                      className="border px-3 py-1.5 text-sm rounded-3xl capitalize"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="overflow-y-auto">
              <div className="py-7 px-1">
                <div className="h-[28rem] w-full">
                  <video
                    autoPlay
                    muted
                    loop
                    style={{ width: "100%" }}
                    aria-label="lady wearing google vision and pressing a keyboard"
                    className="rounded-xl"
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                    <source src={selectedProject.video} type="video/webm" />
                    Your browser is not supported!
                  </video>
                </div>

                <div className="space-y-10 mt-14">
                  {selectedProject.images.map((img, i) => (
                    <div
                      key={i}
                      className="h-[28rem] w-full p-1.5 bg-gray-100 rounded-lg"
                    >
                      <Image
                        src={img}
                        alt="project image"
                        width={800}
                        height={800}
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ProjectPreview;
