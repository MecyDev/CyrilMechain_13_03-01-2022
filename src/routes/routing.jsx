import { Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/profile";
import PrivateRoute from "./privateRoute";

function Routing() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default Routing;
