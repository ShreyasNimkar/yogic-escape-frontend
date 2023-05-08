import React from "react";
import Image from "next/image";
const MoreForYouCard = () => {
  return (
    <>
      <div className="cursor-pointer shadow-xl h-[35vh] w-[45vw] sm:w-[40vw] sm:h-[30vh]  flex  flex-col sm:flex-row justify-around items-center">
        <div className="w-[100%] sm:w-[40%] h-full overflow-hidden">
          <Image
            // src={`/c`}
            src={"/yogapeople.png"}
            alt="Team"
            height={10000}
            width={10000}
            className="h-full w-full object-cover "
          />
        </div>
        <div className="w-[100%] sm:w-[60%] sm:px-3 sm:py-5 h-full flex justify-around items-center bg-white">
          <div>
            <p className="text-xs sm:text-sm">SOUND HEALING TRAINING</p>
            <p className="text-xs text-textGray py-2 hidden sm:block">
              Help relieve back pain and soreness that often occur during
              pregnancy.
            </p>
            <div className="flex justify-around items-center text-xs sm:text-sm">
              1 hour
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-1/2"
              >
                <circle cx="4" cy="4.5" r="4" fill="#D9D9D9" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="18"
                viewBox="0 0 164 31"
                fill="none"
              >
                <path
                  d="M14.8667 2.85107L18.6946 10.6061L27.2548 11.8573L21.0608 17.8903L22.5226 26.4134L14.8667 22.3872L7.21079 26.4134L8.67259 17.8903L2.47852 11.8573L11.0387 10.6061L14.8667 2.85107Z"
                  fill="#F6C460"
                  stroke="#F6C460"
                  stroke-width="2.47763"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M48.3139 2.85107L52.1419 10.6061L60.7021 11.8573L54.508 17.8903L55.9698 26.4134L48.3139 22.3872L40.6581 26.4134L42.1199 17.8903L35.9258 11.8573L44.486 10.6061L48.3139 2.85107Z"
                  fill="#F6C460"
                  stroke="#F6C460"
                  stroke-width="2.47763"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M81.7632 2.85107L85.5911 10.6061L94.1513 11.8573L87.9572 17.8903L89.419 26.4134L81.7632 22.3872L74.1073 26.4134L75.5691 17.8903L69.375 11.8573L77.9352 10.6061L81.7632 2.85107Z"
                  fill="#F6C460"
                  stroke="#F6C460"
                  stroke-width="2.47763"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M115.21 2.85107L119.038 10.6061L127.599 11.8573L121.405 17.8903L122.866 26.4134L115.21 22.3872L107.555 26.4134L109.016 17.8903L102.822 11.8573L111.382 10.6061L115.21 2.85107Z"
                  stroke="#F6C460"
                  stroke-width="2.47763"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M148.66 2.85107L152.488 10.6061L161.048 11.8573L154.854 17.8903L156.316 26.4134L148.66 22.3872L141.004 26.4134L142.466 17.8903L136.271 11.8573L144.832 10.6061L148.66 2.85107Z"
                  stroke="#F6C460"
                  stroke-width="2.47763"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              20+ Reviews
            </div>
            <p className="text-mahogany font-semibold">€89</p>
            <p className="   text-sm">
              <span className="cursor-pointer hover:underline hover:text-mahogany">
                Learn More
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreForYouCard;
