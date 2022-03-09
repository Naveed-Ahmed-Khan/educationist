import React from "react";

const JobsDetailsItems = (props) => {
  return (
    <>
      <div className="grid grid-cols-5 place-items-center gap-x-6 text-center">
        <div className="col-span-1 text-primary">{props.studentName}</div>
        <div className="col-span-1 text-primary">{props.tutor}</div>
        <div className="col-span-1 text-primary">{props.pendingFee}</div>
        <div className="col-span-1 text-primary">{props.institutes}</div>
        <div className="col-span-1 text-primary">{props.actions}</div>
      </div>
    </>
  );
};

export default JobsDetailsItems;
