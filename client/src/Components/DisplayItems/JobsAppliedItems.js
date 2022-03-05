import React from "react";

const JobsAppliedItems = (props) => {
  return (
    <>
      <div className="grid grid-cols-5 place-items-center gap-x-6">
        <div className="col-span-2 grid gap-x-4 grid-cols-2 grid-rows-3">
          <p className="col-span-2 text-primary">Required Tutor for Job</p>
          <p className="col-span-1 text-primary">{`Mode: ${props.mode}`}</p>
          <p className="col-span-1 text-primary">{`Subjects: ${props.subject}`}</p>
          <p className="col-span-1 text-primary">{`City: ${props.city}`}</p>
          <p className="col-span-1 text-primary">{`Country: ${props.country}`}</p>
        </div>
        <div className="col-span-1 text-primary">{props.applicants}</div>
        <div className="col-span-1 text-primary">{props.institutes}</div>
        <div className="col-span-1 text-primary">{props.actions}</div>
      </div>
    </>
  );
};

export default JobsAppliedItems;
