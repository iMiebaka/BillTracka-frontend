import { Outlet } from "react-router-dom";
import { HomeFooter } from "../../components";
function HomePage() {
  return (
    <div className="relative">
      <Outlet />

      <HomeFooter />
    </div>
  );
}

export default HomePage;
