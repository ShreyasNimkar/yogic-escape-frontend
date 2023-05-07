import React from "react";
import MantrasCard from "../uncommon/MantrasCard/MantrasCard";

const Recommendations = () => {
  return (
    <>
      <div className="h-[20vh]">
        <div className="h-[100%] w-full text-center flex justify-center items-center flex-col text-2xl">
          OUR RECOMMENDATIONS
          <svg
            width="787"
            height="3"
            viewBox="0 0 787 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[70%] sm:w-1/6"
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
      <div className="h-full">
        <div className="h-[100%] flex justify-center gap-3 sm:gap-0 items-center flex-wrap sm:gap-x-10 ">
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
          <MantrasCard />
        </div>
      </div>
    </>
  );
};

export default Recommendations;
