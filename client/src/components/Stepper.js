import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import ParentForm from "../pages/ParentForm";
// const displaySteps = (
//   <>
//     <div className="relative flex flex-col items-center font-juneauRegular text-secondary">
//       <div className="rounded-full transition duration-500 ease-in-out border-2 border-gray-200 h-12 w-12 flex items-center justify-center py-3">
//         1
//       </div>
//       <div className="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ">
//         Description
//       </div>
//     </div>
//     <div className="flex-auto border-t-2 transition duration-500 ease-in-out "></div>
//   </>
// );

const Stepper = (props) => {
  const steps = [
  "Introduction",
  "Education",
  "Skills",
  "Projects",
  "Publications/Achievements",
  "Experience",
  "Training/Courses",
];
  const currentStep = props.element1 + 1;
  // const [currentStep, setCurrentStep] = useState(element1);
  const [complete, setComplete] = useState(false);
  return (
    // <>
    //   <div className="mx-4 p-4 justify-between items-center flex">
    //     {displaySteps}
    //   </div>
      
    // </>
    <>
      <div className="flex justify-between">
        {steps?.slice(0, 4).map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        {steps?.slice(4).map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 5 && "active"} ${
              (i + 5 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 5 < currentStep || complete ? <TiTick size={24} /> : i + 5}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {/* {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )} */}
    </>
  );
};

export default Stepper;
