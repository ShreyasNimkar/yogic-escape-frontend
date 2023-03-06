import React from "react";
import Image from "next/image";
import PostHeroSection from "./PostHeroSection";
const HeroSection = () => {
  return (
    <>
      <div className="max-h-min bg-slate-400">
        <div className="h-max w-full flex items-center justify-around ">
          <div className="flex flex-col items-center justify-around ">
            <div className="bg-hero-section-bg w-screen h-[60vh] bg-no-repeat bg-cover bg-center bg-fixed">
              <div className="w-full h-full bg-[#250706] bg-opacity-50">
                <div className="h-[50%] w-full flex justify-around items-end">
                  <p className="text-center text-white text-2xl sm:text-3xl h-[50%] w-[50%] flex justify-around items-center overflow-y-hidden">
                    ESCAPE INTO mindfulness WITH YOG
                  </p>
                </div>
                <div className="h-[50%] w-full flex justify-around items-center">
                  <button
                    className="flex justify-between items-center text-white border-[0.15rem] border-white hover:bg-white hover:text-mahogany active:bg-white font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                  >
                    <span className="text-lg flex items-center justify-around">
                      Explore
                    </span>
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
            </div>
            <div className=" bg-paleIvory h-full w-full">
              <div className="text-center h-[30vh] w-full relative flex items-center justify-around my-5 ">
                <div className="absolute h-full w-full  text-center">
                  <Image
                    src="/chakra1.svg"
                    alt="chakra"
                    height={1000}
                    width={1000}
                    className="h-[100%] w-full"
                  />
                </div>
                <div className="w-[80%]">
                  Our space is designed to help you escape this malignant
                  lifestyle we have accepted as mundane
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostHeroSection />
    </>
  );
};

export default HeroSection;
