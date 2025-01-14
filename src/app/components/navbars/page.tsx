import dynamic from "next/dynamic";

const FirstNav = dynamic(() => import("./FirstNav"), {
  ssr: false,
});
const SecondNav = dynamic(() => import("./SecondNav"), {
  ssr: false,
});

const Navbars = () => {
  return (
    <div className="space-y-20">
      <FirstNav />
      <SecondNav />
    </div>
  );
};
export default Navbars;
