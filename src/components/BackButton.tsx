import { useNavigate } from "react-router-dom";
import ICONS from "../asset/icons";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="my-7">
      <img src={ICONS.leftArrow} alt="" />
    </button>
  );
}

export default BackButton;
