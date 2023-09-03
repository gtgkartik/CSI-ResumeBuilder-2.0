import { useState } from "react";
import ExperienceSection from "./ExperienceSection";
import StepperControl from "./StepperControl";

const ExperienceForm = (props) => {
    const [expSections, setExpSections] = useState([]);
    const addExpSection = () => {
        setExpSections([...expSections, expSections.length + 1]);
        console.log(expSections);
      };
    return(
        <>
        <div className="md:items-start flex flex-col sm:items-center ls:items-start ls:pr-[30px] sm:w-full ">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Add a bit Information about Experiences.
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know What Experiences You have !
      </h1>
      <div id="container" className="sm:h-[490px] ls:h-[300px] overflow-y-auto ">
      <ExperienceSection />
        {expSections.map((section, index) => (
          <ExperienceSection key={index} />
        ))}
      </div>
   
      <div className="w-[300px] mt-10">
      <button
        id="addButton"
        className="mb-4 hover:bg-secondary border-secondary border-2 sm:w-full hover:text-white text-secondary rounded-lg font-juneauBold w-[270px] h-[48px] text-[18px]"
        onClick={addExpSection}
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

export default ExperienceForm;