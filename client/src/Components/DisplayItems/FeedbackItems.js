import React from "react";

const FeedbackItems = (props) => {
  return (
    <>
      <div className="grid grid-cols-5 place-items-center gap-x-6 gap-y-8 text-center">
        <div className="col-span-1 text-primary">{props.studentName}</div>
        <div className="col-span-1 text-primary">{props.tutor}</div>
        <div className="col-span-1 text-primary">{props.institutes}</div>
        <div className="col-span-1 text-primary">{"View"}</div>
        <div className="col-span-1 text-primary">{"View"}</div>
      </div>
    </>
  );
};

export default FeedbackItems;
