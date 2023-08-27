import Field2 from "./Field2";
import TextField from "./TextField";

const PASection =()=> {
    return(
        <>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-14 w-full ">
            <Field2 width="full" fieldName="Organization"/>
            <Field2 width="full" fieldName="Location"/>
            <Field2 width="full" fieldName="Publication Link"/>
            <Field2 width="full" fieldName="Time Period"/>
            <div className="sm:col-span-1 md:col-span-2 ls:col-span-2">
                <TextField description="Breif Description"/>
            </div>
        </div>
        </>
    );
};

export default PASection;