import "./Field.css";

const Field = (props) => {
  return (
    <div className="Field flex items-center justify-center h-full"> {/* Add Tailwind classes */}
      <div className="App flex justify-center items-center">
        <label className="relative">
          <input
            type="text"
            placeholder="Input"
            className="h-full w-full px-6 text-[20px] text-secondary border-secondary border-2 rounded-[6px] border-opacity-50 outline-none focus:border-secondary placeholder-green placeholder-opacity-0 transition duration-200 bg-transparent bg-opacity-0"
          />
          <span className="text-lg text-secondary text-opacity-80 bg-green absolute left-5 top-[9px] px-1 transition duration-200 input-text">
            {props.name}
          </span>
        </label>
      </div>
    </div>
  );
};


export default Field;
