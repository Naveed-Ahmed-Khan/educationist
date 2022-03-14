import React from "react";

const AllTutorsItems = (props) => {
  return (
    <>
      <div className="grid grid-cols-12 place-items-center gap-x-4 text-center">
        <div className="col-span-6 flex gap-4 place-self-start text-left font-semibold text-primary">
          <div className="grid place-items-center">
            <img
              src={props.imgSrc}
              alt=""
              className="object-cover h-12  rounded-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>{props.tutor}</p>
            <div className="flex items-center gap-2">
              <p className=" text-[#404852] text-[12px]">{"5:12 pm"}</p>
              <p className=" text-[#404852] self-end">.</p>
              <p className="text-primary text-[12px] font-semibold opacity-70">
                {"Details"}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 font-semibold text-red-500">
          {"Blacklist"}
        </div>
        <div className="col-span-2 font-semibold text-primary">
          {"Add Details"}
        </div>
        <div className="col-span-1 font-semibold text-primary">{"Edit"}</div>
        <div className="col-span-1 font-semibold text-primary">{"Delete"}</div>
      </div>
    </>
  );
};

export default AllTutorsItems;
