import React from "react";

const RetreatsHeroSection = () => {
  return (
    <>
      <div className="max-h-min  bg-slate-400 ">
        <div className="h-max w-full flex items-center justify-around ">
          <div className="flex flex-col items-center justify-around ">
            <div className="bg-hero-section-bg w-screen h-[70vh] bg-no-repeat bg-cover bg-center bg-fixed">
              <div className="w-full h-full bg-[#250706] bg-opacity-50">
                <div className="h-[50%] w-full flex justify-around items-end text-center">
                  <p className="w-full  font-thin text-center text-white text-5xl sm:text-6xl h-[55%] overflow-y-hidden ">
                    <span className="font-Quasonnnn">Retreat In</span>
                    <br />
                    <span className="italic  font-light">INDIA&nbsp;</span>
                    {/* <span className="font-Quasonnnn">WITH YOG</span> */}
                  </p>
                </div>
                <div className="h-[20%] w-full flex sm:flex-row flex-col justify-center tracking-widest sm:gap-20 items-center sm:items-end text-center">
                  <div className="text-white sm:w-[20%]">
                    25 Oct - 25 Nov 2023
                  </div>
                  <div className="text-white sm:w-[20%] flex justify-center items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 27 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.9539 2.63623H16.4729C16.2713 2.63608 16.078 2.71571 15.935 2.85772L2.97813 15.8146C2.69442 16.0997 2.53516 16.4855 2.53516 16.8877C2.53516 17.2899 2.69442 17.6757 2.97813 17.9608L9.14805 24.1308C9.43315 24.4145 9.81899 24.5737 10.2212 24.5737C10.6234 24.5737 11.0092 24.4145 11.2943 24.1308L24.2459 11.1792C24.3879 11.0362 24.4675 10.8428 24.4674 10.6413V4.15498C24.4684 3.95571 24.4299 3.75821 24.3543 3.57385C24.2786 3.38949 24.1673 3.22191 24.0266 3.08076C23.8859 2.93961 23.7187 2.82766 23.5346 2.75137C23.3506 2.67508 23.1532 2.63595 22.9539 2.63623Z"
                        stroke="white"
                        stroke-width="1.6875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.25 8.54248C19.9162 8.54248 19.59 8.44351 19.3125 8.25809C19.035 8.07266 18.8187 7.80911 18.691 7.50076C18.5632 7.19241 18.5298 6.85311 18.5949 6.52577C18.66 6.19842 18.8208 5.89774 19.0568 5.66174C19.2928 5.42574 19.5934 5.26502 19.9208 5.19991C20.2481 5.13479 20.5874 5.16821 20.8958 5.29593C21.2041 5.42366 21.4677 5.63995 21.6531 5.91746C21.8385 6.19496 21.9375 6.52123 21.9375 6.85498C21.9375 7.30253 21.7597 7.73176 21.4432 8.04822C21.1268 8.36469 20.6976 8.54248 20.25 8.54248Z"
                        fill="white"
                      />
                    </svg>
                    Grab for 560E
                  </div>
                </div>
                <div className="h-[30%] w-full flex justify-center items-center">
                  <button
                    className="flex justify-between items-center text-white border-[0.15rem] border-white hover:bg-white hover:text-mahogany font-bold  text-xs  px-3  py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                  >
                    <span className="h-full w-full text-lg flex items-end justify-around pt-[0.25rem]">
                      BOOK NOW
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
                <div className="sm:w-[60%] font-Quasonnnn  text-3xl">
                  Our space is designed to help you{" "}
                  <span className="text-mahogany bg-red-underline-bg bg-no-repeat bg-bottom">
                    escape
                  </span>{" "}
                  this malignant lifestyle we have accepted as mundane
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RetreatsHeroSection;
