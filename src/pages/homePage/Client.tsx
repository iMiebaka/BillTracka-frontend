import { useContext, useEffect } from "react";
import ICONS from "../../asset/icons";
import { ClientCard } from "../../components";
import { MasterContextConsumer } from "../../store/main";
import { Link } from "react-router-dom";
import frontendRoute from "../../services/routes/frontend";

function Client() {
  const { setRoutePath } = useContext(MasterContextConsumer);
  useEffect(() => setRoutePath(location.pathname), []);

  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <div className="mt-9 flex justify-between items-center">
          <h2 className="font-medium text-lg text-gray-700">Client</h2>
          <Link to={frontendRoute.clientNew}>
            <img src={ICONS.add} alt="" />
          </Link>
        </div>

        <section className="relative mt-2 border rounded-md">
          <input type="text" className="pl-6 py-1 w-full rounded-md" placeholder="Search"/>
          <img
            className="top-1 left-1 absolute pointer-events-none w-5"
            src={ICONS.search}
            alt=""
          />
        </section>
        <section className="mt-7">
          {/* <div className="flex flex-col h-[400px] justify-center items-center">
            <img width={118} height={150} src={IMAGES.mentions} alt="" />
            <p className="text-center mx-6">
              No Client Available. Click on the plus (+) icon to create one
            </p>
          </div> */}
          <ClientCard />
        </section>
      </div>
    </div>
  );
}

export default Client;
