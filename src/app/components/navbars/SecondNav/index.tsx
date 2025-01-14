"use client";

import { useEffect, useState } from "react";
import Showcase from "../../Showcase";
import { codeSample } from "./codeSample";
import Preview from "./Preview";

const SecondNav = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <Showcase
        tabIndex="second-nav"
        preview={<Preview />}
        title=""
        sampleCode={codeSample}
      />
    </div>
  );
};
export default SecondNav;
