import { useState } from "react";
import ProjectsSection from "./ProjectsSection";
import StepperControl from "./StepperControl";
import "./EducationForm.css"

const ProjectsForm = (props) =>{
    const [projectSections, setProjectSections] = useState([]);
    const addProjectsSection = () => {
        setProjectSections([...projectSections, projectSections.length + 1]);
      };
    
    return (
    <div className="md:items-start flex flex-col sm:items-center ls:items-start ls:pr-[30px] sm:w-full ">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Add a bit Information about Projects.
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know strength of your Projects !
      </h1>
      <div id="container" className="sm:h-[490px] ls:h-[390px] overflow-y-auto ">
      <ProjectsSection />
        {projectSections.map((section, index) => (
          <ProjectsSection key={index} />
        ))}
      </div>
   
      <div className="w-[300px] mt-10">
      <button
        id="addButton"
        className="mb-4 hover:bg-secondary border-secondary border-2 sm:w-full hover:text-white text-secondary rounded-lg font-juneauBold w-[270px] h-[48px] text-[18px]"
        onClick={addProjectsSection}
      >
        Add Section
      </button>
        <StepperControl
          nextButton={props.handleClickNext}
          prevButton={props.handleClickPrev}
        />
      </div>
    </div>
    )
}
export default ProjectsForm;