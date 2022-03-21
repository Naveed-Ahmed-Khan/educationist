import React from "react";

const JobsDetailsItems = (props) => {
  return (
    <>
      <div className="grid grid-cols-5 auto-rows-auto place-items-center gap-x-6 gap-y-8 text-center">
        <div className="col-span-1 text-primary">{props.studentName}</div>
        <div className="col-span-1 text-primary">{props.tutor}</div>
        <div className="col-span-1 text-primary">{props.institutes}</div>
        <div className="col-span-1 text-primary">
          <div className="mb-2">Rs. {props.pendingFee}</div>
          <div className="text-black">{"Send Reminder"}</div>
        </div>
        <div className="col-span-1 text-primary">{props.actions}</div>
      </div>
    </>
  );
};

export default JobsDetailsItems;
