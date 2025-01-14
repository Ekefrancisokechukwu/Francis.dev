import dynamic from "next/dynamic";

const UI = dynamic(() => import("./UI"), {
  ssr: false,
});

const NeedHelpUIPage = () => {
  return (
    <div>
      <UI />
    </div>
  );
};
export default NeedHelpUIPage;
