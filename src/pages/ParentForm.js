import { useState } from "react";
import NavbarDark from "../components/NavbarDark";
import { Helmet } from "react-helmet";
import { Line, Circle } from "rc-progress";
import Stepper from "../components/Stepper";
import Form from "../components/Form";
import Intro from "./Intro";
import Education from "./Education";
import Skills from "./Skills";

const ParentForm = () => {
  const formList = [
    "Introduction",
    "Education",
    "Skills",
    "Projects",
    "Publications/Achievements",
    "Experience",
    "Training/Courses",
  ];
  const [page, setPage] = useState(0);
  const formLength = formList.length;
  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
    console.log("pressed back");
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
    console.log("pressed forward");
  };

  return (  
    <>
      {page === 0 && <Intro handleNext={handleNext} handlePrev={handlePrev} pagenum={page+1} totalpages = {formLength} element={page}/>}
      {page === 1 && <Education handleNext={handleNext} handlePrev={handlePrev} pagenum={page+1} totalpages = {formLength} element={page}/>}
      {page === 2 && <Skills handleNext={handleNext} handlePrev={handlePrev} pagenum={page+1} totalpages = {formLength} element={page}/>}



    </>
  );
};

export default ParentForm;
