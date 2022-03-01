import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="bg-green-500 z-0 md:flex md:p-4">
        {open ? (
          <>
            <Sidebar open={open} setOpen={setOpen} />
          </>
        ) : (
          <>
            <Navbar open={open} setOpen={setOpen} />
          </>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
