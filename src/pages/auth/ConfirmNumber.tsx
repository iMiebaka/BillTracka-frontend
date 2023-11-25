import { Link } from "react-router-dom";
import { BackButton } from "../../components";
import { useState } from "react";

function ConfirmNumber() {
  const [otp, setOtp] = useState("");
  // const [error, setError] = useState("");
  return (
    <div className="h-screen">
      <div className="mx-[2%]">
        <BackButton />
        <div className="">
          <h2 className="text-2xl font-medium text-gray-700">
            Confirm your Mobile number
          </h2>
          <p className="font-normal text-gray-600 mt-1">
            Please enter the 4 digit code we sent to your number that ends in
            5123
          </p>
        </div>
        <div className="flex justify-between mt-8">
          <input
            type="tel"
            className="p-3 border w-14 text-center border-gray-400 rounded-md"
            maxLength={1}
            value={otp[0]}
            onChange={(e) => setOtp((pre) => pre + e.target.value)}
          />
          <input
            type="tel"
            className="p-3 border w-14 text-center border-gray-400 rounded-md"
            maxLength={1}
            value={otp[1]}
            onChange={(e) => setOtp((pre) => pre + e.target.value)}
          />
          <input
            type="tel"
            className="p-3 border w-14 text-center border-gray-400 rounded-md"
            maxLength={1}
            value={otp[2]}
            onChange={(e) => setOtp((pre) => pre + e.target.value)}
          />
          <input
            type="tel"
            className="p-3 border w-14 text-center border-gray-400 rounded-md"
            maxLength={1}
            value={otp[3]}
            onChange={(e) => setOtp((pre) => pre + e.target.value)}
          />
        </div>
        {! (
          <p className="mt-4 text-xs text-red-600">
            Ooops! invalid number. Try Again
          </p>
        )}
        <p className="mt-4 text-xs text-gray-600">
          By tapping Next you Agree to BillTracka{" "}
          <Link className="text-primary" to={""}>
            Terms and Privacy policy
          </Link>
        </p>
        <div className="flex gap-2 mt-10 font-medium">
          <button
            className={`text-center  p-2.5 rounded flex-1  ${
              otp.length == 4
                ? "bg-primary text-white"
                : "bg-gray-300 text-gray-600"
            } `}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmNumber;
