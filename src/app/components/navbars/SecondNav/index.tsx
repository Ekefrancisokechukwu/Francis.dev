"use client";

import Showcase from "../../Showcase";
import { codeSample } from "./codeSample";
import Preview from "./Preview";

const SecondNav = () => {
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
