import Field2 from "./Field2";
const EducationSection = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-14 w-full ">
        <Field2 width="full" fieldName="Degree" />
        <Field2 width="full" fieldName="Field of Study" />
        <Field2 width="full" fieldName="School Name" />
        <Field2 width="full" fieldName="Location" />
      </div>
      <div className="flex flex-row space-x-3 mt-10">
        <Field2 width="full" fieldName="CGPA" />
        <Field2 className="ml-2" width="full" fieldName="Start Year" />
        <Field2 width="full" fieldName="End Year" />
      </div>
    </>
  );
};
<>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 ls:grid-cols-2 gap-[40px] mt-4 w-full">
    <Field2 width="full" fieldName="Degree" />
    <Field2 width="full" fieldName="Field of Study" />
    <Field2 width="full" fieldName="School Name" />
    <Field2 width="full" fieldName="Location" />
  </div>
  <div className="flex flex-row space-x-3 mt-10">
    <Field2 width="full" fieldName="CGPA" />
    <Field2 className="ml-2" width="full" fieldName="Start Year" />
    <Field2 width="full" fieldName="End Year" />
  </div>
</>;

export default EducationSection;
