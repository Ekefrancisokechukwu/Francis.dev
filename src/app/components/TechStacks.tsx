const jsFullStackTools = [
  // Frontend
  "HTML5",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Zustand",
  "Webpack",
  "Babel",
  "Sass/SCSS",

  // Backend
  "Node.js",
  "Express.js",

  // Databases
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",

  // APIs
  "RESTful APIs",
  "GraphQL",
  "Apollo",

  // Testing
  "Jest",

  // DevOps & Deployment
  // "Git",
  // "Docker",
  // "Kubernetes",
  // "CI/CD (e.g., Jenkins, GitHub Actions)",
  // "AWS/Azure/GCP",

  // Package Managers
  "npm",
  "Yarn",

  // Other
  "WebSockets",
  "JWT",
  "OAuth",
  // "Microservices",
  // "Serverless Functions",
];

const TechStacks = () => {
  return (
    <div>
      <div className="flex items-center gap-x-2">
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
          className="lucide lucide-layers-3 text-zinc-400"
        >
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
          <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
        </svg>
        <h1 className="text-base font-medium dark:text-zinc-100 text-zinc-700">
          Tech Stacks
        </h1>
      </div>
      <div className="mt-7 flex items-center flex-wrap  gap-4">
        {jsFullStackTools.map((stack, i) => (
          <div
            key={i}
            className="border dark:border-zinc-50/10 rounded-full cursor-default sm:p-3 p-2 sm:text-sm text-xs dark:hover:bg-transparent dark:text-zinc-400 text-zinc-800 hover:bg-gray-100 transition-colors duration-200"
          >
            {stack}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechStacks;
