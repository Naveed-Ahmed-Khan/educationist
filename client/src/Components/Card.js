import React from "react";

const Card = (props) => {
  return (
    <div className="flex-auto md:rounded-3xl p-4 bg-white">
      {props.children}
    </div>
  );
};

export default Card;
