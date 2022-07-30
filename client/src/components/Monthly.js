import axios from "axios";
import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { server_url } from "../config.js";
import { Data } from "./Data.js";
import { Icon } from "@iconify/react";

function Monthly() {
  const auth = useSelector((state) => state.auth);
  const [rem, setRem] = useState(false);
  const [Data1, setData1] = useState([]);
  useEffect(() => {
    axios
      .get(`${server_url}/posts/`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then(async (data) => {
        console.log(data);
        setData1(data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [rem]);

  const remove = (post_ID) => {
    axios
      .delete(`${server_url}/posts/${post_ID}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then(async (res) => {
        console.log("Sucessfully removed !");
        rem ? setRem(false) : setRem(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

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
            <div className="grid grid-cols-4   p-4   bg-blue-300 text-white text-xl font-bold rounded-lg w-full">
              <div id="desc">description</div>
              <div id="amount">amount</div>
              <div id="date">date</div>
              <div id="level">level</div>
            </div>
            {Data1.map((elem) => {
              return (
                <div className="bg-blue-100 rounded-lg p-4 text-md flex flex-row justify-between align-baseline">
                  <div className="grid grid-cols-4 gap-4    w-full">
                    <div id="desc">{elem.title}</div>
                    <div id="amount">{elem.amt}</div>
                    <div id="date">{elem.date?.slice(0, 15)}</div>
                    <div id="level">{elem.imp}</div>
                  </div>
                  <div>
                    <Icon
                      icon="ic:baseline-delete"
                      width={30}
                      className="hover"
                      onClick={() => {
                        remove(elem._id);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Monthly;
