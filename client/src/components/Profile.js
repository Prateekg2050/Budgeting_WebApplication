import { React, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authAction";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  useEffect(() => {
    if (auth._id) {
      setname(auth.name || "");
      setemail(auth.email || "");
      setUsername(auth.username || "");
    }
  }, [auth]);

  return (
    <div className=" bg-blue-100 h-[100vh] p-10">
      <div
        id="Profile"
        className="flex flex-col justify-center mx-auto p-10 rounded-3xl shadow-lg  space-y-5 w-1/3 bg-white"
      >
        <div className=" self-center">
          <img
            src={require("../assets/147142.png")}
            alt=""
            className="h-[300px]"
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
      </div>
    </div>
  );
};

export default Profile;
