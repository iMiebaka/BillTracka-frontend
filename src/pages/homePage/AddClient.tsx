import { BackButton } from "../../components";

function AddClient() {
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
              Email (Optional)
            </label>
            <input
              type="email"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="blessing@fin.com"
            />
          </div>
          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="08065971136"
            />
          </div>
          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="Address"
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
                placeholder="Select State"
              />
            </div>
            <div className="flex-1 mt-2">
              <label htmlFor="" className="text-sm font-medium">
                LGA
              </label>
              <input
                type="text"
                className="p-3 border w-full border-gray-400 rounded-md"
                placeholder="Select LGA"
              />
            </div>
          </div>
          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Company (Optional)
            </label>
            <input
              type="text"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="Enter Company's Name"
            />
          </div>
        </section>
        <div className="flex gap-2 mt-2 font-medium">
          <button className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white">
            Save Cient
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddClient;
