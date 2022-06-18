import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authAction";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<ProtectedRoutes />}></Route>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />}>
            <Route path="profile" element={<Profile />} />
          </Route> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
