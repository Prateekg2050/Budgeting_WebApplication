import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { signOut } from "../actions/authAction";
import { useDispatch } from "react-redux";

function Navbar2(item) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div
        id="nav"
        className=" flex flex-row justify-between px-5 py-5 fixed top-0 right-0 left-0 h-16  z-30 bg-gray-100 shadow-lg "
      >
        <div className="flex self-center items-center space-x-8">
          <div id="brnd" className=" font-extrabold ">
            Money Finance
          </div>
        </div>
        <div className="flex self-end  justify-end md:justify-center space-x-6 ">
          <Link to={"/dashboard/savings"}>Savings</Link>
          <Link to={"/profile"}>
            <div>Profile</div>
          </Link>
          <div
            onClick={() => {
              dispatch(signOut());
            }}
          >
            Sign out
          </div>
        </div>
      </div>
      <div className=" h-16 bg-white"></div>
    </div>
  );
}

export default Navbar2;
