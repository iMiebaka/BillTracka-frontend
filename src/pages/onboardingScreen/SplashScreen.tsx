import IMAGES from "../../assets/images"

function SplashScreen() {
  return (
    <div className="bg-primary h-screen flex justify-center">
        <img src={IMAGES.splashScreen} className="w-[271px]" alt="" />
    </div>
  )
}

export default SplashScreen