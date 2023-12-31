import { Link } from "react-router-dom";
import ICONS from "../../asset/icons";
import { SpinnerOne, TaskCard } from "../../components";
import frontendRoute from "../../services/routes/frontend";
import { useContext, useEffect, useState } from "react";
import { MasterContextConsumer } from "../../store/main";
import { getTask } from "../../services/home";
import IMAGES from "../../asset/images";

function Task() {
  const { setRoutePath, isLoggedIn } = useContext(MasterContextConsumer);
  const [tasks, setTasks] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    {
      !isLoggedIn && (location.href = frontendRoute.login);
    }
    setRoutePath(location.pathname);
    setIsLoading(true);
    getTask().then((res) => {
      setTasks(res.data);
      setIsLoading(false);
    });
  }, []);

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
          {tasks.length == 0 && !isLoading && (
            <div className="flex flex-col h-[400px] justify-center items-center">
              <img width={60} height={83} src={IMAGES.clipboard} alt="" />
              <p className="text-center mx-6">
                No Task Available. Click on the plus (+) icon to create one
              </p>
            </div>
          )}
          {isLoading && (
            <div className="grid place-items-center h-screen -mt-[200px]">
              <SpinnerOne />
            </div>
          )}
          {tasks.map((i: any, k: number) => (
            <TaskCard
              key={k}
              index={k + 1}
              taskTitle={i.taskTitle}
              taskDescription={i.taskDescription}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Task;
