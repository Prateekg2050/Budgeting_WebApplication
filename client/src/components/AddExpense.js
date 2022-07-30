import axios from "axios";
import React, { useEffect, useState } from "react";
import { server_url } from "../config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AddExpense() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [importance, setImportance] = useState(1);

  const [call, setCall] = useState(false);

  useEffect(() => {
    axios
      .post(
        `${server_url}/posts/`,
        { title: desc, amt: amount, imp: importance },
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      )
      .then(async () => {
        console.log("added successfully");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [call]);

  return (
    <div className=" bg-blue-100 h-screen flex flex-row justify-center p-10">
      <div className=" mt-[80px] w-[50%] h-[80%] shadow-md rounded-3xl p-10 flex flex-col justify-start space-y-5 bg-white">
        <div className=" text-lg font-bold self-center">Add Expense's</div>

        <div className="flex flex-col align-middle space-y-2">
          <label htmlFor="inp1" className=" text-gray-400">
            Enter Description
          </label>
          <input
            id="inp1"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            name="description"
            type="text"
            className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 text-black"
          />
        </div>
        <div className="flex flex-col align-middle space-y-2">
          <label htmlFor="inp2" className=" text-gray-400">
            Enter Amount
          </label>
          <input
            id="inp2"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            name="amount"
            type="tel"
            className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 text-black"
          />
        </div>
        <div className="flex flex-col align-middle space-y-2">
          <label htmlFor="inp3" className=" text-gray-400">
            Choose your importance
          </label>
          <div className=" flex flex-row space-x-10">
            <div
              onClick={() => {
                setImportance(1);
              }}
              className="p-5 px-6 text-white bg-red-400 rounded-xl shadow-md  hover:bg-red-500 "
            >
              1
            </div>
            <div
              onClick={() => {
                setImportance(2);
              }}
              className="p-5 px-6 text-white bg-yellow-500 rounded-xl shadow-md hover:bg-yellow-600  "
            >
              2
            </div>
            <div
              onClick={() => {
                setImportance(3);
              }}
              className="p-5 px-6 text-white bg-green-600 rounded-xl shadow-md hover:bg-green-700 "
            >
              3
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setCall(true);
            }}
            className="mt-5 p-3 bg-blue-400 text-white font-bold text-lg rounded-md hover:bg-blue-500 px-10"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
