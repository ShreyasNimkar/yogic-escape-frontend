import React from "react";
import Image from "next/image";
import HomePageTabs from "../uncommon/HomePageTabs/HomePageTabs";
import Title from "../common/Title";
const UpcomingEvents = () => {
  return (
    <>
      <Title value={"UPCOMING EVENTS"} color={"white"} />
      <div className="bg-white bg-chakra-events-bg bg-no-repeat bg-40% sm:bg-20% bg-right ">
        <div className="h-[80vh] sm:h-[100vh] bg-transparent ">
          <div className="h-[80%] sm:h-[80%] bg-transparent">
            <div className=" h-[100%] flex justify-around items-center bg-transparent">
              <HomePageTabs />
            </div>
          </div>
          <div className="h-[20%] sm:h-[20%] flex justify-around items-center bg-transparent">
            <button
              className="flex justify-between items-center bg-mahogany border-mahogany text-white border-2  hover:bg-white hover:text-mahogany active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
              type="button"
            >
              <span className="text-lg">Learn More</span>
              <svg
                className="block stroke-current"
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
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
