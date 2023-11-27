import { Link } from "react-router-dom";
import ICONS from "../assets/icons";
import frontendRoute from "../services/routes/frontend";
import { useContext } from "react";
import { MasterContextConsumer } from "../store/main";

function HomeFooter() {
  const { routePath } = useContext(MasterContextConsumer);

  const routes = [
    {
      icon: ICONS.home,
      iconFill: ICONS.homeFill,
      name: "Home",
      route: frontendRoute.landingPage,
    },
    {
      icon: ICONS.task,
      iconFill: ICONS.taskFull,
      name: "Tasks",
      route: frontendRoute.taskSummary,
    },
    {
      icon: ICONS.invoice,
      iconFill: ICONS.invoiceFill,
      name: "Invoice",
      route: frontendRoute.invoiceSummary,
    },
    {
      icon: ICONS.client,
      iconFill: ICONS.clientFill,
      name: "Clients",
      route: frontendRoute.clientSummary,
    },
    {
      icon: ICONS.more,
      iconFill: ICONS.moreFill,
      name: "More",
      route: frontendRoute.more,
    },
  ];
  return (
    <footer className="sticky bottom-0 left-0 right-0 bg-white">
      <section className="flex justify-between mx-5 py-2">
        {routes.map((i, k) => (
          <Link
            key={k}
            className="flex flex-col items-center font-medium text-xs"
            to={i.route}
          >
            <img
              src={routePath == i.route ? i.iconFill : i.icon}
              width={20}
              alt={i.name}
            />
            <p className={`${location.pathname == i.route ? "text-primary": ""}`}>{i.name}</p>
          </Link>
        ))}
      </section>
    </footer>
  );
}

export default HomeFooter;
