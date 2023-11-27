import ICONS from "../assets/icons";

function InvoiceCard() {
  return (
    <div className="border text-xs p-2 pt-2 rounded-2xl">
      <div className="flex justify-between">
        <span className="font-medium">John Doe</span>
        <button>
          <img src={ICONS.dot} alt="" />
        </button>
      </div>
      <p className="text-masterGrey">Invoice No: 6633356</p>
      <p className="font-semibold">Total Amount: N65,664</p>
      <div className="flex justify-between">
        <span className="">
          Status: <span className="text-green-500">Paid</span>
        </span>
        <span className="text-end text-gray-500">12/02/2023</span>
      </div>
    </div>
  );
}

export default InvoiceCard;
