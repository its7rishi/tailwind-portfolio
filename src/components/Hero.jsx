import { TypeAnimation } from "react-type-animation";
const Hero = ({ theme }) => {
  const bgURL =
    theme === "dark"
      ? "/assets/images/hero-pic-dark.jpg"
      : "/assets/images/hero-pic-light.jpg";

  return (
    <div id="home" className="hero lg:h-[450px] bg-base-100 overflow-hidden">
      <div className="hero-content flex-row gap-8">
        <img
          src={bgURL}
          className="w-[50%] rounded-lg shadow-2xl hidden lg:inline-flex"
        />
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center gap-3">
          <h1 className="text-3xl lg:text-5xl font-bold">Saptarshi Majumdar</h1>
          <h2 className="py-2 text-xl lg:text-3xl text-primary font-semibold">
            <TypeAnimation
              sequence={[
                "I'm a Web Developer",
                2000,
                "I'm a Content Writer",
                2000,
                "I love creating Web Apps",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Hero;
