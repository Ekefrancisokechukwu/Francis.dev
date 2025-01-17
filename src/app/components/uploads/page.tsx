import dynamic from "next/dynamic";

const FirstUplaod = dynamic(() => import("./firstUpload"), {
  ssr: false,
});

const Uplaods = () => {
  return (
    <div>
      <FirstUplaod />
    </div>
  );
};
export default Uplaods;
