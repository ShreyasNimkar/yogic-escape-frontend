import React from "react";

const RetreatsPostHeroSection = () => {
  return (
    <div>
      {" "}
      <div className=" my-10 gap-2 sm:mt-0 sm:h-[40vh] flex flex-col sm:flex-row items-center justify-around sm:justify-evenly  bg-white">
        <div className="h-[20vh] sm:h-full w-[90%] sm:w-[20%] flex items-center justify-around ">
          <div className="h-full bg-20% sm:bg-50% lg:bg-30% bg-hamsa-bg bg-no-repeat bg-[center_top_2rem] sm:bg-[center_top_8rem] lg:bg-[center_top_3rem]  flex flex-col justify-start items-center w-[100%] relative">
            <div className="h-[55%] sm:h-[50%] text-xl flex justify-end items-center flex-col">
              OUR MISSION
            </div>
            <div className="h-[45%] sm:h-[50%] w-[100%] sm:w-[100%] text-center text-sm flex justify-around items-start">
              Having our roots from the land of Yoga, we intend to share
              traditional knowledge to achieve spiritual awakening
            </div>
          </div>
        </div>
        <div className="h-[20vh] sm:h-full w-[90%] sm:w-[20%] flex items-center justify-around ">
          <div className="h-full bg-50% sm:bg-100% lg:bg-70% bg-lotus-bg bg-no-repeat bg-[center_top_2rem] sm:bg-[center_top_6rem] lg:bg-[center_top_1.5rem]  flex flex-col justify-start items-center w-[100%] relative">
            <div className="h-[55%] sm:h-[50%] text-xl flex justify-end items-center flex-col text-center">
              SUPPORT & EDUCATE
            </div>
            <div className="h-[45%] sm:h-[50%] w-[100%] sm:w-[100%] text-center text-sm flex justify-around items-start">
              Believing in education for all, we donate 5% of our earnings
              towards helping under privileged children
            </div>
          </div>
        </div>
        <div className="h-[20vh] sm:h-full w-[90%] sm:w-[20%] flex items-center justify-around ">
          <div className="h-full bg-20% sm:bg-50% lg:bg-30% bg-moon-bg bg-no-repeat bg-[center_top_2rem] sm:bg-[center_top_8rem] lg:bg-[center_top_3rem]  flex flex-col justify-start items-center w-[100%] relative">
            <div className="h-[55%] sm:h-[50%] text-xl flex justify-end items-center flex-col text-center">
              COMMUNITY
            </div>
            <div className="h-[45%] sm:h-[50%] w-[80%] sm:w-[100%] text-center text-sm flex justify-around items-start">
              We intend on building a community with the same mindset who share
              experiences and learns together.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetreatsPostHeroSection;
