import Showcase from "../../Showcase";
import { codeSample } from "./codeSample";
import Preview from "./Preview";

const UI = () => {
  return (
    <Showcase
      tabIndex="second-nav"
      preview={<Preview />}
      title="Handle Delete"
      sampleCode={codeSample}
    />
  );
};
export default UI;
