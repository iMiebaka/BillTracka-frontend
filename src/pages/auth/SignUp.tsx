import { Link, useNavigate } from "react-router-dom";
import { BackButton } from "../../components";
import { FormEvent, useContext, useState } from "react";
import { signup } from "../../services/auth";
import frontendRoute from "../../services/routes/frontend";
import { MasterContextConsumer } from "../../store/main";

function SignUp() {
  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { runToast } = useContext(MasterContextConsumer);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await signup(payload);
      runToast({ status: "success", message: response.message });
      localStorage.setItem("user_id", response.user.id)
      navigate(frontendRoute.verify);
    } catch (err: any) {
      runToast({ status: "error", message: err.response.data.message });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <BackButton />
        <div className="">
          <h2 className="text-2xl font-medium text-gray-700">
            Enter your Email Address
          </h2>
          <p className="font-normal text-gray-600 mt-1">
            A verification code will be sent to you.
          </p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-3 border w-full border-gray-400 rounded-md mt-3"
            placeholder="First name"
            onChange={(event) =>
              setPayload((pre) => ({ ...pre, firstName: event.target.value }))
            }
          />
          <input
            type="text"
            className="p-3 border w-full border-gray-400 rounded-md mt-3"
            placeholder="Last name"
            onChange={(event) =>
              setPayload((pre) => ({ ...pre, lastName: event.target.value }))
            }
          />
          <input
            type="email"
            className="p-3 border w-full border-gray-400 rounded-md mt-3"
            placeholder="Email address"
            onChange={(event) =>
              setPayload((pre) => ({ ...pre, email: event.target.value }))
            }
          />
          <input
            type="password"
            className="p-3 border w-full border-gray-400 rounded-md mt-3"
            placeholder="Enter password"
            onChange={(event) =>
              setPayload((pre) => ({ ...pre, password: event.target.value }))
            }
          />
          <p className="mt-4 text-xs text-gray-600">
            By tapping Next you Agree to BillTracka{" "}
            <Link className="text-primary" to={""}>
              Terms and Privacy policy
            </Link>
          </p>
          <div className="flex gap-2 mt-10 font-medium">
            <button
              disabled={isLoading}
              className={`text-center  p-2.5 rounded flex-1 bg-primary disabled:bg-slate-400 text-white`}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
