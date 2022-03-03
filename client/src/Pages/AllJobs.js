import React from "react";
import Card from "../Components/Card";
import Search from "../Components/Searchbar";

const AllJobs = () => {
  const date = new Date();
  const currentDate = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
  return (
    <Card>
      <header className="flex flex-col gap-2 justify-start">
        <h1 className="text-4xl">All Jobs</h1>
        <p className="text-gray-400">{currentDate}</p>
        <div className="hidden md:block md:my-14 md:mx-auto md:max-w-1/2">
          <Search />
        </div>
        {/* Table */}
        {/* Header */}
        <div className="flex flex-col px-0 md:px-10">
          <div className="flex justify-between">
            <p className="text-md">All Jobs</p>
            <svg
              className="fill-gray-400 object-contain h-10 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
            </svg>
          </div>
          {/* Body */}
          <div className="flex justify-between px-0 md:px-24">
            <div className="flex ">Required Job for Tutor</div>
            <div className="flex ">
              <div className="flex justify-around gap-2 md:gap-6">
                <p>View</p>
                <p>Edit</p>
                <p>Delete</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Card>
  );
};

export default AllJobs;
