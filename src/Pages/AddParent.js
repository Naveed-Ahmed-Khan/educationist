import React from "react";
import Card from "../Components/Card";
import Input from "../Components/Input";

const AddParent = () => {
  return (
    <Card>
      <h1 className="text-2xl ">Add Parent</h1>

      <form className="flex flex-col flex-wrap gap-8 mt-20 mx-12 ">
        <Input label="Student Name" width="full" />
        <div className="flex gap-6">
          <Input label="Father Name" width="half" />
          <Input label="Email" width="half" />
        </div>
        <Input label="Watsapp No." width="full" />
        <Input label="Country" width="full" />
        <Input label="City" width="full" />
        <Input label="Password" width="full" />
      </form>
    </Card>
  );
};

export default AddParent;
