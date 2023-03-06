import React from "react";
import Image from "next/image";
const ActivitiesSection = () => {
  return (
    <>
      <div className="max-h-min bg-slate-400">
        <div className="h-max w-full flex items-center justify-around mt-16">
          <div className="flex flex-col items-center justify-around gap-10">
            <p className="px-44 text-center">ACHIEVE MINDFULLNESS WITH US</p>
          </div>
        </div>
        <div className="h-[50vh] w-full flex items-center justify-evenly px-20 gap-9">
          <div className="min-h-max flex flex-col justify-around items-center">
            <div className=" bg-hero-section-bg bg-no-repeat bg-cover bg-center h-full w-[20vw]">
              <div className="w-full h-full">asd</div>
            </div>
            <div>OUR MISSION</div>
            <div className="h-full w-[50%] text-center">
              Having our roots from the land of Yoga, we intend to share
              traditional knowledge to achieve spiritual awakening
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesSection;
