import { Link } from "react-router-dom";
import { BackButton } from "../../components";
import FLAGS from "../../assets/images/flags";
import ICONS from "../../assets/icons";
import { useState } from "react";

function PhoneNumberSignUp() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <BackButton />
        <div className="">
          <h2 className="text-2xl font-medium text-gray-700">
            Enter your Mobile number
          </h2>
          <p className="font-normal text-gray-600 mt-1">
            A verification code will be sent to you.
          </p>
        </div>
        <div className="flex m-3 h-10 justify-center text-gray-500 items-center px-2 gap-1 border w-full border-gray-400 rounded-md mt-10">
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
            className="h-full flex-1 p-2"
            placeholder="Mobile number"
            onChange={(event) => setPhoneNumber(event.target.value)}
            maxLength={11}
          />
        </div>
        <p className="mt-4 text-xs text-gray-600">
          By tapping Next you Agree to BillTracka{" "}
          <Link className="text-primary" to={""}>
            Terms and Privacy policy
          </Link>
        </p>
        <div className="flex gap-2 mt-10 font-medium">
          <Link
            className="border text-center p-2.5 text-primary rounded flex-1"
            to={""}
          >
            Use Email
          </Link>
          <button
            className={`text-center  p-2.5 rounded flex-1  ${
              phoneNumber.length >= 10
                ? "bg-primary text-white"
                : "bg-gray-300 text-gray-600"
            } `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberSignUp;
