import { Link } from "react-router-dom";
import ICONS from "../../assets/icons";
import IMAGES from "../../assets/images";
import { TaskCard } from "../../components";
import frontendRoute from "../../services/routes/frontend";
import { useContext, useEffect } from "react";
import { MasterContextConsumer } from "../../store/main";

function Task() {
  const tasks = [];
  const { setRoutePath } = useContext(MasterContextConsumer);

  useEffect(() => setRoutePath(location.pathname), []);

  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <div className="mt-9 flex justify-between items-center">
          <h2 className="font-medium text-lg text-gray-700">Tasks</h2>
          <Link to={frontendRoute.taskNew}>
            <img src={ICONS.add} alt="" />
          </Link>
        </div>

        <section className="flex justify-between mt-2">
          <div className="flex text-masterGrey text-xs font-medium gap-3 bg-[#E6E8FE] flex-1 p-2 rounded-md">
            <button className="text-blue-600 bg-white p-2 rounded-md">
              All
            </button>
            <button>To-do</button>
            <button>Completed</button>
          </div>
          <button>
            {" "}
            <img className="m-3" src={ICONS.search} alt="" />
          </button>
        </section>
        <section className="mt-7">
          {/* {tasks.length == 0 && (
            <div className="flex flex-col h-[400px] justify-center items-center">
              <img width={60} height={83} src={IMAGES.clipboard} alt="" />
              <p className="text-center mx-6">
                No Task Available. Click on the plus (+) icon to create one
              </p>
            </div>
          )} */}
          <TaskCard />
        </section>
      </div>
    </div>
  );
}

export default Task;
