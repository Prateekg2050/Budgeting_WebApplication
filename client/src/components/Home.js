import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-bg-back1 h-screen">
        <div className=" flex flex-row justify-end">
          <div className=" w-[500px] bg-white p-20 rounded-xl mt-[100px] mr-10 shadow-lg space-y-10">
            <h1 className=" text-3xl font-bold">Get Your Finances in Order</h1>
            <h1 className=" font-sans text-gray-500">
              Money doesn’t have to be messy. The YNAB budgeting app and its
              simple four-rule method will help you organize your finances,
              demolish your debt, save piles of cash, and reach your financial
              goals faster.
            </h1>
            <div className=" flex flex-row justify-evenly items-center ">
              <button
                onClick={() => {
                  navigate("/register");
                }}
                className=" bg-blue-400 p-5 rounded-lg text-white font-sans shadow-md hover:opacity-90"
              >
                Sign up for free
              </button>
              <h1 className=" text-gray-400">or</h1>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className=" text-blue-400 font-sans hover:text-blue-500"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
