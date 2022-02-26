import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex items-center py-6 px-4 h-screen bg-green-500">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
