import Showcase from "../../Showcase";
import { codeSample } from "./codeSample";
import Preview from "./Preview";

const FirstUpload = () => {
  return (
    <div>
      <Showcase
        tabIndex="second-nav"
        preview={<Preview />}
        title="Uploads"
        sampleCode={codeSample}
      />
    </div>
  );
};
export default FirstUpload;
