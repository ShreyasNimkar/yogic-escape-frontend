import React from "react";
import TherapiesCard from "../uncommon/MassageAndTherapiesCards/TherapiesCard";

const TherapiesList = () => {
  return (
    <>
      <div className="h-[30vh] flex justify-around items-center flex-col bg-white">
        <div className="h-[60%] flex justify-around items-center flex-col">
          <div className="flex w-full justify-center gap-10 items-center">
            <div className="w-[1/3] text-mahogany bg-50% p-[1rem] bg-ellipse-yellow-bg bg-no-repeat  bg-[top_0.6rem_left_0.6rem]">
              ALL
            </div>
            <div className="w-[1/3] text-mahogany bg-25% p-[1rem] bg-ellipse-yellow-bg bg-no-repeat  bg-[top_0.6rem_left_3.5rem]">
              BEST SELLING
            </div>
            <div className="w-[1/3] text-mahogany bg-40% p-[1rem] bg-ellipse-yellow-bg bg-no-repeat  bg-[top_0.6rem_left_0.8rem]">
              NEW
            </div>
          </div>
          <div className="flex justify-center text-textGray gap-4 text-xs items-center">
            {/*  */}
            <div className="rounded-full px-2 py-1 border-[0.1rem] border-textGray">
              Pregnancy
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-white">
        <div className="h-full w-full flex justify-center items-center flex-row sm:flex-row flex-wrap py-[2rem] px-[0.5rem] sm:px-[5rem] gap-x-5 gap-y-7">
          <TherapiesCard />
          <TherapiesCard />
          <TherapiesCard />
        </div>
      </div>
    </>
  );
};

export default TherapiesList;
