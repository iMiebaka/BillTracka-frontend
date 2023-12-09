import { useContext, useState } from "react";
import { MasterContextConsumer } from "../../store/main";

function ClientDetails() {
  const { clientInvoice, setClientInvoice } = useContext(MasterContextConsumer);

  const [payload, setPayload] = useState({
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    clientState: "",
    clientLga: "",
  });
  const parseData = () => {
    setClientInvoice({ ...clientInvoice, ...payload, progess: 1 });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        parseData();
      }}
    >
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
            required
            onChange={(e) =>
              setPayload((pre) => ({ ...pre, clientName: e.target.value }))
            }
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
            onChange={(e) =>
              setPayload((pre) => ({ ...pre, clientPhone: e.target.value }))
            }
          />
        </div>
        <div className=" mt-2">
          <label htmlFor="" className="text-sm font-medium">
            Email
          </label>
          <input
            type="text"
            className="p-3 border w-full border-gray-400 rounded-md"
            placeholder="Enter Email"
            required
            onChange={(e) =>
              setPayload((pre) => ({ ...pre, clientEmail: e.target.value }))
            }
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
              required
              onChange={(e) =>
                setPayload((pre) => ({ ...pre, clientState: e.target.value }))
              }
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
              required
              onChange={(e) =>
                setPayload((pre) => ({ ...pre, clientLga: e.target.value }))
              }
            />
          </div>
        </div>
      </section>
      <div className="flex gap-2 mt-2 font-medium">
        <button
          // onClick={parseData}
          className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default ClientDetails;
