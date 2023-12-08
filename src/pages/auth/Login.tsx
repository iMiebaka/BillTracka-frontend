import { Link, useNavigate } from "react-router-dom";
import { BackButton } from "../../components";
import { FormEvent, useContext, useState } from "react";
import ICONS from "../../asset/icons";
import { MasterContextConsumer } from "../../store/main";
import frontendRoute from "../../services/routes/frontend";
import { login } from "../../services/auth";

function Login() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { runToast, setIsLoggedIn } = useContext(MasterContextConsumer);
  const navigate = useNavigate();

  const [togglePassword, setTogglePassword] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await login(payload);
      runToast({ status: "success", message: response.message });
      navigate(frontendRoute.landingPage);
      setIsLoggedIn(true)
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
          <h2 className="flex gap-2 text-2xl font-medium text-gray-700">
            Welcome back <img src={ICONS.handWave} alt="" />
          </h2>
          <p className="font-normal text-gray-600 mt-1">
            We are excited to see you again!
          </p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            className="p-3 border w-full border-gray-400 rounded-md mt-10"
            placeholder="Email address"
            onChange={(event) =>
              setPayload((pre) => ({ ...pre, email: event.target.value }))
            }
          />
          <div className="flex h-12 justify-center text-gray-500 items-center gap-1 border w-full border-gray-400 rounded-md mt-5">
            <input
              type={`${!togglePassword ? "password" : "text"}`}
              className="flex-1 h-full p-2 rounded-md focus-within:border-none"
              placeholder="Password"
              onChange={(event) =>
                setPayload((pre) => ({ ...pre, password: event.target.value }))
              }
            />
            <button onClick={() => setTogglePassword((pre) => !pre)}>
              <img className="px-5 flex" src={ICONS.eyeClosed} alt="" />
            </button>
          </div>
          <Link className="flex justify-end mt-4 text-xs text-primary" to={""}>
            Forgot Password
          </Link>
          <div className="flex gap-2 mt-10 font-medium">
            <button
              disabled={isLoading}
              className={`text-center  p-2.5 rounded flex-1 bg-primary disabled:bg-slate-400 text-white`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
