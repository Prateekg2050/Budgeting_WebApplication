import React, { useState } from "react";

function AddEarnings() {
  const [earning, setEarning] = useState();

  return (
    <div className=" bg-blue-100 h-screen flex flex-row justify-center p-10">
      <div className=" mt-[80px] w-[50%] h-[50%] shadow-md rounded-lg p-10 flex flex-col justify-start space-y-5 bg-white">
        <div className=" text-lg font-bold self-center">Add Earning</div>

        <div className="flex flex-col align-middle space-y-2">
          <label htmlFor="inp1" className=" text-gray-400">
            Enter Your Earning
          </label>
          <input
            id="inp1"
            value={earning}
            onChange={(e) => {
              setEarning(e.target.value);
            }}
            name="earning"
            type="tel"
            placeholder="Enter your Earnings"
            className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 text-black"
          />
        </div>
        <div>
          <button className=" p-3 bg-blue-300 text-white font-bold text-lg rounded-md hover:bg-blue-500">
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEarnings;
