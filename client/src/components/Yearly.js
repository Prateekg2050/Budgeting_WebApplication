import React, { useEffect, useState } from "react";
import { Data } from "./Data.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { server_url } from "../config.js";
import { useSelector } from "react-redux";
function Yearly() {
  const auth = useSelector((state) => state.auth);

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
  }, []);
  return (
    <>
      {/* <div>
        <Bar
          data={{
            labels: [],
          }}
          width={600}
          height={400}
        />
      </div> */}
    </>
  );
}

export default Yearly;
