import React, { useState } from "react";
import Monthly from "./Monthly";
import Yearly from "./Yearly";
import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";
function Dashboard() {
  const [duration, setDuration] = useState("monthly");
  return (
    <div className="">
      <div className="">
        <Navbar2 />
      </div>

      <div id="main" className="mt-10">
        <div
          id="nav"
          className="m-10 space-x-2  flex flex-row  w-3/2 font-semibold text-lg justify-between align-baseline text-gray-600"
        >
          <div className="w-1/4 space-x-2  flex flex-row   font-semibold text-lg justify-start text-gray-600">
            <div
              onClick={() => {
                setDuration("monthly");
              }}
              className={` ${
                duration === "monthly"
                  ? "outline outline-2 outline-blue-300 w-full rounded-md bg-white p-3 text-gray-400 shadow-md"
                  : "w-full rounded-md bg-white  p-3 text-gray-400 "
              }`}
            >
              Expense
            </div>

            <div
              onClick={() => {
                setDuration("yearly");
              }}
              className={` ${
                duration === "yearly"
                  ? "outline outline-2 outline-blue-300 w-full rounded-md bg-white  p-3 text-gray-400 shadow-md"
                  : "w-full rounded-md bg-white   p-3 text-gray-400"
              }`}
            >
              Analysis
            </div>
          </div>

          <Link to={"/dashboard/addexpense"}>
            {" "}
            <div className=" bg-blue-400 rounded-lg  p-4 text-white hover:bg-blue-500 shadow-lg">
              Add Expense
            </div>
          </Link>
        </div>

        <div>{duration === "monthly" ? <Monthly /> : <Yearly />}</div>
      </div>
    </div>
  );
}

export default Dashboard;
