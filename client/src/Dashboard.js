import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="bg-primary z-0 md:min-h-screen md:flex md:p-4">
        <Sidebar open={open} setOpen={setOpen} />
        <Navbar open={open} setOpen={setOpen} />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
