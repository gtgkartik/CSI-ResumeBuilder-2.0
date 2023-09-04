import { useState } from "react";
import CustomRadioButton from "./CustomRadioButton";
import Field2 from "./Field2";
import StepperControl from "./StepperControl";
import { useDispatch } from "react-redux";
import { updateSkills } from "../redux/Slice/user";

const SkillsForm = (props) => {
  const [eskill, setEskill] = useState([]);
  const [extra, setExtra] = useState('');
  const dispatch = useDispatch();
  
  const [skills, setSkills] = useState([
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
    "AWS",
    "Cloud Computing",
    "Python",
    "HTML-5",
    "JavaScript",
    "Node JS",
    "MERN stack",
    "Solidity",
    "Meachine Learning",
    "Artificial Intelligence",
    "Block Chain",
  ]);

  const updateskill = (skill) => {
    setEskill([...eskill, skill]);
  };

  const addExtraSkill = () => {
    setSkills([...skills,extra]);
    setEskill([...eskill,extra]);
  };
  dispatch(updateSkills(eskill));
  return (
    <div className="md:items-start flex flex-col sm:items-center ls:items-start ls:pr-[30px] w-full">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Now, It's your right to add Skills.
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know about your skills.
      </h1>
      <div className="flex gap-2 flex-wrap justify-center mt-8">
        {skills.map((skill, index) => (
        <CustomRadioButton key={`${skill}-${index}`} name={skill} selected={eskill.includes(skill)} onSkillSelect={updateskill}/>
        ))}
      </div>

      <div className="flex w-full md:mt-[100px]  items-center gap-3">
        <h1 className="font-juneauBold text-[22px]">Add anything else:</h1>
        <div className="ls:w-[200px] sm:w-[150px]  items-center">
          <Field2 fieldName="Add Skill" width="full" onChange={(content) => setExtra(content)}/>
        </div>
        <button onClick={addExtraSkill}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
            <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg>
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
