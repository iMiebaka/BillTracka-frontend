import { Link } from "react-router-dom";
import ICONS from "../assets/icons";

function HomeFooter() {
  const routes = [
    { icon: ICONS.home, iconFill: ICONS.homeFill, name: "Home", route: "" },
    { icon: ICONS.task, iconFill: ICONS.task, name: "Tasks", route: "" },
    {
      icon: ICONS.invoice,
      iconFill: ICONS.invoice,
      name: "Invoice",
      route: "",
    },
    { icon: ICONS.client, iconFill: ICONS.client, name: "Clients", route: "" },
    { icon: ICONS.more, iconFill: ICONS.more, name: "More", route: "" },
  ];
  return (
    <footer className="sticky bottom-0 left-0 right-0 bg-white">
      <section className="flex justify-between mx-5">
        {routes.map((i, k) => (
          <Link
            key={k}
            className="flex flex-col items-center font-medium"
            to={i.route}
          >
            <img src={i.icon} width={20} alt={i.name} />
            <p>{i.name}</p>
          </Link>
        ))}
      </section>
    </footer>
  );
}

export default HomeFooter;
