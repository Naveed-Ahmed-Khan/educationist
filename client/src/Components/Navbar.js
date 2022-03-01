import React from "react";
import menu from "../Assets/Images/menu-outline.svg";
import avatar from "../Assets/Images/profile.png";

const Navbar = (props) => {
  return (
    <div className="md:hidden flex items-center justify-between px-6 h-16 bg-green-500 ">
      <img
        onClick={() => {
          props.setOpen(!props.open);
        }}
        src={menu}
        alt="menu"
        className="object-contain h-8 cursor-pointer"
      />
      <img
        src={avatar}
        alt="avatar"
        className="object-contain h-12 rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
