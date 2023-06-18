import NavbarDark from "../components/NavbarDark";
import { Helmet } from "react-helmet";
import { Line, Circle } from "rc-progress";
import Stepper from "../components/Stepper";
import Form from "../components/Form";
const Intro = () => {
  return (
    <>
      <Helmet>
        <style>{`body { background-color: white; }`}</style>
      </Helmet>
      <NavbarDark bgcolor="dark" />
      <div className="flex sm:flex-col md:flex-row md:justify-between sm:justify-center md:items-center md:space-x-8 ls:px-10 mt-[34px]">
        <div className="relative md:w-[40%] md:order-first">
          <div className="flex  justify-center">
            <Circle
              className="w-[350px]"
              percent={80}
              strokeWidth={6}
              strokeColor="#BAFE66"
              trailColor="#ECFFD3"
              trailWidth={6}
            />
            <h1 className="absolute left-1/2 top-[170px] transform -translate-x-1/2 -translate-y-1/2 font-juneauBold text-[68px]">
              70%
            </h1>
          </div>
          <div className="md:w-full items-center mt-[100px] ls:w-[600px] justify-center ">
            <Stepper />
          </div>
        </div>

        <div className="md:w-[60%] sm:w-full flex justify-center">
          <div className="md:w-[800px] md:h-[600px] sm:w-[440px] sm:h-[500px] ls:w-full ls:h-[500px] bg-green rounded-3xl ls:pl-[49px] pt-[20px]">
            <Form/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
