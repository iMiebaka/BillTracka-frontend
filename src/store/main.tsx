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
  setRoutePath: (path: string) => {},
  clientInvoice: {
    progess: 0,
    shippingFee: 0,
    clientDetails: {
      name: "",
      mobileNumber: "",
      email: "",
      state: "",
      lga: "",
      address: "",
    },
    itemsDetails: [],
    paymentDetails: {
      paymentStatus: "",
      paymentMode: "",
      issueDate: "",
      dueDate: "",
      note: "",
    },
  },
  setClientInvoice: (clientInvoice: ITClientInvoice) => {},
  runToast: (ITRunToast) => {},
});

function MasterContextProvider({ children }: ContextNode) {
  const [routePath, setRoutePath] = useState<string>("/");
  const [clientInvoice, setClientInvoice] = useState<ITClientInvoice>({
    progess: 0,
    shippingFee: 0,
    clientDetails: {
      name: "",
      mobileNumber: "",
      email: "",
      state: "",
      lga: "",
      address: "",
    },
    itemsDetails: [],
    paymentDetails: {
      paymentStatus: "",
      paymentMode: "",
      issueDate: "",
      dueDate: "",
      note: "",
    },
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
