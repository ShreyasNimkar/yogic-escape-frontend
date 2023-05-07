import React from "react";
import Image from "next/image";
const MantrasCard = () => {
  return (
    <>
      <div className="sm:w-[25%] w-[80%] h-[50vh] sm:h-[60vh]">
        <div className="h-max sm:py-1 px-1 ">
          Healing Mantra Lorem ipsum dolor sit amet.
        </div>
        <div className="h-[55%] sm:h-[45%]">
          <Image
            src="/meetTheTeamBG.png"
            alt="red-chakra"
            height={10000}
            width={10000}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="h-max text-sm text-mahogany py-1 px-1 text-center font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <div className="h-max text-xs px-1 text-textGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nihil neque nesciunt aliquid reiciendis deserunt! Magnam, eaque.
          Ratione, cum beatae?
        </div>
      </div>
    </>
  );
};

export default MantrasCard;
