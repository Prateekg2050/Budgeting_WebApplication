import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { server_url } from "../config";

function Savings() {
  const [savings, setSavings] = useState("1");
  const [estSaving, setEstSaving] = useState("");
  const [rem, setRem] = useState(false);
  const [Data1, setData1] = useState([]);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    axios
      .get(`${server_url}/posts/`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then(async (data) => {
        setData1(data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [rem]);

  useEffect(() => {
    axios
      .get(`${server_url}/saving/${savings}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then(async (data) => {
        setEstSaving(data?.data?.exp_red);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [savings]);
  return (
    <>
      <div id="main" className=" ">
        <div
          id="nav"
          className="m-10 space-x-2  flex flex-row  w-3/2 font-semibold text-lg justify-between align-baseline text-gray-600"
        >
          <div className="w-1/4 space-x-2  flex flex-row   font-semibold text-lg justify-start text-gray-600 ">
            <div
              onClick={() => {
                setSavings("1");
              }}
              className={` ${
                savings === "1"
                  ? "outline outline-2 outline-blue-300 w-full rounded-md bg-blue-300 p-3 text-white shadow-md"
                  : "w-full rounded-md bg-white  p-3 text-gray-400 "
              }`}
            >
              Level 1 Savings
            </div>

            <div
              onClick={() => {
                setSavings("2");
              }}
              className={` ${
                savings === "2"
                  ? "outline outline-2 outline-blue-300 w-full rounded-md bg-blue-300  p-3 text-white shadow-md"
                  : "w-full rounded-md bg-white   p-3 text-gray-400"
              }`}
            >
              Level 2 Savings
            </div>
          </div>
        </div>

        <div>
          {savings === "1" ? (
            <div className="flex flex-row justify-between align-bottom">
              <div className=" w-fit flex flex-col space-y-10 p-10 outline outline-2 outline-blue-200 m-16 rounded-lg shadow-md shadow-blue-300 ">
                {Data1.map((elem) => {
                  if (elem.imp == 3) {
                    return (
                      <div className="w-[400px] bg-blue-100 shadow-md rounded-lg p-4 text-md flex flex-row justify-between align-baseline space">
                        <div className=" flex flex-row justify-between w-full">
                          <div id="desc">{elem.title}</div>
                          <div id="amount">{elem.amt}</div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div className=" w-fit flex flex-col space-y-10 p-10 m-16 rounded-lg  ">
                <h1 className=" text-gray-400 font-bold text-xl">
                  Estimated Savings :-{" "}
                </h1>
                <h1 className=" text-3xl text-blue-400 font-extrabold">
                  ₹ {estSaving}
                </h1>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-between align-bottom">
              <div className=" w-fit flex flex-col space-y-10 p-10 outline outline-2 outline-blue-200 m-16 rounded-lg shadow-md shadow-blue-300 ">
                {Data1.map((elem) => {
                  if (elem.imp != 1) {
                    return (
                      <div className="w-[400px] bg-blue-100 shadow-md rounded-lg p-4 text-md flex flex-row justify-between align-baseline space">
                        <div className=" flex flex-row justify-between w-full">
                          <div id="desc">{elem.title}</div>
                          <div id="amount">{elem.amt}</div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div className=" w-fit flex flex-col space-y-10 p-10  m-16 rounded-lg ">
                <h1 className=" text-gray-400 font-bold text-xl">
                  Estimated Savings :-{" "}
                </h1>
                <h1 className=" text-3xl text-blue-400 font-extrabold">
                  ₹ {estSaving}
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Savings;
