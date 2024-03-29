import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="max-h-min bg-slate-400">
        <div className="h-max w-full flex items-center justify-around ">
          <div className="flex flex-col items-center justify-around ">
            <div className="bg-rentOurSpace-hero-section-bg w-screen h-[70vh] bg-no-repeat bg-cover bg-center bg-fixed">
              <div className="w-full h-full bg-[#250706] bg-opacity-50">
                <div className="h-[60%] w-full flex justify-around items-end text-center">
                  <p className="w-full   text-center text-white text-5xl sm:text-6xl h-[55%] overflow-y-hidden ">
                    <span className="font-Quasonnnn">Rent Our</span>
                    <br />
                    <span className="italic font-light ">Space</span>
                  </p>
                </div>
                <div className="h-[40%] w-full flex justify-center items-center">
                  <button
                    className="flex justify-between items-center text-white border-[0.15rem] border-white hover:bg-white hover:text-mahogany font-bold  text-xs  px-3  py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                  >
                    <span className="h-full w-full text-lg flex items-end justify-around pt-[0.25rem]">
                      CONTACT US
                    </span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="block stroke-current"
                    >
                      <path
                        d="M8.24988 16.5L13.7499 11L8.24988 5.5"
                        // stroke="#ffffffff"
                        strokeWidth="1.83333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className=" bg-paleIvory h-full w-full">
              <div className="text-center  tracking-[0.2rem] h-[40vh] w-full bg-chakra-bg bg-center bg-no-repeat bg-contain flex items-center justify-around my-5 ">
                <div className="sm:w-[60%] text-3xl font-Quasonnnn  ">
                  The studio rooms could be rented for your events. There are
                  two rooms, a yoga room (Yogashala) and a wellness room for
                  private therapies/sessions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
