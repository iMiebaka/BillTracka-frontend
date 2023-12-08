import { useContext, useEffect } from "react";
import ICONS from "../../asset/icons";
import { MasterContextConsumer } from "../../store/main";
import frontendRoute from "../../services/routes/frontend";

function PaymentSuccessfull() {
  const {isLoggedIn } = useContext(MasterContextConsumer);

  useEffect(() => {
    {
      !isLoggedIn && (location.href = frontendRoute.login);
    }
  }, []);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex-1 mx-[3%]">
        <section className="flex flex-col items-center mt-2 rounded-md">
          <img className="w-[88px]" src={ICONS.success} alt="" />
          <h2 className="font-medium text-2xl text-primary mt-2">
            Payment Successfully
          </h2>
        </section>
        <section className="mt-7">
          <div className="flex flex-col mt-2 font-medium">
            <button className="text-center  p-2.5 rounded-lg flex-1 bg-primary text-white">
              Done
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PaymentSuccessfull;
