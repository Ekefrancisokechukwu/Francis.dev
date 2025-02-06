import Showcase from "../../Showcase";
import { codeSample } from "./codeSample";
import Preview from "./Preview";

const FirstTags = () => {
  return (
    <div>
      <Showcase
        tabIndex="share-1"
        preview={<Preview />}
        title="AlignUi Filter Tags"
        sampleCode={codeSample}
      />
    </div>
  );
};
export default FirstTags;
