import { useState } from "react";
import Field2 from "./Field2";
import StepperControl from "./StepperControl";
import TextField from "./TextField";
import { useSelector, useDispatch } from "react-redux";
import { addintro } from "../redux/Slice/user";

const Form = (props) => {
  const ps = useSelector((state) => state.userState.title);
  const dispatch = useDispatch();
  const [fname, setFname ] = useState('');
  const [lname, setLname ] = useState('');
  const [email, setEmail ] = useState('');
  const [cn, setCn ] = useState('');
  const [lpl, setLpl ] = useState('');
  const [city, setCity ] = useState('');

  const introdata = {
    "fname": fname,
    "lname": lname,
    "email": email,
    "cn":cn,
    "lpl": lpl,
    "city": city,
  }
  dispatch(addintro(introdata));
  
  return (
    <div className="md:items-start flex flex-col sm:items-center ls:items-start ls:pr-[30px] sm:w-full">
      <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
        Add a bit about yourself. 
      </h1>
      <h1 className="text-secondary font-juneauRegular text-[18px]">
        Let your Recruiter know what's your name!
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-4">
        <Field2 width="full" fieldName = "First Name" onChange={(content) => setFname(content)}/>
        <Field2 width="full"  fieldName = "Last Name" onChange={(content) => setLname(content)}/>
        <Field2 width="full" fieldName = "Email" onChange={(content) => setEmail(content)}/>
        <Field2 width="full" fieldName = "Contact Number" onChange={(content) => setCn(content)}/>
        <Field2 width="full" fieldName = "Linkdin Profile Link" onChange={(content) => setLpl(content)}/>
        <Field2 width="full" fieldName = "City" onChange={(content) => setCity(content)}/>
        <div className="sm:col-span-1 md:col-span-2 ls:col-span-2">
          <TextField description="Small Description"/>
        </div>
        <div className="col-span-1">
        <StepperControl nextButton = {props.handleClickNext}/>
        </div>
      </div>
    </div>
  );
};

export default Form;
