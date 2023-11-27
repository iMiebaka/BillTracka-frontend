import ICONS from "../../assets/icons";
import { AddInvoiceProgress, BackButton } from "../../components";
import { useContext } from "react";
import { MasterContextConsumer } from "../../store/main";

function AddInvoice() {
const {clientInvoice, setClientInvoice} = useContext(MasterContextConsumer)

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
            <div
            onClick={() => setClientInvoice({...clientInvoice, progess: k})}
            className="flex flex-col items-center text-sm font-medium">
              <div
                className={`w-[32px] h-[32px] border ${
                  k == clientInvoice.progess ? "border-primary" : ""
                } rounded-full flex justify-center items-center`}
              >
                {k < clientInvoice.progess ? (
                  <img className="w-full" src={ICONS.check} alt="" />
                ) : (
                  k + 1
                )}
              </div>
              <p
                className={`text-center ${
                  k == clientInvoice.progess ? "text-primary" : ""
                }`}
              >
                {i}
              </p>
            </div>
          ))}
        </section>
        {clientInvoice.progess == 0 && <AddInvoiceProgress.ClientDetails />}
        {clientInvoice.progess == 1 && <AddInvoiceProgress.ClientItems />}
        {clientInvoice.progess == 2 && <AddInvoiceProgress.PaymentDetails />}
        {clientInvoice.progess == 3 && <AddInvoiceProgress.PreviewInvoice />}
      </div>
    </div>
  );
}

export default AddInvoice;
