import { FormEvent, useContext, useState } from "react";
import { BackButton } from "../../components";
import { MasterContextConsumer } from "../../store/main";
import { addTask } from "../../services/home";

function AddTask() {
  const [payload, setPayload] = useState({
    taskTitle: "",
    taskDescription: "",
    startDate: "",
    endDate: "",
    completed: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { runToast } = useContext(MasterContextConsumer);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await addTask(payload);
      console.log(response);
      runToast({ status: "success", message: "Task created" });
    } catch (err: any) {
      runToast({ status: "error", message: err.response.data.message });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <div className="flex items-center gap-2">
          <BackButton />
          <h2 className="flex gap-2 text-lg font-medium text-gray-700">
            Add Task
          </h2>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <section className="mb-5">
            <div className=" mt-2">
              <label htmlFor="" className="text-sm font-medium">
                Task Title
              </label>
              <input
                type="text"
                className="p-3 border w-full border-gray-400 rounded-md"
                placeholder="Enter Title"
                onChange={(e) =>
                  setPayload((pre) => ({ ...pre, taskTitle: e.target.value }))
                }
              />
            </div>
            <div className=" mt-2">
              <label htmlFor="" className="text-sm font-medium">
                Task Description
              </label>
              <input
                type="text"
                className="p-3 border w-full border-gray-400 rounded-md"
                placeholder="Enter Description"
                onChange={(e) =>
                  setPayload((pre) => ({
                    ...pre,
                    taskDescription: e.target.value,
                  }))
                }
              />
            </div>

            <div className=" mt-2">
              <label htmlFor="" className="text-sm font-medium">
                Start Date
              </label>
              <input
                type="datetime-local"
                className="p-3 border w-full border-gray-400 rounded-md"
                placeholder="Email address"
                onChange={(e) =>
                  setPayload((pre) => ({
                    ...pre,
                    startDate: new Date(e.target.value).toISOString(),
                  }))
                }
              />
            </div>
            <div className=" mt-2">
              <label htmlFor="" className="text-sm font-medium">
                End Date
              </label>
              <input
                type="datetime-local"
                className="p-3 border w-full border-gray-400 rounded-md"
                placeholder="Email address"
                onChange={(e) =>
                  setPayload((pre) => ({
                    ...pre,
                    endDate: new Date(e.target.value).toISOString(),
                  }))
                }
              />
            </div>
          </section>
          <div className="flex gap-2 mt-2 font-medium">
            <button
              disabled={isLoading}
              className={`text-center  p-2.5 rounded flex-1 bg-primary disabled:bg-slate-400 text-white`}
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
