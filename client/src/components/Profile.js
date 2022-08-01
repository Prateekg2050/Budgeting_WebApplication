import { React, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server_url } from "../config";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [username, setUsername] = useState("");
  const [earning, setEarning] = useState(0);

  const updateProfile = (earning) => {
    axios
      .patch(
        `${server_url}/user/earning/`,
        { earning: earning },
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
  };

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  useEffect(() => {
    if (auth._id) {
      setname(auth.name || "");
      setemail(auth.email || "");
      setUsername(auth.username || "");
      setEarning(auth.earning || "0");
    }
  }, [auth]);

  return (
    <div className=" bg-blue-100 py-10 ">
      <div
        id="Profile"
        className="flex flex-col justify-center mx-auto p-10  rounded-3xl shadow-lg  space-y-4  w-1/3  bg-white"
      >
        <div className=" self-center">
          <img
            src={require("../assets/147142.png")}
            alt=""
            className="h-[200px]"
          />
        </div>
        <div className="flex flex-col align-middle space-y-2">
          <label htmlFor="inp1" className=" text-gray-400">
            Name
          </label>
          <div className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 text-black">
            {name}
          </div>
        </div>
        <div className="flex flex-col align-middle space-y-2">
          <label htmlFor="inp1" className=" text-gray-400">
            Email Id
          </label>
          <div className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 text-black">
            {email}
          </div>
        </div>
        <div className="flex flex-col align-middle space-y-2">
          <label htmlFor="inp1" className=" text-gray-400">
            username
          </label>
          <div className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 text-black">
            {username}
          </div>
        </div>
        <div className="flex flex-col align-middle space-y-2">
          <label htmlFor="inp1" className=" text-gray-400">
            Earning
          </label>
          <input
            value={earning}
            onChange={(e) => {
              setEarning(e.target.value);
            }}
            className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 text-black"
          />
        </div>

        <button
          onClick={() => {
            updateProfile(earning);
          }}
          className="bg-blue-400 p-4 w-1/2 mx-auto rounded-lg shadow-md text-white "
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
