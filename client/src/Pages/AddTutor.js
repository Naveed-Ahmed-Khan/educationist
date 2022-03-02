import React from "react";
import Card from "../Components/Card";
import Input from "../Components/Input";

const AddTutor = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <h1 className="text-2xl ">Add Tutor</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap gap-4 pt-6 md:px-14 md:gap-6"
      >
        <Input label="Tutor Name" width="full" />
        <Input label="Email" width="full" />
        <Input label="Watsapp No." width="full" />
        <Input label="City" width="full" />
        <div>
          <select
            name="institute"
            id="institute"
            defaultValue={"Select Institute"}
          >
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
        </div>
        <Input label="Password" width="full" />
        <div>
          <button
            type="submit"
            className="flex bg-green-500 text-white rounded-lg mx-auto  px-8 py-3 md:px-10 md:py-3 md:ml-auto md:mx-0"
          >
            Add Tutor
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddTutor;
