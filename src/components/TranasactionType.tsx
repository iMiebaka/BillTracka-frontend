import { ITTranasactionType } from "../interface/components";

function TranasactionType({
  style,
  amount,
  invoice,
  colorOne,
  colorTwo,
}: ITTranasactionType) {
  return (
    <div
      style={{ backgroundColor: colorOne }}
      className={`flex justify-between items-center mt-2 p-3 rounded`}
    >
      <div>
        <p>
          {style == "Paid" && "Paid "}
          {style == "Unpaid" && "Unpaid "}
          {style == "Overdue" && "Overdue "}
          Payments
        </p>
        <h3 className="font-semibold text-2xl">₦{amount}</h3>
      </div>
      <p
        style={{ backgroundColor: colorTwo }}
        className={`py-1 px-2  text-white rounded-2xl`}
      >
        {invoice} Invoice
      </p>
    </div>
  );
}

export default TranasactionType;
