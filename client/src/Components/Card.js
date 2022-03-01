import React from "react";

const Card = (props) => {
  return (
    <div className="md:flex-auto md:rounded-3xl p-6 bg-white">
      {props.children}
    </div>
  );
};

export default Card;
