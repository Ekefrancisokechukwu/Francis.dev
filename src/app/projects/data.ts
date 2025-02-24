import { ProjectProps } from "./page";

export const projects: ProjectProps[] = [
  {
    title: "synchub",
    des: "A customizable portfolio platform similar to Linktree, allowing users to create a personalized page showcasing their information and important links.",
    img: "/sy.png",
    link: {
      href: "https://synchub.vercel.app/",
      label: "synchub",
    },
    githubLink: "https://github.com/Ekefrancisokechukwu/Synchub",
    images: ["/lin-2.png", "/lin-1.png", "/lin-3.png", "/lin-4.png"],
    video: "/sync_v.mp4",
    tools: [
      "Shadcn UI",
      "Tailwind Css",
      "Next.js",
      "Typescript",
      "Clerk AUTH",
      "Zustand",
      "Convex DB",
      "Vercel Deploy",
    ],
  },
  {
    title: "Metrix Dashboard",
    des: "A beautiful UI analytics dashboard that is highly responsive and well-optimized, providing a seamless user experience across various devices.",
    img: "/default.avif",
    link: {
      href: "https://metrix-dashboard-ten.vercel.app/",
      label: "Metrix",
    },
    video: "/met_v.mp4",
    githubLink: "https://github.com/Ekefrancisokechukwu/metrix-dashboard",
    images: ["/met-1.png"],
    tools: ["Rechart js", "Next.js", "Javascript", "Styled components"],
  },
  {
    title: "Gallery Pics",
    des: "A gallery application with infinite scroll, search, and filter capabilities, similar to Unsplash. Utilizing the Unsplash API, users can search, filter, and download images using Next.js features.",
    img: "/Synthetix.png",
    link: {
      href: "https://gallery-pics.vercel.app/",
      label: "Gallery",
    },
    video: "/gal-vid.mp4",
    githubLink: "https://github.com/Ekefrancisokechukwu/gallery-pics",
    images: ["/gal-1.png", "/gal-2.png", "/gal-3.png"],
    tools: [
      "Next.js",
      "Framer motion",
      "Javascript",
      "Tailwind Css",
      "React Query",
    ],
  },
  {
    title: "Specter Store",
    des: "An e-commerce website offering a seamless shopping experience with a wide range of products, secure checkout, and user-friendly interface.",
    img: "/default.avif",
    link: {
      href: "https://specter-store.vercel.app/",
      label: "Specter",
    },
    video: "/spec-v.mp4",
    githubLink: "https://github.com/Ekefrancisokechukwu/Specter_store",
    images: [
      "/spec-1.png",
      "/spec-2.png",
      "/spec-3.png",
      "/spec-4.png",
      "/spec-5.png",
    ],
    tools: [
      "Next.js",
      "Framer motion",
      "Javascript",
      "Tailwind Css",
      "Redux Toolkit",
      "Shadcn UI",
    ],
  },
];
