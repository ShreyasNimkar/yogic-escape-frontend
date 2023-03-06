import React from "react";
import Image from "next/image";
const ClassesSection = () => {
  return (
    <div className="w-full h-[80vh] bg-paleIvory">
      <div className="flex flex-col-reverse lg:flex-row justify-around h-2/3 w-full items-center">
        <div className="w-full lg:w-1/2 h-full">
          <div className="flex justify-around sm:justify-start sm:pb-3 items-end text-center text- sm:text-left sm:h-[45%] pt-3 sm:pt-0 text-xl sm:text-3xl font-bold w-full px-[4rem]">
            EXPERIENCE yoga , <br />
            ANYWHERE
          </div>
          <div className="h-[30%] sm:h-[20%] w-full sm:w-2/3 px-[4rem] text-xs text-dimGray">
            YogicEscape is a space designed to help you escape this malignant
            lifestyle we have accepted as mundane with movement and prana
            (breath).
          </div>
          <div className="h-[25%] sm:h-[35%] w-full px-[4rem]">
            <button
              className="flex justify-between items-center bg-mahogany border-mahogany text-white border-2  hover:bg-paleIvory hover:text-mahogany active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
              type="button"
            >
              <span className="text-base">Book</span>
              <Image
                src={"chevron-right.svg"}
                alt="chevron-right"
                height={1000}
                width={10}
                className="h-[1.2rem] w-[1.2rem]"
              />
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
  );
};

export default ClassesSection;
