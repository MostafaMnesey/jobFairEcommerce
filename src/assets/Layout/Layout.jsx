import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../Components/NavBar/NavBar";

export default function Layout() {
  return (
    <div>
        <NavBar/>
      <Outlet />
    </div>
  );
}
