"use client";

import { useState, useEffect } from "react";
import Showcase from "../Showcase";
import { LoaderIcon } from "lucide-react";

const code = ``;

const SliderPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted ? (
        <Showcase
          tabIndex="slider-1"
          preview={<Slider />}
          title="Slider"
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

const Slider = () => {
  return (
    <div>
      <div className="border w-[20rem] rounded-full h-4"></div>
    </div>
  );
};

export default SliderPage;
