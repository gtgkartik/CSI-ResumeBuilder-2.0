import { useState } from "react";
import NavbarDark from "../components/NavbarDark";
import { Helmet } from "react-helmet";
import { Line, Circle } from "rc-progress";
import Stepper from "../components/Stepper";
import Form from "../components/Form";
import Intro from "./Intro";
import Education from "./Education";

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
  console.log(page);
  const handleForm = () => {
    switch (page) {
      case 0:
        return <div>asc</div>;
      case 1:
        return <div>this is Education System</div>;
    }
  };
  return (  
    <>
      {page === 0 && <Intro handleNext={handleNext} handlePrev={handlePrev} />}
      {page === 1 && <Education handleNext={handleNext} handlePrev={handlePrev}/>}
      

    </>
  );
};

export default ParentForm;
