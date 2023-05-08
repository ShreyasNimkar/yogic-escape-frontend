import React from "react";
import Image from "next/image";
import SelfDiscoveryTextBlocks from "./SelfDiscoveryTextBlocks";
const SelfDiscoveryCard = ({ direction, hamsaPosition, textPadding }) => {
  return (
    <>
      <div
        className={`sm:flex hidden w-[90%] h-[20vh]  relative justify-center items-center ${direction} `}
      >
        <div className={`${hamsaPosition} absolute w-[10%]`}>
          <Image
            src="/hamsa-leaning-left.svg"
            alt="red-chakra"
            height={10000}
            width={10000}
            className="h-[7rem]  top-[1rem] z-20"
          />
        </div>
        {/* <div className="w-[10%] h-full"></div> */}
        <div
          className={`w-[90%] ${textPadding} h-full border-2 border-mahogany bg-white rounded-sm flex justify-start items-center`}
        >
          <SelfDiscoveryTextBlocks />
          <SelfDiscoveryTextBlocks />
          <SelfDiscoveryTextBlocks />
          <SelfDiscoveryTextBlocks />
        </div>
      </div>
      <div className="h-[50vh] sm:h-[80vh] w-[80%] sm:w-[25%] sm:hidden flex justify-end  items-center flex-col z-1 relative">
        <div className="w-[100%] h-[90%] relative z-2 bg-white border-2 border-mahogany">
          <div className="h-[10%]"></div>
          <div className="h-[90%]  w-full">
            <div className="h-[100%] w-full">
              <SelfDiscoveryTextBlocks />
              <SelfDiscoveryTextBlocks />
              <SelfDiscoveryTextBlocks />
              <SelfDiscoveryTextBlocks />
            </div>
          </div>
        </div>
        <Image
          src="/hamsa-leaning-left.svg"
          alt="red-chakra"
          height={10000}
          width={10000}
          className="h-[20%] absolute top-[0rem] w-full z-20"
        />
      </div>
    </>
  );
};

export default SelfDiscoveryCard;
