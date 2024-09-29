import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";

const AboutPage = () => {
  return (
    <div className="w-full xl:max-w-[63rem] lg:max-w-[55rem] md:max-w-[40rem] md:px-0 sm:px-12  px-6  mx-auto mt-24 pb-16">
      <div className="flex gap-x-[5rem] lg:flex-row flex-col-reverse ">
        <div className="max-w-[37rem]">
          <Heading text="Software developer, UI Specialist" className="mt-5" />
          <div className="mt-12">
            <p>
              Hi, let me tell you about myself. I am a web developer and
              full-stack developer from Nigeria. I started my tech journey in
              late 2022, beginning with learning frontend development using
              HTML, CSS, and other technologies. I have a passion for building
              beautiful and engaging user interfaces. I also love solving
              problems and enjoy networking, meeting new people, and engaging in
              interesting conversations.
            </p>
            <p className="mt-7">
              In addition to my work in tech, I enjoy watching football and
              listening to music. I also pay great attention to detail, which
              helps me in both my professional and personal life.
            </p>
          </div>
        </div>
        <div>
          <div className="size-[16rem] rotate-12 hover:rotate-0 sm:ml-0 ml-4 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] p-2 rounded-3xl border shadow-2xl hover:shadow-lg">
            <Image
              src="/profile.jpeg"
              alt="my profile pic"
              width={1000}
              height={1000}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          <div className="mt-20">
            <ul className="flex items-center  gap-x-6">
              <li>
                <Link href={"https://x.com/EkeTechSpecter"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter-x text-zinc-600 hover:text-zinc-800 transition-colors duration-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={"https://github.com/Ekefrancisokechukwu"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-zinc-600 hover:text-zinc-800 transition-colors duration-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.linkedin.com/in/francis-okechukwu-954632261/"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-zinc-600 hover:text-zinc-800 transition-colors duration-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Link>
              </li>
            </ul>

            <Link
              href={"mailto:okechukwufrancis929@gmail.com"}
              className="*:hover:text-sky-300 py-7 border-t dark:border-zinc-50/10 mt-7 flex items-center gap-x-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-open text-zinc-600 transition-all  duration-500"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <span className="font-medium text-zinc-700 text-sm  transition-all duration-500 ">
                okechukwufrancis929@gmail
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
