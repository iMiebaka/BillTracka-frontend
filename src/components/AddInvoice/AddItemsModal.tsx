import { useState } from "react";
import ICONS from "../../asset/icons";

interface ITProps {
  modalOpen: boolean;
  setModalOpen: (e: boolean) => void;
}

function AddItemsModal({ modalOpen, setModalOpen }: ITProps) {
  const [newExistingItem, setNewExistingItem] = useState(true);

  const handleContentClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <section
      className="relative"
      onKeyDown={(e) => modalOpen && e.code == "Escape" && setModalOpen(false)}
      onClick={() => (modalOpen ? setModalOpen(false) : null)}
    >
      {modalOpen && (
        <div className="fixed bottom-0 left-0 flex h-full min-h-screen w-full items-end bg-black bg-opacity-60 z-30">
          <div
            onClick={handleContentClick}
            className="relative rounded-md w-full bg-white text-center"
          >
            <div className="p-4">
              <div className="flex justify-between">
                <span className="text-base font-medium">Add Item</span>
                <button onClick={() => setModalOpen(false)}>
                  <img src={ICONS.close} alt="" />
                </button>
              </div>
              <div className="flex text-masterGrey bg-[#E6E8FE] text-xs font-medium gap-3 justify-between p-2 px-4 rounded-md mt-5">
                <button
                  onClick={() => setNewExistingItem(true)}
                  className={`p-2 rounded-md ${
                    newExistingItem ? "text-blue-600 bg-white" : ""
                  }`}
                >
                  New Product/Service
                </button>
                <button
                  className={`p-2 rounded-md ${
                    !newExistingItem ? "text-blue-600 bg-white" : ""
                  }`}
                  onClick={() => setNewExistingItem(false)}
                >
                  Select Product/Service
                </button>
              </div>
              {newExistingItem ? (
                <section>
                  <div className="mb-5 border rounded-md text-start p-3 mt-7">
                    <div className=" mt-0">
                      <label htmlFor="" className="text-sm font-medium">
                        Item Name
                      </label>
                      <input
                        type="text"
                        className="p-3 border w-full border-gray-400 rounded-md"
                        placeholder="Item Name"
                      />
                    </div>
                    <div className=" mt-2">
                      <label htmlFor="" className="text-sm font-medium">
                        Unit price (N)
                      </label>
                      <input
                        type="number"
                        className="p-3 border w-full border-gray-400 rounded-md"
                        placeholder="Enter Unit price"
                      />
                    </div>
                    <div className=" mt-2">
                      <label htmlFor="" className="text-sm font-medium">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        className="p-3 border w-full border-gray-400 rounded-md"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 mt-2">
                        <label htmlFor="" className="text-sm font-medium">
                          Quantity
                        </label>
                        <input
                          type="number"
                          value={1}
                          className="p-3 border w-full border-gray-400 rounded-md"
                          placeholder="Enter Quantity"
                        />
                      </div>
                      <div className="flex-1 mt-2">
                        <label htmlFor="" className="text-sm font-medium">
                          Discount
                        </label>
                        <input
                          type="text"
                          className="p-3 border w-full border-gray-400 rounded-md"
                          placeholder="Enter price"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2 font-medium">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white"
                    >
                      Add Item
                    </button>
                  </div>
                </section>
              ) : (
                <section>
                  <div className="relative my-6 border rounded-md">
                    <input
                      type="text"
                      className="pl-6 py-1 w-full rounded-md"
                      placeholder="Search"
                    />
                    <img
                      className="top-2 left-1 absolute pointer-events-none w-4"
                      src={ICONS.search}
                      alt=""
                    />
                  </div>
                  {[..."   "].map((i, k) => (
                    <div key={k} className="border-b flex justify-between py-2 cursor-pointer">
                      <div className="flex gap-1 text-masterGrey">
                        <input type="checkbox" readOnly checked />
                        <img src={ICONS.cart} alt="" />
                        Bag
                      </div>
                      <span className="text-black font-medium text-sm">
                        N726,28686
                      </span>
                    </div>
                  ))}
                  {/* <div className="mb-5 border rounded-md text-start p-3 mt-7"></div> */}
                  <div className="flex mt-2 font-medium">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white"
                    >
                      Add Item
                    </button>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AddItemsModal;
