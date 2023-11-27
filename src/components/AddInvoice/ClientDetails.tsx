import React from "react";

function ClientDetails() {
  return (
    <>
      <section className="mb-5 border rounded-md p-3 mt-7">
        <h3 className="text-center font-medium">Client Details</h3>
        <div className=" mt-0">
          <label htmlFor="" className="text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            className="p-3 border w-full border-gray-400 rounded-md"
            placeholder="Enter Name"
          />
        </div>
        <div className=" mt-2">
          <label htmlFor="" className="text-sm font-medium">
            Mobile Number (Optional)
          </label>
          <input
            type="text"
            className="p-3 border w-full border-gray-400 rounded-md"
            placeholder="Enter Mobile Number (Optional)"
          />
        </div>
        <div className=" mt-2">
          <label htmlFor="" className="text-sm font-medium">
            Email (Optional)
          </label>
          <input
            type="text"
            className="p-3 border w-full border-gray-400 rounded-md"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex gap-2">
          <div className="flex-1 mt-2">
            <label htmlFor="" className="text-sm font-medium">
              State
            </label>
            <input
              type="text"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="Enter State"
            />
          </div>
          <div className="flex-1 mt-2">
            <label htmlFor="" className="text-sm font-medium">
              LGA
            </label>
            <input
              type="text"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="Enter LGA"
            />
          </div>
        </div>
      </section>
      <div className="flex gap-2 mt-2 font-medium">
        <button className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white">
          Next
        </button>
      </div>
    </>
  );
}

export default ClientDetails;
