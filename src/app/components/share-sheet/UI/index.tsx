import Showcase from "../../Showcase";
import { codeSample } from "./codeSample";
import { Preview } from "./Preview";

const UI = () => {
  return (
    <div>
      <Showcase
        tabIndex="share-1"
        preview={<Preview />}
        title="Share Sheet"
        sampleCode={codeSample}
      />
    </div>
  );
};
export default UI;
