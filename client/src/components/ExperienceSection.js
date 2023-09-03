import React, {useState, useEffect} from "react";
import Field2 from "./Field2";
import TextField from "./TextField";

const ExperienceSection =({expdata, setExpdata})=> {
    const [title, setTitle] = useState('');
    const [empt, setEmpt] = useState('');
    const [cn, setCn] = useState('');
    const [loc, setLoc] = useState('');
    const [sm, setSm] = useState('');
    const [sy, setSy] = useState('');
    const [em, setEm] = useState('');
    const [ey, setEy] = useState('');

    useEffect(()=> {
        const expdata = {
          "title":title,
          "empt":empt,
          "cn":cn,
          "loc":loc,
          "sm":sm,
          "sy":sy,
          "em":em,
          "ey":ey,
        };
        setExpdata(expdata);
      }, [title, empt, cn, loc, sm, sy, em, ey, setExpdata]);
    return(
        <>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-14 w-full ">
            <Field2 width="full" fieldName="Title" onChange={(content) => setTitle(content)}/>
            <Field2 width="full" fieldName="Employment Type" onChange={(content) => setEmpt(content)}/>
            <Field2 width="full" fieldName="Company Name" onChange={(content) => setCn(content)}/>
            <Field2 width="full" fieldName="Location" onChange={(content) => setLoc(content)}/>
            <Field2 width="full" fieldName="Start Month" onChange={(content) => setSm(content)}/>
            <Field2 width="full" fieldName="Start Year" onChange={(content) => setSy(content)}/>
            <Field2 width="full" fieldName="End Month" onChange={(content) => setEm(content)}/>
            <Field2 width="full" fieldName="End Year" onChange={(content) => setEy(content)}/>
            <div className="sm:col-span-1 md:col-span-2 ls:col-span-2">
                <TextField description="About Your Experience"/>
            </div>
        </div>
        </>
    );
};

export default ExperienceSection;