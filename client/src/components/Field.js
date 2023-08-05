
const Field = (props) => {
  return (
    <div className="Field flex items-center justify-center w-full h-full">
      <div className="App flex">
        <label className="relative">
          <input
            type="text"
            placeholder="."
            className="px-3 py-2 w-full text-lg text-secondary rounded-[7px] placeholder-green placeholder-opacity-0 transition duration-200 bg-transparent bg-opacity-0 focus:outline-none border-2  focus:border-secondary"
          />
          <span className="text-[15px] text-secondary text-opacity-80 bg-green absolute left-5 top-[9px] px-1 transition duration-200 input-text">
            {props.name}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Field;
