import React from "react";
import { Route, Routes } from "react-router-dom";
import Room from "../Components/Room/Room";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/room" element={<Room/>}></Route>
      </Routes>
    </>
  )
};
