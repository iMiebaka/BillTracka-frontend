import { createContext, useState } from "react";
import { ToastContainer, cssTransition, toast } from "react-toastify";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import {
  ContextNode,
  ITClientInvoice,
  ITContextValue,
  ITRunToast,
} from "../interface/store";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const MasterContextConsumer = createContext<ITContextValue>({
  routePath: "/",
  isLoggedIn: false,
  setIsLoggedIn: (_pre: boolean) => {},
  setRoutePath: (_path: string) => {},
  clientInvoice: {
    progess: 0,
    shippingFee: 0,
    issueDate: "",
    dueDate: "",
    notes: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientAddress: "",
    clientState: "",
    clientCity: "",
    clientCountry: "",
    clientLga: "",
    status: "",
    items: [],
    discount: 0,
    amountPaid: 0,
    amountDue: 0,
    total: 0,
  },
  setClientInvoice: (_clientInvoice: ITClientInvoice) => {},
  runToast: (_ITRunToast) => {},
});

function MasterContextProvider({ children }: ContextNode) {
  const [routePath, setRoutePath] = useState<string>("/");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientInvoice, setClientInvoice] = useState<ITClientInvoice>({
    progess: 0,
    shippingFee: 0,
    issueDate: "",
    dueDate: "",
    notes: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientAddress: "",
    clientState: "",
    clientCity: "",
    clientCountry: "",
    clientLga: "",
    status: "",
    items: [],
    discount: 0,
    amountPaid: 0,
    amountDue: 0,
    total: 0,
  });

  const runToast = ({ status, message }: ITRunToast) => {
    if (status == "info")
      toast.info(message, {
        transition: bounce,
      });
    else if (status == "success")
      toast.success(message, {
        transition: bounce,
      });
    else if (status == "error")
      toast.error(message, {
        transition: bounce,
      });
    else if (status == "warning")
      toast.error(message, {
        transition: bounce,
      });
  };
  return (
    <MasterContextConsumer.Provider
      value={{
        routePath,
        setRoutePath,
        isLoggedIn,
        setIsLoggedIn,
        runToast,
        clientInvoice,
        setClientInvoice,
      }}
    >
      <ToastContainer transition={bounce} />
      {children}
    </MasterContextConsumer.Provider>
  );
}

export { MasterContextConsumer, MasterContextProvider };
