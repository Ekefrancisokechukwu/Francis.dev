import React, { forwardRef, InputHTMLAttributes } from "react";

// Define the types for the props the Checkbox will accept
type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

// Forward the ref to the input element
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={`size-[1.1rem] z-10 relative border border-gray-400 grid place-items-center rounded-md cursor-pointer ${className}`}
      >
        <input
          type="checkbox"
          ref={ref}
          className="appearance-none peer pointer-events-none"
          {...props}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-check text-zinc-800 peer-checked:scale-110 scale-0 transition-transform duration-150"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </label>
    );
  }
);

// Add a display name for easier debugging with forwardRef
Checkbox.displayName = "Checkbox";
