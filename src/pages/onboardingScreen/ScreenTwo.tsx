import IMAGES from "../../asset/images"

function ScreenTwo() {
  return (
    <div className="h-screen grid place-content-center">
    <div>
      <div>
        <img src={IMAGES.onboardingSilderTwo} alt="" />
        <div className="mx-[2%] text-4xl font-medium mt-8">
        <span className="text-primary">Set-up</span> <br /> Profiles for <br /> your <span className="text-primary">Payments</span>{" "}

        </div>
      </div>
      <div className="mx-[2%] mt-5">
        <button className="text-center text-base font-semibold rounded-md bg-primary text-white w-full h-[48px] ">
          Create an account
        </button>
        <button className="text-center text-base font-semibold w-full h-[48px] text-gray-600 ">
        I already have an account
        </button>
      </div>
    </div>
  </div>
  )
}

export default ScreenTwo