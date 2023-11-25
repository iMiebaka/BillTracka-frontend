import { Link } from "react-router-dom";
import { BackButton } from "../../components";
import { useState } from "react";

function EmailSignUp() {
  const [email, setEmail] = useState("");

  const validateEmail = (value: string) => {
    return value.includes("@")
  }
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
        <input
          type="email"
          className="p-3 border w-full border-gray-400 rounded-md mt-10"
          placeholder="Email address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className="mt-4 text-xs text-gray-600">
          By tapping Next you Agree to BillTracka{" "}
          <Link className="text-primary" to={""}>
            Terms and Privacy policy
          </Link>
        </p>
        <div className="flex gap-2 mt-10 font-medium">
          <Link
            className="text-center border p-2.5 text-primary rounded flex-1"
            to={""}
          >
            Use Mobile Number
          </Link>
          <button
            className={`text-center  p-2.5 rounded flex-1  ${
              validateEmail(email)
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

export default EmailSignUp;
