import React from "react";
import Image from "next/image";
import HomePageTabs from "../uncommon/HomePageTabs/HomePageTabs";
const UpcomingEvents = () => {
  return (
    <>
      <div className="h-[100vh] bg-white">
        <div>
          <div className=" h-[15vh] text-center justify-around items-center flex">
            UPCOMING EVENTS
          </div>
          <div className="flex justify-around items-center">
            <HomePageTabs />
          </div>
        </div>
        <div className="w-full flex justify-around items-center">
          <button
            className="flex justify-between items-center bg-mahogany border-mahogany text-white border-2  hover:bg-white hover:text-mahogany active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="button"
          >
            <span className="text-lg">Learn More</span>
            <Image
              src={"chevron-right.svg"}
              alt="chevron-right"
              height={1000}
              width={10}
              className="h-[1.2rem] w-[1.2rem]"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
