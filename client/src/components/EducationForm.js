import { useState } from "react";
import EducationSection from "./EducationSection";
import StepperControl from "./StepperControl";
import './EducationForm.css'
import { useDispatch } from "react-redux";
import { updateEducationSections } from "../redux/Slice/user";

const EducationForm = (props) => {
    const dispatch = useDispatch();
    const [educationSections, setEducationSections] = useState([]);
    const addEducationSection = () => {
        setEducationSections([...educationSections, {}]);
      };
    const updateEducationSection = (index, updatedData) => {
      const updatedSections = [...educationSections];
      updatedSections[index] = updatedData;
      setEducationSections(updatedSections);
    };
    dispatch(updateEducationSections(educationSections));
    
  return (
    <div className="md:items-start flex flex-col sm:items-center ls:items-start ls:pr-[30px] sm:w-full ">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Add a bit about your Education.
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know about your Education Background !
      </h1>
      <div id="container" className="sm:h-[490px] ls:h-[300px] overflow-y-auto ">
      {/* <EducationSection key={0} setEdudata={(updatedData) => updateEducationSection(0, updatedData)}/> */}
        {educationSections.map((section, index) => (
          <EducationSection key={index+1} edudata={section} setEdudata={(updatedData) => updateEducationSection(index, updatedData)}/>
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
