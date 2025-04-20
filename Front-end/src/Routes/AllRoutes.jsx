import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
}
