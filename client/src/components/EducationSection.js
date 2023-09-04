import { useState,useEffect } from "react";
import Field2 from "./Field2";

const EducationSection = ({edudata, setEdudata}) => {
  const [degree, setDegree] = useState('');
  const [fos, setFos] = useState('');
  const [sn, setSn] = useState('');
  const [loc, setLoc] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [sy, setSy] = useState('');
  const [ey, setEy] = useState('');

  useEffect(()=> {
    const edudata = {
      "degree":degree,
      "fos":fos,
      "sn":sn,
      "loc":loc,
      "cgpa":cgpa,
      "sy":sy,
      "ey":ey,
    };
    setEdudata(edudata);
  }, [degree, fos, sn, loc, cgpa, sy, ey, setEdudata]);
  
  
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-14 w-full ">
        <Field2 width="full" fieldName="Degree" onChange={(content) => setDegree(content)}/>
        <Field2 width="full" fieldName="Field of Study" onChange={(content) => setFos(content)}/>
        <Field2 width="full" fieldName="School Name" onChange={(content) => setSn(content)}/>
        <Field2 width="full" fieldName="Location" onChange={(content) => setLoc(content)}/>
      </div>
      <div className="flex flex-row space-x-3 mt-10">
        <Field2 width="full" fieldName="CGPA" onChange={(content) => setCgpa(content)}/>
        <Field2 className="ml-2" width="full" fieldName="Start Year" onChange={(content) => setSy(content)}/>
        <Field2 width="full" fieldName="End Year" onChange={(content) => setEy(content)}/>
      </div>
    </>
  );
};

export default EducationSection;
