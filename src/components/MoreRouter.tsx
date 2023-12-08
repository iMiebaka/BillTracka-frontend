import { Link } from "react-router-dom";
import ICONS from "../asset/icons";
import { ITMoreRouter } from "../interface/components";

function MoreRouter({ name, route }: ITMoreRouter) {
  return (
    <Link to={route}
      className={`flex justify-between items-center mt-2 p-3 rounded bg-gray-100`}
    >
      <h3 className="text-sm">{name}</h3>
      <img src={ICONS.forwardArrow} alt="" />
    </Link>
  );
}

export default MoreRouter;
