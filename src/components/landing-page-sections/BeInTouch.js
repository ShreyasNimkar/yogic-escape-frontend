import React from "react";
import Image from "next/image";
const BeInTouch = () => {
  return (
    <>
      <div className="w-full h-[20vh] text-2xl text-center bg-paleIvory flex justify-center flex-col gap-2 items-center">
        BE IN TOUCH!
        <svg
          width="787"
          height="3"
          viewBox="0 0 787 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-1/6"
        >
          <line
            x1="1.5"
            y1="1.5"
            x2="785.5"
            y2="1.5"
            stroke="#9F2420"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className="h-[70vh] sm:h-[70vh] w-full bg-paleIvory">
        <div className="w-full text-mahogany h-[10%] sm:h-[10%] text-center flex justify-around items-center">
          @yogicescape
        </div>
        <div className="w-full h-[70%] sm:h-[60%] flex-col gap-3 sm:gap-0 sm:flex-row flex justify-center items-center py-3">
          <div className="h-full w-[40%] sm:w-[20%] bg-slate-300">asd</div>
          <div className="h-full w-[40%] sm:w-[20%] bg-slate-300 ">asd</div>
          <div className="h-full w-[20%] bg-slate-300 hidden sm:block">asd</div>
          <div className="h-full w-[20%] bg-slate-300 hidden sm:block">asd</div>
        </div>
        <div className="w-full h-[20%] flex justify-around items-center">
          <button
            className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="button"
            // onClick={submitHandler}
          >
            <span className="text-lg pt-[0.25rem]">Follow</span>
            <svg
              className="stroke-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.24988 16.5L13.7499 11L8.24988 5.5"
                // stroke="#9F2420"
                stroke-width="1.83333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default BeInTouch;
