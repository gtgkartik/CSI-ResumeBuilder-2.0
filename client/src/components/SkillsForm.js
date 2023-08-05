import { useState } from "react";
import CustomRadioButton from "./CustomRadioButton";
import Field2 from "./Field2";
import StepperControl from "./StepperControl";
import TextField from "./TextField";

const SkillsForm = (props) => {
  const skills = [
    "React JS",
    "SEO",
    "CSS",
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
    
  ];

  return (
    <div className="md:items-start flex flex-col sm:items-center ls:items-start ls:pr-[30px] w-full">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Now, It's your right to add Skills.
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know about your skills.
      </h1>
      <div className="flex gap-2 flex-wrap justify-center mt-8">
        {skills.map((skill) => (
          <CustomRadioButton key={skill} name={skill} />
        ))}
      </div>

      <div className="flex w-full md:mt-[100px]  items-center gap-3">
        <h1 className="font-juneauBold text-[22px]">Add anything else:</h1>
        <div className="ls:w-[200px] sm:w-[150px]  items-center">
          <Field2 fieldName="Add Skills" width="full" />
        </div>
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
