import React from "react";
import Image from "next/image";
const PodcastCard = () => {
  return (
    <>
      <div className="w-[90%] pt-6 sm:px-6 h-[20vh]  sm:h-[25vh] bg-white">
        <div className="h-[100%] flex justify-start items-center">
          <div className="w-[15%] sm:w-[15%] h-[60%] flex font-Quasonnnn justify-end items-center sm:h-[100%] text-xl sm:text-7xl  text-mahogany">
            01
          </div>
          <div className="w-[65%] h-full">
            <div className="font-Quasonnnn  sm:text-2xl font-semibold">
              THE YOGI PODCAST
            </div>
            <div className="text-[#181818] h-max  text-xs sm:text-xs py-2">
              YogicEscape is a space designed to help you escape this malignant
              lifestyle. YogicEscape is a space designed to help you escape this
              malignant lifestyle.
            </div>

            <div className="flex justify-start gap-1 items-center h-[15%]">
              <div className="flex text-textGray text-xs justify-start items-center">
                32 views | 0 comments | 3
              </div>

              <svg
                width="12"
                height="12"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7408 3.52204C15.355 3.13602 14.8969 2.82981 14.3927 2.62089C13.8885 2.41197 13.3481 2.30444 12.8023 2.30444C12.2565 2.30444 11.7161 2.41197 11.2119 2.62089C10.7077 2.82981 10.2496 3.13602 9.86373 3.52204L9.063 4.32277L8.26226 3.52204C7.48291 2.74268 6.42588 2.30485 5.32371 2.30485C4.22154 2.30485 3.16451 2.74268 2.38516 3.52204C1.6058 4.30139 1.16797 5.35842 1.16797 6.46059C1.16797 7.56276 1.6058 8.61979 2.38516 9.39914L3.18589 10.1999L9.063 16.077L14.9401 10.1999L15.7408 9.39914C16.1268 9.01331 16.4331 8.5552 16.642 8.051C16.8509 7.54679 16.9584 7.00636 16.9584 6.46059C16.9584 5.91481 16.8509 5.37438 16.642 4.87018C16.4331 4.36597 16.1268 3.90787 15.7408 3.52204Z"
                  stroke="#9F2420"
                  strokeWidth="1.51082"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="w-[20%] flex justify-end items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.65625"
                y="0.433105"
                width="57.3438"
                height="57.3438"
                rx="28.6719"
                fill="#F6C460"
              />
              <path
                d="M22.0664 14.395L44.95 29.1058L22.0664 43.8165V14.395Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastCard;
