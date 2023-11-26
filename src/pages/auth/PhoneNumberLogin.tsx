import { Link } from "react-router-dom";
import { BackButton } from "../../components";
import { useState } from "react";
import ICONS from "../../assets/icons";
import FLAGS from "../../assets/images/flags";

function PhoneNumberLogin() {
  const [payload, setPayload] = useState({
    phoneNumber: "",
    password: "",
  });

  const [togglePassword, setTogglePassword] = useState(false);

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
        <div className="flex h-12 justify-center text-gray-500 items-center pl-2 gap-1 border w-full border-gray-400 rounded-md mt-10">
          <button className="flex gap-1">
            <div className="flex gap-1">
              <img src={FLAGS.nigeria} alt="" />
              +234
              <img src={ICONS.caretDown} alt="" />
            </div>
          </button>
          |
          <input
            type="tel"
            className="h-full flex-1 p-2 rounded-md"
            placeholder="Mobile number"
            onChange={(event) =>
              setPayload((pre) => ({ ...pre, phoneNumber: event.target.value }))
            }
            maxLength={11}
          />
        </div>
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
          <Link
            className={`text-center  p-2.5 rounded flex-1  ${
              payload.phoneNumber && payload.password
                ? "bg-gray-100 text-primary"
                : "bg-white text-gray-700"
            } `}
            to={""}
          >
            Use Email
          </Link>
          <button
            className={`text-center  p-2.5 rounded flex-1  ${
              payload.phoneNumber && payload.password
                ? "bg-primary text-white"
                : "bg-gray-300 text-gray-600"
            } `}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberLogin;
