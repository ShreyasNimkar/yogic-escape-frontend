import React from "react";
import Image from "next/image";
import Title from "../common/Title";
const ActivitiesSection = () => {
  return (
    <>
      <Title value={"ACHIEVE MINDFULLNESS WITH US"} color={"paleIvory"} />
      <div className="h-[70vh] sm:h-[60vh] bg-paleIvory">
        <div className="h-[100%] px-10 flex flex-col sm:flex-row justify-center gap-7 items-center">
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
