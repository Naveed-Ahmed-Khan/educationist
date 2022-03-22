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
          <button
            className="text-black text-sm py-[6px] px-[12px] rounded-md border border-black"
            onClick={() => {
              alert("Reminder Sent!");
            }}
          >
            Send Reminder
          </button>
        </div>
        <button className="col-span-1 bg-primary text-white text-sm py-[6px] px-[12px] rounded-md">
          Remove Tutor
        </button>
      </div>
    </>
  );
};

export default JobsDetailsItems;
