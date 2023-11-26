import { ITTranasactionType } from "../interface/components";

function TranasactionType({ style, amount, invoice, color }: ITTranasactionType) {

  return (
    <div
      className={`flex justify-between items-center mt-2 p-3 rounded bg-${color}-100`}
    >
      <div>
        <p>
          {style == "Paid" && "Paid "}
          {style == "Unpaid" && "Unpaid "}
          {style == "Overdue" && "Overdue "}
          Payments
        </p>
        <h3 className="font-semibold text-2xl">{amount.toFixed(2)}</h3>
      </div>
      <p className={`py-1 px-2 bg-${color}-600 text-white rounded-2xl`}>
        {invoice} Invoice
      </p>
    </div>
  );
}

export default TranasactionType;
