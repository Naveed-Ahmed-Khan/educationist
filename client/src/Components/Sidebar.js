import React from "react";

import profile from "../Assets/Images/profile.png";
import close from "../Assets/Images/close-outline.svg";

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

const Sidebar = (props) => {
  return (
    <>
      <div className="flex flex-col gap-6 p-4 z-10 max-w-xs md:flex-col md:gap-12 md:text-3xl md:h-full md:w-72 md:p-12">
        <div className="flex flex-col gap-2">
          <img
            onClick={() => {
              props.setOpen(!props.open);
            }}
            src={close}
            alt="close"
            className="md:hidden object-contain h-8 cursor-pointer ml-auto "
          />
          <div className="flex items-center justify-start gap-4">
            <img src={profile} alt="pic" className="rounded-lg" />
            <h2 className="text-3xl text-white">Asif Public School</h2>
          </div>
          <p className="text-base text-slate-200">owner@gmail.com</p>
        </div>

        <ul className="flex flex-col gap-8">
          {sidebarList.map((item) => {
            return (
              <div className="max-w-xs">
                <li className="text-2xl text-white mb-2 cursor-pointer ">
                  {item}
                </li>
                <hr className="md:hidden " />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
