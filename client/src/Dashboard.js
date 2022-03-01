import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="bg-green-500 md:p-4">
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
