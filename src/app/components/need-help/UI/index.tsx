"use client";

import { useEffect, useState } from "react";
import Showcase from "../../Showcase";
import { LoaderIcon } from "lucide-react";
import { code } from "./codeSample";
import Preview from "./Preview";

const UI = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted ? (
        <Showcase
          tabIndex="MultiSelect-1"
          preview={<Preview />}
          title="Need Help UI"
          sampleCode={code}
        />
      ) : (
        <div className="flex items-center justify-center h-[40vh]">
          <LoaderIcon className="w-6 h-6 animate-spin" />
        </div>
      )}
    </div>
  );
};
export default UI;
