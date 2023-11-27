import ICONS from "../assets/icons";

function TaskCard() {
  return (
    <div className="border p-4 pt-2 rounded-2xl">
      <div className="flex justify-between">
        <span className="p-2 py-1 rounded-2xl bg-slate-200 text-xs font-medium">Task 1</span>
        <button>
          <img src={ICONS.dot} alt="" />
        </button>
      </div>
      <div className="pl-4 pt-2">
        <ul className="list-disc">
          {[
            "Send invoice to John",
            "Send invoice to John",
            "Send invoice to John",
          ].map((i, k) => (
            <li key={k} className="font-normal text-sm text-masterGrey">
              {i}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-end text-gray-500 text-xs">12/02/2023</p>
    </div>
  );
}

export default TaskCard;
