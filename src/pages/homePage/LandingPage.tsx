import { Outlet } from "react-router-dom";
import { HomeFooter } from "../../components";


function LandingPage() {
  return (
    <div className="relative">
      <Outlet />

      <HomeFooter />
    </div>
  );
}

export default LandingPage;
