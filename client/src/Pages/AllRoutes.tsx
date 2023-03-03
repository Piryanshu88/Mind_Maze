import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../Admin/Admin";
import { Home } from "../Components/Home/Home";
import Login from "./login/Login";
import Register from "./register/Register";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
