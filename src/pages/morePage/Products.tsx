import { BackButton } from "../../components";

function Products() {
  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <div className="flex items-center gap-2">
          <BackButton />
          <h2 className="flex gap-2 text-lg font-medium text-gray-700">
            Products
          </h2>
        </div>
        <section className="mb-5">
          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Product Name
            </label>
            <input
              type="text"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="Enter Product Name"
            />
          </div>
          <div className=" mt-2">
            <label htmlFor="" className="text-sm font-medium">
              Unit Price (N)
            </label>
            <input
              type="text"
              className="p-3 border w-full border-gray-400 rounded-md"
              placeholder="Enter Price"
            />
          </div>
          <div className="flex gap-2 mt-8 font-medium">
            <button className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white">
              Save Product
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
