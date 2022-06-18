import React from "react";
import { Icon } from "@iconify/react";
const Loading = () => {
  return (
    <div className=" bg-whitefixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden  opacity-75 flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center  items-center align-middle space-y-2">
        <Icon icon="eos-icons:loading" width={60} className=" text-aorent " />
        <h2 className="text-center text-aorent text-xl font-semibold tracking-widest">
          Loading...
        </h2>
        <p className="w-2/3 text-center text-gray-500 opacity-90 tracking-wide">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    </div>
  );
};

export default Loading;
