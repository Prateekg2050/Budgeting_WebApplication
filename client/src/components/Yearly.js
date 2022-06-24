import React from "react";
import { Data } from "./Data.js";
function Yearly() {
  return (
    <>
      <div>
        {Data.length === 0 ? (
          () => {
            return (
              <div>
                <h1 className="">Not Found</h1>
              </div>
            );
          }
        ) : (
          <div className="flex flex-col space-y-10 p-10 bg-white m-16 rounded-lg shadow-lg">
            <div className="grid grid-cols-4 gap-4  p-4 bg-blue-300 text-white text-xl font-bold rounded-lg w-full">
              <div id="desc">description</div>
              <div id="amount">amount</div>
              <div id="date">date</div>
              <div id="level">level</div>
            </div>
            {Data.map((elem) => {
              return (
                <div className="grid grid-cols-4 gap-4  p-4 bg-blue-100 rounded-lg w-full">
                  <div id="desc">{elem.description}</div>
                  <div id="amount">{elem.amount}</div>
                  <div id="date">{elem.date}</div>
                  <div id="level">{elem.level}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Yearly;
