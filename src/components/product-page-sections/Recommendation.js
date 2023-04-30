import React from "react";
import Image from "next/image";
const Recommendation = () => {
  return (
    <>
      <div className="h-[60vh] flex justify-around items-center flex-col">
        <div className="h-[30%] w-full">
          <div className=" text-center bg-white sm:w-[100%] h-full  font-semibold flex justify-center items-center flex-col bg-30% tracking-[0.15em] bg-no-repeat gap-2 bg-[center_bottom_2rem] text-2xl">
            OFTEN BROUGHT TOGETHER
            <svg
              width="787"
              height="3"
              viewBox="0 0 787 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[80%] sm:w-1/4"
            >
              <line
                x1="1.5"
                y1="1.5"
                x2="785.5"
                y2="1.5"
                stroke="#9F2420"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-around items-center w-[50%] gap-4 h-[40%] py-5">
          <Image
            src={"/ourStory.png"}
            alt="Team"
            height={10000}
            width={10000}
            className="object-cover rounded-lg h-[80%] w-[25%]"
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
            className="object-cover rounded-lg h-[80%] w-[25%]"
          />
          <div className="w-[50%] h-[80%] flex text-textGray justify-around items-center flex-col">
            <p className="text-mahogany text-lg w-full">SOUND THERAPY</p>
            <p className="flex justify-between text-sm w-full items-center">
              asd + ASD
            </p>
            <p className="text-lg text-mahogany w-full flex justify-start items-center">
              210E
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
