import { useState } from "react";
import CustomRadioButton from "./CustomRadioButton";
import Field2 from "./Field2";
import StepperControl from "./StepperControl";

const SkillsForm = (props) => {
  const initialSkills = [
    "React JS",
    "SEO",
    "JavaScript",
    "Bootstrap",
    "Material UI",
    "Tailwind CSS",
    "Angular JS",
    "Team Work",
    "Ideations",
    "Public Speaking",
    "Java",
    "C++",
    "C",
    "Svelte",
    "Firebase",
    "Postgres",
    "SQL",
    "HTML",
    "JS ES5",
    "JS ES6",
    "Video Editing",
    "Premire Pro",
    "After Effects",
    "Figma",
    "Web design",
    "Photoshop",
  ];
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");
  const handleAddSkill = () => {
    console.log("New Skill Value:", newSkill); // Debug line
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill(""); // Clear the input value
    } else {
      console.log("Exception: Empty or whitespace skill"); // Debug line
    }
  };

  const debugOnChange = (e) => {
    console.log('Field2 Input Value:', e.target.value);
    setNewSkill(e.target.value);
  };
  return (
    <div className="flex  flex-col sm:items-center ls:items-start ls:pr-[30px] w-full">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Now, It's your right to add Skills.
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know about your skills.
      </h1>
      <div className="flex gap-2 flex-wrap justify-center mt-8 max-h-[350px] overflow-y-auto">
        {skills.map((skill) => (
          <CustomRadioButton key={skill} name={skill} />
        ))}
      </div>

      <div className="md:flex-row md:flex ls:flex ls:flex-row sm:flex  md:mt-[80px] w-full sm:flex-col ls:mt-[60px] items-center gap-4 sm:mt-[70px] ">
        <h1 className="font-juneauBold text-[22px]">Add anything else:</h1>
        <div className="w-[200px]">
          <Field2 fieldName="Add Skills" width="full" value={newSkill} onChange={debugOnChange} />
        </div>
          <button onClick={handleAddSkill} className="bg-secondary text-white rounded-lg font-juneauBold h-[35px] sm:w-[200px]  md:w-[150px] text-[15px] ">
              add
          </button>
      </div>


      <div className="w-[300px] mt-10">
        <StepperControl
          nextButton={props.handleClickNext}
          prevButton={props.handleClickPrev}
        />
      </div>
    </div>
  );
};

export default SkillsForm;