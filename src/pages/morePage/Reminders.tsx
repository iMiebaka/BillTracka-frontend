import { BackButton } from "../../components";

function Reminders() {
  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <div className="flex items-center gap-2">
          <BackButton />
          <h2 className="flex gap-2 text-lg font-medium text-gray-700">
            Reminders
          </h2>
        </div>
        <section className="mb-5">
          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Unpaid Invoices
            </label>
            <textarea
              name=""
              id=""
              cols={10}
              rows={3}
              className="p-1 border w-full border-gray-400 rounded-md"
              placeholder="Enter Product Name"
            ></textarea>
          </div>

          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Overdue Invoices
            </label>
            <textarea
              name=""
              id=""
              cols={10}
              rows={3}
              className="p-1 border w-full border-gray-400 rounded-md"
              placeholder="Enter Product Name"
            ></textarea>
          </div>
          <div className="flex flex-col mt-2">
            <select className="px-1 bg-white border py-2 rounded-md text-gray-600" name="" id="">
              <option value="">Set reminder</option>
            </select>
          </div>
          <div className="flex gap-2 mt-8 font-medium">
            <button className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white">
              Save 
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Reminders;
