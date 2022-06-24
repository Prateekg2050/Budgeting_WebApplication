import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authAction";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Register from "./Register";
import Dashboard from "./Dashboard";
import AddEarnings from "./AddEarnings";
import AddExpense from "./AddExpense";
import Profile from "./Profile";
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
          <Route element={<ProtectedRoutes />}>
            <Route
              exact
              path="/dashboard/addEarning"
              element={<AddEarnings />}
            />
            <Route
              exact
              path="/dashboard/addexpense"
              element={<AddExpense />}
            />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
