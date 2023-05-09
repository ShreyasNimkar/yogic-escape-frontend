import React from "react";
import ReviewStars from "../common/ReviewStars";

const MassagesHeroSection = () => {
  return (
    <>
      <div className="max-h-min  bg-slate-400 ">
        <div className="h-max w-full flex items-center justify-around ">
          <div className="flex flex-col items-center justify-around ">
            <div className="bg-hero-section-bg w-screen h-[70vh] bg-no-repeat bg-cover bg-center bg-fixed">
              <div className="w-full h-full bg-[#250706] bg-opacity-50">
                <div className="h-[70%] w-full flex justify-around items-end text-center">
                  <p className="w-full  font-thin text-center text-white text-5xl sm:text-6xl h-[55%] overflow-y-hidden ">
                    <span className="font-Quasonnnn">Heal your body with</span>
                    <br />
                    <span className="italic  font-light">MASSAGES&nbsp;</span>
                  </p>
                </div>
                <div className="h-[30%] w-full sm:flex-row flex-col flex justify-end py-3 sm:py-0 gap-2 sm:gap-0 sm:justify-around items-center">
                  <div className="text-white flex justify-start items-start gap-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.24 12.845C21.3658 11.7192 21.9983 10.1922 21.9983 8.60002C21.9983 7.00783 21.3658 5.48086 20.24 4.35502C19.1142 3.22917 17.5872 2.59668 15.995 2.59668C14.4028 2.59668 12.8758 3.22917 11.75 4.35502L5 11.105V19.605H13.5L20.24 12.845Z"
                        stroke="#F6C460"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 8.60498L2 22.605"
                        stroke="#F6C460"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 15.605H9"
                        stroke="#F6C460"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Vegan Cruelty Free Products</span>
                  </div>
                  <div className="text-white flex justify-start items-center">
                    <ReviewStars rating={3.3} />
                    <p className="flex justify-around  text-center">
                      20+ Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MassagesHeroSection;
