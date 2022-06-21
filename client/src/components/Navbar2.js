import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

function Navbar2(item) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        id="nav"
        className=" flex flex-row justify-between px-5 py-5 fixed top-0 right-0 left-0 h-16  z-30 bg-gray-100 shadow-lg "
      >
        <div className="flex self-center items-center space-x-8">
          <Icon
            onClick={() => {
              navigate(-1);
            }}
            icon="eva:arrow-ios-back-fill"
            width="35"
            height="35"
          />
          <div id="brnd" className=" cursor-pointer hidden lg:flex">
            <img
              src={window.location.origin + "/assets/AoRentt.png"}
              className=""
              alt=""
            />
          </div>
        </div>
        <div className="flex self-center w-full justify-end md:justify-center ">
          <h1 className=" text-2xl md:text-3xl font-extrabold lg:hidden ">
            {item.name}
          </h1>
        </div>
      </div>
      <div className=" h-16 bg-white"></div>
    </div>
  );
}

export default Navbar2;
