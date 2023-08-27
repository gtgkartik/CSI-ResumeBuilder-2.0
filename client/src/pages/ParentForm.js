import { useState } from "react";
import { useLocation } from 'react-router-dom';
// import NavbarDark from "../components/NavbarDark";
// import { Helmet } from "react-helmet";
// import { Line, Circle } from "rc-progress";
// import Stepper from "../components/Stepper";
// import Form from "../components/Form";
import Intro from "./Intro";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import PA from "./PA"
import TC from "./TC"

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


  const handleSubmit = () => {
    window.location.href = '/pdf';
    console.log("pressed Submit");
  };
  
  const location = useLocation();
  const searchData = new URLSearchParams(location.search);
  const data = searchData.get('data');

  return (  
    <>
      {page === 0 && <Intro handleNext={handleNext} pagenum={page} totalpages = {formLength}/>}
      {page === 1 && <Education handleNext={handleNext} handlePrev={handlePrev} pagenum={page} totalpages = {formLength}/>}
      {page === 2 && <Skills handleNext={handleNext} handlePrev={handlePrev} pagenum={page} totalpages = {formLength} />}
      {page === 3 && <Projects handleNext={handleNext} handlePrev={handlePrev} pagenum={page} totalpages = {formLength}/>}
      {page === 4 && <PA handleNext={handleNext} handlePrev={handlePrev} pagenum={page} totalpages = {formLength}/>}
      {page === 5 && <Experience handleNext={handleNext} handlePrev={handlePrev} pagenum={page} totalpages = {formLength}/>}
      {page === 6 && <TC handlePrev={handlePrev} handleSubmit={handleSubmit} pagenum={page} totalpages = {formLength} template={data}/>}
    </>
  );
};

export default ParentForm;
