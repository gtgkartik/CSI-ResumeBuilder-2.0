import { useState } from "react";
import EducationSection from "./EducationSection";
import Field2 from "./Field2";
import StepperControl from "./StepperControl";
import TextField from "./TextField";
import './EducationForm.css'

const EducationForm = (props) => {
    const [educationSections, setEducationSections] = useState([]);
    const addEducationSection = () => {
        setEducationSections([...educationSections, educationSections.length + 1]);
      };
    
  return (
    <div className="md:items-start flex flex-col sm:items-center ls:items-start ls:pr-[30px] sm:w-full">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Add a bit about your Education.
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know about your Education Background !
      </h1>
      <div id="container" className="sm:h-[490px] ls:h-[300px] overflow-y-auto ">
      <EducationSection />
        {educationSections.map((section, index) => (
          <EducationSection key={index} />
        ))}
      </div>
   
      <div className="w-[300px] mt-10">
      <button
        id="addButton"
        className="mb-4 hover:bg-secondary border-secondary border-2 sm:w-full hover:text-white text-secondary rounded-lg font-juneauBold w-[270px] h-[48px] text-[18px]"
        onClick={addEducationSection}
      >
        Add Section
      </button>
        <StepperControl
          nextButton={props.handleClickNext}
          prevButton={props.handleClickPrev}
        />
      </div>
    </div>
  );
};

export default EducationForm;
