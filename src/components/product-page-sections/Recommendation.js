import React from "react";
import Image from "next/image";
import Title from "../common/Title";
const Recommendation = () => {
  return (
    <>
      <Title color={"white"} value={"OFTEN BOUGHT TOGETHER"} />
      <div className="h-max pb-10 flex justify-around items-center flex-col">
        <div className="flex justify-around flex-col sm:flex-row items-center w-[90%] sm:w-[60%] gap-4 h-max py-5">
          <Image
            src={"/ourStory.png"}
            alt="Team"
            height={10000}
            width={10000}
            className="object-cover rounded-lg h-[10vh] sm:h-[15vh] w-[15vh]"
          />
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.29124 0.700728H9.35025V6.03315H14.6031V9.93299H9.35025V15.2256H5.29124V9.93299H0.078192V6.03315H5.29124V0.700728Z"
              fill="#9F2420"
            />
          </svg>
          <Image
            src={"/ourStory.png"}
            alt="Team"
            height={10000}
            width={10000}
            className="object-cover rounded-lg h-[10vh] sm:h-[15vh] w-[15vh]"
          />
          <div className="w-[80%] sm:w-[50%] h-max flex text-textGray justify-center items-center flex-col">
            <p className="text-mahogany text-lg w-full">SOUND THERAPY</p>
            <p className="flex justify-between text-sm w-full items-center">
              1 Pregnancy Massage + 1 Postpartum Massage
            </p>
            <p className="text-lg text-mahogany w-full flex justify-start items-center">
              €210
            </p>
          </div>
        </div>
        <div className="h-[30%] w-full flex justify-around items-center">
          <button
            className="flex justify-between items-center bg-whtie border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-2 gap-1 py-1  outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="button"
          >
            <span className="text-lg pt-[0.25rem]">BOOK REQUEST</span>
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
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default Recommendation;
