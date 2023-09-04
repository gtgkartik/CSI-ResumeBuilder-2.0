import { useState,useEffect } from "react";
import Field2 from "./Field2";
import TextField from "./TextField";

const PASection =({padata, setPadata})=> {
    const [org, setOrg] = useState('');
    const [loc, setLoc] = useState('');
    const [pl, setPl] = useState('');
    const [tp, setTp] = useState('');

    useEffect(()=> {
        const edudata = {
          "org":org,
          "loc":loc,
          "pl":pl,
          "tp":tp,
        };
        setPadata(edudata);
      }, [org, loc, pl,tp, setPadata]);

    return(
        <>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-14 w-full ">
            <Field2 width="full" fieldName="Organization" onChange={(content) => setOrg(content)}/>
            <Field2 width="full" fieldName="Location" onChange={(content) => setLoc(content)}/>
            <Field2 width="full" fieldName="Publication Link" onChange={(content) => setPl(content)}/>
            <Field2 width="full" fieldName="Time Period" onChange={(content) => setTp(content)}/>
            <div className="sm:col-span-1 md:col-span-2 ls:col-span-2">
                <TextField description="Breif Description"/>
            </div>
        </div>
        </>
    );
};

export default PASection;