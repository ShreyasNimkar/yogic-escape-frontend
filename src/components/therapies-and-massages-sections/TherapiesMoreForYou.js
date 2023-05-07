import React from "react";
import MoreForYouCard from "../uncommon/MassageAndTherapiesCards/MoreForYouCard";
import CallUs from "../common/CallUs";

const TherapiesMoreForYou = () => {
  return (
    <>
      <div className="h-[10vh] text-center flex justify-center bg-paleIvory flex-col  items-center text-base">
        MORE FOR YOU
        <svg
          width="787"
          height="1"
          viewBox="0 0 787 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[80%] sm:w-[12%]"
        >
          <line
            x1="1.5"
            y1="1.5"
            x2="785.5"
            y2="1.5"
            stroke="#9F2420"
            strokeWidth="1000"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="h-[45vh] bg-paleIvory">
        <div className="h-[100%] w-full flex justify-center gap-3 items-center bg-paleIvory">
          <MoreForYouCard />
          <MoreForYouCard />
        </div>
      </div>
      <CallUs />
    </>
  );
};

export default TherapiesMoreForYou;
