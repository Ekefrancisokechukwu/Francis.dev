import Showcase from "../Showcase";

const page = () => {
  const code = `
  const CheckboxAnimated = () => {
  return (
    <div className="flex items-center">
      <label className="size-[1.4rem] relative  border border-gray-400 grid place-items-center rounded-md cursor-pointer">
        <input
          type="checkbox"
          className="appearance-none peer gi   pointer-events-none"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-check peer-checked:scale-110 scale-0 transition-transform duration-150"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </label>
    </div>
  );
};
export default page;

  `;

  return (
    <div>
      <Showcase
        tabIndex="checkbox-1"
        preview={CheckboxAnimated()}
        title="checkbox"
        sampleCode={code}
      />
    </div>
  );
};

const CheckboxAnimated = () => {
  return (
    <div className="flex items-center gap-x-3 w-full">
      <label className="size-[1.4rem] relative  border border-gray-400 grid place-items-center rounded-md cursor-pointer">
        <input
          type="checkbox"
          className="appearance-none peer gi   pointer-events-none"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-check peer-checked:scale-110 scale-0 transition-transform duration-150"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </label>
      <label className="size-[1.4rem] relative  border border-gray-400 grid place-items-center rounded-md cursor-pointer">
        <input
          type="checkbox"
          className="appearance-none peer gi   pointer-events-none"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-check peer-checked:scale-110 scale-0 transition-transform duration-150"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </label>
    </div>
  );
};
export default page;
