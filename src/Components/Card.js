import React from "react";

const Card = (props) => {
  return (
    <div className="flex-auto h-full rounded-3xl p-14 bg-white">
      {props.children}
    </div>
  );
};

export default Card;
