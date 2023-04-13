import React from "react";
import Image from "next/image";
const MindBodySoul = () => {
  return (
    <div className="w-full h-[50vh] sm:h-[100%] bg-paleIvory">
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-around h-full w-full items-center">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-end items-end">
          <div className="flex justify-around  lg:justify-end sm:pb-3 items-start text-center md:py-0 sm:text-left h-[45%] sm:h-[45%] pt-3 sm:pt-0 text-xl sm:text-3xl font-bold w-full px-[4rem] lg:text-end">
            HEAL YOUR BODY,
            <br className="block sm:hidden" /> MIND
            <br className="hidden sm:block" /> & SOUL
          </div>
          <div className=" sm:py-0 flex justify-end items-center h-[30%] sm:h-[20%] w-full lg:w-2/3 sm:px-[4rem] text-xs text-center sm:text-end text-dimGray">
            YogicEscape is a space designed to help you escape this malignant
            lifestyle we have accepted as mundane with movement and prana
            (breath).
          </div>
          <div className="flex sm:py-5 justify-around lg:justify-end items-center h-[50%] sm:h-[35%] w-full px-[4rem]">
            <button
              className="flex justify-between items-center bg-mahogany border-mahogany text-white border-2  hover:bg-paleIvory hover:text-mahogany active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
              type="button"
            >
              <span className="text-base pt-[0.25rem]">Book</span>
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
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-4/5 lg:w-1/2 h-full ">
          <Image
            src={"/soundhealing.png"}
            alt="yoga-ppl"
            height={10000}
            width={10000}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MindBodySoul;
