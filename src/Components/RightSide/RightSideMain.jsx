import React from "react";
import Header from "./Header";
import { Outlet, Route, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import About from "../About/About";
import LeftSide from "../LeftSide/LeftSide";
LeftSide;
function RightSideMain() {
  return (
    <>
      <div className="flex-1 bg-black   flex flex-col">
        <Header />
        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RightSideMain;
