import Showcase from "../../Showcase";
import { codeSample } from "./codeSample";
import { Preview } from "./Preview";

const FirstAccordion = () => {
  return (
    <div>
      <Showcase
        tabIndex="Accordions-1"
        preview={<Preview />}
        title="Accordions"
        sampleCode={codeSample}
      />
    </div>
  );
};
export default FirstAccordion;
