"use client";

import { useEffect, useState } from "react";
import Showcase from "../../Showcase";
import Preview from "./Preview";
import { codeSample } from "./codeSample";
import { LoaderIcon } from "lucide-react";

const FirstReactionCom = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted ? (
        <Showcase
          tabIndex="Reactions-1"
          preview={<Preview />}
          title="Reactions"
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
export default FirstReactionCom;
