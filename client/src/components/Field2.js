import React, { useState } from "react";
const Field2 = (props) => {
   const [fieldValue, setFieldValue] = useState();

   const handleInputChange = (event) => {
      const newValue = event.target.value;
      setFieldValue(newValue);
      
      if (props.onChange) {
        props.onChange(newValue);
      }
    };
    return ( 
        <>
           <div className="w-full h-full">
                <label className="relative w-full h-full">
                <input required className= {`w-${props.width} px-4 py-2 text-lg outline-none border-[2px] border-secondary rounded hover:border-gray-600 duration-100 peer focus:border-secondary bg-inherit`} value={fieldValue} onChange={handleInputChange}/>
                <span className="font-juneauRegular absolute left-0 top-[-4px] px-1 text-lg tracking-wide peer-focus:text-secondary pointer-events-none duration-100 peer-focus:text-sm peer-focus:-translate-y-5 bg-green ml-2 peer-valid:text-sm peer-valid:-translate-y-5">{props.fieldName}</span>
                </label>
           </div>
        </>
     );
}
 
export default Field2;