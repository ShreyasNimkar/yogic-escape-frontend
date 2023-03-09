import React from "react";
import Image from "next/image";
const ActivitiesSection = () => {
  return (
    <>
      <div className="h-[100vh] sm:h-[60vh] bg-paleIvory">
        <div className="h-[20%] sm:h-[30%]">
          <p className="h-full text-2xl font-semibold flex justify-center items-center flex-col bg-30% bg-no-repeat bg-[center_bottom_2rem] gap-2 text-center">
            ACHIEVE MINDFULLNESS WITH US
            <svg
              width="787"
              height="3"
              viewBox="0 0 787 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/4"
            >
              <line
                x1="1.5"
                y1="1.5"
                x2="785.5"
                y2="1.5"
                stroke="#9F2420"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </p>
        </div>
        <div className="h-[70%] px-10 flex flex-col sm:flex-row justify-center gap-7 items-center">
          <div className="w-[90%] h-[45%] sm:h-[90%] sm:w-[20%]">
            <div className="w-full h-[60%] sm:h-[60%]">
              <div className="h-full w-full bg-hero-section-bg bg-cover bg-no-repeat flex justify-around items-center text-white">
                <p className="bg-black bg-opacity-40 h-full w-full justify-around flex items-center text-2xl">
                  YOGA
                </p>
              </div>
            </div>
            <div className="w-full flex justify-around items-center h-[20%] sm:h-[20%] text-sm">
              Practice yoga in a decicated place with your peers
            </div>
            <div className="w-full h-[20%] text-mahogany ">
              <span className="cursor-pointer hover:underline">Learn More</span>
            </div>
          </div>
          <div className="w-[90%] h-[45%] sm:h-[90%] sm:w-[20%]">
            <div className="w-full h-[60%] sm:h-[60%]">
              <div className="h-full w-full bg-hero-section-bg bg-cover bg-no-repeat flex justify-around items-center text-white">
                <p className="bg-black bg-opacity-40 h-full w-full justify-around flex items-center text-2xl">
                  THERAPIES
                </p>
              </div>
            </div>
            <div className="w-full flex justify-around items-center h-[20%] sm:h-[20%] text-sm">
              Practice yoga in a decicated place with your peers
            </div>
            <div className="w-full h-[20%] text-mahogany ">
              <span className="cursor-pointer hover:underline">Learn More</span>
            </div>
          </div>
          <div className="hidden sm:block w-[90%] h-[45%] sm:h-[90%] sm:w-[20%]">
            <div className="w-full h-[60%] sm:h-[60%]">
              <div className="h-full w-full bg-hero-section-bg bg-cover bg-no-repeat flex justify-around items-center text-white">
                <p className="bg-black bg-opacity-40 h-full w-full justify-around flex items-center text-2xl">
                  RETREATS
                </p>
              </div>
            </div>
            <div className="w-full flex justify-around items-center h-[20%] sm:h-[20%] text-sm">
              Practice yoga in a decicated place with your peers
            </div>
            <div className="w-full h-[20%] text-mahogany ">
              <span className="cursor-pointer hover:underline">Learn More</span>
            </div>
          </div>
          <div className="hidden sm:block w-[90%] h-[45%] sm:h-[90%] sm:w-[20%]">
            <div className="w-full h-[60%] sm:h-[60%]">
              <div className="h-full w-full bg-hero-section-bg bg-cover bg-no-repeat flex justify-around items-center text-white">
                <p className="bg-black bg-opacity-40 h-full w-full justify-around flex items-center text-2xl">
                  TRAININGS
                </p>
              </div>
            </div>
            <div className="w-full flex justify-around items-center h-[20%] sm:h-[20%] text-sm">
              Practice yoga in a decicated place with your peers
            </div>
            <div className="w-full h-[20%] text-mahogany ">
              <span className="cursor-pointer hover:underline">Learn More</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesSection;
