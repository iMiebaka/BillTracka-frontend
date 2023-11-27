import { useContext } from "react";
import { MasterContextConsumer } from "../../store/main";

function PaymentDetails() {
  const { clientInvoice, setClientInvoice } = useContext(MasterContextConsumer);

  return (
    <>
      <section className="mb-5 border rounded-md p-3 mt-7">
        <h3 className="text-center font-medium">Payment Details</h3>
        <div className=" mt-2">
          <label htmlFor="" className="text-sm font-medium">
            Name
          </label>
          <select
            name=""
            id=""
            className="block w-full py-2.5 rounded-md bg-white border"
          >
            <option value="">Select payment Status</option>
          </select>
        </div>
        <div className=" mt-2">
          <label htmlFor="" className="text-sm font-medium">
            Payment Mode
          </label>
          <select
            name=""
            id=""
            className="block w-full py-2.5 rounded-md bg-white border"
          >
            <option value="">Select payment method</option>
          </select>
        </div>
        <div className=" mt-2">
          <label htmlFor="" className="text-sm font-medium">
            Issue Date
          </label>
          <input
            type="date"
            className="p-3 border w-full border-gray-400 rounded-md"
          />
        </div>
        <div className=" mt-2">
          <label htmlFor="" className="text-sm font-medium">
            Due Date
          </label>
          <input
            type="date"
            className="p-3 border w-full border-gray-400 rounded-md"
          />
        </div>

        <div className=" mt-2">
          <label htmlFor="" className="text-sm font-medium">
            Reminder
          </label>
          <select
            name=""
            id=""
            className="block w-full py-2.5 rounded-md bg-white border"
          >
            <option value="">Select reminder</option>
          </select>
        </div>
        <div className=" mt-2">
          <label htmlFor="" className="text-sm font-medium">
            Notes (Optional)
          </label>
          <input
            type="text"
            className="p-3 border w-full border-gray-400 rounded-md"
            placeholder="Enter Mobile Number (Optional)"
          />
        </div>
      </section>
      <div className="flex gap-2 mt-2 font-medium">
        <button
        onClick={() => setClientInvoice({...clientInvoice, progess: 3})}
        className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white">
          Next
        </button>
      </div>
    </>
  );
}

export default PaymentDetails;
