const TextField = (props) => {
    return (
      <>
        <div className="w-full h-full">
          <label className="relative w-full h-full">
            <textarea
              required
              className={`md:w-[600px] ls:w-[470px] sm:w-[400px] h-[150px] px-4 py-2 text-lg  border-[2px] border-secondary rounded hover:border-gray-600 duration-100 peer focus:border-secondary bg-inherit`}
            ></textarea>
            <span className="font-juneauRegular absolute left-0 top-[-120px] px-1 text-lg tracking-wide peer-focus:text-secondary pointer-events-none duration-100 peer-focus:text-sm peer-focus:-translate-y-6 bg-green ml-2 peer-valid:text-sm peer-valid:-translate-y-5">
              {props.description}
            </span>
          </label>
        </div>
      </>
    );
  };
  
  export default TextField;
  