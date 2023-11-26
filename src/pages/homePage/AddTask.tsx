import { Link } from "react-router-dom";
import { BackButton } from "../../components";
import { useState } from "react";
import ICONS from "../../assets/icons";

function AddTask() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <div className="flex items-center gap-2">
          <BackButton />
          <h2 className="flex gap-2 text-lg font-medium text-gray-700">
            Add Task
          </h2>
        </div>
        <section className="mb-5">
          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Task Title
            </label>
            <input
              type="text"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="Enter Title"
            />
          </div>
          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Task Description
            </label>
            <input
              type="text"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="Enter Description"
            />
          </div>

          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Start Date
            </label>
            <input
              type="datetime-local"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="Email address"
            />
          </div>
          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              End Date
            </label>
            <input
              type="datetime-local"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="Email address"
            />
          </div>
        </section>
        <div className="flex gap-2 mt-2 font-medium">
          <button className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white">
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
