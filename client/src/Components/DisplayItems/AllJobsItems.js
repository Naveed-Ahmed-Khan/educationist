import React from "react";

const AllJobsItems = (props) => {
  return (
    <>
      <div className="flex items-center justify-between px-0 md:px-14">
        <div className="grid gap-x-4 grid-cols-2 grid-rows-3">
          <p className="col-span-2 text-primary">Required Tutor for Job</p>
          <p className="col-span-1 text-primary">{`Mode: ${props.mode}`}</p>
          <p className="col-span-1 text-primary">{`Subjects: ${props.subject}`}</p>
          <p className="col-span-1 text-primary">{`City: ${props.city}`}</p>
          <p className="col-span-1 text-primary">{`Country: ${props.country}`}</p>
        </div>
        <div className="flex ">
          <div className="flex justify-around gap-2 md:gap-10">
            <p className="text-primary cursor-pointer">View</p>
            <p className="text-primary cursor-pointer">Edit</p>
            <p className="text-red-500 cursor-pointer">Delete</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJobsItems;
