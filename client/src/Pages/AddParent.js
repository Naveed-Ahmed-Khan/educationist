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
        className="flex flex-col flex-wrap gap-6 pt-6"
      >
        <Input label="Student Name" width="full" />
        <div className="flex flex-col gap-6 ">
          <Input label="Father Name" width="full" />
          <Input label="Email" width="full" />
        </div>
        <div className="hidden md:flex md:gap-6">
          <Input label="Father Name" width="half" />
          <Input label="Email" width="half" />
        </div>
        <Input label="Watsapp No." width="full" />
        <Input label="Country" width="full" />
        <Input label="City" width="full" />
        <Input label="Password" width="full" />
        <button type="submit">Submit </button>
      </form>
    </Card>
  );
};

export default AddParent;
