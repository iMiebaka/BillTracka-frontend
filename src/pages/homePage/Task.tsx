import { useState } from "react";
import ICONS from "../../assets/icons";
import { TranasactionType } from "../../components";
import IMAGES from "../../assets/images";

function Task() {
  const [toggleVisible, setToggleVisible] = useState(false);
  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <div className="mt-9 flex justify-between items-center">
          <h2 className="font-medium text-lg text-gray-700">Tasks</h2>
          <button>
            <img src={ICONS.add} alt="" />
          </button>
        </div>

        <section className="flex justify-between mt-2">
          <div className="flex text-masterGrey text-xs font-medium gap-3 bg-[#E6E8FE] flex-1 p-2 rounded-md">
            <button className="text-blue-600 bg-white p-2 rounded-md">All</button>
            <button>To-do</button>
            <button>Completed</button>
          </div>
          <button>
            <img className="mx-3" src={ICONS.search} alt="" />
          </button>
        </section>
        <section>
          <div className="flex flex-col h-[400px] justify-center items-center">
            <img width={60} height={83} src={IMAGES.clipboard} alt="" />
            <p className="text-center mx-6">
              No Task Available. Click on the plus (+) icon to create one
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Task;
