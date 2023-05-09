import React from "react";

const CallUs = () => {
  return (
    <>
      <div className="flex justify-around items-end pb-3 h-[10vh] bg-white">
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
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44 12.7144L24 26.7144L4 12.7144"
            stroke="#9F2420"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="h-[18vh] px-6 sm:px-0  bg-white">
        <div className="w-full text-lg text-center text-mahogany pb-3 font-Quasonnnn">
          For any questions or queries please{" "}
          <span className="underline">Email</span>&nbsp; us or{" "}
          <span className="underline">call us.</span>
        </div>
        <div className=" text-center text-textGray text-xs tracking-[0.2em] w-full">
          Upon receipt of your registration email, we will confirm your
          participation.
          <br /> The registration is binding once the payment is done.
        </div>
      </div>
    </>
  );
};

export default CallUs;
