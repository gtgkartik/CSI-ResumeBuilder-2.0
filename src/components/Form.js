import Field2 from "./Field2";
import StepperControl from "./StepperControl";
import TextField from "./TextField";

const Form = (props) => {
  
  return (
    <div className="md:items-start flex flex-col sm:items-center ls:items-start ls:pr-[30px] sm:w-full">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Add a bit about yourself. 
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know what's your name!
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-4">
        <Field2 width="full" fieldName = "First Name"/>
        <Field2 width="full"  fieldName = "Last Name"/>
        <Field2 width="full" fieldName = "Email"/>
        <Field2 width="full" fieldName = "Contact Number"/>
        <Field2 width="full" fieldName = "Linkdin Profile Link"/>
        <Field2 width="full" fieldName = "City" />
        <div className="sm:col-span-1 md:col-span-2 ls:col-span-2">
          <TextField />
        </div>
        <div className="col-span-1">
        <StepperControl nextButton = {props.handleClickNext} prevButton = {props.handleClickPrev}/>
        </div>
      </div>
    </div>
  );
};

export default Form;
