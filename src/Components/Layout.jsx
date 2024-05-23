// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

 
const Layout = () => {
  return (
    <div style={{ display: "flex" } }>
      <Sidebar
        style={{ height: "100vh", position: "fixed", width: "250px" }}
      />
      <div style={{ marginLeft: "", width: "100%" }}>
        <Header />
        <main style={{ padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
