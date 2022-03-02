import React from "react";
import Card from "../Components/Card";
import Input from "../Components/Input";

const AddParent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <h1 className="text-2xl">Add Parent</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap gap-4 pt-6 md:px-14 md:gap-6"
      >
        <Input label="Student Name" width="full" />
        {/* For small screen */}
        <div className="flex flex-col gap-6 md:hidden">
          <Input label="Father Name" width="full" />
          <Input label="Email" width="full" />
        </div>
        {/* For medium screen and above */}
        <div className="hidden md:flex md:gap-6">
          <Input label="Father Name" width="half" />
          <Input label="Email" width="half" />
        </div>
        <Input label="Watsapp No." width="full" />
        <Input label="Country" width="full" />
        <Input label="City" width="full" />
        <Input label="Password" width="full" />
        <div>
          <button
            type="submit"
            className="flex bg-green-500 text-white rounded-lg mx-auto  px-8 py-3 md:px-10 md:py-3 md:ml-auto md:mx-0"
          >
            Add Parent
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddParent;
