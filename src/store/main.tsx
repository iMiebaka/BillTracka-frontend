import { ReactNode, createContext } from "react";
import { ToastContainer, cssTransition, toast } from "react-toastify";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ITRunToast } from "../interface/store";

interface ITContextValue {
  runToast: (status: string, message: string) => void;
}

interface ContextNode {
  children: ReactNode;
}



const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const ContextConsumer = createContext<ITContextValue>({
  runToast: (status: string, message: string) => {},
});

function ContextProvider ({ children }: ContextNode) {
  const runToast = (status: string, message: string) => {
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
    <ContextConsumer.Provider
      value={{
        runToast,
      }}
    >
    <ToastContainer transition={bounce} />
    {children}
    </ContextConsumer.Provider>
  );
};

export { ContextConsumer, ContextProvider };
