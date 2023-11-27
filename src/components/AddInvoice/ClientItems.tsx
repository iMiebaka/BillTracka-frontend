import React from "react";
import { AddInvoiceProgress } from "..";

function ClientItems() {
  return (
    <>
      <section className="mb-5 border rounded-md p-3 mt-7">
        <h3 className="text-center font-medium">Items Details</h3>
        <button className="text-primary font-medium">Add Item</button>
      </section>
      <div className="flex gap-2 mt-2 font-medium">
        <button className="text-center  p-2.5 rounded-lg flex-1 bg-blue-200 text-white">
          Next
        </button>
      </div>
      <AddInvoiceProgress.AddItemsModal modalOpen={true} setModalOpen={() => {}} />
    </>
  );
}

export default ClientItems;
