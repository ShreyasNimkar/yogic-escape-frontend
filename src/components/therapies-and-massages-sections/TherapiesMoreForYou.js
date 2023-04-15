import React from "react";
import MoreForYouCard from "../uncommon/MassageAndTherapiesCards/MoreForYouCard";

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
      <div className="flex justify-around items-center h-[5vh] bg-white">
        <svg
          width="25"
          height="25"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.71436H40C42.2 8.71436 44 10.5144 44 12.7144V36.7144C44 38.9144 42.2 40.7144 40 40.7144H8C5.8 40.7144 4 38.9144 4 36.7144V12.7144C4 10.5144 5.8 8.71436 8 8.71436Z"
            stroke="#9F2420"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M44 12.7144L24 26.7144L4 12.7144"
            stroke="#9F2420"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="h-[25vh] px-6 sm:px-0 pt-3 bg-white">
        <div className="w-full text-lg text-center text-mahogany pb-3 font-Quasonnnn">
          For any questions or queries please{" "}
          <span className="underline">Email</span>&nbsp; us or{" "}
          <span className="underline">call us.</span>
        </div>
        <div className="text-center text-textGray text-xs tracking-[0.2em] w-full">
          Upon receipt of your registration email, we will confirm your
          participation.
          <br /> The registration is binding once the payment is done.
        </div>
      </div>
    </>
  );
};

export default TherapiesMoreForYou;
