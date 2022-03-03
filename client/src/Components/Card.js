import React from "react";
import Search from "./Searchbar";

const Card = (props) => {
  return (
    <div className="p-6 md:min-h-full bg-white md:flex-auto md:rounded-3xl md:p-10 ">
      <div className="hidden md:block">
        <Search />
      </div>
      {props.children}
    </div>
  );
};

export default Card;
