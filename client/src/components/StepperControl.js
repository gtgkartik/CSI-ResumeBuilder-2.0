const StepperControl = (props) => {
    return ( 
        <>
        <div className="grid grid-cols-2 justify-around gap-3">
          {props.prevButton?
          (<button onClick={props.prevButton} className="grid-cols-1 bg-secondary sm:w-full text-white rounded-lg font-juneauBold w-[270px] h-[48px] text-[18px]">
            BACK
          </button>):(<></>)}
          {props.nextButton?
          (<button onClick={props.nextButton} className= "grid-cols-1 bg-secondary sm:w-full text-white rounded-lg font-juneauBold w-[270px] h-[48px] text-[18px]">
            NEXT
          </button>):(<>
            {console.log(props.template)}
            <button onClick={props.submitButton} className= "grid-cols-1 bg-secondary sm:w-full text-white rounded-lg font-juneauBold w-[270px] h-[48px] text-[18px]">
            Submit
          </button>
          </>)
          }
        </div>
        </>
     );
}
 
export default StepperControl;