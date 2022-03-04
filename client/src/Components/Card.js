import React from "react";
import Search from "./Searchbar";

const Card = (props) => {
  return (
    <div className="p-6 md:min-h-full bg-white md:flex md:flex-col md:flex-auto md:rounded-3xl md:p-10 ">
      {props.children}
    </div>
  );
};

export default Card;
