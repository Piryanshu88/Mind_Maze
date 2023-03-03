import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../Admin/Admin";
import { Home } from "../Components/Home/Home";
import Leaderboard from "../Components/Leaderboard/Leaderboard";
import Room from "../Components/Room/Room";
import Login from "./login/Login";
import Register from "./register/Register";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/room" element={<Room/>} />
      <Route path="/leaderboard" element={<Leaderboard/>}/>
    </Routes>
  );
};
