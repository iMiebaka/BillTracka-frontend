import ICONS from "../../assets/icons";
import { AddInvoiceProgress, BackButton } from "../../components";
import { useState } from "react";

function AddInvoice() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    progress: 2,
  });

  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <div className="flex items-center gap-2">
          <BackButton />
          <h2 className="flex gap-2 text-lg font-medium text-gray-700">
            New Invoice
          </h2>
        </div>
        <section className="flex justify-between">
          {[
            "Client Details",
            "Item Details",
            "Payment Details",
            "Preview Invoice",
          ].map((i, k) => (
            <div className="flex flex-col items-center text-sm font-medium">
              <div
                className={`w-[32px] h-[32px] border ${
                  k == payload.progress ? "border-primary" : ""
                } rounded-full flex justify-center items-center`}
              >
                {k < payload.progress ? (
                  <img className="w-full" src={ICONS.check} alt="" />
                ) : (
                  k + 1
                )}
              </div>
              <p
                className={`text-center ${
                  k == payload.progress ? "text-primary" : ""
                }`}
              >
                {i}
              </p>
            </div>
          ))}
        </section>
        {payload.progress == 0 && <AddInvoiceProgress.ClientDetails />}
        {payload.progress == 1 && <AddInvoiceProgress.ClientItems />}
        {payload.progress == 2 && <AddInvoiceProgress.PaymentDetails />}
      </div>
    </div>
  );
}

export default AddInvoice;
