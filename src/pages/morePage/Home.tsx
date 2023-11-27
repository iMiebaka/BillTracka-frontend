import ICONS from "../../assets/icons";
import { BackButton, MoreRouter } from "../../components";
import IMAGES from "../../assets/images";
import frontendRoute from "../../services/routes/frontend";

function Home() {
  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <div className="flex items-center gap-2">
          <BackButton />
          <h2 className="flex gap-2 text-lg font-medium text-gray-700">More</h2>
        </div>
        <section className="flex justify-between items-center">
          <div className="flex gap-3">
            <div className="bg-slate-400 w-[40px] h-[40px] rounded-full font-semibold text-lg grid place-items-center ">
              B
            </div>
            <div className="">
              <p className="text-sm font-medium">Blessing Ventures</p>
              <p className="text-gray-600">083445485888</p>
            </div>
          </div>
          <button>
            <img src={ICONS.edit} alt="" />
          </button>
        </section>

        <section className="mt-4">
          <MoreRouter name="Reports" route={frontendRoute.report} />
          <MoreRouter name="Invoice Template" route={frontendRoute.reminder} />
          <MoreRouter name="Reminders" route={frontendRoute.reminder} />
          <MoreRouter name="Staff Management" route={frontendRoute.report} />
          <MoreRouter name="Settings" route={frontendRoute.report} />
        </section>
        <section className="mt-4 flex gap-1">
          <img src={ICONS.logout} alt="" />
          Log out
        </section>
      </div>
    </div>
  );
}

export default Home;
