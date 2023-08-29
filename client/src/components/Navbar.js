import logo from "../static/images/logo.png";
import ProfileCard from "./ProfileCard";

const Navbar = (props) => {
  return (
    <>
      <div
        className={`w-full  bg-white  md:flex sm:flex ls:flex justify-between md:px-[107px] ls:px-[60px] sm:px-[30px]  h-[96px] items-center border border-black-1500`}
      >
        {/* Primary Navbar  */}
        <div className="flex items-center font-bold space-x-2">
          <img src={logo} width="70px" height="50px" />
          <div className="flex flex-col text-dark">
            <h1 className="text-[23px]  font-juneauBold">Resume</h1>
            <h1 className="text-[23px]  font-juneauBold mt-[-0.7rem]">
              Builder
            </h1>
          </div>
        </div>
        {/* Middle part  */}
        <div className="flex">
          <div className="md:flex sm:hidden">
            <ul className="flex font-inter items-center mr-[86px] space-x-5 md:flex ls:hidden">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">About Us</li>
            </ul>
          </div>

          <ProfileCard color="dark" textcolor = "white" />
        </div>
        {/* Secondary Navbar  */}
      </div>
    </>
  );
};

export default Navbar;
