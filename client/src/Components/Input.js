import React from "react";

const Input = (props) => {
  return (
    <input
      className={` 
      ${props.width === "full" && "w-full"}
      ${props.width === "half" && "w-1/2"}
      bg-slate-200 rounded-sm px-6 py-4
      md:pl-14 md:py-4 outline-none`}
      placeholder={props.label}
      name={props.name}
    />
  );
};

export default Input;
