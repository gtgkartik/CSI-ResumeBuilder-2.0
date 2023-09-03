import React, {useEffect, useState} from "react";
import Field2 from "./Field2";
import TextField from "./TextField";

const TCSection =({tcdata, setTcdata})=> {
    const [title, setTitle] = useState('');
    const [io, setIo] = useState('');
    const [cl, setCl] = useState('');
    const [loc, setLoc] = useState('');
    const [sm, setSm] = useState('');
    const [sy, setSy] = useState('');
    const [em, setEm] = useState('');
    const [ey, setEy] = useState('');

    useEffect(()=> {
        const tcdata = {
          "title":title,
          "io":io,
          "cl":cl,
          "loc":loc,
          "sm":sm,
          "sy":sy,
          "em":em,
          "ey":ey,
        };
        setTcdata(tcdata);
      }, [title, io, cl, loc, sm, sy, em, ey, setTcdata]);
    return(
        <>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-14 w-full ">
            <Field2 width="full" fieldName="Course/Training Title" onChange={(content) => setTitle(content)}/>
            <Field2 width="full" fieldName="Issuing Organization" onChange={(content) => setIo(content)}/>
            <Field2 width="full" fieldName="Location" onChange={(content) => setLoc(content)}/>
            <Field2 width="full" fieldName="Certification Link" onChange={(content) => setCl(content)}/>
            <Field2 width="full" fieldName="Start Month" onChange={(content) => setSm(content)}/>
            <Field2 width="full" fieldName="Start Year" onChange={(content) => setSy(content)}/>
            <Field2 width="full" fieldName="End Month" onChange={(content) => setEm(content)}/>
            <Field2 width="full" fieldName="End Year" onChange={(content) => setEy(content)}/>
            <div className="sm:col-span-1 md:col-span-2 ls:col-span-2">
                <TextField description="Breif Description"/>
            </div>
        </div>
        </>
    );
};

export default TCSection;