import Navbar from "../components/Navbar";
import TemplateGallery from "../components/TemplateGallery";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SelectTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const user = useSelector((state) => state.userState.user);

  const handleDataProcessed = (processedResult) => {
    setSelectedTemplate(processedResult);
  };

  // console.log( `${user}`);
  return (
    <>
    {!user && <Navigate to='/' />
        /* If user not loggedIn redirect to Login Page */
      }
    <Helmet>
    <style>{`body { background-color: #111727; }`}</style>
    </Helmet>
      <div >
        <Navbar bgcolor="white"  />
        <div
          className={`md:px-[105px] ls:px-[105px] sm:px-[60px] ls:mt-[30px] sm:mt-[24px] `}
        >
          <h1 className="font-juneauBold ls:text-[64px] sm:text-[30px] ">
            <span className="text-white">Choose Your </span>
            <span className="text-green md:mt-0">Resume Style</span>
          </h1>
          <h1 className="ls:text-[20px] sm:text-[19px] text-white">
            Your resume will reveal to the recruiters your way of thinking.
            That's why we are here with <br />
            the best designs. Choose one style from below.
          </h1>
          <div></div>
          <TemplateGallery onDataProcessed={handleDataProcessed}/>
          <div className="flex md:justify-end sm:justify-center w-full my-10">
          {selectedTemplate !== null ? (
            <Link to={`/form?data=${selectedTemplate}`}>
              <button className="bg-green rounded-lg font-juneauBold w-[287px] h-[58px] text-[18px]">
                GET STARTED
              </button>
            </Link>):(<p className="text-red-500">Please select an Template before proceeding.</p>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectTemplate;
