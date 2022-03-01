import React from "react";

import profile from "../Assets/Images/profile.png";

const sidebarList = [
  "Add Parents",
  "Add Tutor",
  "Add Job",
  "All Tutors",
  "All Jobs",
  "Jobes Applied",
  "Jobs Details",
  "Feedback",
];

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:flex-col md:gap-12 md:text-3xl md:h-full md:w-72 md:p-12 ">
        <div>
          <img src={profile} alt="pic" className="mb-4 rounded-lg" />
          <div className="flex flex-col ">
            <h2 className="text-3xl text-white mb-2 ">Asif Public School</h2>
            <p className="text-base text-slate-200">owner@gmail.com</p>
          </div>
        </div>
        <ul>
          {sidebarList.map((item) => {
            return (
              <li className="text-2xl text-white mb-3 cursor-pointer ">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
