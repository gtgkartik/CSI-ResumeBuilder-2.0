import Field2 from "./Field2";
import TextField from "./TextField";

const ProjectsSection = () => {
    return(
    <>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-14 w-full ">
        <Field2 width="full" fieldName="Name of the project"/>
        {/* <Field2 width="full" fieldName="Project Link"/> */}
        <Field2 width="full" fieldName="Project GitHub Link"/>
        <Field2 width="full" fieldName="Major Technologies Used"/>
        <div className="sm:col-span-1 md:col-span-2 ls:col-span-2">
            <TextField description="Project Description"/>
        </div>
    </div>
    </>
    );
}

export default ProjectsSection;