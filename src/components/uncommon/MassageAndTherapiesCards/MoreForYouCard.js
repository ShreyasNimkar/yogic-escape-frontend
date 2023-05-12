import React from "react";
import Image from "next/image";
import ReviewStars from "@/components/common/ReviewStars";
const MoreForYouCard = () => {
  return (
    <>
      <div className="cursor-pointer shadow-xl h-[35vh] w-[45vw] sm:w-[40vw] sm:h-[32.5vh]  flex  flex-col sm:flex-row justify-around items-center">
        <div className="w-[100%] sm:w-[40%] h-full flex justify-around items-center overflow-hidden">
          <Image
            // src={`/c`}
            src={"/yogapeople.png"}
            alt="Team"
            height={10000}
            width={10000}
            className="h-[32.5vh] w-full object-cover "
          />
        </div>
        <div className="w-[100%] sm:w-[60%] sm:px-2 sm:py-2 h-full flex justify-around items-center bg-white">
          <div>
            <p className="text-xs sm:text-sm">SOUND HEALING TRAINING</p>
            <p className="text-xs text-textGray py-2 hidden sm:block">
              Help relieve back pain and soreness that often occur during
              pregnancy.
            </p>

            <div className="flex justify-around items-center text-xs sm:text-sm">
              <p className="text-xs">1 hour</p>
              <ReviewStars rating={3.3} />

              <p className="sm:block hidden">20+ Reviews</p>
            </div>
            <p className="sm:hidden block text-xs sm:text-sm">20+ Reviews</p>
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
