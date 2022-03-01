import React from "react";

const Card = (props) => {
  return (
    <div className=" p-6 bg-white md:flex-auto md:rounded-3xl ">
      {props.children}
    </div>
  );
};

export default Card;
