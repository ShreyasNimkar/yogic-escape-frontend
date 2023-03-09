import React from "react";
import Image from "next/image";
const EventsCard = () => {
  return (
    <>
      <div className="flex   justify-around items-center gap-5 w-[100%] h-[20vh] sm:h-[30vh]">
        <div className="h-[100%] w-full sm:w-1/2">
          <div className="bg-hero-section-bg bg-no-repeat bg-cover h-full w-full"></div>
        </div>
        <div className="h-[100%] w-full sm:w-1/2">
          <div className="w-full h-[40%] sm:h-[17.5%] sm:text-base break-normal">
            SOUND HEALING TRAINING
          </div>
          <div className="w-full h-[27.5%] text-xs hidden sm:block">
            Sound therapy considers the emotional, mental, psychological, and
            spiritual well-being of a person
          </div>
          <div className="w-full h-[12.5%] text-xs">Sunday</div>
          <div className="w-full h-[15%] text-sm">500</div>
          <div className="w-full h-[25%] text-sm">
            <button
              className="flex justify-between items-center bg-transparent border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs px-[0.5rem] gap-[0.25] py-[0.2rem] sm:py-[0.3rem]  outline-none focus:outline-none  ease-linear transition-all duration-150"
              type="button"
            >
              <span className="text-sm pt-[0.25rem]">Enroll</span>
              <svg
                className="block stroke-current"
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
      </div>
    </>
  );
};

export default EventsCard;
