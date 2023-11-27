import { useNavigate } from "react-router-dom";
import frontendRoute from "../../services/routes/frontend";

function PreviewInvoice() {
const navigate = useNavigate()

  return (
    <>
      <section className="mb-5 border rounded-md p-3 mt-7">
        <h3 className="text-center font-medium">Preview Payment</h3>
        <div className=" mt-0">
          <label htmlFor="" className="text-sm font-medium">
            Mr Bam
          </label>
          <p className="text-masterGrey">810912341</p>
        </div>

        <div className="mt-2">
          <label htmlFor="" className="text-sm font-medium">
            Invoice No:
          </label>
          <p className="text-masterGrey">42341</p>
        </div>

        <div className="flex justify-between">
          <div className="mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Issue Date
            </label>
            <p className="text-masterGrey">21 Nov, 2023</p>
          </div>
          <div className="mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Due Date
            </label>
            <p className="text-masterGrey">21 Nov, 2023</p>
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-1 py-3">
                  ITEMS
                </th>
                <th scope="col" className="px-1 py-3">
                  QTY
                </th>
                <th scope="col" className="px-1 py-3">
                  Price
                </th>
                <th scope="col" className="px-1 py-3 text-end">
                  AMOUNT (N)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple 
                </th>
                <td className="px-1 py-4">2</td>
                <td className="px-1 py-4">$2999</td>
                <td className="px-1 py-4 text-end">$2999</td>
              </tr>
            </tbody>
          </table>
          <div className="text-masterGrey  py-2 flex justify-between">
            <span className="">Subtotal</span>
            <span className="">10,000</span>
          </div>
          <div className="text-masterGrey pb-2 flex justify-between">
            <span className="">Shippinfg Fee</span>
            <span className="">10,000</span>
          </div>
          <div className="border-t py-2 flex justify-between font-semibold">
            <span className="">Total</span>
            <span className="">10,000</span>
          </div>
        </div>
      </section>
      <div className="flex gap-2 mt-2 font-medium">
        <button
          onClick={() => navigate(frontendRoute.invoiceCreated)}
          className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white"
        >
          Add Invoice
        </button>
      </div>
    </>
  );
}

export default PreviewInvoice;
