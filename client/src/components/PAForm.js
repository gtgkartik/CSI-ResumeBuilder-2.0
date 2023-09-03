import { useState } from "react";
import PASection from "./PASection";
import StepperControl from "./StepperControl";
import { useDispatch } from "react-redux";
import { updatepaSections } from "../redux/Slice/user";

const PAForm = (props) => {
    const dispatch = useDispatch();
    const [paSections, setPASections] = useState([]);
    const addPASection = () => {
        setPASections([...paSections, paSections.length + 1]);
      };
    const updatePaSection = (index, updatedData) => {
      const updatedSections = [...paSections];
      updatedSections[index] = updatedData;
      setPASections(updatedSections);
      };

    dispatch(updatepaSections(paSections));
    return(
        <>
        <div className="md:items-start flex flex-col sm:items-center ls:items-start ls:pr-[30px] sm:w-full ">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Add a bit Information about Publications/Achievements.
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know What Achievements You Got !
      </h1>
      <div id="container" className="sm:h-[490px] ls:h-[300px] overflow-y-auto ">
      {/* <PASection /> */}
        {paSections.map((section, index) => (
          <PASection key={index+1} padata={section} setPadata={(updatedData) => updatePaSection(index, updatedData)}/>
        ))}
      </div>
   
      <div className="w-[300px] mt-10">
      <button
        id="addButton"
        className="mb-4 hover:bg-secondary border-secondary border-2 sm:w-full hover:text-white text-secondary rounded-lg font-juneauBold w-[270px] h-[48px] text-[18px]"
        onClick={addPASection}
      >
        Add Section
      </button>
        <StepperControl
          nextButton={props.handleClickNext}
          prevButton={props.handleClickPrev}
        />
      </div>
    </div>
        </>
    );
};

export default PAForm;