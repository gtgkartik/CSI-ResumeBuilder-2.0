import { useState,useEffect } from "react";
import Field2 from "./Field2";
import TextField from "./TextField";

const ProjectsSection = ({projdata, setProjdata}) => {
    const [np, setNp] = useState('');
    const [pgl, setPgl] = useState('');
    const [mtu, setMtu] = useState('');

    useEffect(()=> {
        const projdata = {
          "np":np,
          "pgl":pgl,
          "mtu":mtu,
        };
        setProjdata(projdata);
      }, [np,pgl,mtu,setProjdata]);

    return(
    <>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-14 w-full ">
        <Field2 width="full" fieldName="Name of the project" onChange={(content) => setNp(content)}/>
        {/* <Field2 width="full" fieldName="Project Link"/> */}
        <Field2 width="full" fieldName="Project GitHub Link" onChange={(content) => setPgl(content)}/>
        <Field2 width="full" fieldName="Major Technologies Used" onChange={(content) => setMtu(content)}/>
        <div className="sm:col-span-1 md:col-span-2 ls:col-span-2">
            <TextField description="Project Description"/>
        </div>
    </div>
    </>
    );
}

export default ProjectsSection;