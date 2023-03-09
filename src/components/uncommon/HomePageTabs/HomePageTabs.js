import React from "react";
import { useState } from "react";
import EventsCard from "./EventsCard";
const HomePageTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="bg-transparent phone-container sm:container">
      <div className="bg-transparent bloc-tabs ">
        <button
          className={
            toggleState === 1
              ? "tabs active-tabs w-[40%] sm:w-[13%]"
              : "tabs w-[40%] sm:w-[13%]"
          }
          onClick={() => toggleTab(1)}
        >
          Events
        </button>
        <button
          className={
            toggleState === 2
              ? "tabs active-tabs w-[40%] sm:w-[13%]"
              : "tabs w-[40%] sm:w-[13%]"
          }
          onClick={() => toggleTab(2)}
        >
          Retreats
        </button>
      </div>

      <div className="bg-transparent content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content "}
        >
          <div className=" h-full w-full sm:w-[75%] bg-transparent flex justify-around items-center flex-col">
            <EventsCard />
            <EventsCard />
          </div>
        </div>

        <div
          className={
            toggleState === 2
              ? "bg-transparent content  active-content"
              : "content"
          }
        >
          <div className="h-full w-full sm:w-[75%] bg-transparent flex justify-around items-center flex-col">
            <EventsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTabs;
