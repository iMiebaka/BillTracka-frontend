import { useContext, useEffect, useState } from "react";
import ICONS from "../../asset/icons";
import { TranasactionType } from "../../components";
import IMAGES from "../../asset/images";
import { MasterContextConsumer } from "../../store/main";
import frontendRoute from "../../services/routes/frontend";
import { maskNumber } from "../../utils";

function Home() {
  const { setRoutePath, isLoggedIn } = useContext(MasterContextConsumer);
  const [moneyVisible, setMoneyVisible] = useState(false);

  useEffect(() => {
    setRoutePath(location.pathname);
    {
      !isLoggedIn && (location.href = frontendRoute.login);
    }
  }, []);

  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <div className="mt-9 flex justify-between items-center">
          <div>
            <h2 className="flex gap-2 font-normal text-gray-700">
              Welcome back
            </h2>
            <p className="font-medium text-gray-600">Blessing Ventures</p>
          </div>
          <div className="flex gap-2">
            <button>
              <img src={ICONS.message} alt="" />
            </button>
            <button>
              <img src={ICONS.bell} alt="" />
            </button>
          </div>
        </div>

        <section className="border flex justify-between p-2 rounded mt-5">
          <div>
            <p className="text-sm font-medium flex items-center text-gray-600">
              Total Sales
              <button onClick={() => setMoneyVisible((pre) => !pre)}>
                <img
                  className="px-5 flex"
                  src={moneyVisible ? ICONS.eyeOpen : ICONS.eyeClosed}
                  alt=""
                />
              </button>
            </p>
            <h3 className="font-semibold text-2xl mt-3">₦{!moneyVisible ? maskNumber(0.00) : 0.00.toFixed(2) }</h3>
          </div>
          <div className="flex flex-col">
            <select className="p-0.5 bg-slate-100" name="" id="">
              <option value="">This week</option>
            </select>
            <button className="mt-3 text-end underline  ">Analytics</button>
          </div>
        </section>

        <section className="mt-4">
          <TranasactionType
            amount={!moneyVisible ? maskNumber(0.00) : 0.00.toFixed(2) }
            invoice={0}
            style="Paid"
            colorOne="#D6FFE6"
            colorTwo="#00A340"
          />
          <TranasactionType
            amount={!moneyVisible ? maskNumber(0.00) : 0.00.toFixed(2) }
            invoice={0}
            style="Unpaid"
            colorOne="#E6E8FE"
            colorTwo="#0515F6"
          />
          <TranasactionType
            amount={!moneyVisible ? maskNumber(0.00) : 0.00.toFixed(2) }
            invoice={0}
            style="Overdue"
            colorOne="#FED7DC"
            colorTwo="#D1051C"
          />
        </section>
        <section className="mt-4">
          <p className="font-medium">Recent Transaction</p>

          <div className="flex justify-center items-center mt-10">
            <div className="flex flex-col items-center">
              <img className="w-[125px]" src={IMAGES.transactions} alt="" />
              <p className="mt-2 ">Not transactions Available</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
