import { useContext, useState } from "react";
import { AddInvoiceProgress } from "..";
import { MasterContextConsumer } from "../../store/main";

function ClientItems() {
  const [modalOpen, setModalOpen] = useState(false);
  const { clientInvoice, setClientInvoice } = useContext(MasterContextConsumer);

  return (
    <>
      <section className="mb-5 border rounded-md p-3 mt-7">
        <h3 className="text-center font-medium">Items Details</h3>
        <button onClick={() => setModalOpen(true)} className="text-primary font-medium">Add Item</button>
      </section>
      <div className="flex gap-2 mt-2 font-medium">
        <button 
        onClick={() => setClientInvoice({...clientInvoice, progess: 2})}
        className="text-center  p-2.5 rounded-lg flex-1 bg-blue-200 text-white">
          Next
        </button>
      </div>
      <AddInvoiceProgress.AddItemsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

export default ClientItems;
