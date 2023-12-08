import ICONS from "../asset/icons";

function ClientCard() {
  return (
    <div className="border text-xs p-3 pt-2 rounded-2xl">
      <div className="flex justify-between">
        <span className="font-medium text-base">John Doe</span>
        <button>
          <img src={ICONS.dot} alt="" />
        </button>
      </div>
      <div className="flex gap-2 mt-2">
        <img src={ICONS.messageTwo} alt="" />
        <span className="text-primary">bigman@em.com</span>
      </div>
      <div className="flex gap-2 mt-2">
        <img src={ICONS.phone} alt="" />
        <span className="text-primary">235754554</span>
      </div>
      <p className="text-gray-500 mt-2">Company : XNCJD</p>
    </div>
  );
}

export default ClientCard;
