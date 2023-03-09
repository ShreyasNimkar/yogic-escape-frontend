import React from "react";
import Image from "next/image";
import ClassesCard from "../uncommon/HomePageTabs/ClassesCard";
const ClassesSection = () => {
  return (
    <>
      <div className="w-full h-[60vh] bg-paleIvory">
        <div className="flex flex-col-reverse lg:flex-row justify-around h-[100%] w-full items-center">
          <div className="w-full lg:w-1/2 h-full">
            <div className="flex justify-around sm:justify-start sm:pb-3 items-end  text-center sm:text-left sm:h-[45%] pt-3 sm:pt-0 text-xl sm:text-4xl font-semibold w-full sm:px-[6rem]">
              EXPERIENCE yoga , <br />
              ANYWHERE
            </div>
            <div className="h-[30%] sm:h-[20%] w-full text-center sm:text-left sm:w-full px-[1rem] sm:px-[6rem] text-sm text-dimGray">
              <p className="h-full w-full flex justify-around items-center">
                YogicEscape is a space designed to help you escape this
                malignant lifestyle we have accepted as mundane with movement
                and prana (breath).
              </p>
            </div>
            <div className="flex items-center justify-around sm:justify-start h-[25%] sm:h-[35%] w-full px-[6rem]">
              <button
                className="flex  justify-around items-center bg-mahogany border-mahogany text-white border-2  hover:bg-paleIvory hover:text-mahogany active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
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
                    stroke-width="1.83333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-4/5 lg:w-1/2 h-full ">
            <Image
              src={"/yogapeople.png"}
              alt="yoga-ppl"
              height={10000}
              width={10000}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-paleIvory w-[100%] h-[90vh] sm:h-[40vh] flex-col p-3 gap-3 sm:gap-0 sm:p-0 sm:flex-row flex justify-evenly items-center">
        <div
          className={`h-[100%] sm:h-[70%] w-[80%] sm:w-[25%] bg-transparent bg-class-instudio-bg bg-no-repeat bg-top bg-40% px-10`}
        >
          <div className="w-full h-[30%] sm:h-[45%] flex justify-left items-end text-2xl">
            In-Studio
          </div>
          <div className="w-full h-[35%] sm:h-[25%] text-sm">
            Practice yoga from our studio
          </div>
          <div className="w-full h-[35%] sm:h-[30%]">
            <button
              className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs px-[0.5rem] gap-[0.25] py-[0.3rem]  outline-none focus:outline-none  ease-linear transition-all duration-150"
              type="button"
            >
              <span className="text-sm pt-[0.25rem]">BOOK @ 500</span>&nbsp;
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
        <div
          className={`h-[100%] sm:h-[70%] w-[80%] sm:w-[25%] bg-transparent bg-class-outdoor-bg bg-no-repeat bg-top bg-40% px-10`}
        >
          <div className="w-full h-[30%] sm:h-[45%] flex justify-left items-end text-2xl">
            Outdoor
          </div>
          <div className="w-full h-[35%] sm:h-[25%] text-sm">
            Practice yoga from our studio
          </div>
          <div className="w-full h-[35%] sm:h-[30%]">
            <button
              className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs px-[0.5rem] gap-[0.25] py-[0.3rem]  outline-none focus:outline-none  ease-linear transition-all duration-150"
              type="button"
            >
              <span className="text-sm pt-[0.25rem]">BOOK @ 500</span>&nbsp;
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
        <div
          className={`h-[100%] sm:h-[70%] w-[80%] sm:w-[25%] bg-transparent bg-class-online-bg bg-no-repeat bg-top bg-40% px-10`}
        >
          <div className="w-full h-[30%] sm:h-[45%] flex justify-left items-end text-2xl">
            Online
          </div>
          <div className="w-full h-[35%] sm:h-[25%] text-sm">
            Practice yoga from our studio
          </div>
          <div className="w-full h-[35%] sm:h-[30%]">
            <button
              className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs px-[0.5rem] gap-[0.25] py-[0.3rem]  outline-none focus:outline-none  ease-linear transition-all duration-150"
              type="button"
            >
              <span className="text-sm pt-[0.25rem]">BOOK @ 500</span>&nbsp;
              <Image
                src={"chevron-right.svg"}
                alt="chevron-right"
                height={1000}
                width={10}
                className="h-[0.9rem] w-[0.9rem]"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesSection;
