import Field2 from "./Field2";
import TextField from "./TextField";

const ExperienceSection =()=> {
    return(
        <>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-14 w-full ">
            <Field2 width="full" fieldName="Title"/>
            <Field2 width="full" fieldName="Employment Type"/>
            <Field2 width="full" fieldName="Company Name"/>
            <Field2 width="full" fieldName="Location"/>
            <Field2 width="full" fieldName="Start Month"/>
            <Field2 width="full" fieldName="Start Year"/>
            <Field2 width="full" fieldName="End Month"/>
            <Field2 width="full" fieldName="End Year"/>
            <div className="sm:col-span-1 md:col-span-2 ls:col-span-2">
                <TextField description="About Your Experience"/>
            </div>
        </div>
        </>
    );
};

export default ExperienceSection;