"use client";

import { useEffect, useState } from "react";
import Showcase from "../../Showcase";
import { codeSample } from "./CodeSample";
import Preview from "./Preview";
import { LoaderIcon } from "lucide-react";

const FirstNav = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted ? (
        <Showcase
          tabIndex="first-nav"
          preview={<Preview />}
          title=""
          sampleCode={codeSample}
        />
      ) : (
        <div className="flex items-center justify-center h-[40vh]">
          <LoaderIcon className="w-6 h-6 animate-spin" />
        </div>
      )}
    </div>
  );
};
export default FirstNav;
