import Field from "./Field";

const Form = () => {
  return (
    <>
      <div className="md:items-start flex flex-col sm:items-center ls:items-start">
        <h1 className="font-juneauBold md:text-[40px] sm:text-[30px] ls:text-[35px]">
          Add a bit about yourself
        </h1>   
        <h1 className="text-secondary font-juneauRegular text-[18px]">
          Let your Recruiter know what's your name!
        </h1>
        <div className="mt-5">
          <div className="md:flex  flex-wrap "> {/* Update this line */}
            <Field name="Name" />
            <Field name="Last Name" />
          </div>
        </div>
      </div>
    </>
  );
};



export default Form;
