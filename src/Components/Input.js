import React from "react";

const Input = (props) => {
  return (
    <input
      className={` 
      ${props.width === "full" && "w-full"}
      ${props.width === "half" && "w-1/2"}
      bg-slate-200 rounded-sm 
      px-16 py-3 outline-none`}
      placeholder={props.label}
      name={props.name}
    />
  );
};

export default Input;
