import { ReactNode } from "react";
import ComponentsNav from "./ComponentsNav";
import ComponentSidebar from "./ComponentSidebar";
import ComponentNavBtn from "./ComponentNavBtn";

const ComponentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex  items-start w-full mt-[5rem] xl:max-w-[63rem] lg:max-w-[55rem] md:max-w-[50rem] md:px-0 sm:px-12     mx-auto ">
      <div className=" lg:block hidden lg:pl-0 md:pl-4 pr-3 sticky top-10">
        <ComponentsNav />
      </div>
      <div className="flex-1 px-4 pb-10">
        <ComponentNavBtn />
        {children}
      </div>
      <ComponentSidebar />
    </div>
  );
};
export default ComponentsLayout;
