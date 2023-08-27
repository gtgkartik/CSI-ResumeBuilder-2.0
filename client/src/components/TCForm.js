import { useState } from "react";
import TCSection from "./TCSection";
import StepperControl from "./StepperControl";

const TCForm = (props) => {
    const [tcSections, setTCSections] = useState([]);
    const addTCSection = () => {
        setTCSections([...tcSections, tcSections.length + 1]);
      };
    return(
        <>
        <div className="md:items-start flex flex-col sm:items-center ls:items-start ls:pr-[30px] sm:w-full ">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Add a bit Information about Training/Courses.
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know What Courses You Did for that Specific Job Role !
      </h1>
      <div id="container" className="sm:h-[490px] ls:h-[300px] overflow-y-auto ">
      <TCSection />
        {tcSections.map((section, index) => (
          <TCSection key={index} />
        ))}
      </div>
   
      <div className="w-[300px] mt-10">
      <button
        id="addButton"
        className="mb-4 hover:bg-secondary border-secondary border-2 sm:w-full hover:text-white text-secondary rounded-lg font-juneauBold w-[270px] h-[48px] text-[18px]"
        onClick={addTCSection}
      >
        Add Section
      </button>
        <StepperControl
          prevButton={props.handleClickPrev}
          submitButton={props.handleClickSubmit}
          template = {props.template}
        />
      </div>
    </div>
        </>
    );
};

export default TCForm;