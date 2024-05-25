// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar style={{ height: "100vh", width: "350px" }} />
      <div style={{ marginLeft: "", width: "100%" }}>
        <Header style={{ marginLeft: "350px" }} />
        <main style={{ padding: "1rem", marginLeft: "350px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
