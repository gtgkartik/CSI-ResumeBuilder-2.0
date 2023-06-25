const displaySteps = (
  <>
    <div className="relative flex flex-col items-center font-juneauRegular text-secondary">
      <div className="rounded-full transition duration-500 ease-in-out border-2 border-gray-200 h-12 w-12 flex items-center justify-center py-3">
        1
      </div>
      <div className="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ">
        Description
      </div>
    </div>
    <div className="flex-auto border-t-2 transition duration-500 ease-in-out "></div>
  </>
);

const Stepper = () => {
  return (
    <>
      <div className="mx-4 p-4 justify-between items-center flex">
        {displaySteps}
      </div>
    </>
  );
};

export default Stepper;
